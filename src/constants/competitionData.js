export const EVENT = {
  name: 'Crown Cheerleading Events',
  edition: '1ère édition',
  date: '2027-04-04T10:00:00',
  dateDisplay: '4 avril 2027',
  venue: 'Dojo de Paris',
  city: 'Paris',
  helloassoSlug: '', // À remplir : /associations/[votre-asso]/evenements/[votre-event]
};

export const SCHEDULE = [
  { time: '10h00', label: 'Ouverture des portes & accréditations' },
  { time: '10h30', label: 'Ouverture au public' },
  { time: '11h00', label: 'Block 1 - Novice, Prep et Universitaire' },
  { time: '13h30', label: 'Remise des prix Block 1' },
  { time: '14h30', label: 'Block 2 — AllStar' },,
  { time: '17h00', label: 'Remise des prix Block 2' },
  { time: '18h00', label: 'Fin de l\'événement' },
];

export const SPONSORS = [
  { name: 'Région Ile-de-France', tier: 'gold', logo: 'https://www.iledefrance.fr/sites/default/files/styles/wysiwyg_desktop_retina/public/medias/2019-09/logo-idf-2019.jpg.webp?itok=yApzbm9Y' },
  { name: "France Judo", tier: 'gold', logo: 'https://www.ffjudo.com/photo-contenu/3260_1771325228_b2f2d6b7a30788ffe29a.jpg' },
];

