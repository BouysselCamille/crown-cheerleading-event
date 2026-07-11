import { useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { parseInscriptionFile } from '../lib/xlsxParser';
import { validateTeam, athleteKey } from '../lib/inscriptionRules';

function teamLabel(result) {
  return `${result.equipe || result.fileName} (${result.club || 'club inconnu'})`;
}

function buildRegistry(results, loadedRegistry) {
  const map = new Map();

  if (loadedRegistry?.athletes) {
    for (const entry of loadedRegistry.athletes) {
      map.set(entry.key, {
        nom: entry.nom,
        prenom: entry.prenom,
        dateNaissance: entry.dateNaissance,
        teams: new Set(entry.teams || []),
      });
    }
  }

  for (const result of results) {
    const label = teamLabel(result);
    for (const a of result.athletes || []) {
      if (!a.nom || !a.prenom || !a.dateNaissance) continue;
      const key = athleteKey(a.nom, a.prenom, a.dateNaissance);
      const existing = map.get(key);
      const dateStr = a.dateNaissance.toISOString().slice(0, 10);
      if (existing) {
        existing.teams.add(label);
      } else {
        map.set(key, {
          nom: a.nom,
          prenom: a.prenom,
          dateNaissance: dateStr,
          teams: new Set([label]),
        });
      }
    }
  }

  return map;
}

function CheckIcon({ ok }) {
  return ok ? (
    <svg className="w-5 h-5 shrink-0 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ) : (
    <svg className="w-5 h-5 shrink-0 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export function VerificationInscriptions() {
  const [results, setResults] = useState([]);
  const [loadedRegistry, setLoadedRegistry] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);
  const registryInputRef = useRef(null);

  const registry = useMemo(() => buildRegistry(results, loadedRegistry), [results, loadedRegistry]);
  const duplicates = useMemo(
    () => [...registry.values()].filter((entry) => entry.teams.size > 1),
    [registry]
  );

  async function processFiles(fileList) {
    const xlsxFiles = [...fileList].filter((f) => f.name.toLowerCase().endsWith('.xlsx'));
    if (xlsxFiles.length === 0) return;
    setIsProcessing(true);
    const newResults = [];
    for (const file of xlsxFiles) {
      try {
        const parsed = await parseInscriptionFile(file);
        const { errors } = validateTeam(parsed);
        newResults.push({ ...parsed, errors });
      } catch (e) {
        newResults.push({
          fileName: file.name,
          equipe: null,
          club: null,
          division: null,
          athletes: [],
          errors: [`Erreur de lecture du fichier : ${e.message}`],
        });
      }
    }
    setResults((prev) => [...prev, ...newResults]);
    setIsProcessing(false);
  }

  function handleDrop(e) {
    e.preventDefault();
    setDragActive(false);
    processFiles(e.dataTransfer.files);
  }

  function handleRegistryFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        setLoadedRegistry(JSON.parse(reader.result));
      } catch {
        alert("Le fichier de registre n'est pas un JSON valide.");
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  }

  function downloadRegistry() {
    const athletes = [...registry.entries()]
      .map(([key, entry]) => ({
        key,
        nom: entry.nom,
        prenom: entry.prenom,
        dateNaissance: entry.dateNaissance,
        teams: [...entry.teams],
      }))
      .sort((a, b) => a.nom.localeCompare(b.nom) || a.prenom.localeCompare(b.prenom));

    const blob = new Blob([JSON.stringify({ athletes }, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'registre-athletes.json';
    a.click();
    URL.revokeObjectURL(url);
  }

  const validCount = results.filter((r) => r.errors.length === 0).length;

  return (
    <div className="min-h-screen bg-crown-black pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gold text-sm font-display font-semibold mb-10 hover:opacity-80 transition-opacity"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Retour
        </Link>

        <h1 className="text-4xl font-display font-black text-white mb-2">
          Vérification des <span className="text-gold-gradient">inscriptions</span>
        </h1>
        <p className="text-gray-400 mb-12 max-w-2xl">
          Déposez un ou plusieurs fichiers d'inscription (.xlsx) reçus des clubs. Chaque
          fichier est vérifié dans votre navigateur — rien n'est envoyé sur un serveur.
        </p>

        {/* Dropzone */}
        <div
          onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
          onDragLeave={() => setDragActive(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`bg-crown-gray border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-colors ${
            dragActive ? 'border-gold bg-gold/5' : 'border-gold/20 hover:border-gold/40'
          }`}
        >
          <svg className="w-10 h-10 text-gold mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <p className="text-white font-display font-semibold mb-1">
            Glissez-déposez des fichiers .xlsx ici, ou cliquez pour en choisir
          </p>
          <p className="text-gray-500 text-sm">Plusieurs fichiers à la fois sont acceptés</p>
          <input
            ref={fileInputRef}
            type="file"
            accept=".xlsx"
            multiple
            className="hidden"
            onChange={(e) => processFiles(e.target.files)}
          />
        </div>

        {/* Registre existant + actions */}
        <div className="flex flex-wrap items-center gap-4 mt-6">
          <Button variant="outline" onClick={() => registryInputRef.current?.click()}>
            Charger un registre (JSON)
          </Button>
          <input
            ref={registryInputRef}
            type="file"
            accept=".json"
            className="hidden"
            onChange={handleRegistryFile}
          />
          {loadedRegistry && (
            <span className="text-gray-500 text-sm">
              Registre chargé ({loadedRegistry.athletes?.length ?? 0} athlète(s))
            </span>
          )}
          {results.length > 0 && (
            <>
              <Button variant="outline" onClick={downloadRegistry}>
                Télécharger le registre (JSON)
              </Button>
              <Button variant="ghost" onClick={() => setResults([])}>
                Réinitialiser
              </Button>
            </>
          )}
        </div>

        {isProcessing && <p className="text-gold mt-8 animate-pulse">Analyse en cours…</p>}

        {results.length > 0 && !isProcessing && (
          <>
            <p className="text-gray-400 mt-10 mb-4 text-sm uppercase tracking-widest font-display font-semibold">
              {validCount}/{results.length} fichier(s) valide(s)
            </p>

            <div className="space-y-6">
              {results.map((result, i) => {
                const ok = result.errors.length === 0;
                return (
                  <div
                    key={`${result.fileName}-${i}`}
                    className="bg-crown-gray border border-gold/20 rounded-2xl p-6 md:p-8"
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-white font-display font-bold text-lg">
                          {result.equipe || '(équipe sans nom)'}
                        </h3>
                        <p className="text-gray-500 text-sm">
                          {result.club || '(club sans nom)'} · {result.division || '(division non renseignée)'}
                        </p>
                        <p className="text-gray-600 text-xs mt-1">{result.fileName}</p>
                      </div>
                      <CheckIcon ok={ok} />
                    </div>

                    {ok ? (
                      <div>
                        <p className="text-emerald-400 text-sm mb-4">Aucune erreur détectée.</p>
                        <dl className="grid grid-cols-2 md:grid-cols-5 gap-4 bg-gold/5 border border-gold/20 rounded-xl p-4">
                          {[
                            ['Club', result.club],
                            ['Équipe', result.equipe],
                            ['Division', result.division],
                            ['Nb athlètes', result.athletes.length],
                            ['Accomp. supp.', Math.max(0, result.accompagnateurs.length - 2)],
                          ].map(([label, value]) => (
                            <div key={label}>
                              <dt className="text-gray-500 text-xs uppercase tracking-wider mb-1">{label}</dt>
                              <dd className="text-white font-display font-semibold text-sm">{value}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    ) : (
                      <ul className="space-y-2">
                        {result.errors.map((err, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-gray-300">
                            <span className="text-red-400 mt-0.5">✕</span>
                            {err}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>

            {duplicates.length > 0 && (
              <div className="mt-10 bg-crown-gray border border-red-400/30 rounded-2xl p-6 md:p-8">
                <h3 className="text-white font-display font-bold text-lg mb-4">
                  Doublons détectés ({duplicates.length})
                </h3>
                <ul className="space-y-3">
                  {duplicates.map((entry) => (
                    <li key={athleteKey(entry.nom, entry.prenom, new Date(entry.dateNaissance))} className="text-sm text-gray-300">
                      <span className="text-white font-semibold">{entry.nom} {entry.prenom}</span>
                      {' '}({entry.dateNaissance}) — inscrit(e) dans : {[...entry.teams].join(', ')}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
