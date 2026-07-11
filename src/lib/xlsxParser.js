import * as XLSX from 'xlsx';

// Adressage des cellules identique à scripts/generate_inscription.py
// (feuilles Accueil / Athlètes / Accompagnateurs / Listes)

function cellValue(sheet, address) {
  const cell = sheet[address];
  if (!cell) return null;
  const v = cell.v;
  if (typeof v === 'string') {
    const trimmed = v.trim();
    return trimmed === '' ? null : trimmed;
  }
  return v ?? null;
}

// Lit une cellule date à partir du serial Excel brut (pas de cellDates:true : sa
// conversion en Date passe par l'heure locale et introduit un décalage d'un jour
// selon le fuseau horaire du navigateur).
function dateCellValue(sheet, address) {
  const cell = sheet[address];
  if (!cell || cell.v == null || cell.v === '') return null;
  if (cell.t === 'n') {
    const parsed = XLSX.SSF.parse_date_code(cell.v);
    if (!parsed) return null;
    return new Date(Date.UTC(parsed.y, parsed.m - 1, parsed.d));
  }
  if (typeof cell.v === 'string') {
    const match = cell.v.trim().match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
    if (match) {
      const [, d, m, y] = match;
      return new Date(Date.UTC(Number(y), Number(m) - 1, Number(d)));
    }
  }
  return null;
}

function readRows(sheet, { firstRow, lastRow, columns }) {
  const rows = [];
  for (let row = firstRow; row <= lastRow; row++) {
    const record = { row };
    for (const [key, col] of Object.entries(columns)) {
      record[key] = cellValue(sheet, `${col}${row}`);
    }
    rows.push(record);
  }
  return rows;
}

export async function parseInscriptionFile(file) {
  const buffer = await file.arrayBuffer();
  const workbook = XLSX.read(buffer, { type: 'array' });

  const accueil = workbook.Sheets['Accueil'];
  const athletesSheet = workbook.Sheets['Athlètes'];
  const accompagnateursSheet = workbook.Sheets['Accompagnateurs'];
  const listesSheet = workbook.Sheets['Listes'];

  if (!accueil || !athletesSheet || !accompagnateursSheet) {
    throw new Error(
      `Structure de fichier inattendue (feuilles manquantes) : ${file.name}`
    );
  }

  const equipe = cellValue(accueil, 'C5');
  const club = cellValue(accueil, 'C6');
  const division = cellValue(accueil, 'C8');

  const divisionsValides = [];
  if (listesSheet) {
    for (let row = 1; row <= 58; row++) {
      const v = cellValue(listesSheet, `A${row}`);
      if (v) divisionsValides.push(v);
    }
  }

  const athletes = readRows(athletesSheet, {
    firstRow: 5,
    lastRow: 39,
    columns: { nom: 'B', prenom: 'C', dateNaissanceRaw: 'D', sexe: 'E' },
  })
    .filter((a) => a.nom || a.prenom)
    .map((a) => ({ ...a, dateNaissance: dateCellValue(athletesSheet, `D${a.row}`) }));

  const accompagnateurs = readRows(accompagnateursSheet, {
    firstRow: 5,
    lastRow: 11,
    columns: { nom: 'B', prenom: 'C', email: 'D', role: 'E' },
  }).filter((a) => a.nom || a.prenom);

  return {
    fileName: file.name,
    equipe,
    club,
    division,
    divisionsValides,
    athletes,
    accompagnateurs,
  };
}