export const FAQ = [
  {
    category: 'Frais & Inscriptions',
    items: [
      {
        q: 'Combien d\'accompagnateurs sont inclus dans l\'inscription ?',
        a: 'Les équipes ont droit à un maximum de deux accompagnateurs (entraîneurs, gérants, bénévoles, etc.). Les accompagnateurs reçoivent un bracelet et doivent arriver en même temps que l\'équipe. Les équipes avec plus de 2 accompagnateurs devront payer pour les accompagnateurs supplémentaires — voir le tableau des frais d\'inscription. Les accompagnateurs supplémentaires sont facturés au tarif en vigueur. Seuls les accompagnateurs et athlètes sont autorisés en salle d\'échauffement et dans les vestiaires.\n\nLes équipes avec des besoins spéciaux reçoivent également des bracelets pour 2 accompagnateurs avec leur inscription. Des accommodements sont disponibles sur demande.',
      },
      {
        q: 'Quel est le tarif pour les athlètes remplaçants ?',
        a: 'Les frais pour les athlètes remplaçants sont les mêmes que pour les athlètes titulaires.',
      },
      {
        q: 'Peut-on ajouter ou retirer des athlètes après l\'inscription ?',
        a: 'Ajout d\'un athlète : le tarif appliqué est celui en vigueur à la date de l\'ajout, pas celui de l\'inscription initiale — il peut donc être plus élevé. Après la date limite des inscriptions, des frais administratifs de 50 € par demande s\'ajoutent. Le simple changement de nom sur la feuille de match n\'est pas facturé.\n\nSuppression d\'un athlète : aucun remboursement ne sera accordé pour une réduction d\'effectif après l\'inscription initiale.',
      },
      {
        q: 'Qu\'est-ce qu\'un athlète Crossover ?',
        a: 'Un athlète crossover est un athlète faisant partie de deux équipes différentes. Il sera facturé en totalité pour chacune des équipes auxquelles il est inscrit.\n\nAucun tarif réduit, crédit, transfert ou ajustement ne sera accordé en lien avec la participation d\'un athlète crossover, peu importe le contexte.\n\nUn athlète peut participer à maximum deux routines. Les crossovers entre les équipes Prep et Allstar ne sont pas autorisés. Chaque équipe peut compter au maximum 2 crossovers. Tous les crossovers doivent respecter les règles d’âge de la division concernée. L’inscription est autorisée à la discrétion des entraîneurs, car des conflits d\'horaire sont susceptibles de se produire.',
      },
      {
        q: 'Peut-on changer de catégorie après l\'inscription ?',
        a: 'Oui, un changement de catégorie est possible, mais des frais administratifs de 200 € s\'appliquent si la demande est faite après la fermeture des inscriptions.\n\nSi vous souhaitez changer de catégorie, contactez-nous par mail dès que possible. Vous recevrez une confirmation du montant à régler en même temps que l\'horaire final.',
      },
      {
        q: 'Quels sont les modes de paiement acceptés ?',
        a: 'Les modes de paiement sont :\n• Par chèque à l\'ordre de Crown Cheerleading Events\n• Par virement bancaire\n\nAucune inscription ne sera validée sans acompte de 30 %. Toute annulation avant la fermeture des inscriptions donne droit à un remboursement de 70 % du montant total. Les 30 % restants (acompte) sont retenus à titre de frais d\'annulation.',
      },
      {
        q: 'Que se passe-t-il en cas de défaut de paiement ?',
        a: 'En cas de défaut de paiement, le tarif de l\'inscription changera automatiquement pour le tarif suivant, et ainsi de suite jusqu\'à ce que 100 % de la facture soit acquittée.',
      },
      {
        q: 'Que se passe-t-il si l\'événement est annulé ?',
        a: 'Crown Cheerleading Events se réserve le droit d\'annuler, de reporter ou de reprogrammer la compétition en raison de circonstances imprévues (conditions météorologiques extrêmes, indisponibilité du lieu, problèmes techniques, restrictions gouvernementales).\n\nEn cas d\'annulation ou de report, un crédit sera déterminé en fonction des dépenses encourues au moment de l\'annulation, applicable à une future compétition organisée par Crown Cheerleading Events. Aucun remboursement en argent ne sera accordé, quelles que soient les circonstances.',
      },
    ],
  },
  {
    category: 'Règlement & Compétition',
    items: [
      {
        q: 'Faut-il être affilié à une fédération ou avoir une licence ?',
        a: 'Non. Pour participer, vous n\'avez pas besoin d\'être affilié à une fédération ni de disposer de licences pour vos athlètes. Crown Cheerleading Events ne demande pas de certificat médical pour les participants.\n\nToutefois, il est de la responsabilité des clubs de s\'assurer de la santé de leurs athlètes ainsi que de leur couverture en cas de blessure ou blessure d\'autrui.',
      },
      {
        q: 'Quel règlement est appliqué ?',
        a: 'La compétition suit les règlements officiels de l\'IASF.\n\nhttps://www.iasfworlds.net/cheer/',
      },
      {
        q: 'Quelles sont les règles concernant les âges des athlètes ?',
        a: 'Une preuve d\'âge peut être demandée à tout moment par les officiels de la compétition.\n\nAfin de permettre aux clubs de faire participer l\'ensemble de leurs athlètes, l\'organisation tolère quelques exceptions d\'âge dans la limite de 15 % de l\'effectif de l\'équipe. Toute demande doit être faite par mail et approuvée en amont de la compétition.\n\nToute équipe avec des exceptions d\'âge ne sera pas éligible aux prix de Grand Champion.',
      },
      {
        q: 'Quel scoring est appliqué ?',
        a: 'La compétition suit les feuilles de score de United Scoring System.\n\nhttps://www.unitedscoringpartners.com/',
      },
      {
        q: 'Qu\'est-ce qu\'une équipe démo ?',
        a: 'Une équipe démo est une équipe non compétitive qui souhaite vivre l\'expérience de performer devant public. Elle n\'est pas jugée et ne reçoit aucun commentaire des juges. Chaque athlète reçoit une médaille de participation. L\'équipe ne reçoit ni bannière ni trophée.',
      },
      {
        q: 'Quelle est la durée des routines ?',
        a: 'Novice : 1 min 30\nPrep et Non-tumbling : 2 min 00\nAllstar et Universitaire : 2 min 30\n\nLe chronométrage débute au premier mouvement chorégraphié ou à la première note de musique, et se termine au dernier mouvement ou à la dernière note.',
      },
      {
        q: 'Quelles sont les règles concernant la musique ?',
        a: 'Toutes les équipes doivent soumettre leur musique à l\'adresse mail indiquée, avant la date limite communiquée pour la compétition. La musique doit être conforme aux règlements établis par l\'IASF.',
      },
      {
        q: 'Quelles sont les dimensions du tapis de compétition ?',
        a: 'Le tapis de compétition est un tapis dynamique de 14 m × 14 m.',
      },
      {
        q: 'À quelle heure les équipes doivent-elles arriver ?',
        a: 'Les équipes doivent arriver au moins une heure avant leur passage en salle d\'échauffement. Les entraîneurs sont responsables de récupérer les bracelets à leur arrivée. Les athlètes passent ensuite la sécurité avec les spectateurs — prévoyez une marge de temps suffisante.\n\nDes zones désignées seront mises à disposition pour déposer les effets personnels. Crown Cheerleading Events n\'est pas responsable des objets perdus, volés ou endommagés pendant l\'événement.',
      },
      {
        q: 'Comment sont communiqués les scores et résultats ?',
        a: 'Toutes les feuilles de scores sont envoyées par mail. La feuille de déduction est transmise environ 5 à 10 minutes après la performance. Les autres feuilles de score sont envoyées après la remise des prix.',
      },
      {
        q: 'Comment sont gérées les égalités ?',
        a: 'Les égalités ne sont pas départagées, sauf pour déterminer les grands champions, selon l\'ordre suivant :\n1. L\'équipe avec le moins de déductions l\'emporte\n2. Le score overall le plus élevé\n3. Le total des scores techniques le plus élevé',
      },
      {
        q: 'La compétition fournit-elle des spotteurs ?',
        a: 'La compétition ne fournit pas de spotteurs. Il est de la responsabilité des entraîneurs de présenter les éléments en sécurité avec les athlètes nécessitant un spotteur.\n\nException : les équipes Novice et Prep peuvent être accompagnées de jusqu\'à 3 spotteurs sur le tapis, en tenue adaptée et distincte de celle des athlètes. Ces spotteurs doivent être munis d\'une accréditation athlète ou accompagnant.',
      },
      {
        q: 'Que se passe-t-il en cas de blessure ?',
        a: 'Un pôle médical sera installé à proximité de l\'aire de compétition et d\'échauffement. Chaque équipe doit disposer de sa propre pharmacie (strapping, bandages, poches de froid, etc.).\n\nSeuls les officiels de la compétition, l\'entraîneur de l\'équipe ou le participant blessé peuvent interrompre une routine. Si une nouvelle performance est autorisée, la routine doit être exécutée en totalité. Un athlète blessé ne peut revenir sur le sol qu\'avec l\'autorisation du personnel médical, du responsable légal et de l\'entraîneur principal.',
      },
      {
        q: 'Que se passe-t-il si une routine est interrompue ?',
        a: 'Si l\'interruption est indépendante de l\'équipe (problème d\'équipement, défaillance technique, problème lié à l\'organisation), l\'équipe pourra recommencer la routine à partir du point d\'interruption.\n\nSi l\'interruption est causée par l\'équipe, elle devra continuer ou se retirer. Les officiels décideront si une nouvelle performance est possible.',
      },
      {q: 'Comment se passe l\'échauffement ?',
        a: "Chaque équipe dispose de 10 minutes en vestiaire avant d'accéder à la salle d'échauffement. Elle bénéficie ensuite de 10 minutes sur les tapis non dynamiques, puis de 5 minutes sur le tapis dynamique. Un run-through avec musique de 2 minutes 30 est enfin prévu sur tapis non dynamique."
      }
    ],
  },
  {
    category: 'Spectateurs & Admission',
    items: [
      {
        q: 'Comment fonctionne l\'admission spectateurs ?',
        a: 'L\'admission est générale — aucune réservation de siège n\'est permise. Les billets sont non remboursables et valides pour une seule personne. Les portes ouvriront 30 minutes avant le début de la compétition. Les détenteurs de billets doivent présenter leur billet en version numérique ou papier à l\'entrée.',
      },
      {
        q: 'Quels objets sont interdits ?',
        a: 'Il est interdit d\'apporter des articles dangereux, des substances illégales ou tout objet jugé inapproprié. Les animaux ne sont pas admis, à l\'exception des animaux d\'assistance dûment identifiés.\n\nLes bouteilles de plus de 1,5 L et les sacs de dimensions supérieures au format A4 ne sont pas autorisés. Sont strictement interdits : armes, couteaux, bombes de défense, alcool, bouteilles en verre, fumigènes, cornes de brume, et tout objet sonore (tambours, mégaphones, trompettes) dans l\'espace de compétition.',
      },
    ],
  },
  {
    category: 'Sécurité & Comportement',
    items: [
      {
        q: 'Quelles sont les règles de comportement ?',
        a: 'L\'ensemble des participants est tenu de faire preuve d\'un comportement sportif exemplaire envers les autres compétiteurs, les juges, les officiels et le personnel.\n\nL\'organisation se réserve le droit de disqualifier toute équipe ou individu en cas d\'insulte ou agression envers les juges ou participants, participation d\'une personne non enregistrée, violation des règles antidopage, non-respect des critères d\'âge, ou tout comportement antisportif.',
      },
      {
        q: 'Où les athlètes peuvent-ils se changer ?',
        a: 'Il est formellement interdit aux athlètes de se changer dans les gradins ou dans toute zone visible du public. Les équipes ont accès à un vestiare privé avant leur passage en salle d\'échauffement. Ces espaces n\'étant pas surveillés, l\'organisation ne peut être tenue responsable de toute perte ou vol.',
      },
      {
        q: 'Y a-t-il un dispositif de signalement VSS ?',
        a: 'La compétition s\'engage à garantir un environnement sûr et respectueux. Un système de signalement anonyme des violences sexistes et sexuelles (VSS) est mis en place. Les coordonnées du responsable VSS seront communiquées aux clubs en amont de l\'événement. Tout signalement sera traité avec la plus stricte confidentialité.',
      },
    ],
  },
];
