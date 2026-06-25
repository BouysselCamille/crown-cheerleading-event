const fr = {
  nav: {
    links: [
      { label: 'La compétition', href: '#about' },
      // { label: 'Galerie', href: '#gallery' },
      { label: 'Programme', href: '#schedule' },
      { label: 'Tarifs', href: '#tarifs' },
      { label: 'Inscription', href: '#inscription' },
      { label: 'Contact', href: '#contact' },
    ],
    extraLinks: [
      { label: 'Récompenses', href: '#awards' },
      // { label: "Plan d'accès", href: '#acces' },
      // { label: 'Partenaires', href: '#sponsors' },
      // { label: 'FAQ', href: '#faq' },
    ],
    tickets: 'Billetterie',
  },

  hero: {
    edition: '1ère Édition',
    city: 'Ile-de-France',
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
    p1: "Paris Spring Open Championship est une compétition créée par des passionnés, pour des passionnés. Notre ambition : offrir aux équipes de cheerleading françaises une scène à la hauteur de leur talent, dans une ambiance électrique et bienveillante.",
  p2: "Que vous soyez équipe débutante ou confirmée, Paris Spring Open Championship accueille toutes les divisions dans un format pensé pour valoriser chaque athlète et chaque prestation.",
 badge: 'Jugé selon les standards IASF / United Scoring System',
    stats: [
      { value: '500+', label: 'Athlètes attendus' },
      { value: '30+', label: 'Équipes participantes' },
      { value: '3',   label: 'Crown Grand Champs' },
      { value: '1',   label: 'Journée inoubliable' },
    ],
  },

  schedule: {
    label: 'Déroulé de la journée',
    title: 'Le programme',
    subtitleSuffix: "— horaires indicatifs, susceptibles d'évoluer.",
    items: [
      { time: '8h30', label: 'Ouverture des portes pour les athlètes & accréditations' },
      { time: '9h00', label: 'Ouverture au public' },
      { time: '9h15', label: 'Bloc 1 - Prep et Universitaire' },
      { time: '12h00', label: 'Remise des prix Block 1' },
      { time: '12h45', label: 'Pause' },
      { time: '13h45', label: 'Bloc 2 - AllStar' },
      { time: '16h00', label: 'Remise des prix Block 2' },
      { time: '17h00', label: 'Fin de l\'événement' },
    ],
  },

  divisions: {
    label: 'Divisions & Tarifs',
    title: 'Nos tarifs',
    subtitle: 'Profitez du tarif Early Bird pour réserver vos places au meilleur prix.',
    perAthlete: 'Tarif par athlète',
    noteAccompagnateurs: '<span class="text-white font-semibold">Accompagnateurs :</span> Chaque équipe bénéficie de <span class="text-gold font-semibold">2 accompagnateurs inclus</span> dans les frais d\'inscription.',
    docLabel: 'Catégories de compétition',
    docLink: '/docs/categories.html',
    ruleDocLabel: 'Règlement général',
    ruleDocLink: '/docs/REGLES_ET_REGLEMENTATIONS.pdf',
    docSub: 'Consulter le document',
    pricing: [
      {
        label: 'Early Bird',
        deadline: "jusqu'au 11 Déc 2026",
        badge: 'Meilleur tarif',
        rows: [
          { cat: 'Allstar ', price: '40,00 EUR' },
          { cat: 'Universitaire / Prep', price: '37,50 EUR' },
          { cat: 'Demo', price: '35,00 EUR' },
          { cat: 'Accompagnateur supplémentaire', price: '40,00 EUR' },
        ],
        highlight: true,
      },
      {
        label: 'Entrée Générale',
        deadline: "jusqu'au 12 Fév 2027",
        badge: null,
        rows: [
          { cat: 'Athlète', price: '45,00 EUR' },
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
    note: "* Les équipes avec des exceptions d'âge ne seront pas considérées. Les trois prix seront attribués à des clubs différents. Les juges seront consultés si les scores sont égaux ou désignent deux fois le même club.",
    rewards: [
      { icon: '🥇', text: 'Chaque participant reçoit une médaille' },
      { icon: '🏳️', text: 'Les champions reçoivent une bannière' },
      { icon: '📸', text: 'Photos de la routine gratuites' },
      { icon: '🎥', text: 'Vidéo de la routine disponible sur YouTube post-compétition' },
      { icon: '🏟️', text: 'Compétition sur praticable dynamique de 7 panels' },
      { icon: '🎯', text: 'Routine jugées par un panel Varsity qualifié' },
    ],
    cheerSpirit: {
      title: 'CHEER SPIRIT',
      desc: "Un prix spécifique de « Cheer Spirit » viendra récompenser le club exemplaire en matière de respect, d'encouragement et d'esprit sportif.",
    },
    grandChamps: [
      {
        title: '1ER ALLSTAR GRAND CHAMPION',
        desc: "L'équipe au plus haut score dans la catégorie Allstar",
        prize: '1 500 EUR',
      },
      {
        title: '2ÈME ALLSTAR GRAND CHAMPION',
        desc: "La deuxième équipe au plus haut score dans la catégorie Allstar",
        prize: '1 000 EUR',
      },
      {
        title: 'NEXT GEN GRAND CHAMPION',
        desc: "L'équipe au plus haut score parmi les catégories Universitaire et Prep",
        prize: '500 EUR',
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
    subtitle: 'Paiement sécurisé via Assoconnect.',
    soon: 'La billetterie sera ouverte au 11 décembre 2026',
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
    subtitle: 'La compétition se déroule au Centre omnisports universitaire Carole Vergne.',
    addressLabel: 'Adresse',
    venueName: 'Centre omnisports universitaire Carole Vergne',
    venueAddress: '1 rue Francis Perrin',
    venueCity: '91190 Gif-sur-Yvette',
    venueLink: 'Site officiel du Centre omnisports universitaire Carole Vergne →',
    howToGet: 'Comment venir',
    transport: [
      {
        label: 'Métro',
        lines: [
          { name: 'Ligne 18', detail: "Orsay-Gif" },
        ],
      },
      {
        label: 'Bus',
        lines: [
          { name: 'Ligne 4609', detail: 'Joliot Curie' },
          { name: 'Ligne 4606', detail: 'Joliot Curie' },
        ],
      },
      {
        label: 'En voiture',
        lines: [
          { name: 'Centre omnisports Carole Vergne', detail: '1 rue Francis Perrin, 91190 Gif-sur-Yvette' },
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
            a: "Les frais de deux accompagneurs sont compris dans l'inscription d'une équipe (entraîneurs, gérants, bénévoles, etc.). Les accompagnateurs reçoivent un bracelet et doivent arriver en même temps que l'équipe. Les équipes avec plus de 2 accompagnateurs devront payer pour les accompagnateurs supplémentaires — voir le tableau des frais d'inscription. Les accompagnateurs supplémentaires sont facturés au tarif en vigueur. Seuls les accompagnateurs et athlètes sont autorisés en salle d'échauffement et dans les vestiaires.\n\nLes équipes avec des besoins spéciaux reçoivent également des bracelets pour 2 accompagnateurs avec leur inscription. Des accommodements sont disponibles sur demande.",
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
            a: "Un athlète crossover est un athlète faisant partie de deux équipes différentes. Il sera facturé en totalité pour chacune des équipes auxquelles il est inscrit.\n\nAucun tarif réduit, crédit, transfert ou ajustement ne sera accordé en lien avec la participation d'un athlète crossover, peu importe le contexte.\n\nUn athlète peut participer à maximum deux routines. Les crossovers entre les équipes Prep et Allstar ne sont pas autorisés. Tous les crossovers doivent respecter les règles d'âge de la division concernée. L'inscription est autorisée à la discrétion des entraîneurs, car des conflits d'horaire sont susceptibles de se produire.",
          },
          {
            q: "Peut-on changer de catégorie après l'inscription ?",
            a: "Oui, un changement de catégorie est possible, mais des frais administratifs de 200 € s'appliquent si la demande est faite après la fermeture des inscriptions.\n\nSi vous souhaitez changer de catégorie, contactez-nous par mail dès que possible. Vous recevrez une confirmation du montant à régler en même temps que l'horaire final.",
          },
          {
            q: 'Quels sont les modes de paiement acceptés ?',
            a: "Les modes de paiement sont :\n• Par chèque à l'ordre de Crown Cheerleading Events\n• Par virement bancaire\n• Par carte (un lien de paiement sera envoyé à l'inscripion)\n\nAucune inscription ne sera validée sans acompte de 30 %. Toute annulation avant la fermeture des inscriptions donne droit à un remboursement de 70 % du montant total. Les 30 % restants (acompte) sont retenus à titre de frais d'annulation.",
          },
          {
            q: "Quand est-ce que mon inscription est confirmée ?",
            a: "En raison du fort nombre de demandes et des places limitées, la pré-inscription de votre équipe sera confirmée par mail accompagné de la facture d'inscription.\n\nPour garantir votre place, l'acompte doit être réglé dans les plus brefs délais. Sans paiement, l'équipe risque de perdre sa place au profit des équipes en liste d'attente.",
          },
          {
            q: 'Que se passe-t-il en cas de défaut de paiement ?',
            a: "L'équipe doit régler le solde restant (70 % du montant total) avant la fin de la période tarifaire en cours. Sans règlement dans ce délai, l'inscription basculera automatiquement au tarif suivant.",
          },
          {
            q: "Que se passe-t-il si l'événement est annulé ?",
            a: "Crown Cheerleading Events se réserve le droit d'annuler, de reporter ou de reprogrammer la compétition en raison de circonstances imprévues (conditions météorologiques extrêmes, indisponibilité du lieu, problèmes techniques, restrictions gouvernementales).\n\nEn cas d'annulation ou de report, un crédit sera déterminé en fonction des dépenses encourues au moment de l'annulation, applicable à une future compétition organisée par Crown Cheerleading Events. Aucun remboursement en argent ne sera accordé, quelles que soient les circonstances.",
          },
        ],
      },
      {
        category: 'Règlement',
        items: [
          {
            q: 'Quel règlement est appliqué ?',
            a: "La compétition suit les règlements officiels de l'IASF.\n\nhttps://www.iasfworlds.net/cheer/",
          },

           {
            q: 'Quel scoring est appliqué ?',
            a: "La compétition suit les feuilles de score de United Scoring System > United Kingdom.\n\nhttps://www.unitedscoringpartners.com/",
          },
           {
            q: 'Quelle est la durée des routines ?',
            a: "Prep et Non-tumbling : 2 min 00\nAllstar et Universitaire : 2 min 30\n\nLe chronométrage débute au premier mouvement chorégraphié ou à la première note de musique, et se termine au dernier mouvement ou à la dernière note.",
          },
          {
            q: 'Quelles sont les règles concernant la musique ?',
            a: "Toutes les équipes doivent soumettre leur musique à l'adresse mail indiquée, avant la date limite communiquée pour la compétition. La musique doit être conforme aux règlements établis par l'IASF.",
          },
          {
            q: "À quelle heure les équipes doivent-elles arriver ?",
            a: "Les équipes doivent arriver au moins une heure avant leur passage de compétition. Les entraîneurs sont responsables de récupérer les bracelets à leur arrivée. Les athlètes passent ensuite la sécurité avec les spectateurs — prévoyez une marge de temps suffisante.\n\nDes zones désignées seront mises à disposition pour déposer les effets personnels. Crown Cheerleading Events n'est pas responsable des objets perdus, volés ou endommagés pendant l'événement.",
          },
          {
            q: 'Comment sont communiqués les scores et résultats ?',
            a: "Toutes les feuilles de scores sont envoyées par mail à l'entraineur principal renseigné lors de l'inscription de l'équipe.",
          },
          {
            q: 'Comment sont gérées les égalités ?',
            a: "Les égalités ne sont pas départagées, sauf pour déterminer les grands champions, selon l'ordre suivant :\n1. L'équipe avec le moins de déductions l'emporte\n2. Le score overall le plus élevé\n3. Le total des scores techniques le plus élevé",
          },
          {
            q: 'Que se passe-t-il en cas de blessure ?',
            a: "Un pôle médical sera installé à proximité de l'aire de compétition et d'échauffement. Chaque équipe doit disposer de sa propre pharmacie (strapping, bandages, poches de froid, etc.).\n\nSeuls les officiels de la compétition, l'entraîneur de l'équipe ou le participant blessé peuvent interrompre une routine. Si une nouvelle performance est autorisée, la routine doit être exécutée en totalité. Un athlète blessé ne peut revenir sur le sol qu'avec l'autorisation du personnel médical, du responsable légal et de l'entraîneur principal.",
          },
          {
            q: 'Que se passe-t-il si une routine est interrompue ?',
            a: "Si l'interruption est indépendante de l'équipe (problème d'équipement, défaillance technique, problème lié à l'organisation), l'équipe pourra recommencer la routine à partir du point d'interruption.\n\nSi l'interruption est causée par l'équipe (hors blessure), elle devra continuer ou se retirer. Les officiels décideront si une nouvelle performance est possible.",
          },
            {
            q: "Quelles sont les règles concernant les âges des athlètes ?",
            a: "Une preuve d'âge peut être demandée à tout moment par les officiels de la compétition. Les photocopies sont autorisées.\n\nAfin de permettre aux clubs de faire participer l'ensemble de leurs athlètes, l'organisation tolère quelques exceptions d'âge dans la limite du raisonnable. Toute demande doit être faite par mail et approuvée en amont de la compétition.\n\nToute équipe avec des exceptions d'âge ne sera pas éligible aux prix de Grand Champion.",
          }
        ]
      },
      {
        category: 'Compétition',
        items: [
          {
            q: "Faut-il être affilié à une fédération ou avoir une licence ?",
            a: "Non. Pour participer, vous n'avez pas besoin d'être affilié à une fédération ni de disposer de licences pour vos athlètes. Crown Cheerleading Events ne demande pas de certificat médical pour les participants.\n\nToutefois, il est de la responsabilité des clubs de s'assurer de la santé de leurs athlètes ainsi que de leur couverture en cas de blessure ou blessure d'autrui.",
          },
          {
            q: "Qu'est-ce qu'une équipe démonstration ?",
            a: "Une équipe démonstration est une équipe non compétitive qui souhaite vivre l'expérience de performer devant public. Elle n'est pas jugée et ne reçoit aucun commentaire des juges. L'équipe reçoit une bannière.\n\nChaque athlète reçoit une médaille de participation. Chaque équipe démo recevra des photos de sa prestation. La vidéo de la routine sera également publiée sur YouTube.",          },
         
          
          {
            q: 'Quelles sont les dimensions du tapis de compétition ?',
            a: 'Le tapis de compétition est un tapis dynamique de 14 m × 14 m.',
          },
          
          {
  q: "Qu'est-ce que la catégorie Prep ?",
  a: "La catégorie Prep est conçue pour les équipes souhaitant vivre une première expérience compétitive. La routine dure 2 minutes, avec des exigences réduites en tumbling et en stunting. Pour plus de détails, consultez les scoring rubrics dans : United Scoring System > United Kingdom > Prep."
},
          {
            q: 'La compétition fournit-elle des spotteurs ?',
            a: "La compétition ne fournit pas de spotteurs. Il est de la responsabilité des entraîneurs de présenter les éléments en sécurité avec les athlètes nécessitant un spotteur.\n\nLes équipes peuvent être accompagnées de jusqu'à 3 spotteurs sur le tapis, en tenue adaptée et distincte de celle des athlètes. Ces spotteurs doivent être munis d'une accréditation athlète ou accompagnant.",
          },
          {
            q: "Un athlète peut-il s'inscrire avec un club allstar et une équipe universitaire ?",
            a: "Oui. Un athlète peut s'inscrire à la fois avec un club allstar et une équipe universitaire. Les règles du nombre maximum de crossover ne s'appliquent pas."       },
            {
              q: "Est-ce qu'une équipe universitaire peut s'inscrire dans la catégorie Allstar ?",
              a: "Oui, cependant elle ne peut pas s'inscrire en Allstar et en Universitaire. L'équipe suivra alors la réglementation Allstar, les prix d'inscription Allstar et ne sera pas éligible au prix de Next Gen Grand Champion.",
            },
          {
            q: "Comment est déterminé le titre de Cheer Spirit ?",
            a: "Le titre de Cheer Spirit est attribué sur la base de deux critères combinés :\n\n• L'observation de nos bénévoles tout au long de la compétition, qui évaluent l'attitude, le respect, l'encouragement envers les autres équipes et l'esprit sportif général.\n\n• Les stories publiées sur les réseaux sociaux tagguant Crown Cheerleading Events pendant la journée, mettant en valeur cet esprit Cheer Spirit.\n\nLe titre est décerné au club qui aura brillé par son exemplarité sur ces deux tableaux.",
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
          {
            q: 'Photos et vidéos',
            a: "Les photos et vidéos personnelles sont permises, à condition de ne pas nuire à la visibilité des autres spectateurs ni au déroulement de la compétition.\n\nL'utilisation d'équipement professionnel (trépieds, téléobjectifs, éclairages, etc.) est strictement interdite sans accréditation préalable.\n\nDes photographes et vidéastes professionnels représentant Crown Cheerleading Events seront présents sur place pour filmer les prestations et capturer des photos officielles de l'événement.\n\nCes images pourront être utilisées à des fins promotionnelles, notamment sur les plateformes numériques et réseaux sociaux de Crown Cheerleading Events.",
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
    email: 'contact@crown-cheerleading-events.fr',
    cta: 'Envoyer un email',
  },

  legalNotice: {
    back: "Retour à l'accueil",
    title: 'Mentions légales',
    updated: 'Dernière mise à jour',
     updatedDate: '15 Mai 2026',
    sections: [
      {
        title: '1. Éditeur du site',
        content: 'Le site Crown Cheerleading Events est édité par :',
        info: [
          { label: 'Association loi 1901', value: 'Crown Cheerleading Events' },
          { label: 'Siège social', value: '11 avenue Ledru Rollin 75012 Paris' },
          { label: 'Email', value: 'contact@crown-cheerleading-events.fr' },
          { label: 'SIRET / RNA', value: '102538766 / W751283436' },
        ],
      },
      {
        title: '2. Directeur de la publication',
        content: "Le directeur de la publication est le représentant légal de l'association Crown Cheerleading Events.",
      },
      {
        title: '3. Hébergement',
        info: [
          { label: 'Hébergeur', value: 'Vercel Inc.' },
          { label: 'Adresse', value: '340 S Lemon Ave #4133 Walnut, CA 91789, USA' },
          { label: 'Site', value: 'vercel.com' },
        ],
      },
      {
        title: '4. Propriété intellectuelle',
        content: "L'ensemble des contenus présents sur ce site (textes, images, logos, visuels) est la propriété exclusive de Crown Cheerleading Events ou de ses partenaires. Toute reproduction, même partielle, est interdite sans autorisation préalable.",
      },
      {
        title: '5. Limitation de responsabilité',
        content: "Crown Cheerleading Events s'efforce de maintenir les informations de ce site à jour et exactes. Toutefois, l'organisation ne peut être tenue responsable des erreurs ou omissions, ni des dommages résultant de l'utilisation du site.",
      },
      {
        title: '6. Droit applicable',
        content: "Le présent site et ses mentions légales sont soumis au droit français. Tout litige relatif à son utilisation sera soumis à la compétence des tribunaux français.",
      },
    ],
  },

  privacyPolicy: {
    back: "Retour à l'accueil",
    title: 'Politique de confidentialité',
    updated: 'Dernière mise à jour',
    updatedDate: '15 Mai 2026',
    sections: [
      {
        title: '1. Responsable du traitement',
        content: "Crown Cheerleading Events est responsable du traitement des données personnelles collectées sur ce site. Pour toute question, vous pouvez nous contacter via le formulaire de contact.",
      },
      {
        title: '2. Données collectées',
        content: "Dans le cadre de l'utilisation de ce site, nous pouvons être amenés à collecter les données suivantes :",
        items: [
          'Nom et prénom (via le formulaire de contact)',
          'Adresse email (via le formulaire de contact)',
          'Données de navigation (via les cookies techniques)',
        ],
      },
      {
        title: '3. Finalité du traitement',
        content: "Les données collectées sont utilisées uniquement pour répondre à vos demandes de contact et assurer le bon fonctionnement du site. Elles ne sont jamais vendues ni cédées à des tiers.",
      },
      {
        title: '4. Durée de conservation',
        content: "Les données issues du formulaire de contact sont conservées pour la durée nécessaire au traitement de votre demande, et au maximum 3 ans à compter du dernier contact.",
      },
      {
        title: '5. Vos droits',
        content: "Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :",
        items: [
          "Droit d'accès à vos données",
          'Droit de rectification',
          "Droit à l'effacement",
          'Droit à la limitation du traitement',
          "Droit d'opposition",
        ],
        footer: "Pour exercer ces droits, contactez-nous via le formulaire de contact du site.",
      },
      {
        title: '6. Cookies',
        content: "Ce site utilise uniquement des cookies techniques strictement nécessaires au fonctionnement du site. Aucun cookie publicitaire ou de traçage n'est utilisé.",
      },
      {
        title: '7. Billetterie Assoconnect',
        content: "L'achat de billets est géré par Assoconnect, soumis à sa propre politique de confidentialité. Nous vous invitons à la consulter sur le site Assoconnect.",
      },
    ],
  },

  notFound: {
    title: '404',
    message: 'Oups, la page que vous recherchez n’existe pas.',
    cta: "Retour à l'accueil",
  },

  footer: {
    tagline: 'La compétition qui couronne les champions.',
    navigation: 'Navigation',
    contact: 'Contact',
    contactText: 'contact@crown-cheerleading-events.fr',
    rights: 'Tous droits réservés.',
    legal: 'Mentions légales',
    privacy: 'Politique de confidentialité',
  },
};

export default fr;
