// Homepage copy for all locales. Strings may contain **bold** markers,
// rendered by the renderBold() helper in app/[locale]/page.tsx.

export type HomeContent = {
  hero: {
    badge: string;
    h1a: string;
    h1b: string;
    sub: string;
    bullets: string[];
    ctaImplant: string;
    ctaDigital: string;
    trust: string;
    cardLab: string;
    cardLabLabel: string;
    cardSnapTag: string;
    cardSnapTitle: string;
    cardSnapSub: string;
    cardPriceLabel: string;
    cardPriceSuffix: string;
  };
  stats: { stat: string; label: string }[];
  problem: {
    badge: string;
    h2a: string;
    h2b: string;
    p1: string;
    p2: string;
    quote: string;
    quoteAttr: string;
    cards: { title: string; body: string }[];
    link: string;
    pricingLink: string;
  };
  story: {
    badge: string;
    h2a: string;
    h2b: string;
    paras: string[];
    flagTitle: string;
    flagSub: string;
    flagNote: string;
    photoTitle: string;
    link: string;
  };
  services: {
    badge: string;
    h2a: string;
    h2b: string;
    intro: string;
    tiles: { title: string; body: string; badge: string }[];
    learnMore: string;
    viewAll: string;
  };
  reviews: {
    badge: string;
    h2a: string;
    h2b: string;
    items: { quote: string; name: string; detail: string }[];
  };
  cta: {
    badge: string;
    h2a: string;
    h2b: string;
    p: string;
    book: string;
    address: string;
  };
};

const en: HomeContent = {
  hero: {
    badge: "Toronto's Implant Denture Specialist · 25 Years",
    h1a: 'Your Denture Should',
    h1b: 'Stay Where It Belongs.',
    sub: 'Snap-in implant overdentures that never move — and precision digital dentures, full or partial, milled in our own North York lab. Designed by Damien DD. No outsourcing. No referrals out. No compromises.',
    bullets: [
      'Implant overdentures — $5,250 flat per arch, no adhesive',
      'Digital full & partial dentures — precision-milled in-house',
      'Impression-free 3D intraoral scanning',
      'CNC milled in our own on-site lab — zero outsourcing',
    ],
    ctaImplant: 'See Implant Options',
    ctaDigital: 'Digital Dentures',
    trust: 'Trusted by 5,000+ Toronto patients',
    cardLab: '100%',
    cardLabLabel: 'In-House Lab',
    cardSnapTag: 'Snap-In Secure',
    cardSnapTitle: 'Zero Adhesive',
    cardSnapSub: 'Implant-retained · Upper & Lower',
    cardPriceLabel: 'Implant Overdenture',
    cardPriceSuffix: 'flat / arch',
  },
  stats: [
    { stat: '$5,250', label: 'Implant Overdenture — Flat / Arch' },
    { stat: '25+', label: 'Years of Implant Denture Experience' },
    { stat: '100%', label: 'Impression-Free — No Goop Ever' },
    { stat: 'In-House', label: 'CNC Milling — Never Outsourced' },
  ],
  problem: {
    badge: 'Implant-Retained Overdentures',
    h2a: 'Done fighting',
    h2b: 'your own denture?',
    p1: "If you're using adhesive every day, avoiding certain foods, or just quietly dreading every meal — that's not life with dentures, that's life despite them.",
    p2: 'Implant-retained overdentures snap securely onto 3–4 implants. They don\'t shift. They don\'t float. They don\'t click. Patients tell us the same thing within a week: **"I forget I\'m wearing them."**',
    quote: '"I forgot I was wearing dentures."',
    quoteAttr: '— Dentures Direct patient',
    cards: [
      { title: 'No Adhesive. Ever.', body: 'Snaps directly onto your implants. The attachment holds — not glue, not hope.' },
      { title: 'Eat Without Limits', body: 'Steak, corn, crusty bread — the foods you stopped ordering are back on the menu.' },
      { title: 'In-House Lab', body: 'Designed by Damien DD. Milled by Luisa, RDT Candidate. No outsourcing. No delays. Direct quality control.' },
      { title: '$5,250 Flat Per Arch', body: 'No taxes. No surprises. No "and up." Both arches together: $10,000 — save $500.' },
    ],
    link: 'See how implant-retained dentures work',
    pricingLink: 'See exact pricing',
  },
  story: {
    badge: 'Why I Changed Everything',
    h2a: 'The call I almost',
    h2b: "didn't take.",
    paras: [
      "It was December 23rd. I had told my receptionist: **no calls, no new patients until the New Year.** I was burnt out. Seven-day work weeks. A practice that had nearly quadrupled in revenue — and somehow I'd never made less.",
      'Then the phone rang. A woman in a panic. Her 96-year-old mother had lost what she believed was an implant denture. She was terrified her mother would starve.',
      'I took the case. Christmas Eve: scans, bite registration. Christmas Day: the mill running in my lab. Boxing Day: delivery. **Flat rate per arch. Nine hours. Three days.**',
      "Standing there, I realized something uncomfortable: this was exactly what I'd always wanted to do — and I'd spent years not doing it. High volume. Endless conventional cases. Never the implant work I'd trained for.",
      'That morning I made a promise to myself. **This clinic would become what it was always supposed to be:** a specialist implant denture practice. Fewer patients. Higher standards. Work that actually matters.',
    ],
    flagTitle: 'Flat Rate',
    flagSub: 'per arch — Christmas morning.',
    flagNote: 'The moment everything changed.',
    photoTitle: 'Founder & Lead Denturist · 25 Years',
    link: "Read Damien's full story",
  },
  services: {
    badge: 'Our Specialties',
    h2a: 'Precision work.',
    h2b: 'Built to last.',
    intro: 'Every overdenture I build — I design it personally. Luisa, our RDT Candidate, fabricates it in our lab down the hall. Nobody ships anything out. Nobody waits weeks for a third party.',
    tiles: [
      { title: 'Implant-Retained Dentures', body: "Snap-in upper and lower overdentures anchored to 3–4 implants. The permanent solution to a denture that won't stay put.", badge: 'Most Popular' },
      { title: 'Digital Dentures', body: 'No messy impressions. 3D intraoral scan, CAD design, CNC milled on-site. Mathematically precise every time.', badge: 'Impression-Free' },
      { title: 'Emergency Repairs', body: "Broken clasp, cracked plate, or a relining that's long overdue — same-day repairs done in our on-site lab.", badge: 'Same Day' },
    ],
    learnMore: 'Learn more',
    viewAll: 'View all services',
  },
  reviews: {
    badge: 'Patient Stories',
    h2a: 'Real patients.',
    h2b: ' Real results.',
    items: [
      { quote: 'I had been struggling with my lower denture for 15 years. Within a week of getting my implant overdenture at Dentures Direct, I forgot I was wearing it. I cried at my first meal.', name: 'Margaret T.', detail: 'Lower implant overdenture, North York' },
      { quote: "Damien was completely upfront about pricing and process from day one. No surprises, no upselling. Just honest work. The digital fit is better than anything I've had in 20 years of dentures.", name: 'Robert K.', detail: 'Digital full dentures, Etobicoke' },
      { quote: 'I already had implants from another clinic and was told it would be complicated to get overdentures made elsewhere. Damien assessed me in one appointment and had them done in 3 weeks. Phenomenal.', name: 'Sandra M.', detail: 'Implant overdenture conversion, GTA' },
    ],
  },
  cta: {
    badge: 'Accepting New Patients',
    h2a: 'Ready to stop fighting',
    h2b: 'your own denture?',
    p: "Free consultation. Honest assessment. Clear pricing. No hard sell — if you're not a candidate, we'll tell you that too.",
    book: 'Book Free Consultation',
    address: '2833 Weston Road, North York · Mon–Thu 8am–6pm',
  },
};

