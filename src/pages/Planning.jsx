import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { EVENT } from '../constants/competitionData';

const BLOCK1 = [
  { num: 1, vesIn: '10:02', vesOut: '10:12', depot: '10:17', tapis1: '10:21', tapis2: null, dyn: '10:28', musique: '10:32', competition: '10:45' },
  { num: 2, vesIn: '10:10', vesOut: '10:20', depot: '10:25', tapis1: null, tapis2: '10:29', dyn: '10:36', musique: '10:40', competition: '10:53' },
  { num: 3, vesIn: '10:18', vesOut: '10:28', depot: '10:33', tapis1: '10:37', tapis2: null, dyn: '10:44', musique: '10:48', competition: '11:01' },
  { num: 4, vesIn: '10:26', vesOut: '10:36', depot: '10:41', tapis1: null, tapis2: '10:45', dyn: '10:52', musique: '10:56', competition: '11:09' },
  { num: 5, vesIn: '10:34', vesOut: '10:44', depot: '10:49', tapis1: '10:53', tapis2: null, dyn: '11:00', musique: '11:04', competition: '11:17' },
  { num: 6, vesIn: '10:42', vesOut: '10:52', depot: '10:57', tapis1: null, tapis2: '11:01', dyn: '11:08', musique: '11:12', competition: '11:25' },
  { num: 7, vesIn: '10:50', vesOut: '11:00', depot: '11:05', tapis1: '11:09', tapis2: null, dyn: '11:16', musique: '11:20', competition: '11:33' },
  { num: 8, vesIn: '10:58', vesOut: '11:08', depot: '11:13', tapis1: null, tapis2: '11:17', dyn: '11:24', musique: '11:28', competition: '11:41' },
  { num: 9, vesIn: '11:06', vesOut: '11:16', depot: '11:21', tapis1: '11:25', tapis2: null, dyn: '11:32', musique: '11:36', competition: '11:49' },
  { num: 10, vesIn: '11:14', vesOut: '11:24', depot: '11:29', tapis1: null, tapis2: '11:33', dyn: '11:40', musique: '11:44', competition: '11:57' },
  { num: 11, vesIn: '11:22', vesOut: '11:32', depot: '11:37', tapis1: '11:41', tapis2: null, dyn: '11:48', musique: '11:52', competition: '12:05' },
  { num: 12, vesIn: '11:30', vesOut: '11:40', depot: '11:45', tapis1: null, tapis2: '11:49', dyn: '11:56', musique: '12:00', competition: '12:13' },
  { num: 13, vesIn: '11:38', vesOut: '11:48', depot: '11:53', tapis1: '11:57', tapis2: null, dyn: '12:04', musique: '12:08', competition: '12:21' },
  { num: 14, vesIn: '11:46', vesOut: '11:56', depot: '12:01', tapis1: null, tapis2: '12:05', dyn: '12:12', musique: '12:16', competition: '12:29' },
  { num: 15, vesIn: '11:54', vesOut: '12:04', depot: '12:09', tapis1: '12:13', tapis2: null, dyn: '12:20', musique: '12:24', competition: '12:37' },
  { num: 16, vesIn: '12:02', vesOut: '12:12', depot: '12:17', tapis1: null, tapis2: '12:21', dyn: '12:28', musique: '12:32', competition: '12:45' },
  { num: 17, vesIn: '12:10', vesOut: '12:20', depot: '12:25', tapis1: '12:29', tapis2: null, dyn: '12:36', musique: '12:40', competition: '12:53' },
  { num: 18, vesIn: '12:18', vesOut: '12:28', depot: '12:33', tapis1: null, tapis2: '12:37', dyn: '12:44', musique: '12:48', competition: '13:01' },
];

