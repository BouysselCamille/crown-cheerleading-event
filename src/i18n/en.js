const en = {
  nav: {
    links: [
      { label: 'The Competition', href: '#about' },
      { label: 'Gallery', href: '#gallery' },
      { label: 'Schedule', href: '#schedule' },
      { label: 'Pricing', href: '#tarifs' },
      { label: 'Registration', href: '#inscription' },
      { label: 'Contact', href: '#contact' },
    ],
    extraLinks: [
      { label: 'Awards', href: '#awards' },
      { label: 'Getting here', href: '#acces' },
      { label: 'Partners', href: '#sponsors' },
      { label: 'FAQ', href: '#faq' },
    ],
    tickets: 'Tickets',
  },

  hero: {
    edition: '1st Edition',
    city: 'Ile-de-France',
    dateDisplay: 'April 4th, 2027',
    countdown: 'Countdown',
    buyTickets: 'Buy tickets',
    registerTeam: 'Register my team',
    locationFallback: 'Venue to be confirmed',
  },

  about: {
    label: 'About',
    title1: 'The competition',
    title2: 'that crowns',
    title3: 'champions',
    p1: "Crown Cheerleading Events is a competition created by passionate people, for passionate people. Our ambition: to offer French cheerleading teams a stage worthy of their talent, in an electric and supportive atmosphere.",
    p2: "Whether you are a beginner or experienced team, Crown Cheerleading Events welcomes all divisions in a format designed to showcase every athlete and every performance.",
    badge: 'Judged under IASF / United Scoring System standards',
    stats: [
      { value: '500+', label: 'Expected athletes' },
      { value: '30+', label: 'Competing teams' },
      { value: '3',   label: 'Crown Grand Champs' },
      { value: '1',   label: 'Unforgettable day' },
    ],
  },

  schedule: {
    label: 'Day schedule',
    title: 'The schedule',
    subtitleSuffix: '— indicative times, subject to change.',
    items: [
      { time: '8h30', label: 'Doors open for athletes & accreditations' },
      { time: '9h00', label: 'Public opening' },
      { time: '9h15', label: 'Bloc 1 - Prep & University' },
      { time: '12h00', label: 'Bloc 1 Awards Ceremony' },
      { time: '12h45', label: 'Break' },
      { time: '13h45', label: 'Bloc 2 - AllStar' },
      { time: '16h00', label: 'Bloc 2 Awards Ceremony' },
      { time: '17h00', label: 'End of event' },
    ],
  },

  divisions: {
    label: 'Divisions & Pricing',
    title: 'Our pricing',
    subtitle: 'Take advantage of the Early Bird rate to secure your spot at the best price.',
    perAthlete: 'Price per athlete',
    noteAccompagnateurs: '<span class="text-white font-semibold">Coaches & team staff:</span> Each team receives <span class="text-gold font-semibold">2 included passes</span> with their registration.',
    docLabel: 'Competition categories',
    docLink: '/docs/categories_en.html',
    docSub: 'View document',
    pricing: [
      {
        label: 'Early Bird',
        deadline: 'until Dec 11, 2026',
        badge: 'Best rate',
        rows: [
          { cat: 'Allstar', price: '40.00 EUR' },
          { cat: 'University / Prep', price: '37.50 EUR' },
          { cat: 'Demo', price: '35.00 EUR' },
          { cat: 'Additional accompanying person', price: '40.00 EUR' },
        ],
        highlight: true,
      },
      {
        label: 'General Entry',
        deadline: 'until Feb 12, 2027',
        badge: null,
        rows: [
          { cat: 'Athlete', price: '45.00 EUR' },
          { cat: 'Additional accompanying person', price: '40.00 EUR' },
        ],
        highlight: false,
      },
    ],
  },

  recompenses: {
    label: 'Awards',
    title1: 'What',
    title2: 'awaits you',
    subtitle: 'Because every athlete deserves to be recognised for their effort.',
    prizeLabel: 'Prize',
    note: '* Teams with age exceptions will not be eligible. The three prizes will be awarded to different clubs. Judges will be consulted if scores are tied or point to the same club twice.',
    rewards: [
      { icon: '🥇', text: 'Every participant receives a medal' },
      { icon: '🏳️', text: 'Champions teams receive a banner' },
      { icon: '📸', text: 'Free routine photos' },
      { icon: '🎥', text: 'Routine video available on YouTube post-competition' },
      { icon: '🏟️', text: 'Competition on a 7-panel spring floor' },
      { icon: '🎯', text: 'Routines judged by a qualified Varsity panel' },
    ],
    cheerSpirit: {
      title: 'CHEER SPIRIT',
      desc: 'A specific "Cheer Spirit" award will recognise the program who stands out for their respect, encouragement and sportsmanship — a 500 EUR discount on registration for the next edition.',
    },
    grandChamps: [
      {
        title: '1ST ALLSTAR GRAND CHAMPION',
        desc: 'The team with the highest score in the Allstar category',
        prize: '1,500 EUR',
      },
      {
        title: '2ND ALLSTAR GRAND CHAMPION',
        desc: 'The second team with the highest score in the Allstar category',
        prize: '1,000 EUR',
      },
      {
        title: 'NEXT GEN GRAND CHAMPION',
        desc: 'The team with the highest score across University and Prep',
        prize: '500 EUR',
      },
    ],
  },

  inscription: {
    label: 'Registration',
    title1: 'Register your',
    title2: 'team',
    subtitle: 'All the information you need to register your club for the competition.',
    formTitle: 'Registration form available on',
    formDate: 'September 10',
    formDesc: 'The online registration form will open on <strong>September 10</strong>. In the meantime, club managers can already download the Excel file to complete and submit at registration time. <strong>One Excel file per team</strong> will be required.',
    prepareLabel: 'Prepare your file',
    downloadBtn: 'Download the registration Excel file',
    downloadNote: 'Submit the completed file when registering online',
  },

  tickets: {
    label: 'Tickets',
    title1: 'Book your',
    title2: 'seats',
    subtitle: 'Secure payment via Assoconnect.',
    soon: 'Ticketing will open on December 11, 2026',
  },

  gallery: {
    label: 'Gallery',
    title1: 'The Crown',
    title2: 'atmosphere',
    subtitle: 'Discover the venue.',
  },

  acces: {
    label: 'Venue',
    title1: 'Getting',
    title2: ' here',
    subtitle: 'The competition takes place at the Centre omnisports universitaire Carole Vergne.',
    addressLabel: 'Address',
    venueName: 'Centre omnisports universitaire Carole Vergne',
    venueAddress: '1 rue Francis Perrin',
    venueCity: '91190 Gif-sur-Yvette',
    venueLink: 'Official Centre omnisports universitaire Carole Vergne website →',
    howToGet: 'How to get here',
    transport: [
      {
        label: 'Metro',
        lines: [
          { name: 'Line 18', detail: "Orsay-Gif" },
        ],
      },
      {
        label: 'Bus',
        lines: [
          { name: 'Line 4609', detail: 'Joliot Curie' },
          { name: 'Line 4606', detail: 'Joliot Curie' },
        ],
      },
      {
        label: 'By car',
        lines: [
          { name: 'Centre omnisports Carole Vergne', detail: '1 rue Francis Perrin, 91190 Gif-sur-Yvette' },
        ],
      },
    ],
  },

  sponsors: {
    label: 'Partners',
    title1: 'They support',
    title2: 'us',
    subtitle: 'They support us and make this event possible.',
    become: 'Become a partner',
    tiers: { gold: 'Gold', silver: 'Silver', bronze: 'Bronze' },
  },

  faq: {
    label: 'FAQ',
    title1: 'Frequently asked',
    title2: 'questions',
    data: [
      {
        category: 'Fees & Registration',
        items: [
          {
            q: 'How many accompanying persons are included in the registration?',
            a: "Teams are entitled to a maximum of two accompanying persons (coaches, managers, volunteers, etc.). Accompanying persons receive a wristband and must arrive at the same time as the team. Teams with more than 2 accompanying persons will need to pay for additional accompanying persons — see the registration fee schedule. Additional accompanying persons are charged at the current rate. Only accompanying persons and athletes are allowed in the warm-up room and changing rooms.\n\nTeams with special needs also receive wristbands for 2 accompanying persons with their registration. Accommodations are available upon request.",
          },
          {
            q: 'What is the fee for substitute athletes?',
            a: 'The fee for substitute athletes is the same as for regular athletes.',
          },
          {
            q: 'Can athletes be added or removed after registration?',
            a: "Adding an athlete: the applicable rate is the one in effect at the date of addition, not the original registration rate — it may therefore be higher. After the registration deadline, an administrative fee of €50 per request applies. A simple name change on the scoresheet is not charged.\n\nRemoving an athlete: no refund will be granted for a reduction in roster after initial registration.",
          },
          {
            q: 'What is a Crossover athlete?',
            a: "A crossover athlete is an athlete who is part of two different teams. They will be charged in full for each team they are registered with.\n\nNo reduced rate, credit, transfer or adjustment will be granted in connection with the participation of a crossover athlete, regardless of context.\n\nAn athlete may participate in a maximum of two routines. Crossovers between Prep and Allstar teams are not permitted. Each team may have a maximum of 2 crossovers. All crossovers must comply with the age rules of the relevant division. Registration is at the coaches' discretion, as scheduling conflicts may occur.",
          },
          {
            q: 'Can we change category after registration?',
            a: "Yes, a category change is possible, but an administrative fee of €200 applies if the request is made after registration closes.\n\nIf you wish to change category, contact us by email as soon as possible. You will receive confirmation of the amount due at the same time as the final schedule.",
          },
          {
            q: 'What payment methods are accepted?',
            a: "Payment methods are:\n• By cheque payable to Crown Cheerleading Events\n• By bank transfer\n\nNo registration will be validated without a 30% deposit. Any cancellation before registration closes entitles you to a 70% refund of the total amount. The remaining 30% (deposit) is retained as a cancellation fee.",
          },
          {
            q: 'When is my registration confirmed?',
            a: "Due to the high number of applications and limited places, your team's pre-registration will be confirmed by email along with the registration invoice.\n\nTo secure your place, the deposit must be paid as soon as possible. Without payment, the team risks losing its place to teams on the waiting list.",
          },
          {
            q: 'What happens in case of non-payment?',
            a: "The team must pay the remaining balance (70% of the total amount) before the end of the current pricing period. Without payment within this deadline, the registration will automatically switch to the next rate.\n\nAny late payment after the deadline results in a 20% surcharge or cancellation of the team's participation, with no possible refund.",
          },
          {
            q: 'What happens if the event is cancelled?',
            a: "Crown Cheerleading Events reserves the right to cancel, postpone or reschedule the competition due to unforeseen circumstances (extreme weather conditions, venue unavailability, technical issues, government restrictions).\n\nIn the event of cancellation or postponement, a credit will be determined based on expenses incurred at the time of cancellation, applicable to a future competition organised by Crown Cheerleading Events. No cash refund will be granted under any circumstances.",
          },
        ],
      },
      {
        category: 'Rules',
        items: [ {
            q: 'Which ruleset is applied?',
            a: "The competition follows the official IASF rules.\n\nhttps://www.iasfworlds.net/cheer/",
          },
          {
            q: 'What are the rules regarding athlete ages?',
            a: "Proof of age may be requested at any time by competition officials.\n\nTo allow clubs to include all their athletes, the organisation tolerates a few age exceptions within reasonable limits. Any request must be made by email and approved prior to the competition.\n\nAny team with age exceptions will not be eligible for Grand Champion awards.",
          },
        {
            q: 'Which scoring system is used?',
            a: "The competition follows the United Scoring System > United Kingdom scoresheets.\n\nhttps://www.unitedscoringpartners.com/",
          }, {
            q: 'What is the routine duration?',
            a: "Prep and Non-tumbling: 2 min 00\nAllstar and University: 2 min 30\n\nTiming begins at the first choreographed movement or first note of music, and ends at the last movement or last note.",
          },
          {
            q: 'What are the music rules?',
            a: "All teams must submit their music to the indicated email address, before the deadline communicated for the competition. The music must comply with the regulations established by the IASF.",
          },{
            q: 'What time must teams arrive?',
            a: "Teams must arrive at least one hour before their warm-up room slot. Coaches are responsible for collecting wristbands upon arrival. Athletes then go through security with spectators — allow sufficient time.\n\nDesignated areas will be available for personal belongings. Crown Cheerleading Events is not responsible for items lost, stolen or damaged during the event.",
          },
          {
            q: 'How are scores and results communicated?',
            a: "All scoresheets are sent by email. The deduction sheet is sent approximately 5 to 10 minutes after the performance. Other scoresheets are sent after the awards ceremony.",
          },
          {
            q: 'How are ties handled?',
            a: "Ties are not broken, except to determine grand champions, in the following order:\n1. The team with the fewest deductions wins\n2. Highest overall score\n3. Highest total technical scores",
          }, {
            q: 'What happens in case of injury?',
            a: "A medical station will be set up near the competition and warm-up area. Each team must have its own first aid kit (strapping, bandages, ice packs, etc.).\n\nOnly competition officials, the team coach or the injured participant may stop a routine. If a new performance is authorised, the routine must be performed in full. An injured athlete may only return to the floor with authorisation from medical staff, the legal guardian and the head coach.",
          },
          {
            q: 'What happens if a routine is stopped?',
            a: "If the interruption is beyond the team's control (equipment issue, technical failure, organisational problem), the team may restart the routine from the point of interruption.\n\nIf the interruption is caused by the team, they must continue or withdraw. Officials will decide whether a new performance is possible.",
          },]
      },
      {
        category: 'Competition',
        items: [
          {
            q: 'Do we need to be affiliated with a federation or have a licence?',
            a: "No. To participate, you do not need to be affiliated with a federation or have licences for your athletes. Crown Cheerleading Events does not require a medical certificate for participants.\n\nHowever, it is the clubs' responsibility to ensure the health of their athletes and their coverage in case of injury to themselves or others.",
          },
          {
            q: 'What is an exhibition team?',
            a: "An exhibition team is a non-competitive team that wishes to experience performing in front of an audience. They are not judged and receive no feedback from the judges. The team receives a banner.\n\nEach athlete receives a participation medal. Each exhibition team will receive photos of their performance. The routine video will also be posted on YouTube.",
          },
         
          {
            q: 'What are the dimensions of the competition floor?',
            a: 'The competition floor is a 14 m × 14 m dynamic floor.',
          },
          
          {
            q: 'Does the competition provide spotters?',
            a: "The competition does not provide spotters. It is the coaches' responsibility to safely present elements requiring a spotter.\n\nTeams may be accompanied by up to 3 spotters on the floor, in appropriate attire distinct from the athletes'. These spotters must hold an athlete or accompanying person accreditation.",
          },
         
          {
            q: 'How does warm-up work?',
            a: "Each team has 10 minutes in the changing room before accessing the warm-up room. They then have 10 minutes on non-dynamic mats, followed by 5 minutes on the dynamic floor. A 2-minute 30-second run-through with music is then scheduled on a non-dynamic mat.",
          },
          {
            q: 'Can an athlete register with both an allstar club and a university team?',
            a: "Yes. An athlete may register with both an allstar club and a university team. The max number of crossover rule does not apply."
          },
          {
            q: 'Can a university team register in an allstar category?',
            a: 'Yes, however they cannot register in university and allstar categories simultaneously. They will be subject to the same rules and judging criteria as allstar teams, will pay the allstar entry fee and will not be eligible for university awards.',
          },
          {
            q: 'How is the Cheer Spirit title determined?',
            a: "The Cheer Spirit title is awarded based on two combined criteria:\n\n• Observation by our volunteers throughout the entire competition, who assess attitude, respect, encouragement towards other teams, and overall sportsmanship.\n\n• Stories posted on social media tagging Crown Cheerleading Events during the day showcasing that Cheer Spirit.\n\nThe title goes to the program that stands out on both counts.",
          },
        ],
      },
      {
        category: 'Spectators & Admission',
        items: [
          {
            q: 'How does spectator admission work?',
            a: "Admission is general — no seat reservation is permitted. Tickets are non-refundable and valid for one person only. Doors will open 30 minutes before the competition begins. Ticket holders must present their ticket in digital or paper format at the entrance.",
          },
          {
            q: 'Which items are prohibited?',
            a: "It is prohibited to bring dangerous items, illegal substances or any item deemed inappropriate. Animals are not permitted, except for properly identified assistance animals.\n\nBottles larger than 1.5 L and bags larger than A4 format are not allowed. Strictly prohibited: weapons, knives, defence sprays, alcohol, glass bottles, flares, air horns, and any noise-making objects (drums, megaphones, trumpets) in the competition area.",
          },
          {
            q: 'Photos and videos',
            a: "Personal photos and videos are permitted, provided they do not obstruct the view of other spectators or disrupt the competition.\n\nThe use of professional equipment (tripods, telephoto lenses, lighting, etc.) is strictly prohibited without prior accreditation.\n\nProfessional photographers and videographers representing Crown Cheerleading Events will be on site to film performances and capture official event photos.\n\nThese images may be used for promotional purposes, including on Crown Cheerleading Events' digital platforms and social media.",
          },
        ],
      },
      {
        category: 'Safety & Conduct',
        items: [
          {
            q: 'What are the conduct rules?',
            a: "All participants are required to demonstrate exemplary sportsmanship towards other competitors, judges, officials and staff.\n\nThe organisation reserves the right to disqualify any team or individual for insulting or assaulting judges or participants, participation of an unregistered person, violation of anti-doping rules, non-compliance with age criteria, or any unsporting behaviour.",
          },
          {
            q: 'Where can athletes change?',
            a: "Athletes are strictly prohibited from changing in the stands or in any area visible to the public. Teams have access to a private changing room before their warm-up slot. As these spaces are not supervised, the organisation cannot be held responsible for any loss or theft.",
          },
          {
            q: 'Are there rules about noise outside?',
            a: "The competition venue is located in a residential area. We ask all athletes, accompanying persons and supporters to be mindful of noise levels outside the building — especially during arrivals, departures and breaks. Please limit shouting, loud music and any excessive noise out of respect for local residents.",
          },
          {
            q: 'Is there a harassment reporting system?',
            a: "The competition is committed to ensuring a safe and respectful environment. An anonymous reporting system for sexual and gender-based violence is in place. The contact details of the designated officer will be communicated to clubs prior to the event. All reports will be handled with the strictest confidentiality.",
          },
        ],
      },
    ],
  },

  contact: {
    label: 'Contact',
    title1: 'Get in',
    title2: 'touch',
    subtitle: 'A question about the competition, a partnership, a registration? Write to us.',
    email: 'contact@crown-cheerleading-events.fr',
    cta: 'Send an email',
  },

  legalNotice: {
    back: 'Back to home',
    title: 'Legal notice',
    updated: 'Last updated',
    updatedDate: 'May 15th, 2026',
    sections: [
      {
        title: '1. Publisher',
        content: 'The Crown Cheerleading Events website is published by:',
        info: [
          { label: 'Association under the 1901 law', value: 'Crown Cheerleading Events' },
          { label: 'Registered office', value: '11 avenue Ledru Rollin 75012 Paris' },
          { label: 'Email', value: 'contact@crown-cheerleading-events.fr' },
          { label: 'SIRET / RNA', value: '102538766 / W751283436' },
        ],
      },
      {
        title: '2. Publication director',
        content: 'The publication director is the legal representative of the Crown Cheerleading Events association.',
      },
      {
        title: '3. Hosting',
        info: [
          { label: 'Host', value: 'Vercel Inc.' },
          { label: 'Address', value: '340 S Lemon Ave #4133 Walnut, CA 91789, USA' },
          { label: 'Website', value: 'vercel.com' },
        ],
      },
      {
        title: '4. Intellectual property',
        content: 'All content on this website (texts, images, logos, visuals) is the exclusive property of Crown Cheerleading Events or its partners. Any reproduction, even partial, is prohibited without prior authorisation.',
      },
      {
        title: '5. Limitation of liability',
        content: 'Crown Cheerleading Events strives to keep the information on this site up to date and accurate. However, the organisation cannot be held responsible for errors or omissions, or for damages resulting from use of the site.',
      },
      {
        title: '6. Applicable law',
        content: 'This website and its legal notice are governed by French law. Any dispute relating to its use shall be subject to the jurisdiction of French courts.',
      },
    ],
  },

  privacyPolicy: {
    back: 'Back to home',
    title: 'Privacy policy',
    updated: 'Last updated',
    sections: [
      {
        title: '1. Data controller',
        content: 'Crown Cheerleading Events is the controller of personal data collected on this site. For any questions, you may contact us via the contact form.',
      },
      {
        title: '2. Data collected',
        content: 'In the context of using this site, we may collect the following data:',
        items: [
          'First and last name (via the contact form)',
          'Email address (via the contact form)',
          'Browsing data (via technical cookies)',
        ],
      },
      {
        title: '3. Purpose of processing',
        content: 'The data collected is used solely to respond to your contact requests and ensure the proper functioning of the site. It is never sold or transferred to third parties.',
      },
      {
        title: '4. Retention period',
        content: 'Data submitted via the contact form is retained for the period necessary to process your request, and for a maximum of 3 years from the last contact.',
      },
      {
        title: '5. Your rights',
        content: 'In accordance with the General Data Protection Regulation (GDPR), you have the following rights:',
        items: [
          'Right of access to your data',
          'Right to rectification',
          'Right to erasure',
          'Right to restriction of processing',
          'Right to object',
        ],
        footer: 'To exercise these rights, contact us via the contact form on the site.',
      },
      {
        title: '6. Cookies',
        content: 'This site uses only strictly necessary technical cookies for the operation of the site. No advertising or tracking cookies are used.',
      },
      {
        title: '7. Assoconnect ticketing',
        content: "Ticket purchases are managed by Assoconnect, subject to its own privacy policy. We invite you to consult it on the Assoconnect website.",
      },
    ],
  },

  notFound: {
    title: '404',
    message: 'Oops, the page you are looking for does not exist.',
    cta: 'Back to home',
  },

  footer: {
    tagline: 'The competition that crowns champions.',
    navigation: 'Navigation',
    contact: 'Contact',
    contactText: 'contact@crown-cheerleading-events.fr',
    rights: 'All rights reserved.',
    legal: 'Legal notice',
    privacy: 'Privacy policy',
  },
};

export default en;