const fr: HomeContent = {
  hero: {
    badge: 'Le spécialiste des prothèses sur implants à Toronto · 25 ans',
    h1a: 'Votre prothèse devrait',
    h1b: 'rester bien en place.',
    sub: "Des prothèses sur implants à encliquetage qui ne bougent jamais — et des prothèses numériques de précision, complètes ou partielles, usinées dans notre propre laboratoire de North York. Conçues par Damien DD. Aucune sous-traitance. Aucun compromis.",
    bullets: [
      'Prothèses sur implants — 5 250 $ prix fixe par arcade, sans adhésif',
      'Prothèses numériques complètes et partielles — usinées avec précision sur place',
      'Numérisation intra-orale 3D, sans pâte à empreinte',
      'Usinage CNC dans notre laboratoire sur place — zéro sous-traitance',
    ],
    ctaImplant: 'Options sur implants',
    ctaDigital: 'Prothèses numériques',
    trust: 'La confiance de plus de 5 000 patients à Toronto',
    cardLab: '100 %',
    cardLabLabel: 'Laboratoire sur place',
    cardSnapTag: 'Fixation à encliquetage',
    cardSnapTitle: 'Zéro adhésif',
    cardSnapSub: 'Sur implants · Haut et bas',
    cardPriceLabel: 'Prothèse sur implants',
    cardPriceSuffix: 'fixe / arcade',
  },
  stats: [
    { stat: '5 250 $', label: 'Prothèse sur implants — prix fixe / arcade' },
    { stat: '25+', label: "Ans d'expérience en prothèses sur implants" },
    { stat: '100 %', label: 'Sans empreinte — jamais de pâte' },
    { stat: 'Sur place', label: 'Usinage CNC — jamais sous-traité' },
  ],
  problem: {
    badge: 'Prothèses sur implants',
    h2a: 'Fatigué de vous battre',
    h2b: 'contre votre prothèse?',
    p1: "Si vous utilisez de l'adhésif tous les jours, évitez certains aliments ou redoutez chaque repas en silence — ce n'est pas vivre avec des prothèses, c'est vivre malgré elles.",
    p2: "Les prothèses sur implants s'encliquettent solidement sur 3 ou 4 implants. Elles ne bougent pas. Elles ne flottent pas. Elles ne claquent pas. Nos patients nous disent tous la même chose en moins d'une semaine : **« J'oublie que je les porte. »**",
    quote: "« J'avais oublié que je portais des prothèses. »",
    quoteAttr: '— Patiente de Dentures Direct',
    cards: [
      { title: "Sans adhésif. Jamais.", body: "S'encliquette directement sur vos implants. C'est l'attache qui tient — pas la colle, pas l'espoir." },
      { title: 'Mangez sans limites', body: 'Steak, maïs, pain croûté — les aliments que vous aviez rayés du menu sont de retour.' },
      { title: 'Laboratoire sur place', body: 'Conçue par Damien DD. Usinée par Luisa, candidate TDA. Aucune sous-traitance. Aucun délai. Contrôle direct de la qualité.' },
      { title: '5 250 $ fixe par arcade', body: 'Pas de taxes. Pas de surprises. Pas de « et plus ». Les deux arcades ensemble : 10 000 $ — économisez 500 $.' },
    ],
    link: 'Découvrez comment fonctionnent les prothèses sur implants',
    pricingLink: 'Voir les prix exacts',
  },
  story: {
    badge: "Pourquoi j'ai tout changé",
    h2a: "L'appel que j'ai failli",
    h2b: 'ne pas prendre.',
    paras: [
      "C'était le 23 décembre. J'avais dit à ma réceptionniste : **pas d'appels, pas de nouveaux patients avant la nouvelle année.** J'étais épuisé. Des semaines de sept jours. Un cabinet dont le chiffre d'affaires avait presque quadruplé — et pourtant, je n'avais jamais si peu gagné.",
      "Puis le téléphone a sonné. Une femme paniquée. Sa mère de 96 ans avait perdu ce qu'elle croyait être une prothèse sur implants. Elle craignait que sa mère ne puisse plus se nourrir.",
      "J'ai pris le cas. Veille de Noël : numérisations, enregistrement de l'occlusion. Jour de Noël : la fraiseuse tournait dans mon laboratoire. Le 26 : livraison. **Prix fixe par arcade. Neuf heures. Trois jours.**",
      "Debout dans mon laboratoire, j'ai compris quelque chose d'inconfortable : c'était exactement ce que j'avais toujours voulu faire — et j'avais passé des années à ne pas le faire. Du volume. Des cas conventionnels sans fin. Jamais le travail sur implants pour lequel je m'étais formé.",
      "Ce matin-là, je me suis fait une promesse. **Cette clinique deviendrait ce qu'elle aurait toujours dû être :** un cabinet spécialisé en prothèses sur implants. Moins de patients. Des normes plus élevées. Un travail qui compte vraiment.",
    ],
    flagTitle: 'Prix fixe',
    flagSub: 'par arcade — le matin de Noël.',
    flagNote: 'Le moment où tout a changé.',
    photoTitle: 'Fondateur et denturologiste en chef · 25 ans',
    link: "Lire l'histoire complète de Damien",
  },
  services: {
    badge: 'Nos spécialités',
    h2a: 'Un travail de précision.',
    h2b: 'Fait pour durer.',
    intro: "Chaque prothèse sur implants que je fabrique, je la conçois personnellement. Luisa, notre candidate TDA, la fabrique dans notre laboratoire au bout du couloir. Rien n'est envoyé à l'extérieur. Personne n'attend des semaines après un tiers.",
    tiles: [
      { title: 'Prothèses sur implants', body: "Prothèses à encliquetage, haut et bas, ancrées sur 3 ou 4 implants. La solution permanente à une prothèse qui ne tient pas en place.", badge: 'La plus demandée' },
      { title: 'Prothèses numériques', body: "Pas d'empreintes salissantes. Numérisation intra-orale 3D, conception CAO, usinage CNC sur place. Une précision mathématique, à chaque fois.", badge: 'Sans empreinte' },
      { title: "Réparations d'urgence", body: 'Crochet cassé, base fissurée ou regarnissage attendu depuis trop longtemps — réparations le jour même dans notre laboratoire sur place.', badge: 'Le jour même' },
    ],
    learnMore: 'En savoir plus',
    viewAll: 'Voir tous les services',
  },
  reviews: {
    badge: 'Témoignages de patients',
    h2a: 'De vrais patients.',
    h2b: ' De vrais résultats.',
    items: [
      { quote: "Je me battais avec ma prothèse inférieure depuis 15 ans. Une semaine après avoir reçu ma prothèse sur implants chez Dentures Direct, j'oubliais que je la portais. J'ai pleuré à mon premier repas.", name: 'Margaret T.', detail: 'Prothèse inférieure sur implants, North York' },
      { quote: "Damien a été complètement transparent sur les prix et le processus dès le premier jour. Pas de surprises, pas de vente forcée. Juste du travail honnête. L'ajustement numérique est meilleur que tout ce que j'ai eu en 20 ans de prothèses.", name: 'Robert K.', detail: 'Prothèses complètes numériques, Etobicoke' },
      { quote: "J'avais déjà des implants posés dans une autre clinique et on m'avait dit qu'il serait compliqué de faire fabriquer des prothèses ailleurs. Damien m'a évalué en un seul rendez-vous et les a réalisées en 3 semaines. Phénoménal.", name: 'Sandra M.', detail: 'Conversion de prothèse sur implants, Grand Toronto' },
    ],
  },
  cta: {
    badge: 'Nous acceptons de nouveaux patients',
    h2a: 'Prêt à cesser de vous battre',
    h2b: 'contre votre prothèse?',
    p: "Consultation gratuite. Évaluation honnête. Prix clairs. Aucune pression — si vous n'êtes pas candidat, nous vous le dirons aussi.",
    book: 'Réserver une consultation gratuite',
    address: '2833 Weston Road, North York · Lun–jeu 8 h à 18 h',
  },
};