const BLOCK2 = [
  { num: 19, vesIn: '13:02', vesOut: '13:12', depot: '13:17', tapis1: '13:21', tapis2: null, dyn: '13:28', musique: '13:32', competition: '13:45' },
  { num: 20, vesIn: '13:10', vesOut: '13:20', depot: '13:25', tapis1: null, tapis2: '13:29', dyn: '13:36', musique: '13:40', competition: '13:53' },
  { num: 21, vesIn: '13:18', vesOut: '13:28', depot: '13:33', tapis1: '13:37', tapis2: null, dyn: '13:44', musique: '13:48', competition: '14:01' },
  { num: 22, vesIn: '13:26', vesOut: '13:36', depot: '13:41', tapis1: null, tapis2: '13:45', dyn: '13:52', musique: '13:56', competition: '14:09' },
  { num: 23, vesIn: '13:34', vesOut: '13:44', depot: '13:49', tapis1: '13:53', tapis2: null, dyn: '14:00', musique: '14:04', competition: '14:17' },
  { num: 24, vesIn: '13:42', vesOut: '13:52', depot: '13:57', tapis1: null, tapis2: '14:01', dyn: '14:08', musique: '14:12', competition: '14:25' },
  { num: 25, vesIn: '13:50', vesOut: '14:00', depot: '14:05', tapis1: '14:09', tapis2: null, dyn: '14:16', musique: '14:20', competition: '14:33' },
  { num: 26, vesIn: '13:58', vesOut: '14:08', depot: '14:13', tapis1: null, tapis2: '14:17', dyn: '14:24', musique: '14:28', competition: '14:41' },
  { num: 27, vesIn: '14:06', vesOut: '14:16', depot: '14:21', tapis1: '14:25', tapis2: null, dyn: '14:32', musique: '14:36', competition: '14:49' },
  { num: 28, vesIn: '14:14', vesOut: '14:24', depot: '14:29', tapis1: null, tapis2: '14:33', dyn: '14:40', musique: '14:44', competition: '14:57' },
  { num: 29, vesIn: '14:22', vesOut: '14:32', depot: '14:37', tapis1: '14:41', tapis2: null, dyn: '14:48', musique: '14:52', competition: '15:05' },
  { num: 30, vesIn: '14:30', vesOut: '14:40', depot: '14:45', tapis1: null, tapis2: '14:49', dyn: '14:56', musique: '15:00', competition: '15:13' },
  { num: 31, vesIn: '14:38', vesOut: '14:48', depot: '14:53', tapis1: '14:57', tapis2: null, dyn: '15:04', musique: '15:08', competition: '15:21' },
  { num: 32, vesIn: '14:46', vesOut: '14:56', depot: '15:01', tapis1: null, tapis2: '15:05', dyn: '15:12', musique: '15:16', competition: '15:29' },
  { num: 33, vesIn: '14:54', vesOut: '15:04', depot: '15:09', tapis1: '15:13', tapis2: null, dyn: '15:20', musique: '15:24', competition: '15:37' },
  { num: 34, vesIn: '15:02', vesOut: '15:12', depot: '15:17', tapis1: null, tapis2: '15:21', dyn: '15:28', musique: '15:32', competition: '15:45' },
  { num: 35, vesIn: '15:10', vesOut: '15:20', depot: '15:25', tapis1: '15:29', tapis2: null, dyn: '15:36', musique: '15:40', competition: '15:53' },
  { num: 36, vesIn: '15:18', vesOut: '15:28', depot: '15:33', tapis1: null, tapis2: '15:37', dyn: '15:44', musique: '15:48', competition: '16:01' },
  { num: 37, vesIn: '15:26', vesOut: '15:36', depot: '15:41', tapis1: '15:45', tapis2: null, dyn: '15:52', musique: '15:56', competition: '16:09' },
  { num: 38, vesIn: '15:34', vesOut: '15:44', depot: '15:49', tapis1: null, tapis2: '15:53', dyn: '16:00', musique: '16:04', competition: '16:17' },
  { num: 39, vesIn: '15:42', vesOut: '15:52', depot: '15:57', tapis1: '16:01', tapis2: null, dyn: '16:08', musique: '16:12', competition: '16:25' },
  { num: 40, vesIn: '15:50', vesOut: '16:00', depot: '16:05', tapis1: null, tapis2: '16:09', dyn: '16:16', musique: '16:20', competition: '16:33' },
  { num: 41, vesIn: '15:58', vesOut: '16:08', depot: '16:13', tapis1: '16:17', tapis2: null, dyn: '16:24', musique: '16:28', competition: '16:41' },
  { num: 42, vesIn: '16:06', vesOut: '16:16', depot: '16:21', tapis1: null, tapis2: '16:25', dyn: '16:32', musique: '16:36', competition: '16:49' },
  { num: 43, vesIn: '16:14', vesOut: '16:24', depot: '16:29', tapis1: '16:33', tapis2: null, dyn: '16:40', musique: '16:44', competition: '16:57' },
];

function TimeCell({ value }) {
  if (!value) return <td className="px-3 py-2.5 text-center text-gray-700">—</td>;
  return (
    <td className="px-3 py-2.5 text-center font-mono text-sm font-semibold tabular-nums text-gray-200">
      {value}
    </td>
  );
}

function TeamRow({ team, index }) {
  const isEven = index % 2 === 0;
  return (
    <tr className={isEven ? 'bg-crown-gray/40' : 'bg-crown-black/20'}>
      <td className="px-3 py-2.5 text-center font-display font-bold text-gold text-sm">{team.num}</td>
      <td className="px-3 py-2.5 text-gray-600 text-xs text-center">—</td>
      <TimeCell value={team.vesIn} />
      <TimeCell value={team.vesOut} />
      <TimeCell value={team.depot} />
      <TimeCell value={team.tapis1} />
      <TimeCell value={team.tapis2} />
      <TimeCell value={team.dyn} />
      <TimeCell value={team.musique} />
      <td className="px-3 py-2.5 text-center">
        <span className="font-mono text-sm font-black text-gold bg-gold/10 border border-gold/30 rounded px-2 py-0.5 tabular-nums">
          {team.competition}
        </span>
      </td>
    </tr>
  );
}

