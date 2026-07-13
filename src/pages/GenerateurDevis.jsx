import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

const PRICES = {
  allstar: 40,
  prep: 37.5,
  demo: 35,
  accompagnateur: 40,
};

const EARLY_BIRD_DEADLINE = '11/12/2026';
const VALIDITY_DAYS = 30;

const currency = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' });

function round2(n) {
  return Math.round(n * 100) / 100;
}

function toNumber(value) {
  const n = Number(value);
  return Number.isFinite(n) && n > 0 ? n : 0;
}

function NumberField({ label, priceLabel, value, onChange }) {
  return (
    <label className="block">
      <span className="block text-sm font-display font-semibold text-white mb-1">{label}</span>
      <span className="block text-xs text-gray-500 mb-2">{priceLabel}</span>
      <input
        type="number"
        min="0"
        step="1"
        inputMode="numeric"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-crown-black border border-gold/20 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-gold transition-colors"
      />
    </label>
  );
}

export function GenerateurDevis() {
  const [numeroDevis, setNumeroDevis] = useState('');
  const [nomClub, setNomClub] = useState('');
  const [emailClub, setEmailClub] = useState('');
  const [nbAllstar, setNbAllstar] = useState('');
  const [nbPrep, setNbPrep] = useState('');
  const [nbDemo, setNbDemo] = useState('');
  const [nbAccompagnateurs, setNbAccompagnateurs] = useState('');

  const dateEmission = useMemo(() => new Date().toLocaleDateString('fr-FR'), []);

  const lineItems = useMemo(() => {
    const items = [
      { label: 'Athlète — division All Star', qty: toNumber(nbAllstar), pu: PRICES.allstar },
      { label: 'Athlète — division Prep / Universitaire', qty: toNumber(nbPrep), pu: PRICES.prep },
      { label: 'Athlète — division Démo', qty: toNumber(nbDemo), pu: PRICES.demo },
      { label: 'Accompagnateur supplémentaire', qty: toNumber(nbAccompagnateurs), pu: PRICES.accompagnateur },
    ];
    return items.filter((item) => item.qty > 0);
  }, [nbAllstar, nbPrep, nbDemo, nbAccompagnateurs]);

  const total = useMemo(
    () => round2(lineItems.reduce((sum, item) => sum + item.qty * item.pu, 0)),
    [lineItems]
  );
  const acompte = round2(total * 0.3);
  const solde = round2(total - acompte);

  const isReady = numeroDevis.trim() !== '' && nomClub.trim() !== '' && emailClub.trim() !== '' && lineItems.length > 0;

  return (
    <div className="devis-page-shell min-h-screen bg-crown-black pt-32 pb-24">
      <style>{`
        .devis-doc {
          --gold: #D4AF37;
          --gold-dark: #A0820A;
          --black: #0A0A0A;
          --gray: #555;
          --light: #f7f7f7;
          --border: #e2e2e2;
          font-family: "Helvetica Neue", Arial, sans-serif;
          color: #1a1a1a;
          font-size: 13px;
          line-height: 1.5;
        }
        .devis-doc * { box-sizing: border-box; }
        .devis-doc .page {
          background: #fff;
          max-width: 800px;
          margin: 0 auto;
          padding: 40px 48px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.25);
        }
        .devis-doc .header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 3px solid var(--gold);
          padding-bottom: 20px;
          margin-bottom: 28px;
        }
        .devis-doc .brand h1 {
          font-size: 22px;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin: 0 0 4px;
          color: var(--black);
        }
        .devis-doc .brand .tagline {
          font-size: 11px;
          color: var(--gold-dark);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .devis-doc .brand .legal {
          margin-top: 10px;
          font-size: 11px;
          color: var(--gray);
          line-height: 1.6;
        }
        .devis-doc .doc-meta { text-align: right; min-width: 210px; }
        .devis-doc .doc-meta .doc-title {
          font-size: 26px;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--gold-dark);
          letter-spacing: 2px;
          margin-bottom: 12px;
        }
        .devis-doc .doc-meta table { width: 100%; font-size: 12px; border-collapse: collapse; }
        .devis-doc .doc-meta td { padding: 3px 0; }
        .devis-doc .doc-meta td:first-child { color: var(--gray); text-align: left; }
        .devis-doc .doc-meta td:last-child { font-weight: 600; text-align: right; }
        .devis-doc .recipient {
          background: var(--light);
          border-left: 4px solid var(--gold);
          padding: 14px 18px;
          margin-bottom: 28px;
        }
        .devis-doc .recipient .label {
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--gray);
          margin-bottom: 4px;
        }
        .devis-doc .recipient .name { font-size: 15px; font-weight: 700; }
        .devis-doc .recipient .email { color: var(--gray); }
        .devis-doc h2.section {
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--black);
          border-bottom: 1px solid var(--border);
          padding-bottom: 6px;
          margin: 28px 0 14px;
        }
        .devis-doc table.data { width: 100%; border-collapse: collapse; font-size: 12.5px; }
        .devis-doc table.data thead th {
          background: var(--black);
          color: var(--gold);
          text-align: left;
          padding: 9px 12px;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .devis-doc table.data tbody td {
          padding: 9px 12px;
          border-bottom: 1px solid var(--border);
          vertical-align: top;
        }
        .devis-doc table.data .num { text-align: right; white-space: nowrap; }
        .devis-doc table.data tfoot td { padding: 9px 12px; font-weight: 700; }
        .devis-doc table.data tfoot tr.total td {
          background: var(--light);
          font-size: 14px;
          border-top: 2px solid var(--gold);
        }
        .devis-doc .tva-note { font-size: 11px; color: var(--gray); margin-top: 8px; font-style: italic; }
        .devis-doc .schedule td .desc { color: var(--gray); font-size: 11.5px; margin-top: 2px; }
        .devis-doc .badge {
          display: inline-block;
          background: var(--gold);
          color: var(--black);
          font-weight: 700;
          font-size: 11px;
          padding: 2px 8px;
          border-radius: 3px;
        }
        .devis-doc .two-col { display: flex; gap: 24px; margin-top: 8px; }
        .devis-doc .two-col > div { flex: 1; }
        .devis-doc .bank table { width: 100%; font-size: 12px; border-collapse: collapse; }
        .devis-doc .bank table td { padding: 4px 0; }
        .devis-doc .bank table td:first-child { color: var(--gray); width: 42%; }
        .devis-doc .bank table td:last-child { font-weight: 600; }
        .devis-doc .conditions { margin: 0; padding-left: 18px; font-size: 11.5px; color: #333; }
        .devis-doc .signature { margin-top: 36px; display: flex; justify-content: space-between; gap: 24px; }
        .devis-doc .signature .box { flex: 1; border: 1px solid var(--border); border-radius: 4px; padding: 14px; }
        .devis-doc .signature .box .title { font-weight: 700; font-size: 12px; margin-bottom: 4px; }
        .devis-doc .signature .box .sub { font-size: 11px; color: var(--gray); }
        .devis-doc .signature .box .space { height: 70px; }
        .devis-doc .footer {
          margin-top: 36px;
          border-top: 1px solid var(--border);
          padding-top: 12px;
          font-size: 10.5px;
          color: var(--gray);
          text-align: center;
        }
        @media print {
          header, footer, .no-print { display: none !important; }
          body { background: #fff; }
          .devis-page-shell { min-height: 0 !important; padding: 0 !important; background: #fff !important; }
          .devis-doc .page { box-shadow: none; margin: 0; max-width: 100%; padding: 0; }
        }
      `}</style>

      <div className="max-w-4xl mx-auto px-6 no-print">
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
          Générateur de <span className="text-gold-gradient">devis</span>
        </h1>
        <p className="text-gray-400 mb-12 max-w-2xl">
          Renseignez les informations ci-dessous, le devis se met à jour en direct. Utilisez ensuite
          « Télécharger en PDF » pour l'imprimer ou l'enregistrer en PDF depuis votre navigateur.
        </p>

        <div className="bg-crown-gray border border-gold/20 rounded-2xl p-6 md:p-8 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <label className="block">
              <span className="block text-sm font-display font-semibold text-white mb-1">N° de devis</span>
              <input
                type="text"
                placeholder="DEV-2026-001"
                value={numeroDevis}
                onChange={(e) => setNumeroDevis(e.target.value)}
                className="w-full bg-crown-black border border-gold/20 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-gold transition-colors"
              />
            </label>
            <label className="block">
              <span className="block text-sm font-display font-semibold text-white mb-1">Nom du club</span>
              <input
                type="text"
                placeholder="Nom du club"
                value={nomClub}
                onChange={(e) => setNomClub(e.target.value)}
                className="w-full bg-crown-black border border-gold/20 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-gold transition-colors"
              />
            </label>
            <label className="block md:col-span-2">
              <span className="block text-sm font-display font-semibold text-white mb-1">Email du club</span>
              <input
                type="email"
                placeholder="club@exemple.fr"
                value={emailClub}
                onChange={(e) => setEmailClub(e.target.value)}
                className="w-full bg-crown-black border border-gold/20 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-gold transition-colors"
              />
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <NumberField
              label="Athlètes All Star"
              priceLabel={`${currency.format(PRICES.allstar)} / athlète`}
              value={nbAllstar}
              onChange={setNbAllstar}
            />
            <NumberField
              label="Athlètes Prep / Universitaire"
              priceLabel={`${currency.format(PRICES.prep)} / athlète`}
              value={nbPrep}
              onChange={setNbPrep}
            />
            <NumberField
              label="Athlètes Démo"
              priceLabel={`${currency.format(PRICES.demo)} / athlète`}
              value={nbDemo}
              onChange={setNbDemo}
            />
            <NumberField
              label="Accompagnateurs supp."
              priceLabel={`${currency.format(PRICES.accompagnateur)} / personne`}
              value={nbAccompagnateurs}
              onChange={setNbAccompagnateurs}
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gold/10 pt-6">
            <div>
              <span className="text-gray-500 text-sm uppercase tracking-widest font-display font-semibold">
                Total
              </span>
              <div className="text-2xl font-display font-black text-gold">{currency.format(total)}</div>
            </div>
            <Button onClick={() => window.print()} disabled={!isReady}>
              Télécharger en PDF
            </Button>
          </div>
          {!isReady && (
            <p className="text-gray-500 text-xs mt-3">
              Renseignez le n° de devis, le club, l'email et au moins une quantité pour activer le téléchargement.
            </p>
          )}
        </div>
      </div>

      <div className="devis-doc">
        <div className="page">
          <div className="header">
            <div className="brand">
              <h1>Crown Cheerleading Events</h1>
              <div className="tagline">Association loi 1901</div>
              <div className="legal">
                11 avenue Ledru Rollin, 75012 Paris<br />
                Email : contact@crown-cheerleading-events.fr<br />
                SIRET : 10253876600019 &nbsp;·&nbsp; RNA : W751283436
              </div>
            </div>
            <div className="doc-meta">
              <div className="doc-title">Devis</div>
              <table>
                <tbody>
                  <tr>
                    <td>N° de devis</td>
                    <td>{numeroDevis || '—'}</td>
                  </tr>
                  <tr>
                    <td>Date d'émission</td>
                    <td>{dateEmission}</td>
                  </tr>
                  <tr>
                    <td>Validité</td>
                    <td>{VALIDITY_DAYS} jours</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="recipient">
            <div className="label">Destinataire</div>
            <div className="name">{nomClub || '—'}</div>
            <div className="email">{emailClub || '—'}</div>
          </div>

          <h2 className="section">Détail des prestations</h2>
          <table className="data">
            <thead>
              <tr>
                <th style={{ width: '50%' }}>Désignation</th>
                <th className="num">Qté</th>
                <th className="num">P.U. (€)</th>
                <th className="num">Montant (€)</th>
              </tr>
            </thead>
            <tbody>
              {lineItems.length === 0 ? (
                <tr>
                  <td colSpan={4}>—</td>
                </tr>
              ) : (
                lineItems.map((item) => (
                  <tr key={item.label}>
                    <td>{item.label}</td>
                    <td className="num">{item.qty}</td>
                    <td className="num">{currency.format(item.pu)}</td>
                    <td className="num">{currency.format(round2(item.qty * item.pu))}</td>
                  </tr>
                ))
              )}
            </tbody>
            <tfoot>
              <tr className="total">
                <td colSpan={3}>Total à payer</td>
                <td className="num">{currency.format(total)}</td>
              </tr>
            </tfoot>
          </table>
          <p className="tva-note">TVA : Non applicable — Association loi 1901 (art. 293 B du CGI)</p>

          <h2 className="section">Échéancier de paiement</h2>
          <table className="data schedule">
            <thead>
              <tr>
                <th>Échéance</th>
                <th>Description</th>
                <th className="num">Montant (€)</th>
                <th>Date limite</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span className="badge">Acompte 30 %</span></td>
                <td>
                  À régler à réception du devis
                  <div className="desc">(indispensable pour valider la place)</div>
                </td>
                <td className="num">{currency.format(acompte)}</td>
                <td>À la réception du devis</td>
              </tr>
              <tr>
                <td><span className="badge">Solde 70 %</span></td>
                <td>
                  Règlement du solde
                  <div className="desc">(tarif Early Bird si avant le {EARLY_BIRD_DEADLINE})</div>
                </td>
                <td className="num">{currency.format(solde)}</td>
                <td>Avant le {EARLY_BIRD_DEADLINE}</td>
              </tr>
            </tbody>
          </table>

          <div className="two-col">
            <div>
              <h2 className="section">Modes de paiement acceptés</h2>
              <ul style={{ margin: 0, paddingLeft: 18, fontSize: 12 }}>
                <li>Virement bancaire</li>
                <li>Carte bancaire (lien de paiement transmis par email)</li>
              </ul>
            </div>
            <div className="bank">
              <h2 className="section">Coordonnées bancaires</h2>
              <table>
                <tbody>
                  <tr>
                    <td>Titulaire</td>
                    <td>Crown Cheerleading Events</td>
                  </tr>
                  <tr>
                    <td>Banque</td>
                    <td>Crédit Mutuel</td>
                  </tr>
                  <tr>
                    <td>IBAN</td>
                    <td>FR76 1027 8060 4100 0214 7280 124</td>
                  </tr>
                  <tr>
                    <td>BIC</td>
                    <td>CMCIFR2A</td>
                  </tr>
                  <tr>
                    <td>Référence à indiquer</td>
                    <td>{numeroDevis || '—'} / {nomClub || '—'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h2 className="section">Conditions</h2>
          <div className="conditions">
            Ce devis est valable {VALIDITY_DAYS} jours à compter de sa date d'émission. Il ne constitue pas une
            facture et ne vaut pas confirmation d'inscription. La place est réservée uniquement après réception
            de l'acompte de 30 %. Sans paiement, l'équipe risque de perdre sa place au profit des équipes en
            liste d'attente. Toute annulation avant la fermeture des inscriptions donne droit à un remboursement
            de 70 % du montant total, l'acompte de 30 % restant acquis à l'organisateur. Le solde doit être réglé
            avant le {EARLY_BIRD_DEADLINE} pour bénéficier du tarif Early Bird. Passé cette date, le tarif Entrée
            Générale s'applique (45 € / athlète). Toute demande de changement de division après le 12/02/2027
            entraîne des frais de 200 €. Les tarifs s'entendent toutes charges comprises — association non
            assujettie à la TVA (article 293 B du CGI).
          </div>

          <div className="signature">
            <div className="box">
              <div className="title">Le prestataire</div>
              <div className="sub">Crown Cheerleading Events</div>
              <div className="space"></div>
              <div className="sub">Date : _______________</div>
            </div>
            <div className="box">
              <div className="title">Bon pour accord</div>
              <div className="sub">Signature du club</div>
              <div className="space"></div>
              <div className="sub">Date : _______________</div>
            </div>
          </div>

          <div className="footer">
            Crown Cheerleading Events — Association loi 1901 · TVA non applicable, art. 293 B du CGI
          </div>
        </div>
      </div>
    </div>
  );
}