const es: HomeContent = {
  hero: {
    badge: 'Especialistas en dentaduras sobre implantes en Toronto · 25 años',
    h1a: 'Su dentadura debería',
    h1b: 'quedarse en su lugar.',
    sub: 'Sobredentaduras sobre implantes a presión que nunca se mueven — y dentaduras digitales de precisión, completas o parciales, fresadas en nuestro propio laboratorio de North York. Diseñadas por Damien DD. Sin subcontratación. Sin concesiones.',
    bullets: [
      'Sobredentaduras sobre implantes — $5,250 precio fijo por arcada, sin adhesivo',
      'Dentaduras digitales completas y parciales — fresadas con precisión en el propio laboratorio',
      'Escaneo intraoral 3D sin impresiones',
      'Fresado CNC en nuestro laboratorio propio — cero subcontratación',
    ],
    ctaImplant: 'Ver opciones con implantes',
    ctaDigital: 'Dentaduras digitales',
    trust: 'Más de 5,000 pacientes en Toronto confían en nosotros',
    cardLab: '100%',
    cardLabLabel: 'Laboratorio propio',
    cardSnapTag: 'Fijación a presión',
    cardSnapTitle: 'Cero adhesivo',
    cardSnapSub: 'Sobre implantes · Superior e inferior',
    cardPriceLabel: 'Sobredentadura sobre implantes',
    cardPriceSuffix: 'fijo / arcada',
  },
  stats: [
    { stat: '$5,250', label: 'Sobredentadura — precio fijo / arcada' },
    { stat: '25+', label: 'Años de experiencia en dentaduras sobre implantes' },
    { stat: '100%', label: 'Sin impresiones — nunca más masilla' },
    { stat: 'Propio', label: 'Fresado CNC — nunca subcontratado' },
  ],
  problem: {
    badge: 'Sobredentaduras sobre implantes',
    h2a: '¿Cansado de pelear',
    h2b: 'con su propia dentadura?',
    p1: 'Si usa adhesivo todos los días, evita ciertos alimentos o teme en silencio cada comida — eso no es vivir con dentadura, es vivir a pesar de ella.',
    p2: 'Las sobredentaduras sobre implantes se fijan a presión sobre 3 o 4 implantes. No se mueven. No flotan. No hacen ruido. Los pacientes nos dicen lo mismo en menos de una semana: **«Se me olvida que la llevo puesta.»**',
    quote: '«Se me olvidó que llevaba dentadura.»',
    quoteAttr: '— Paciente de Dentures Direct',
    cards: [
      { title: 'Sin adhesivo. Nunca.', body: 'Se fija directamente a sus implantes. Lo que sujeta es el anclaje — no el pegamento, no la esperanza.' },
      { title: 'Coma sin límites', body: 'Carne, elote, pan crujiente — los alimentos que dejó de pedir vuelven al menú.' },
      { title: 'Laboratorio propio', body: 'Diseñada por Damien DD. Fresada por Luisa, candidata a RDT. Sin subcontratación. Sin demoras. Control de calidad directo.' },
      { title: '$5,250 fijo por arcada', body: 'Sin impuestos. Sin sorpresas. Sin «desde». Las dos arcadas juntas: $10,000 — ahorre $500.' },
    ],
    link: 'Vea cómo funcionan las dentaduras sobre implantes',
    pricingLink: 'Ver precios exactos',
  },
  story: {
    badge: 'Por qué lo cambié todo',
    h2a: 'La llamada que casi',
    h2b: 'no contesto.',
    paras: [
      'Era el 23 de diciembre. Le había dicho a mi recepcionista: **nada de llamadas ni pacientes nuevos hasta el Año Nuevo.** Estaba agotado. Semanas de siete días. Una clínica que casi había cuadruplicado sus ingresos — y de algún modo yo nunca había ganado menos.',
      'Entonces sonó el teléfono. Una mujer en pánico. Su madre de 96 años había perdido lo que creía era una dentadura sobre implantes. Temía que su madre no pudiera alimentarse.',
      'Acepté el caso. Nochebuena: escaneos y registro de mordida. Día de Navidad: la fresadora funcionando en mi laboratorio. El 26: entrega. **Precio fijo por arcada. Nueve horas. Tres días.**',
      'Allí de pie, me di cuenta de algo incómodo: esto era exactamente lo que siempre había querido hacer — y llevaba años sin hacerlo. Alto volumen. Casos convencionales sin fin. Nunca el trabajo con implantes para el que me había formado.',
      'Esa mañana me hice una promesa. **Esta clínica se convertiría en lo que siempre debió ser:** una práctica especializada en dentaduras sobre implantes. Menos pacientes. Estándares más altos. Trabajo que de verdad importa.',
    ],
    flagTitle: 'Precio fijo',
    flagSub: 'por arcada — la mañana de Navidad.',
    flagNote: 'El momento en que todo cambió.',
    photoTitle: 'Fundador y denturista principal · 25 años',
    link: 'Lea la historia completa de Damien',
  },
  services: {
    badge: 'Nuestras especialidades',
    h2a: 'Trabajo de precisión.',
    h2b: 'Hecho para durar.',
    intro: 'Cada sobredentadura que fabrico, la diseño personalmente. Luisa, nuestra candidata a RDT, la fabrica en nuestro laboratorio al final del pasillo. Nadie envía nada fuera. Nadie espera semanas por un tercero.',
    tiles: [
      { title: 'Dentaduras sobre implantes', body: 'Sobredentaduras a presión, superiores e inferiores, ancladas a 3 o 4 implantes. La solución permanente a una dentadura que no se queda en su sitio.', badge: 'La más solicitada' },
      { title: 'Dentaduras digitales', body: 'Sin impresiones incómodas. Escaneo intraoral 3D, diseño CAD, fresado CNC en el propio laboratorio. Precisión matemática, siempre.', badge: 'Sin impresiones' },
      { title: 'Reparaciones urgentes', body: 'Gancho roto, base agrietada o un rebase pendiente desde hace tiempo — reparaciones el mismo día en nuestro laboratorio.', badge: 'El mismo día' },
    ],
    learnMore: 'Más información',
    viewAll: 'Ver todos los servicios',
  },
  reviews: {
    badge: 'Historias de pacientes',
    h2a: 'Pacientes reales.',
    h2b: ' Resultados reales.',
    items: [
      { quote: 'Luché con mi dentadura inferior durante 15 años. A la semana de recibir mi sobredentadura sobre implantes en Dentures Direct, se me olvidaba que la llevaba. Lloré en mi primera comida.', name: 'Margaret T.', detail: 'Sobredentadura inferior sobre implantes, North York' },
      { quote: 'Damien fue completamente transparente con los precios y el proceso desde el primer día. Sin sorpresas ni ventas forzadas. Solo trabajo honesto. El ajuste digital es mejor que todo lo que tuve en 20 años con dentaduras.', name: 'Robert K.', detail: 'Dentaduras completas digitales, Etobicoke' },
      { quote: 'Ya tenía implantes de otra clínica y me dijeron que sería complicado hacerme sobredentaduras en otro lugar. Damien me evaluó en una sola cita y las tuvo listas en 3 semanas. Fenomenal.', name: 'Sandra M.', detail: 'Conversión de sobredentadura, área de Toronto' },
    ],
  },
  cta: {
    badge: 'Aceptamos pacientes nuevos',
    h2a: '¿Listo para dejar de pelear',
    h2b: 'con su propia dentadura?',
    p: 'Consulta gratuita. Evaluación honesta. Precios claros. Sin presión — si no es candidato, también se lo diremos.',
    book: 'Reservar consulta gratuita',
    address: '2833 Weston Road, North York · Lun–jue 8am–6pm',
  },
};

