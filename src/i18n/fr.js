const fr = {
  nav: {
    links: [
      { label: 'La compétition', href: '#about' },
      { label: 'Galerie', href: '#gallery' },
      { label: 'Programme', href: '#schedule' },
      { label: 'Tarifs', href: '#tarifs' },
      { label: 'Inscription', href: '#inscription' },
      { label: 'Contact', href: '#contact' },
    ],
    extraLinks: [
      { label: 'Récompenses', href: '#awards' },
      { label: "Plan d'accès", href: '#acces' },
      { label: 'Partenaires', href: '#sponsors' },
      { label: 'FAQ', href: '#faq' },
    ],
    tickets: 'Billetterie',
  },

  hero: {
    edition: '1ère Édition',
    city: 'Paris',
    dateDisplay: '4 avril 2027',
    countdown: 'Compte à rebours',
    buyTickets: 'Acheter des billets',
    registerTeam: 'Inscrire mon équipe',
    locationFallback: 'Lieu à confirmer',
  },

  about: {
    label: 'À propos',
    title1: 'La compétition',
    title2: 'qui couronne',
    title3: 'les champions',
    p1: "Crown Cheerleading Events est une compétition créée par des passionnés, pour des passionnés. Notre ambition : offrir aux équipes de cheerleading françaises une scène à la hauteur de leur talent, dans une ambiance électrique et bienveillante.",
    p2: "Que vous soyez équipe débutante ou confirmée, Crown Cheerleading Events accueille toutes les divisions dans un format pensé pour valoriser chaque athlète et chaque prestation.",
    badge: 'Jugé selon les standards IASF / United Scoring System',
    stats: [
      { value: '500+', label: 'Athlètes attendus' },
      { value: '30+', label: 'Équipes participantes' },
      { value: '2',   label: 'Crown Grand Champs' },
      { value: '1',   label: 'Journée inoubliable' },
    ],
  },

  schedule: {
    label: 'Déroulé de la journée',
    title: 'Le programme',
    subtitleSuffix: "— horaires indicatifs, susceptibles d'évoluer.",
    items: [
      { time: '10h00', label: 'Ouverture des portes & accréditations' },
      { time: '10h30', label: 'Ouverture au public' },
      { time: '11h00', label: 'Block 1 - Novice, Prep et Universitaire' },
      { time: '13h30', label: 'Remise des prix Block 1' },
      { time: '14h30', label: 'Block 2 — AllStar' },
      { time: '17h00', label: 'Remise des prix Block 2' },
      { time: '18h00', label: "Fin de l'événement" },
    ],
  },

  divisions: {
    label: 'Divisions & Tarifs',
    title: 'Nos tarifs',
    subtitle: 'Profitez du tarif Early Bird pour réserver vos places au meilleur prix.',
    perAthlete: 'Tarif par athlète',
    noteAccompagnateurs: '<span class="text-white font-semibold">Accompagnateurs :</span> Chaque équipe bénéficie de <span class="text-gold font-semibold">2 accompagnateurs inclus</span> dans les frais d\'inscription.',
    noteDemo: '<span class="text-white font-semibold">Équipe démo :</span> Les frais d\'inscription correspondent à <span class="text-gold font-semibold">75 % des tarifs en vigueur</span>.',
    docLabel: 'Catégories de compétition',
    docLink: '/docs/categories.html',
    docSub: 'Consulter le document',
    pricing: [
      {
        label: 'Early Bird',
        deadline: "jusqu'au 11 Déc 2026",
        badge: 'Meilleur tarif',
        rows: [
          { cat: 'Allstar / Universitaire / Prep', price: '50,00 EUR' },
          { cat: 'Novice', price: '40,00 EUR' },
          { cat: 'Accompagnateur supplémentaire', price: '40,00 EUR' },
        ],
        highlight: true,
      },
      {
        label: 'Entrée Générale',
        deadline: "jusqu'au 12 Fév 2027",
        badge: null,
        rows: [
          { cat: 'Allstar / Universitaire / Prep', price: '55,00 EUR' },
          { cat: 'Novice', price: '55,00 EUR' },
          { cat: 'Accompagnateur supplémentaire', price: '40,00 EUR' },
        ],
        highlight: false,
      },
    ],
  },

  recompenses: {
    label: 'Récompenses',
    title1: 'Ce qui vous',
    title2: 'attend',
    subtitle: "Parce que chaque athlète mérite d'être récompensé pour son effort.",
    prizeLabel: 'Prix',
    note: "* Les équipes avec des exceptions d'âge ne seront pas considérées. Les deux prix seront attribués à des clubs différents. Les juges seront consultés si les scores sont égaux ou désignent deux fois le même club.",
    rewards: [
      { icon: '🥇', text: 'Chaque participant reçoit une médaille' },
      { icon: '🏳️', text: 'Les champions et les équipes novices reçoivent une bannière' },
      { icon: '📸', text: 'Photos de la routine gratuites' },
      { icon: '🎥', text: 'Vidéo de la routine disponible sur YouTube post-compétition' },
      { icon: '🏟️', text: 'Compétition sur praticable dynamique de 7 panels' },
      { icon: '🎯', text: 'Routine jugées par un panel Varsity qualifié' },
    ],
    grandChamps: [
      {
        title: 'ALLSTAR GRAND CHAMPION',
        desc: "L'équipe au plus haut score dans la catégorie Allstar",
        prize: '2 000 EUR',
      },
      {
        title: 'NEXT GEN GRAND CHAMPION',
        desc: "L'équipe au plus haut score parmi les catégories Universitaire et Prep",
        prize: '1 000 EUR',
      },
    ],
  },

  inscription: {
    label: 'Inscription',
    title1: 'Inscrivez votre',
    title2: 'équipe',
    subtitle: 'Toutes les informations pour inscrire votre club à la compétition.',
    formTitle: "Formulaire d'inscription disponible le",
    formDate: '10 septembre',
    formDesc: "Le formulaire d'inscription en ligne ouvrira le <strong>10 septembre</strong>. En attendant, les dirigeants peuvent dès maintenant télécharger le fichier Excel à compléter et à fournir au moment de l'inscription. <strong>Un fichier Excel par équipe</strong> sera requis.",
    prepareLabel: 'Préparez votre dossier',
    downloadBtn: "Télécharger le fichier Excel d'inscription",
    downloadNote: 'Fichier à remettre complété lors de votre inscription en ligne',
  },

  tickets: {
    label: 'Billetterie',
    title1: 'Réservez vos',
    title2: 'places',
    subtitle: 'Paiement sécurisé via HelloAsso.',
    soon: 'La billetterie sera ouverte au 10 septembre 2026',
  },

  gallery: {
    label: 'Galerie',
    title1: "L'ambiance",
    title2: 'Crown',
    subtitle: 'Découvrez le lieu de la compétition.',
  },

  acces: {
    label: 'Lieu',
    title1: "Plan d'",
    title2: 'accès',
    subtitle: 'La compétition se déroule au Dojo de Paris.',
    addressLabel: 'Adresse',
    venueName: 'Dojo de Paris',
    venueAddress: '21/25 avenue de la Porte de Chatillon',
    venueCity: '75014 Paris',
    venueLink: 'Site officiel du Dojo de Paris →',
    howToGet: 'Comment venir',
    transport: [
      {
        label: 'Métro',
        lines: [
          { name: 'Ligne 4', detail: "Porte d'Orléans ou Mairie de Montrouge" },
          { name: 'Ligne 13', detail: 'Porte de Vanves' },
        ],
      },
      {
        label: 'Tram',
        lines: [
          { name: 'Ligne T3a', detail: "Porte de Vanves, Didot, Jean Moulin ou Porte d'Orléans" },
        ],
      },
      {
        label: 'Bus',
        lines: [
          { name: 'Ligne 58', detail: 'Porte de Chatillon' },
          { name: 'Lignes 194 & 388', detail: 'Jean Moulin' },
        ],
      },
      {
        label: 'En voiture',
        lines: [
          { name: 'Parking Q-Park', detail: '21 avenue de la Porte de Chatillon, 75014 Paris' },
        ],
      },
    ],
  },

  sponsors: {
    label: 'Partenaires',
    title1: 'Ils nous font',
    title2: 'confiance',
    subtitle: 'Ils nous font confiance et rendent cet événement possible.',
    become: 'Devenir partenaire',
    tiers: { gold: 'Or', silver: 'Argent', bronze: 'Bronze' },
  },

  faq: {
    label: 'FAQ',
    title1: 'Questions',
    title2: 'fréquentes',
    data: [
      {
        category: 'Frais & Inscriptions',
        items: [
          {
            q: "Combien d'accompagnateurs sont inclus dans l'inscription ?",
            a: "Les équipes ont droit à un maximum de deux accompagnateurs (entraîneurs, gérants, bénévoles, etc.). Les accompagnateurs reçoivent un bracelet et doivent arriver en même temps que l'équipe. Les équipes avec plus de 2 accompagnateurs devront payer pour les accompagnateurs supplémentaires — voir le tableau des frais d'inscription. Les accompagnateurs supplémentaires sont facturés au tarif en vigueur. Seuls les accompagnateurs et athlètes sont autorisés en salle d'échauffement et dans les vestiaires.\n\nLes équipes avec des besoins spéciaux reçoivent également des bracelets pour 2 accompagnateurs avec leur inscription. Des accommodements sont disponibles sur demande.",
          },
          {
            q: 'Quel est le tarif pour les athlètes remplaçants ?',
            a: 'Les frais pour les athlètes remplaçants sont les mêmes que pour les athlètes titulaires.',
          },
          {
            q: "Peut-on ajouter ou retirer des athlètes après l'inscription ?",
            a: "Ajout d'un athlète : le tarif appliqué est celui en vigueur à la date de l'ajout, pas celui de l'inscription initiale — il peut donc être plus élevé. Après la date limite des inscriptions, des frais administratifs de 50 € par demande s'ajoutent. Le simple changement de nom sur la feuille de match n'est pas facturé.\n\nSuppression d'un athlète : aucun remboursement ne sera accordé pour une réduction d'effectif après l'inscription initiale.",
          },
          {
            q: "Qu'est-ce qu'un athlète Crossover ?",
            a: "Un athlète crossover est un athlète faisant partie de deux équipes différentes. Il sera facturé en totalité pour chacune des équipes auxquelles il est inscrit.\n\nAucun tarif réduit, crédit, transfert ou ajustement ne sera accordé en lien avec la participation d'un athlète crossover, peu importe le contexte.\n\nUn athlète peut participer à maximum deux routines. Les crossovers entre les équipes Prep et Allstar ne sont pas autorisés. Chaque équipe peut compter au maximum 2 crossovers. Tous les crossovers doivent respecter les règles d'âge de la division concernée. L'inscription est autorisée à la discrétion des entraîneurs, car des conflits d'horaire sont susceptibles de se produire.",
          },
          {
            q: "Peut-on changer de catégorie après l'inscription ?",
            a: "Oui, un changement de catégorie est possible, mais des frais administratifs de 200 € s'appliquent si la demande est faite après la fermeture des inscriptions.\n\nSi vous souhaitez changer de catégorie, contactez-nous par mail dès que possible. Vous recevrez une confirmation du montant à régler en même temps que l'horaire final.",
          },
          {
            q: 'Quels sont les modes de paiement acceptés ?',
            a: "Les modes de paiement sont :\n• Par chèque à l'ordre de Crown Cheerleading Events\n• Par virement bancaire\n\nAucune inscription ne sera validée sans acompte de 30 %. Toute annulation avant la fermeture des inscriptions donne droit à un remboursement de 70 % du montant total. Les 30 % restants (acompte) sont retenus à titre de frais d'annulation.",
          },
          {
            q: "Quand est-ce que mon inscription est confirmée ?",
            a: "En raison du fort nombre de demandes et des places limitées, la pré-inscription de votre équipe sera confirmée par mail accompagné de la facture d'inscription.\n\nPour garantir votre place, l'acompte doit être réglé dans les plus brefs délais. Sans paiement, l'équipe risque de perdre sa place au profit des équipes en liste d'attente.",
          },
          {
            q: 'Que se passe-t-il en cas de défaut de paiement ?',
            a: "L'équipe doit régler le solde restant (70 % du montant total) avant la fin de la période tarifaire en cours. Sans règlement dans ce délai, l'inscription basculera automatiquement au tarif suivant.\n\nTout retard de paiement après la date limite entraîne une majoration de 20 % ou l'annulation de la participation de l'équipe, sans remboursement possible.",
          },
          {
            q: "Que se passe-t-il si l'événement est annulé ?",
            a: "Crown Cheerleading Events se réserve le droit d'annuler, de reporter ou de reprogrammer la compétition en raison de circonstances imprévues (conditions météorologiques extrêmes, indisponibilité du lieu, problèmes techniques, restrictions gouvernementales).\n\nEn cas d'annulation ou de report, un crédit sera déterminé en fonction des dépenses encourues au moment de l'annulation, applicable à une future compétition organisée par Crown Cheerleading Events. Aucun remboursement en argent ne sera accordé, quelles que soient les circonstances.",
          },
        ],
      },
      {
        category: 'Règlement & Compétition',
        items: [
          {
            q: "Faut-il être affilié à une fédération ou avoir une licence ?",
            a: "Non. Pour participer, vous n'avez pas besoin d'être affilié à une fédération ni de disposer de licences pour vos athlètes. Crown Cheerleading Events ne demande pas de certificat médical pour les participants.\n\nToutefois, il est de la responsabilité des clubs de s'assurer de la santé de leurs athlètes ainsi que de leur couverture en cas de blessure ou blessure d'autrui.",
          },
          {
            q: 'Quel règlement est appliqué ?',
            a: "La compétition suit les règlements officiels de l'IASF.\n\nhttps://www.iasfworlds.net/cheer/",
          },
          {
            q: "Quelles sont les règles concernant les âges des athlètes ?",
            a: "Une preuve d'âge peut être demandée à tout moment par les officiels de la compétition.\n\nAfin de permettre aux clubs de faire participer l'ensemble de leurs athlètes, l'organisation tolère quelques exceptions d'âge dans la limite de 15 % de l'effectif de l'équipe. Toute demande doit être faite par mail et approuvée en amont de la compétition.\n\nToute équipe avec des exceptions d'âge ne sera pas éligible aux prix de Grand Champion.",
          },
          {
            q: 'Quel scoring est appliqué ?',
            a: "La compétition suit les feuilles de score de United Scoring System.\n\nhttps://www.unitedscoringpartners.com/",
          },
          {
            q: "Qu'est-ce qu'une équipe démo ?",
            a: "Une équipe démo est une équipe non compétitive qui souhaite vivre l'expérience de performer devant public. Elle n'est pas jugée et ne reçoit aucun commentaire des juges. Chaque athlète reçoit une médaille de participation. L'équipe ne reçoit ni bannière ni trophée.",
          },
          {
            q: 'Quelle est la durée des routines ?',
            a: "Novice : 1 min 30\nPrep et Non-tumbling : 2 min 00\nAllstar et Universitaire : 2 min 30\n\nLe chronométrage débute au premier mouvement chorégraphié ou à la première note de musique, et se termine au dernier mouvement ou à la dernière note.",
          },
          {
            q: 'Quelles sont les règles concernant la musique ?',
            a: "Toutes les équipes doivent soumettre leur musique à l'adresse mail indiquée, avant la date limite communiquée pour la compétition. La musique doit être conforme aux règlements établis par l'IASF.",
          },
          {
            q: 'Quelles sont les dimensions du tapis de compétition ?',
            a: 'Le tapis de compétition est un tapis dynamique de 14 m × 14 m.',
          },
          {
            q: "À quelle heure les équipes doivent-elles arriver ?",
            a: "Les équipes doivent arriver au moins une heure avant leur passage en salle d'échauffement. Les entraîneurs sont responsables de récupérer les bracelets à leur arrivée. Les athlètes passent ensuite la sécurité avec les spectateurs — prévoyez une marge de temps suffisante.\n\nDes zones désignées seront mises à disposition pour déposer les effets personnels. Crown Cheerleading Events n'est pas responsable des objets perdus, volés ou endommagés pendant l'événement.",
          },
          {
            q: 'Comment sont communiqués les scores et résultats ?',
            a: "Toutes les feuilles de scores sont envoyées par mail. La feuille de déduction est transmise environ 5 à 10 minutes après la performance. Les autres feuilles de score sont envoyées après la remise des prix.",
          },
          {
            q: 'Comment sont gérées les égalités ?',
            a: "Les égalités ne sont pas départagées, sauf pour déterminer les grands champions, selon l'ordre suivant :\n1. L'équipe avec le moins de déductions l'emporte\n2. Le score overall le plus élevé\n3. Le total des scores techniques le plus élevé",
          },
          {
            q: 'La compétition fournit-elle des spotteurs ?',
            a: "La compétition ne fournit pas de spotteurs. Il est de la responsabilité des entraîneurs de présenter les éléments en sécurité avec les athlètes nécessitant un spotteur.\n\nException : les équipes Novice et Prep peuvent être accompagnées de jusqu'à 3 spotteurs sur le tapis, en tenue adaptée et distincte de celle des athlètes. Ces spotteurs doivent être munis d'une accréditation athlète ou accompagnant.",
          },
          {
            q: 'Que se passe-t-il en cas de blessure ?',
            a: "Un pôle médical sera installé à proximité de l'aire de compétition et d'échauffement. Chaque équipe doit disposer de sa propre pharmacie (strapping, bandages, poches de froid, etc.).\n\nSeuls les officiels de la compétition, l'entraîneur de l'équipe ou le participant blessé peuvent interrompre une routine. Si une nouvelle performance est autorisée, la routine doit être exécutée en totalité. Un athlète blessé ne peut revenir sur le sol qu'avec l'autorisation du personnel médical, du responsable légal et de l'entraîneur principal.",
          },
          {
            q: 'Que se passe-t-il si une routine est interrompue ?',
            a: "Si l'interruption est indépendante de l'équipe (problème d'équipement, défaillance technique, problème lié à l'organisation), l'équipe pourra recommencer la routine à partir du point d'interruption.\n\nSi l'interruption est causée par l'équipe, elle devra continuer ou se retirer. Les officiels décideront si une nouvelle performance est possible.",
          },
          {
            q: "Comment se passe l'échauffement ?",
            a: "Chaque équipe dispose de 10 minutes en vestiaire avant d'accéder à la salle d'échauffement. Elle bénéficie ensuite de 10 minutes sur les tapis non dynamiques, puis de 5 minutes sur le tapis dynamique. Un run-through avec musique de 2 minutes 30 est enfin prévu sur tapis non dynamique.",
          },
        ],
      },
      {
        category: 'Spectateurs & Admission',
        items: [
          {
            q: "Comment fonctionne l'admission spectateurs ?",
            a: "L'admission est générale — aucune réservation de siège n'est permise. Les billets sont non remboursables et valides pour une seule personne. Les portes ouvriront 30 minutes avant le début de la compétition. Les détenteurs de billets doivent présenter leur billet en version numérique ou papier à l'entrée.",
          },
          {
            q: 'Quels objets sont interdits ?',
            a: "Il est interdit d'apporter des articles dangereux, des substances illégales ou tout objet jugé inapproprié. Les animaux ne sont pas admis, à l'exception des animaux d'assistance dûment identifiés.\n\nLes bouteilles de plus de 1,5 L et les sacs de dimensions supérieures au format A4 ne sont pas autorisés. Sont strictement interdits : armes, couteaux, bombes de défense, alcool, bouteilles en verre, fumigènes, cornes de brume, et tout objet sonore (tambours, mégaphones, trompettes) dans l'espace de compétition.",
          },
        ],
      },
      {
        category: 'Sécurité & Comportement',
        items: [
          {
            q: 'Quelles sont les règles de comportement ?',
            a: "L'ensemble des participants est tenu de faire preuve d'un comportement sportif exemplaire envers les autres compétiteurs, les juges, les officiels et le personnel.\n\nL'organisation se réserve le droit de disqualifier toute équipe ou individu en cas d'insulte ou agression envers les juges ou participants, participation d'une personne non enregistrée, violation des règles antidopage, non-respect des critères d'âge, ou tout comportement antisportif.",
          },
          {
            q: "Où les athlètes peuvent-ils se changer ?",
            a: "Il est formellement interdit aux athlètes de se changer dans les gradins ou dans toute zone visible du public. Les équipes ont accès à un vestiaire privé avant leur passage en salle d'échauffement. Ces espaces n'étant pas surveillés, l'organisation ne peut être tenue responsable de toute perte ou vol.",
          },
          {
            q: "Y a-t-il des règles concernant le bruit à l'extérieur ?",
            a: "Le lieu de la compétition est situé dans un quartier résidentiel. Nous demandons à tous les athlètes, accompagnateurs et supporters de rester attentifs au niveau sonore à l'extérieur du bâtiment — notamment lors des arrivées, départs et pauses. Merci de limiter les cris, la musique forte et tout bruit excessif par respect pour les riverains.",
          },
          {
            q: 'Y a-t-il un dispositif de signalement VSS ?',
            a: "La compétition s'engage à garantir un environnement sûr et respectueux. Un système de signalement anonyme des violences sexistes et sexuelles (VSS) est mis en place. Les coordonnées du responsable VSS seront communiquées aux clubs en amont de l'événement. Tout signalement sera traité avec la plus stricte confidentialité.",
          },
        ],
      },
    ],
  },

  contact: {
    label: 'Contact',
    title1: 'Prenons',
    title2: 'contact',
    subtitle: 'Une question sur la compétition, un partenariat, une inscription ? Écrivez-nous.',
    fields: {
      name: 'Nom',
      namePlaceholder: 'Votre nom',
      email: 'Email',
      emailPlaceholder: 'votre@email.com',
      subject: 'Sujet',
      subjectDefault: 'Sélectionner un sujet',
      subjects: [
        { value: 'inscription', label: 'Inscription équipe' },
        { value: 'billetterie', label: 'Billetterie' },
        { value: 'partenariat', label: 'Partenariat / Sponsoring' },
        { value: 'presse', label: 'Presse / Médias' },
        { value: 'autre', label: 'Autre' },
      ],
      message: 'Message',
      messagePlaceholder: 'Votre message...',
      submit: 'Envoyer le message',
    },
    success: {
      title: 'Message envoyé !',
      subtitle: 'Nous vous répondrons dans les plus brefs délais.',
      reset: 'Envoyer un autre message',
    },
  },

  footer: {
    tagline: 'La compétition qui couronne les champions.',
    navigation: 'Navigation',
    contact: 'Contact',
    contactText: 'Pour toute question, utilisez\nle formulaire de contact.',
    rights: 'Tous droits réservés.',
    legal: 'Mentions légales',
    privacy: 'Politique de confidentialité',
  },
};

export default fr;
