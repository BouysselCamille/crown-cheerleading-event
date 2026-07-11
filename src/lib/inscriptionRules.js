const AGE_PREFIX_TO_CATEGORY = {
  U8: 'u8',
  U12: 'u12',
  U16: 'u16',
  U18: 'u18',
  Open: 'open',
  Masters: 'master',
};

const VALID_BIRTH_YEARS = {
  u8: [2018, 2019, 2020, 2021, 2022],
  u12: [2014, 2015, 2016, 2017, 2018, 2019],
  u16: [2010, 2011, 2012, 2013, 2014, 2015],
  u18: [2008, 2009, 2010, 2011, 2012, 2013],
};

const AGE_CATEGORY_LABELS = {
  u8: 'U8',
  u12: 'U12',
  u16: 'U16',
  u18: 'U18',
  open: 'Open',
  master: 'Masters',
};

export function classifyDivision(division) {
  const tokens = (division || '').trim().split(/\s+/).filter(Boolean);
  const firstToken = tokens[0] || '';
  const ageCategory = AGE_PREFIX_TO_CATEGORY[firstToken] ?? null;
  const isDemo = division === 'Démo';
  const isPrep = tokens.includes('Prep');
  const isAG = tokens.includes('AG');
  const isCoed = tokens.includes('Coed');
  const minAthletes = isPrep || isDemo ? 5 : 10;

  return { ageCategory, isDemo, isPrep, isAG, isCoed, minAthletes };
}

function isBirthYearValid(ageCategory, year) {
  if (ageCategory === 'open') return year <= 2011;
  if (ageCategory === 'master') return year <= 2008;
  return VALID_BIRTH_YEARS[ageCategory]?.includes(year) ?? true;
}

function athleteLabel(a) {
  return `${a.nom || '?'} ${a.prenom || '?'} (ligne ${a.row})`;
}

export function validateTeam(parsed) {
  const errors = [];
  const { equipe, club, division, divisionsValides, athletes, accompagnateurs } = parsed;

  if (!equipe) errors.push("Nom de l'équipe manquant (Accueil).");
  if (!club) errors.push('Nom du club manquant (Accueil).');
  if (!division) {
    errors.push('Division manquante (Accueil).');
  } else if (divisionsValides.length > 0 && !divisionsValides.includes(division)) {
    errors.push(`Division inconnue : "${division}" ne fait pas partie de la liste officielle.`);
  }

  for (const a of athletes) {
    if (!a.nom) errors.push(`Athlète ligne ${a.row} : nom manquant.`);
    if (!a.prenom) errors.push(`Athlète ligne ${a.row} : prénom manquant.`);
    if (!a.dateNaissanceRaw) {
      errors.push(`Athlète ligne ${a.row} : date de naissance manquante.`);
    } else if (!a.dateNaissance) {
      errors.push(`Athlète ligne ${a.row} : date de naissance illisible ("${a.dateNaissanceRaw}").`);
    }
    if (!a.sexe) errors.push(`Athlète ligne ${a.row} : sexe manquant.`);
  }

  for (const a of accompagnateurs) {
    if (!a.nom) errors.push(`Accompagnateur ligne ${a.row} : nom manquant.`);
    if (!a.prenom) errors.push(`Accompagnateur ligne ${a.row} : prénom manquant.`);
    if (!a.role) errors.push(`Accompagnateur ligne ${a.row} : rôle manquant.`);
  }

  const hasEmail = accompagnateurs.some((a) => a.email);
  if (accompagnateurs.length > 0 && !hasEmail) {
    errors.push('Aucun email renseigné parmi les accompagnateurs.');
  } else if (accompagnateurs.length === 0) {
    errors.push('Aucun accompagnateur renseigné (au moins un email est requis).');
  }

  if (division) {
    const { ageCategory, isDemo, isAG, isCoed, minAthletes } = classifyDivision(division);

    if (isAG) {
      for (const a of athletes) {
        if (a.sexe && a.sexe !== 'F') {
          errors.push(`Division "AG" (all-girl) mais ${athleteLabel(a)} a le sexe "${a.sexe}".`);
        }
      }
    }

    if (isCoed && !athletes.some((a) => a.sexe === 'M')) {
      errors.push('Division "Coed" : aucun athlète masculin dans la liste.');
    }

    if (athletes.length < minAthletes) {
      errors.push(
        `Effectif insuffisant : ${athletes.length} athlète(s), minimum ${minAthletes} requis pour cette division.`
      );
    }

    if (ageCategory && !isDemo) {
      for (const a of athletes) {
        if (!a.dateNaissance) continue;
        const year = a.dateNaissance.getUTCFullYear();
        if (!isBirthYearValid(ageCategory, year)) {
          errors.push(
            `${athleteLabel(a)} né(e) en ${year} : hors plage autorisée pour la catégorie ${AGE_CATEGORY_LABELS[ageCategory]}.`
          );
        }
      }
    }
  }

  return { errors };
}

function stripAccents(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export function athleteKey(nom, prenom, dateNaissance) {
  const norm = (s) => stripAccents((s || '').trim().toUpperCase()).replace(/\s+/g, ' ');
  const dateKey = dateNaissance ? dateNaissance.toISOString().slice(0, 10) : '?';
  return `${norm(nom)}|${norm(prenom)}|${dateKey}`;
}