const it: HomeContent = {
  hero: {
    badge: 'Lo specialista delle protesi su impianti a Toronto · 25 anni',
    h1a: 'La sua protesi dovrebbe',
    h1b: 'restare al suo posto.',
    sub: 'Overdenture su impianti ad aggancio che non si muovono mai — e protesi digitali di precisione, totali o parziali, fresate nel nostro laboratorio di North York. Progettate da Damien DD. Nessun laboratorio esterno. Nessun compromesso.',
    bullets: [
      'Overdenture su impianti — 5.250 $ prezzo fisso per arcata, senza adesivo',
      'Protesi digitali totali e parziali — fresate con precisione in sede',
      'Scansione intraorale 3D senza impronte',
      'Fresatura CNC nel nostro laboratorio interno — zero esternalizzazione',
    ],
    ctaImplant: 'Opzioni su impianti',
    ctaDigital: 'Protesi digitali',
    trust: 'La fiducia di oltre 5.000 pazienti a Toronto',
    cardLab: '100%',
    cardLabLabel: 'Laboratorio interno',
    cardSnapTag: 'Aggancio sicuro',
    cardSnapTitle: 'Zero adesivo',
    cardSnapSub: 'Su impianti · Superiore e inferiore',
    cardPriceLabel: 'Overdenture su impianti',
    cardPriceSuffix: 'fisso / arcata',
  },
  stats: [
    { stat: '5.250 $', label: 'Overdenture — prezzo fisso / arcata' },
    { stat: '25+', label: 'Anni di esperienza in protesi su impianti' },
    { stat: '100%', label: 'Senza impronte — mai più paste' },
    { stat: 'In sede', label: 'Fresatura CNC — mai esternalizzata' },
  ],
  problem: {
    badge: 'Overdenture su impianti',
    h2a: 'Stanco di lottare',
    h2b: 'con la sua dentiera?',
    p1: "Se usa l'adesivo ogni giorno, evita certi cibi o teme in silenzio ogni pasto — quella non è vita con la dentiera, è vita nonostante la dentiera.",
    p2: "Le overdenture su impianti si agganciano saldamente a 3 o 4 impianti. Non si spostano. Non ballano. Non fanno rumore. I pazienti ci dicono tutti la stessa cosa entro una settimana: **«Mi dimentico di portarla.»**",
    quote: '«Mi ero dimenticata di portare la dentiera.»',
    quoteAttr: '— Paziente di Dentures Direct',
    cards: [
      { title: 'Niente adesivo. Mai.', body: "Si aggancia direttamente ai suoi impianti. A tenere è l'attacco — non la colla, non la speranza." },
      { title: 'Mangi senza limiti', body: 'Bistecca, mais, pane croccante — i cibi che aveva smesso di ordinare tornano nel menù.' },
      { title: 'Laboratorio interno', body: 'Progettata da Damien DD. Fresata da Luisa, candidata RDT. Nessuna esternalizzazione. Nessun ritardo. Controllo di qualità diretto.' },
      { title: '5.250 $ fisso per arcata', body: 'Niente tasse. Niente sorprese. Niente «a partire da». Entrambe le arcate insieme: 10.000 $ — risparmia 500 $.' },
    ],
    link: 'Scopra come funzionano le protesi su impianti',
    pricingLink: 'Vedi i prezzi esatti',
  },
  story: {
    badge: 'Perché ho cambiato tutto',
    h2a: 'La chiamata che stavo',
    h2b: 'per non prendere.',
    paras: [
      'Era il 23 dicembre. Avevo detto alla mia receptionist: **niente chiamate, niente nuovi pazienti fino al nuovo anno.** Ero esaurito. Settimane di sette giorni. Uno studio che aveva quasi quadruplicato il fatturato — eppure non avevo mai guadagnato così poco.',
      'Poi il telefono squillò. Una donna nel panico. Sua madre di 96 anni aveva perso quella che credeva essere una protesi su impianti. Temeva che sua madre non potesse più mangiare.',
      'Presi il caso. Vigilia di Natale: scansioni e registrazione del morso. Giorno di Natale: la fresatrice in funzione nel mio laboratorio. Santo Stefano: consegna. **Prezzo fisso per arcata. Nove ore. Tre giorni.**',
      "Lì in piedi, capii qualcosa di scomodo: era esattamente ciò che avevo sempre voluto fare — e avevo passato anni a non farlo. Grandi volumi. Casi convenzionali senza fine. Mai il lavoro su impianti per cui mi ero formato.",
      'Quella mattina mi feci una promessa. **Questa clinica sarebbe diventata ciò che avrebbe sempre dovuto essere:** uno studio specializzato in protesi su impianti. Meno pazienti. Standard più alti. Un lavoro che conta davvero.',
    ],
    flagTitle: 'Prezzo fisso',
    flagSub: 'per arcata — la mattina di Natale.',
    flagNote: 'Il momento in cui tutto è cambiato.',
    photoTitle: 'Fondatore e denturista capo · 25 anni',
    link: 'Leggi la storia completa di Damien',
  },
  services: {
    badge: 'Le nostre specialità',
    h2a: 'Lavoro di precisione.',
    h2b: 'Fatto per durare.',
    intro: 'Ogni overdenture che realizzo, la progetto personalmente. Luisa, la nostra candidata RDT, la fabbrica nel laboratorio in fondo al corridoio. Nessuno spedisce nulla fuori. Nessuno aspetta settimane per un terzo.',
    tiles: [
      { title: 'Protesi su impianti', body: 'Overdenture ad aggancio, superiori e inferiori, ancorate a 3 o 4 impianti. La soluzione permanente a una dentiera che non sta ferma.', badge: 'La più richiesta' },
      { title: 'Protesi digitali', body: 'Niente impronte fastidiose. Scansione intraorale 3D, progettazione CAD, fresatura CNC in sede. Precisione matematica, ogni volta.', badge: 'Senza impronte' },
      { title: "Riparazioni d'urgenza", body: 'Gancio rotto, base incrinata o una ribasatura attesa da troppo tempo — riparazioni in giornata nel nostro laboratorio.', badge: 'In giornata' },
    ],
    learnMore: 'Scopri di più',
    viewAll: 'Vedi tutti i servizi',
  },
  reviews: {
    badge: 'Storie di pazienti',
    h2a: 'Pazienti veri.',
    h2b: ' Risultati veri.',
    items: [
      { quote: 'Ho lottato con la mia protesi inferiore per 15 anni. Una settimana dopo aver ricevuto la mia overdenture su impianti da Dentures Direct, mi dimenticavo di portarla. Ho pianto al mio primo pasto.', name: 'Margaret T.', detail: 'Overdenture inferiore su impianti, North York' },
      { quote: 'Damien è stato completamente trasparente su prezzi e processo fin dal primo giorno. Nessuna sorpresa, nessuna vendita forzata. Solo lavoro onesto. La precisione digitale è migliore di qualsiasi cosa abbia avuto in 20 anni di dentiere.', name: 'Robert K.', detail: 'Protesi totali digitali, Etobicoke' },
      { quote: 'Avevo già impianti messi in un\'altra clinica e mi avevano detto che sarebbe stato complicato far fare le overdenture altrove. Damien mi ha valutato in un solo appuntamento e le ha completate in 3 settimane. Fenomenale.', name: 'Sandra M.', detail: 'Conversione di overdenture, area di Toronto' },
    ],
  },
  cta: {
    badge: 'Accettiamo nuovi pazienti',
    h2a: 'Pronto a smettere di lottare',
    h2b: 'con la sua dentiera?',
    p: 'Consulenza gratuita. Valutazione onesta. Prezzi chiari. Nessuna pressione — se non è un candidato, glielo diremo.',
    book: 'Prenota una consulenza gratuita',
    address: '2833 Weston Road, North York · Lun–gio 8–18',
  },
};