function BlockHeader({ label, time }) {
  return (
    <tr>
      <td colSpan={10} className="px-4 py-2 bg-gold/10 border-y border-gold/30">
        <span className="font-display font-black text-xs tracking-widest uppercase text-gold">{label}</span>
        {time && <span className="ml-3 text-gray-500 text-xs font-mono">{time}</span>}
      </td>
    </tr>
  );
}

function CeremonyRow({ label, time, note }) {
  return (
    <tr>
      <td colSpan={10} className="px-4 py-5 bg-gold/5 border-y border-gold/40 text-center">
        <div className="flex items-center justify-center gap-3">
          <div className="h-px flex-1 bg-gold/20" />
          <div>
            <span className="font-display font-black text-sm tracking-widest uppercase text-gold">{label}</span>
            {time && <span className="ml-2 text-gold/60 font-mono text-xs">{time}</span>}
            {note && <p className="text-gray-600 text-xs mt-1">{note}</p>}
          </div>
          <div className="h-px flex-1 bg-gold/20" />
        </div>
      </td>
    </tr>
  );
}

export function Planning() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-crown-black pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="mb-10">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-gold transition-colors text-sm mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour à l'accueil
          </Link>
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 justify-between">
            <div>
              <p className="text-gold font-display font-black text-xs tracking-widest uppercase mb-2">{EVENT.dateDisplay}</p>
              <h1 className="font-display font-black text-3xl md:text-4xl text-white">Planning de la compétition</h1>
              <p className="text-gray-500 mt-2 text-sm">43 équipes · Dojo de Paris · 10h00 – 18h00</p>
            </div>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-gold inline-block" />Compétition</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-gold/30 inline-block" />Bloc 1 (éq. 1–18)</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-gold/30 inline-block" />Bloc 2 (éq. 19–43)</span>
            </div>
          </div>
        </div>

        {/* Légende zones */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {[
            { label: 'Tapis 1', desc: 'Échauffement stunt A — 10min' },
            { label: 'Tapis 2', desc: 'Échauffement stunt B — 10min' },
            { label: 'Tapis dynamique', desc: 'Échauffement tumbling — 5min' },
            { label: 'Musique', desc: 'Run-through avec musique — 2min30' },
          ].map(z => (
            <div key={z.label} className="bg-crown-gray border border-gold/15 rounded-lg px-4 py-3">
              <p className="text-gold font-display font-bold text-xs">{z.label}</p>
              <p className="text-gray-500 text-xs mt-0.5 leading-tight">{z.desc}</p>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border border-gold/20">
          <table className="w-full text-sm border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-crown-gray border-b border-gold/30">
                <th className="px-3 py-3 text-center font-display font-black text-gold text-xs tracking-wider">#</th>
                <th className="px-3 py-3 text-center font-display font-black text-gray-400 text-xs tracking-wider">Division</th>
                <th className="px-3 py-3 text-center font-display font-black text-gray-400 text-xs tracking-wider">Vestiaire<br />Entrée</th>
                <th className="px-3 py-3 text-center font-display font-black text-gray-400 text-xs tracking-wider">Vestiaire<br />Sortie</th>
                <th className="px-3 py-3 text-center font-display font-black text-gray-400 text-xs tracking-wider">Dépôt<br />sacs</th>
                <th className="px-3 py-3 text-center font-display font-black text-gray-400 text-xs tracking-wider">Tapis 1</th>
                <th className="px-3 py-3 text-center font-display font-black text-gray-400 text-xs tracking-wider">Tapis 2</th>
                <th className="px-3 py-3 text-center font-display font-black text-gray-400 text-xs tracking-wider">Tapis<br />dyn.</th>
                <th className="px-3 py-3 text-center font-display font-black text-gray-400 text-xs tracking-wider">Musique</th>
                <th className="px-3 py-3 text-center font-display font-black text-gold text-xs tracking-wider">Compétition</th>
              </tr>
            </thead>
            <tbody>
              <BlockHeader label="Bloc 1 — Ouverture des portes" time="10:00" />
              {BLOCK1.map((team, i) => <TeamRow key={team.num} team={team} index={i} />)}
              <CeremonyRow
                label="Cérémonie Bloc 1"
                time="13:05 – 13:45"
                note="Les vestiaires du Bloc 2 sont ouverts dès 13:02"
              />
              <BlockHeader label="Bloc 2" time="Premier passage compétition : 13:45" />
              {BLOCK2.map((team, i) => <TeamRow key={team.num} team={team} index={i} />)}
              <CeremonyRow label="Cérémonie Finale" time="17:00 – 17:45" />
            </tbody>
          </table>
        </div>

        {/* Note */}
        <p className="text-gray-600 text-xs mt-6 leading-relaxed text-center max-w-2xl mx-auto">
          Ce planning est indicatif et susceptible d'être modifié. Les horaires définitifs seront communiqués aux clubs avant la compétition.
          Les équipes doivent impérativement respecter leurs créneaux sous peine de disqualification.
        </p>
      </div>
    </div>
  );
}