const vi: HomeContent = {
  hero: {
    badge: 'Chuyên gia hàm giả trên implant tại Toronto · 25 năm',
    h1a: 'Hàm giả của bạn phải',
    h1b: 'nằm yên đúng chỗ.',
    sub: 'Hàm giả bấm khớp trên implant không bao giờ xê dịch — cùng hàm giả kỹ thuật số chính xác, toàn phần hoặc bán phần, phay tại phòng lab riêng của chúng tôi ở North York. Do Damien DD thiết kế. Không thuê ngoài. Không thỏa hiệp.',
    bullets: [
      'Hàm giả trên implant — 5.250 $ giá cố định mỗi hàm, không cần keo dán',
      'Hàm giả kỹ thuật số toàn phần và bán phần — phay chính xác tại chỗ',
      'Quét 3D trong miệng, không cần lấy dấu',
      'Phay CNC tại phòng lab riêng — không thuê ngoài',
    ],
    ctaImplant: 'Xem giải pháp implant',
    ctaDigital: 'Hàm giả kỹ thuật số',
    trust: 'Hơn 5.000 bệnh nhân Toronto tin tưởng',
    cardLab: '100%',
    cardLabLabel: 'Phòng lab tại chỗ',
    cardSnapTag: 'Bấm khớp chắc chắn',
    cardSnapTitle: 'Không keo dán',
    cardSnapSub: 'Trên implant · Hàm trên và dưới',
    cardPriceLabel: 'Hàm giả trên implant',
    cardPriceSuffix: 'cố định / hàm',
  },
  stats: [
    { stat: '5.250 $', label: 'Hàm giả trên implant — giá cố định / hàm' },
    { stat: '25+', label: 'Năm kinh nghiệm hàm giả trên implant' },
    { stat: '100%', label: 'Không lấy dấu — không bột dấu' },
    { stat: 'Tại chỗ', label: 'Phay CNC — không bao giờ thuê ngoài' },
  ],
  problem: {
    badge: 'Hàm giả tháo lắp trên implant',
    h2a: 'Mệt mỏi vì phải vật lộn',
    h2b: 'với chính hàm giả của mình?',
    p1: 'Nếu bạn phải dùng keo dán mỗi ngày, tránh một số món ăn, hoặc âm thầm lo sợ mỗi bữa cơm — đó không phải là sống cùng hàm giả, mà là sống bất chấp nó.',
    p2: 'Hàm giả trên implant bấm khớp chắc chắn vào 3–4 trụ implant. Không xê dịch. Không bập bênh. Không phát tiếng kêu. Chỉ trong một tuần, bệnh nhân đều nói với chúng tôi cùng một câu: **“Tôi quên mất là mình đang đeo hàm giả.”**',
    quote: '“Tôi đã quên mất mình đang đeo hàm giả.”',
    quoteAttr: '— Bệnh nhân của Dentures Direct',
    cards: [
      { title: 'Không keo dán. Không bao giờ.', body: 'Bấm thẳng vào trụ implant. Khớp nối giữ chặt — không phải keo, không phải may rủi.' },
      { title: 'Ăn uống thoải mái', body: 'Bít tết, bắp, bánh mì giòn — những món bạn từng phải kiêng nay trở lại bàn ăn.' },
      { title: 'Phòng lab tại chỗ', body: 'Damien DD thiết kế. Luisa, ứng viên RDT, chế tác. Không thuê ngoài. Không chậm trễ. Kiểm soát chất lượng trực tiếp.' },
      { title: '5.250 $ cố định mỗi hàm', body: 'Không thuế. Không phát sinh. Không “từ … trở lên”. Cả hai hàm: 10.000 $ — tiết kiệm 500 $.' },
    ],
    link: 'Tìm hiểu hàm giả trên implant hoạt động ra sao',
    pricingLink: 'Xem bảng giá chi tiết',
  },
  story: {
    badge: 'Vì sao tôi thay đổi tất cả',
    h2a: 'Cuộc gọi mà tôi suýt',
    h2b: 'không bắt máy.',
    paras: [
      'Hôm đó là ngày 23 tháng 12. Tôi đã dặn lễ tân: **không nhận cuộc gọi, không nhận bệnh nhân mới cho đến năm mới.** Tôi kiệt sức. Làm việc bảy ngày mỗi tuần. Phòng khám có doanh thu tăng gần gấp bốn — vậy mà thu nhập của tôi chưa bao giờ thấp đến thế.',
      'Rồi điện thoại reo. Một người phụ nữ hoảng hốt. Mẹ bà, 96 tuổi, vừa làm mất chiếc hàm giả mà bà tin là hàm trên implant. Bà sợ mẹ mình sẽ không ăn uống được.',
      'Tôi nhận ca đó. Đêm Giáng Sinh: quét răng, ghi khớp cắn. Ngày Giáng Sinh: máy phay chạy trong phòng lab của tôi. Ngày 26: giao hàm. **Giá cố định mỗi hàm. Chín giờ làm việc. Ba ngày.**',
      'Đứng đó, tôi nhận ra một điều không dễ chịu: đây chính là công việc tôi luôn muốn làm — vậy mà bao năm qua tôi đã không làm. Chạy theo số lượng. Những ca thông thường bất tận. Chưa bao giờ là công việc implant mà tôi được đào tạo.',
      'Sáng hôm đó tôi tự hứa với mình. **Phòng khám này sẽ trở thành đúng như nó đáng lẽ phải là:** một cơ sở chuyên sâu về hàm giả trên implant. Ít bệnh nhân hơn. Tiêu chuẩn cao hơn. Công việc thực sự có ý nghĩa.',
    ],
    flagTitle: 'Giá cố định',
    flagSub: 'mỗi hàm — sáng ngày Giáng Sinh.',
    flagNote: 'Khoảnh khắc mọi thứ thay đổi.',
    photoTitle: 'Nhà sáng lập & Chuyên viên phục hình chính · 25 năm',
    link: 'Đọc trọn câu chuyện của Damien',
  },
  services: {
    badge: 'Chuyên môn của chúng tôi',
    h2a: 'Tay nghề chính xác.',
    h2b: 'Bền bỉ theo năm tháng.',
    intro: 'Mỗi chiếc hàm giả trên implant tôi làm — tôi đều đích thân thiết kế. Luisa, ứng viên RDT của chúng tôi, chế tác ngay tại phòng lab cuối hành lang. Không gửi đi đâu cả. Không ai phải chờ hàng tuần vì bên thứ ba.',
    tiles: [
      { title: 'Hàm giả trên implant', body: 'Hàm bấm khớp trên và dưới, neo vào 3–4 trụ implant. Giải pháp vĩnh viễn cho chiếc hàm giả không chịu nằm yên.', badge: 'Được chọn nhiều nhất' },
      { title: 'Hàm giả kỹ thuật số', body: 'Không lấy dấu khó chịu. Quét 3D trong miệng, thiết kế CAD, phay CNC tại chỗ. Chính xác tuyệt đối, mọi lần.', badge: 'Không lấy dấu' },
      { title: 'Sửa chữa khẩn cấp', body: 'Móc gãy, nền nứt, hay hàm cần đệm lại từ lâu — sửa trong ngày tại phòng lab của chúng tôi.', badge: 'Trong ngày' },
    ],
    learnMore: 'Tìm hiểu thêm',
    viewAll: 'Xem tất cả dịch vụ',
  },
  reviews: {
    badge: 'Câu chuyện bệnh nhân',
    h2a: 'Bệnh nhân thật.',
    h2b: ' Kết quả thật.',
    items: [
      { quote: 'Tôi vật lộn với hàm giả dưới suốt 15 năm. Chỉ một tuần sau khi nhận hàm trên implant tại Dentures Direct, tôi quên mất là mình đang đeo nó. Tôi đã khóc trong bữa ăn đầu tiên.', name: 'Margaret T.', detail: 'Hàm giả dưới trên implant, North York' },
      { quote: 'Damien hoàn toàn minh bạch về giá cả và quy trình ngay từ ngày đầu. Không bất ngờ, không chèo kéo. Chỉ có sự tận tâm. Độ khít của hàm kỹ thuật số tốt hơn mọi thứ tôi từng có trong 20 năm đeo hàm giả.', name: 'Robert K.', detail: 'Hàm giả toàn phần kỹ thuật số, Etobicoke' },
      { quote: 'Tôi đã cắm implant ở phòng khám khác và được bảo rằng làm hàm phủ ở nơi khác sẽ rất phức tạp. Damien đánh giá tôi trong một buổi hẹn và hoàn thành trong 3 tuần. Tuyệt vời.', name: 'Sandra M.', detail: 'Chuyển đổi hàm giả trên implant, vùng Đại Toronto' },
    ],
  },
  cta: {
    badge: 'Đang nhận bệnh nhân mới',
    h2a: 'Sẵn sàng chấm dứt cuộc chiến',
    h2b: 'với chính hàm giả của mình?',
    p: 'Tư vấn miễn phí. Đánh giá trung thực. Giá cả rõ ràng. Không ép buộc — nếu bạn không phù hợp, chúng tôi cũng sẽ nói thẳng.',
    book: 'Đặt lịch tư vấn miễn phí',
    address: '2833 Weston Road, North York · T2–T5 8:00–18:00',
  },
};

export const homeContent: Record<string, HomeContent> = { en, fr, es, it, vi };

export function getHomeContent(locale: string): HomeContent {
  return homeContent[locale] ?? en;
}
