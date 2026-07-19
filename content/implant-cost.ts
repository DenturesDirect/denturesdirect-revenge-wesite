// Copy for the implant-dentures-cost pillar page, all locales.
// Used by both the page (visible content) and the layout (metadata + FAQ JSON-LD)
// so the structured data always matches the on-page answers.

export type ImplantCostContent = {
  meta: { title: string; description: string; ogTitle: string; ogDescription: string };
  hero: { badge: string; h1: string; sub: string; ctaCall: string; ctaBreakdown: string };
  fee: {
    badge: string; h2: string; sub: string;
    perArch: string; price: string; priceNote: string;
    bullets: string[];
    haveImplantsTitle: string; haveImplantsBody: string;
    bothArchesTitle: string; bothArchesBody: string;
  };
  surgery: {
    badge: string; h2: string; sub: string;
    factors: { icon: string; title: string; desc: string }[];
    surgeonTitle: string; surgeonBody1: string; surgeonBody2: string; surgeonNote: string;
    cards: { label: string; value: string }[];
  };
  average: {
    badge: string; h2: string;
    avgLabel: string; avgValue: string; avgUnit: string;
    cases: { label: string; value: string; detail: string }[];
    disclaimer: string;
  };
  close: {
    badge: string; h2a: string; h2b: string;
    paras: string[]; kicker: string;
    book: string;
  };
  faq: { h2: string; items: { q: string; a: string }[] };
};

const en: ImplantCostContent = {
  meta: {
    title: "How Much Do Implant Dentures Cost in Toronto? $5,250 Per Arch | Dentures Direct",
    description: "Implant overdenture: $5,250 flat per arch, no tax. Implant surgery fee varies by bone density, grafting needs, and surgeon — last year's average was ~$2,370/implant. Use your own surgeon or we refer. Free consultation at Dentures Direct, North York Toronto.",
    ogTitle: "Implant Dentures $5,250 Flat Per Arch | Honest Cost Breakdown | Dentures Direct Toronto",
    ogDescription: "$5,250 per arch — no tax, no variation. Implant surgery quoted separately by your oral surgeon. Last year's average: ~$2,370/implant. Free consultation in North York.",
  },
  hero: {
    badge: 'North York · Toronto · GTA',
    h1: 'How Much Do Implant Dentures Cost in Toronto?',
    sub: 'An honest answer from Damien John Hiorth DD — 25 years in practice. Two costs. One you can control, one you can’t. Here’s how it works.',
    ctaCall: 'Get a Free Quote — (416) 245-7474',
    ctaBreakdown: 'See the Breakdown ↓',
  },
  fee: {
    badge: 'Our Fee — Flat, Transparent, Final',
    h2: 'The digital implant overdenture.',
    sub: 'This is the part we control. It’s the same fee for every patient, every arch, every time.',
    perArch: 'Per Arch — Upper or Lower',
    price: '$5,250',
    priceNote: 'Flat. No tax. No variation. No “and up.”',
    bullets: [
      'Digitally designed, CNC milled in our lab — not outsourced',
      'Works with 2, 3, or 4 implants — same fee',
      'LOCATOR R-TX attachment system included',
      '5-year breakage warranty',
      'Written quote before you commit to anything',
    ],
    haveImplantsTitle: 'Already have implants?',
    haveImplantsBody: 'If your implants are placed and you just need the overdenture — this is your only cost. Come in. We’ll assess your implants and tell you exactly what’s possible.',
    bothArchesTitle: 'Both arches?',
    bothArchesBody: 'Book upper and lower together for **$10,000** — save $500. No tax, no surprises.',
  },
  surgery: {
    badge: 'Not Our Fee — The Oral Surgeon’s Fee',
    h2: 'The implant surgery.',
    sub: 'This is the variable part — and it’s set by the oral surgeon, not us. Here’s why it varies and what you should know.',
    factors: [
      { icon: '🦴', title: 'Bone density & quality', desc: 'Strong bone = straightforward placement. Years of tooth loss or a poorly fitting denture can cause bone resorption — which may mean grafting before implants.' },
      { icon: '📍', title: 'Number of implants', desc: 'Lower jaw typically needs 3. Upper jaw usually needs 4 (the bone is softer, forces are different). Each implant is a separate surgical fee.' },
      { icon: '🩺', title: 'Bone grafting', desc: 'If your bone isn’t thick enough, the surgeon may need to add grafting material. This adds cost and healing time — but it’s the only way to ensure the implants hold long-term.' },
      { icon: '🎓', title: 'Surgeon’s experience & clinic', desc: 'An experienced oral surgeon at a full surgical suite will charge differently than a general dentist doing chair-side implants. You want the surgeon, not the shortcut.' },
      { icon: '⚙️', title: 'Implant brand & system', desc: 'Premium systems like Straumann or Nobel Biocare cost more than budget brands. We work with all major systems — but we’ll tell you honestly which ones we trust.' },
      { icon: '📷', title: 'CBCT scan', desc: 'Every surgeon requires a 3D cone-beam CT scan before pricing or placing implants. It’s how they see your bone, nerves, and sinus position. Non-negotiable.' },
    ],
    surgeonTitle: 'Use your own surgeon. Or we’ll refer you.',
    surgeonBody1: 'We don’t place implants — we build the overdenture that clips onto them. That means you’re free to use **any oral surgeon you trust.**',
    surgeonBody2: 'If you don’t have one, we refer to a small network of oral surgeons we’ve worked with for years. They do the CBCT, assess your bone, give you a surgical quote, and coordinate directly with us on implant placement.',
    surgeonNote: 'The only thing we insist on: your surgeon does a CBCT scan before any surgery. If they skip that step, find a different surgeon.',
    cards: [
      { label: 'Already have a surgeon?', value: 'We’ll coordinate with them — send records, align timelines, no friction.' },
      { label: 'Need a referral?', value: 'We’ll connect you with oral surgeons we trust. They’ll handle everything surgical.' },
      { label: 'Already have implants?', value: 'Skip the surgery entirely. Just come in for the overdenture.' },
    ],
  },
  average: {
    badge: 'Real Data — Not Marketing Ranges',
    h2: 'What our patients actually paid last year.',
    avgLabel: 'Average surgical cost per implant (from our referral network)',
    avgValue: '~$2,370',
    avgUnit: 'per implant · across all cases · 2025',
    cases: [
      { label: 'Simple case (good bone)', value: 'Lower end', detail: '3 implants · no grafting' },
      { label: 'Average case', value: 'Mid-range', detail: '3–4 implants · minor grafting' },
      { label: 'Complex case (bone loss)', value: 'Higher end', detail: '4 implants · grafting · sinus lift' },
    ],
    disclaimer: 'These are averages from our referred patients — your surgeon will give you an exact number after your CBCT scan. The only way to know what your case costs is to come in.',
  },
  close: {
    badge: 'Free Consultation · Written Quote',
    h2a: 'Have you finally realized',
    h2b: 'you deserve better?',
    paras: [
      'You’ve spent years dealing with it. The adhesive. The slipping. The quiet panic at every meal, every conversation, every family dinner.',
      'You’ve tried to make it work. You’ve told yourself it’s fine. You’ve avoided the foods you love, covered your mouth when you laugh, skipped events because you didn’t trust your teeth to stay put.',
      '**It doesn’t have to be this way.**',
      'Digital implant overdentures give you back what a loose denture took away: **fit, function, confidence, and dignity.** They snap in, they don’t move, and they let you eat, speak, and live without thinking about your teeth.',
      'Come in. Sit down with Damien. Tell him what’s been going on. He’ll give you an honest assessment, a written quote, and the truth about what’s possible for your situation.',
    ],
    kicker: 'No pressure. No commitment. Just an answer you’ve been waiting too long to hear.',
    book: 'Book Your Free Consultation',
  },
  faq: {
    h2: 'Common Cost Questions',
    items: [
      { q: 'Is there a cheaper option than implants?', a: 'Yes — a well-made digital overdenture without implants will fit significantly better than a poorly made denture with implants. If your jaw is stable and budget is a priority, a new CNC-milled digital denture is worth considering first. We’ll tell you honestly which option makes more sense for your specific situation.' },
      { q: 'Does OHIP or insurance cover implant overdentures?', a: 'OHIP does not cover dental implants or overdentures. Most private insurance plans cover a portion of the overdenture (the denture portion), but not the implant surgery itself. We recommend calling your insurer before your appointment. We can provide a pre-determination letter if needed.' },
      { q: 'Does CDCP cover implant dentures?', a: 'The Canadian Dental Care Plan (CDCP) does not currently cover implant surgery. It may cover a portion of the denture component depending on the plan tier. This is evolving — call us and we’ll tell you what’s currently covered.' },
      { q: 'Can I finance implant dentures?', a: 'We don’t offer in-house financing, but many of our patients use third-party medical financing (e.g. Medicard, Dentalcard). The oral surgeon who places your implants may also offer payment plans.' },
      { q: 'My implants were placed elsewhere — what does the overdenture cost?', a: 'This is one of our most common cases. If your implants are well-positioned and in good condition, we can build a new overdenture or convert your existing denture to clip onto them. Come in — we’ll assess the situation and give you a written quote.' },
    ],
  },
};

const fr: ImplantCostContent = {
  meta: {
    title: "Combien coûtent les prothèses sur implants à Toronto? 5 250 $ par arcade | Dentures Direct",
    description: "Prothèse sur implants : 5 250 $ prix fixe par arcade, sans taxes. La chirurgie implantaire varie selon la densité osseuse, les greffes et le chirurgien — moyenne l'an dernier : ~2 370 $/implant. Votre chirurgien ou le nôtre. Consultation gratuite à North York, Toronto.",
    ogTitle: "Prothèses sur implants 5 250 $ fixe par arcade | Coûts en toute transparence | Dentures Direct Toronto",
    ogDescription: "5 250 $ par arcade — sans taxes, sans variation. Chirurgie implantaire facturée séparément par votre chirurgien buccal. Moyenne l'an dernier : ~2 370 $/implant. Consultation gratuite à North York.",
  },
  hero: {
    badge: 'North York · Toronto · Grand Toronto',
    h1: 'Combien coûtent les prothèses sur implants à Toronto?',
    sub: 'Une réponse honnête de Damien John Hiorth DD — 25 ans de pratique. Deux coûts. Un que vous maîtrisez, un que vous ne maîtrisez pas. Voici comment ça fonctionne.',
    ctaCall: 'Obtenez un devis gratuit — (416) 245-7474',
    ctaBreakdown: 'Voir le détail ↓',
  },
  fee: {
    badge: 'Nos honoraires — fixes, transparents, définitifs',
    h2: 'La prothèse numérique sur implants.',
    sub: 'C’est la partie que nous maîtrisons. Le même prix pour chaque patient, chaque arcade, à chaque fois.',
    perArch: 'Par arcade — haut ou bas',
    price: '5 250 $',
    priceNote: 'Fixe. Sans taxes. Sans variation. Sans « et plus ».',
    bullets: [
      'Conçue numériquement, usinée CNC dans notre laboratoire — non sous-traitée',
      'Fonctionne avec 2, 3 ou 4 implants — même prix',
      'Système d’attache LOCATOR R-TX inclus',
      'Garantie de 5 ans contre la casse',
      'Devis écrit avant tout engagement de votre part',
    ],
    haveImplantsTitle: 'Vous avez déjà des implants?',
    haveImplantsBody: 'Si vos implants sont posés et qu’il ne vous manque que la prothèse — c’est votre seul coût. Venez nous voir. Nous évaluerons vos implants et vous dirons exactement ce qui est possible.',
    bothArchesTitle: 'Les deux arcades?',
    bothArchesBody: 'Réservez le haut et le bas ensemble pour **10 000 $** — économisez 500 $. Sans taxes, sans surprises.',
  },
  surgery: {
    badge: 'Pas nos honoraires — ceux du chirurgien buccal',
    h2: 'La chirurgie implantaire.',
    sub: 'C’est la partie variable — et elle est fixée par le chirurgien buccal, pas par nous. Voici pourquoi elle varie et ce que vous devez savoir.',
    factors: [
      { icon: '🦴', title: 'Densité et qualité de l’os', desc: 'Un os solide = une pose simple. Des années d’édentement ou une prothèse mal ajustée peuvent causer une résorption osseuse — ce qui peut exiger une greffe avant les implants.' },
      { icon: '📍', title: 'Nombre d’implants', desc: 'La mâchoire inférieure en requiert généralement 3. La supérieure, souvent 4 (l’os est plus mou, les forces diffèrent). Chaque implant est un honoraire chirurgical distinct.' },
      { icon: '🩺', title: 'Greffe osseuse', desc: 'Si votre os n’est pas assez épais, le chirurgien peut devoir ajouter du matériau de greffe. Cela ajoute au coût et au temps de guérison — mais c’est le seul moyen d’assurer la tenue des implants à long terme.' },
      { icon: '🎓', title: 'Expérience et clinique du chirurgien', desc: 'Un chirurgien buccal expérimenté en salle chirurgicale complète ne facture pas comme un dentiste généraliste posant des implants au fauteuil. Vous voulez le chirurgien, pas le raccourci.' },
      { icon: '⚙️', title: 'Marque et système d’implant', desc: 'Les systèmes haut de gamme comme Straumann ou Nobel Biocare coûtent plus cher que les marques économiques. Nous travaillons avec tous les grands systèmes — mais nous vous dirons honnêtement lesquels nous inspirent confiance.' },
      { icon: '📷', title: 'Examen CBCT', desc: 'Chaque chirurgien exige un scan 3D à faisceau conique avant de chiffrer ou de poser des implants. C’est ainsi qu’il voit votre os, vos nerfs et la position de vos sinus. Non négociable.' },
    ],
    surgeonTitle: 'Utilisez votre propre chirurgien. Ou nous vous en référons un.',
    surgeonBody1: 'Nous ne posons pas les implants — nous fabriquons la prothèse qui s’y encliquette. Vous êtes donc libre de faire appel à **tout chirurgien buccal en qui vous avez confiance.**',
    surgeonBody2: 'Si vous n’en avez pas, nous vous référons à un petit réseau de chirurgiens buccaux avec qui nous travaillons depuis des années. Ils font le CBCT, évaluent votre os, vous remettent un devis chirurgical et coordonnent directement avec nous la pose des implants.',
    surgeonNote: 'La seule chose sur laquelle nous insistons : votre chirurgien réalise un examen CBCT avant toute chirurgie. S’il saute cette étape, changez de chirurgien.',
    cards: [
      { label: 'Vous avez déjà un chirurgien?', value: 'Nous coordonnons avec lui — envoi des dossiers, harmonisation des échéanciers, sans friction.' },
      { label: 'Besoin d’une référence?', value: 'Nous vous mettons en relation avec des chirurgiens buccaux de confiance. Ils s’occupent de tout le volet chirurgical.' },
      { label: 'Vous avez déjà des implants?', value: 'Sautez complètement la chirurgie. Venez simplement pour la prothèse.' },
    ],
  },
  average: {
    badge: 'Données réelles — pas des fourchettes marketing',
    h2: 'Ce que nos patients ont réellement payé l’an dernier.',
    avgLabel: 'Coût chirurgical moyen par implant (de notre réseau de référence)',
    avgValue: '~2 370 $',
    avgUnit: 'par implant · tous cas confondus · 2025',
    cases: [
      { label: 'Cas simple (bon os)', value: 'Bas de la fourchette', detail: '3 implants · sans greffe' },
      { label: 'Cas moyen', value: 'Milieu de gamme', detail: '3–4 implants · greffe mineure' },
      { label: 'Cas complexe (perte osseuse)', value: 'Haut de la fourchette', detail: '4 implants · greffe · élévation sinusienne' },
    ],
    disclaimer: 'Ce sont des moyennes de nos patients référés — votre chirurgien vous donnera un chiffre exact après votre examen CBCT. La seule façon de connaître le coût de votre cas est de venir nous voir.',
  },
  close: {
    badge: 'Consultation gratuite · Devis écrit',
    h2a: 'Avez-vous enfin compris',
    h2b: 'que vous méritez mieux?',
    paras: [
      'Vous composez avec ça depuis des années. L’adhésif. Le glissement. La panique silencieuse à chaque repas, chaque conversation, chaque souper de famille.',
      'Vous avez essayé de faire avec. Vous vous êtes dit que ça allait. Vous avez évité les aliments que vous aimez, caché votre bouche en riant, manqué des événements parce que vous ne faisiez pas confiance à vos dents pour tenir en place.',
      '**Ça n’a pas à être ainsi.**',
      'Les prothèses numériques sur implants vous redonnent ce qu’une prothèse instable vous a enlevé : **l’ajustement, la fonction, la confiance et la dignité.** Elles s’encliquettent, ne bougent pas, et vous laissent manger, parler et vivre sans penser à vos dents.',
      'Venez. Asseyez-vous avec Damien. Racontez-lui ce que vous vivez. Il vous donnera une évaluation honnête, un devis écrit et la vérité sur ce qui est possible dans votre situation.',
    ],
    kicker: 'Aucune pression. Aucun engagement. Juste une réponse que vous attendez depuis bien trop longtemps.',
    book: 'Réservez votre consultation gratuite',
  },
  faq: {
    h2: 'Questions fréquentes sur les coûts',
    items: [
      { q: 'Existe-t-il une option moins chère que les implants?', a: 'Oui — une prothèse numérique bien faite sans implants s’ajustera bien mieux qu’une prothèse mal faite avec implants. Si votre mâchoire est stable et que le budget est prioritaire, une nouvelle prothèse numérique usinée CNC vaut la peine d’être envisagée d’abord. Nous vous dirons honnêtement quelle option est la plus sensée dans votre situation précise.' },
      { q: 'L’Assurance-santé de l’Ontario ou les assurances couvrent-elles les prothèses sur implants?', a: 'L’Assurance-santé de l’Ontario ne couvre ni les implants dentaires ni les prothèses sur implants. La plupart des régimes d’assurance privés couvrent une partie de la prothèse (le volet prothétique), mais pas la chirurgie implantaire elle-même. Nous recommandons d’appeler votre assureur avant votre rendez-vous. Nous pouvons fournir une lettre de prédétermination au besoin.' },
      { q: 'Le RCSD couvre-t-il les prothèses sur implants?', a: 'Le Régime canadien de soins dentaires (RCSD) ne couvre pas actuellement la chirurgie implantaire. Il peut couvrir une partie du volet prothétique selon le palier du régime. Cela évolue — appelez-nous et nous vous dirons ce qui est actuellement couvert.' },
      { q: 'Puis-je financer des prothèses sur implants?', a: 'Nous n’offrons pas de financement interne, mais bon nombre de nos patients recourent au financement médical tiers (p. ex. Medicard, Dentalcard). Le chirurgien buccal qui pose vos implants peut aussi proposer des plans de paiement.' },
      { q: 'Mes implants ont été posés ailleurs — combien coûte la prothèse?', a: 'C’est l’un de nos cas les plus fréquents. Si vos implants sont bien positionnés et en bon état, nous pouvons fabriquer une nouvelle prothèse ou convertir votre prothèse actuelle pour qu’elle s’y encliquette. Venez nous voir — nous évaluerons la situation et vous remettrons un devis écrit.' },
    ],
  },
};

const es: ImplantCostContent = {
  meta: {
    title: "¿Cuánto cuestan las dentaduras sobre implantes en Toronto? $5,250 por arcada | Dentures Direct",
    description: "Sobredentadura sobre implantes: $5,250 fijo por arcada, sin impuestos. La cirugía de implantes varía según densidad ósea, injertos y cirujano — el promedio del año pasado fue de ~$2,370/implante. Use su cirujano o le referimos. Consulta gratuita en North York, Toronto.",
    ogTitle: "Dentaduras sobre implantes $5,250 fijo por arcada | Desglose honesto de costos | Dentures Direct Toronto",
    ogDescription: "$5,250 por arcada — sin impuestos, sin variación. La cirugía de implantes la cotiza por separado su cirujano oral. Promedio del año pasado: ~$2,370/implante. Consulta gratuita en North York.",
  },
  hero: {
    badge: 'North York · Toronto · Área metropolitana',
    h1: '¿Cuánto cuestan las dentaduras sobre implantes en Toronto?',
    sub: 'Una respuesta honesta de Damien John Hiorth DD — 25 años de práctica. Dos costos. Uno que puede controlar, otro que no. Así funciona.',
    ctaCall: 'Obtenga una cotización gratis — (416) 245-7474',
    ctaBreakdown: 'Ver el desglose ↓',
  },
  fee: {
    badge: 'Nuestro honorario — fijo, transparente, definitivo',
    h2: 'La sobredentadura digital sobre implantes.',
    sub: 'Esta es la parte que controlamos. El mismo precio para cada paciente, cada arcada, siempre.',
    perArch: 'Por arcada — superior o inferior',
    price: '$5,250',
    priceNote: 'Fijo. Sin impuestos. Sin variación. Sin «desde».',
    bullets: [
      'Diseñada digitalmente, fresada CNC en nuestro laboratorio — no subcontratada',
      'Funciona con 2, 3 o 4 implantes — mismo precio',
      'Sistema de anclaje LOCATOR R-TX incluido',
      'Garantía de 5 años contra rotura',
      'Cotización por escrito antes de comprometerse a nada',
    ],
    haveImplantsTitle: '¿Ya tiene implantes?',
    haveImplantsBody: 'Si sus implantes están colocados y solo necesita la sobredentadura — este es su único costo. Venga. Evaluaremos sus implantes y le diremos exactamente qué es posible.',
    bothArchesTitle: '¿Ambas arcadas?',
    bothArchesBody: 'Reserve superior e inferior juntas por **$10,000** — ahorre $500. Sin impuestos, sin sorpresas.',
  },
  surgery: {
    badge: 'No es nuestro honorario — es el del cirujano oral',
    h2: 'La cirugía de implantes.',
    sub: 'Esta es la parte variable — y la fija el cirujano oral, no nosotros. Aquí le explicamos por qué varía y qué debe saber.',
    factors: [
      { icon: '🦴', title: 'Densidad y calidad del hueso', desc: 'Hueso fuerte = colocación sencilla. Años de pérdida de dientes o una dentadura mal ajustada pueden causar reabsorción ósea — lo que puede requerir injerto antes de los implantes.' },
      { icon: '📍', title: 'Número de implantes', desc: 'La mandíbula inferior suele necesitar 3. La superior normalmente 4 (el hueso es más blando, las fuerzas son distintas). Cada implante es un honorario quirúrgico aparte.' },
      { icon: '🩺', title: 'Injerto óseo', desc: 'Si su hueso no es lo bastante grueso, el cirujano puede necesitar añadir material de injerto. Esto suma costo y tiempo de cicatrización — pero es la única forma de asegurar que los implantes se sostengan a largo plazo.' },
      { icon: '🎓', title: 'Experiencia y clínica del cirujano', desc: 'Un cirujano oral experimentado en un quirófano completo cobra distinto que un dentista general colocando implantes en el sillón. Usted quiere al cirujano, no el atajo.' },
      { icon: '⚙️', title: 'Marca y sistema del implante', desc: 'Los sistemas premium como Straumann o Nobel Biocare cuestan más que las marcas económicas. Trabajamos con todos los sistemas principales — pero le diremos con honestidad en cuáles confiamos.' },
      { icon: '📷', title: 'Tomografía CBCT', desc: 'Todo cirujano exige una tomografía 3D de haz cónico antes de cotizar o colocar implantes. Así ve su hueso, sus nervios y la posición del seno. No negociable.' },
    ],
    surgeonTitle: 'Use su propio cirujano. O le referimos uno.',
    surgeonBody1: 'Nosotros no colocamos implantes — fabricamos la sobredentadura que encaja en ellos. Eso significa que puede usar **cualquier cirujano oral de su confianza.**',
    surgeonBody2: 'Si no tiene uno, le referimos a una pequeña red de cirujanos orales con los que trabajamos desde hace años. Hacen la CBCT, evalúan su hueso, le dan una cotización quirúrgica y coordinan directamente con nosotros la colocación de los implantes.',
    surgeonNote: 'En lo único que insistimos: que su cirujano haga una tomografía CBCT antes de cualquier cirugía. Si se salta ese paso, busque otro cirujano.',
    cards: [
      { label: '¿Ya tiene cirujano?', value: 'Coordinamos con él — enviamos registros, alineamos plazos, sin fricciones.' },
      { label: '¿Necesita una referencia?', value: 'Le conectamos con cirujanos orales de confianza. Ellos se encargan de todo lo quirúrgico.' },
      { label: '¿Ya tiene implantes?', value: 'Sáltese la cirugía por completo. Solo venga por la sobredentadura.' },
    ],
  },
  average: {
    badge: 'Datos reales — no rangos de marketing',
    h2: 'Lo que nuestros pacientes realmente pagaron el año pasado.',
    avgLabel: 'Costo quirúrgico promedio por implante (de nuestra red de referencia)',
    avgValue: '~$2,370',
    avgUnit: 'por implante · en todos los casos · 2025',
    cases: [
      { label: 'Caso simple (buen hueso)', value: 'Extremo bajo', detail: '3 implantes · sin injerto' },
      { label: 'Caso promedio', value: 'Rango medio', detail: '3–4 implantes · injerto menor' },
      { label: 'Caso complejo (pérdida ósea)', value: 'Extremo alto', detail: '4 implantes · injerto · elevación de seno' },
    ],
    disclaimer: 'Son promedios de nuestros pacientes referidos — su cirujano le dará una cifra exacta tras su tomografía CBCT. La única forma de saber cuánto cuesta su caso es venir.',
  },
  close: {
    badge: 'Consulta gratuita · Cotización por escrito',
    h2a: '¿Por fin se dio cuenta',
    h2b: 'de que merece algo mejor?',
    paras: [
      'Ha pasado años lidiando con esto. El adhesivo. El deslizamiento. El pánico silencioso en cada comida, cada conversación, cada cena familiar.',
      'Ha intentado que funcione. Se ha dicho que está bien. Ha evitado los alimentos que ama, se ha tapado la boca al reír, ha faltado a eventos porque no confiaba en que sus dientes se quedaran en su sitio.',
      '**No tiene por qué ser así.**',
      'Las sobredentaduras digitales sobre implantes le devuelven lo que una dentadura floja le quitó: **ajuste, función, confianza y dignidad.** Encajan a presión, no se mueven, y le permiten comer, hablar y vivir sin pensar en sus dientes.',
      'Venga. Siéntese con Damien. Cuéntele lo que ha estado viviendo. Le dará una evaluación honesta, una cotización por escrito y la verdad sobre lo que es posible en su situación.',
    ],
    kicker: 'Sin presión. Sin compromiso. Solo una respuesta que ha esperado demasiado tiempo para oír.',
    book: 'Reserve su consulta gratuita',
  },
  faq: {
    h2: 'Preguntas frecuentes sobre costos',
    items: [
      { q: '¿Hay una opción más barata que los implantes?', a: 'Sí — una sobredentadura digital bien hecha sin implantes se ajustará mucho mejor que una dentadura mal hecha con implantes. Si su mandíbula es estable y el presupuesto es prioridad, vale la pena considerar primero una nueva dentadura digital fresada CNC. Le diremos con honestidad qué opción tiene más sentido para su situación específica.' },
      { q: '¿OHIP o el seguro cubren las sobredentaduras sobre implantes?', a: 'OHIP no cubre implantes dentales ni sobredentaduras. La mayoría de los seguros privados cubren una parte de la sobredentadura (el componente protésico), pero no la cirugía de implantes en sí. Recomendamos llamar a su aseguradora antes de la cita. Podemos proporcionar una carta de predeterminación si es necesario.' },
      { q: '¿El CDCP cubre las dentaduras sobre implantes?', a: 'El Plan Canadiense de Atención Dental (CDCP) no cubre actualmente la cirugía de implantes. Puede cubrir una parte del componente protésico según el nivel del plan. Esto está evolucionando — llámenos y le diremos qué se cubre actualmente.' },
      { q: '¿Puedo financiar las dentaduras sobre implantes?', a: 'No ofrecemos financiamiento interno, pero muchos de nuestros pacientes usan financiamiento médico de terceros (p. ej. Medicard, Dentalcard). El cirujano oral que coloca sus implantes también puede ofrecer planes de pago.' },
      { q: 'Mis implantes se colocaron en otro lugar — ¿cuánto cuesta la sobredentadura?', a: 'Es uno de nuestros casos más comunes. Si sus implantes están bien posicionados y en buen estado, podemos fabricar una nueva sobredentadura o convertir su dentadura actual para que encaje en ellos. Venga — evaluaremos la situación y le daremos una cotización por escrito.' },
    ],
  },
};

const it: ImplantCostContent = {
  meta: {
    title: "Quanto costano le protesi su impianti a Toronto? 5.250 $ per arcata | Dentures Direct",
    description: "Overdenture su impianti: 5.250 $ fisso per arcata, senza tasse. La chirurgia implantare varia in base a densità ossea, innesti e chirurgo — la media dell'anno scorso è stata di ~2.370 $/impianto. Il suo chirurgo o il nostro. Consulenza gratuita a North York, Toronto.",
    ogTitle: "Protesi su impianti 5.250 $ fisso per arcata | Analisi onesta dei costi | Dentures Direct Toronto",
    ogDescription: "5.250 $ per arcata — senza tasse, senza variazioni. La chirurgia implantare è preventivata a parte dal suo chirurgo orale. Media dell'anno scorso: ~2.370 $/impianto. Consulenza gratuita a North York.",
  },
  hero: {
    badge: 'North York · Toronto · Area metropolitana',
    h1: 'Quanto costano le protesi su impianti a Toronto?',
    sub: 'Una risposta onesta da Damien John Hiorth DD — 25 anni di attività. Due costi. Uno che può controllare, uno che non può. Ecco come funziona.',
    ctaCall: 'Richieda un preventivo gratuito — (416) 245-7474',
    ctaBreakdown: 'Vedi l’analisi ↓',
  },
  fee: {
    badge: 'Il nostro onorario — fisso, trasparente, definitivo',
    h2: 'L’overdenture digitale su impianti.',
    sub: 'Questa è la parte che controlliamo. Lo stesso prezzo per ogni paziente, ogni arcata, ogni volta.',
    perArch: 'Per arcata — superiore o inferiore',
    price: '5.250 $',
    priceNote: 'Fisso. Senza tasse. Senza variazioni. Niente «a partire da».',
    bullets: [
      'Progettata digitalmente, fresata CNC nel nostro laboratorio — non esternalizzata',
      'Funziona con 2, 3 o 4 impianti — stesso prezzo',
      'Sistema di attacco LOCATOR R-TX incluso',
      'Garanzia di 5 anni contro la rottura',
      'Preventivo scritto prima di qualsiasi impegno',
    ],
    haveImplantsTitle: 'Ha già gli impianti?',
    haveImplantsBody: 'Se i suoi impianti sono già inseriti e le serve solo l’overdenture — questo è il suo unico costo. Venga. Valuteremo i suoi impianti e le diremo esattamente cosa è possibile.',
    bothArchesTitle: 'Entrambe le arcate?',
    bothArchesBody: 'Prenoti superiore e inferiore insieme a **10.000 $** — risparmi 500 $. Senza tasse, senza sorprese.',
  },
  surgery: {
    badge: 'Non il nostro onorario — quello del chirurgo orale',
    h2: 'La chirurgia implantare.',
    sub: 'Questa è la parte variabile — ed è fissata dal chirurgo orale, non da noi. Ecco perché varia e cosa deve sapere.',
    factors: [
      { icon: '🦴', title: 'Densità e qualità dell’osso', desc: 'Osso solido = inserimento semplice. Anni di edentulia o una protesi mal adattata possono causare riassorbimento osseo — che può richiedere un innesto prima degli impianti.' },
      { icon: '📍', title: 'Numero di impianti', desc: 'La mascella inferiore ne richiede di norma 3. La superiore di solito 4 (l’osso è più morbido, le forze sono diverse). Ogni impianto è un onorario chirurgico separato.' },
      { icon: '🩺', title: 'Innesto osseo', desc: 'Se il suo osso non è abbastanza spesso, il chirurgo potrebbe dover aggiungere materiale da innesto. Ciò aumenta costo e tempi di guarigione — ma è l’unico modo per garantire la tenuta degli impianti nel tempo.' },
      { icon: '🎓', title: 'Esperienza e struttura del chirurgo', desc: 'Un chirurgo orale esperto in una sala operatoria completa fattura diversamente da un dentista generico che inserisce impianti alla poltrona. Lei vuole il chirurgo, non la scorciatoia.' },
      { icon: '⚙️', title: 'Marca e sistema dell’impianto', desc: 'I sistemi premium come Straumann o Nobel Biocare costano più delle marche economiche. Lavoriamo con tutti i principali sistemi — ma le diremo onestamente di quali ci fidiamo.' },
      { icon: '📷', title: 'TAC CBCT', desc: 'Ogni chirurgo richiede una TAC 3D cone-beam prima di preventivare o inserire impianti. È così che vede il suo osso, i nervi e la posizione del seno. Non negoziabile.' },
    ],
    surgeonTitle: 'Usi il suo chirurgo. Oppure gliene indichiamo uno.',
    surgeonBody1: 'Noi non inseriamo gli impianti — realizziamo l’overdenture che vi si aggancia. Questo significa che è libero di rivolgersi a **qualsiasi chirurgo orale di sua fiducia.**',
    surgeonBody2: 'Se non ne ha uno, la indirizziamo a una piccola rete di chirurghi orali con cui lavoriamo da anni. Fanno la CBCT, valutano il suo osso, le forniscono un preventivo chirurgico e coordinano direttamente con noi l’inserimento degli impianti.',
    surgeonNote: 'L’unica cosa su cui insistiamo: il suo chirurgo esegue una TAC CBCT prima di qualsiasi intervento. Se salta questo passaggio, cambi chirurgo.',
    cards: [
      { label: 'Ha già un chirurgo?', value: 'Coordiniamo con lui — invio delle cartelle, allineamento delle tempistiche, senza attriti.' },
      { label: 'Le serve un riferimento?', value: 'La mettiamo in contatto con chirurghi orali di fiducia. Gestiranno tutta la parte chirurgica.' },
      { label: 'Ha già gli impianti?', value: 'Salti del tutto la chirurgia. Venga solo per l’overdenture.' },
    ],
  },
  average: {
    badge: 'Dati reali — non fasce di marketing',
    h2: 'Quanto hanno pagato davvero i nostri pazienti l’anno scorso.',
    avgLabel: 'Costo chirurgico medio per impianto (dalla nostra rete di riferimento)',
    avgValue: '~2.370 $',
    avgUnit: 'per impianto · su tutti i casi · 2025',
    cases: [
      { label: 'Caso semplice (osso buono)', value: 'Fascia bassa', detail: '3 impianti · senza innesto' },
      { label: 'Caso medio', value: 'Fascia media', detail: '3–4 impianti · innesto minore' },
      { label: 'Caso complesso (perdita ossea)', value: 'Fascia alta', detail: '4 impianti · innesto · rialzo del seno' },
    ],
    disclaimer: 'Sono medie dei nostri pazienti indirizzati — il suo chirurgo le darà una cifra esatta dopo la TAC CBCT. L’unico modo per sapere quanto costa il suo caso è venire da noi.',
  },
  close: {
    badge: 'Consulenza gratuita · Preventivo scritto',
    h2a: 'Ha finalmente capito',
    h2b: 'che merita di meglio?',
    paras: [
      'Ci convive da anni. L’adesivo. Lo scivolamento. Il panico silenzioso a ogni pasto, ogni conversazione, ogni cena in famiglia.',
      'Ha provato a farla funzionare. Si è detto che va bene. Ha evitato i cibi che ama, si è coperto la bocca ridendo, ha saltato eventi perché non si fidava che i denti restassero al loro posto.',
      '**Non deve andare così.**',
      'Le overdenture digitali su impianti le restituiscono ciò che una dentiera ballerina le ha tolto: **precisione, funzione, sicurezza e dignità.** Si agganciano, non si muovono, e le permettono di mangiare, parlare e vivere senza pensare ai denti.',
      'Venga. Si sieda con Damien. Gli racconti cosa sta vivendo. Le darà una valutazione onesta, un preventivo scritto e la verità su ciò che è possibile nella sua situazione.',
    ],
    kicker: 'Nessuna pressione. Nessun impegno. Solo una risposta che aspetta da troppo tempo.',
    book: 'Prenoti la sua consulenza gratuita',
  },
  faq: {
    h2: 'Domande frequenti sui costi',
    items: [
      { q: 'Esiste un’opzione più economica degli impianti?', a: 'Sì — un’overdenture digitale ben fatta senza impianti si adatterà molto meglio di una protesi mal fatta con impianti. Se la sua mascella è stabile e il budget è una priorità, vale la pena valutare prima una nuova protesi digitale fresata CNC. Le diremo onestamente quale opzione ha più senso nella sua situazione specifica.' },
      { q: 'OHIP o l’assicurazione coprono le overdenture su impianti?', a: 'OHIP non copre né gli impianti dentali né le overdenture. La maggior parte delle assicurazioni private copre una parte dell’overdenture (la componente protesica), ma non la chirurgia implantare in sé. Consigliamo di chiamare il suo assicuratore prima dell’appuntamento. Possiamo fornire una lettera di predeterminazione se necessario.' },
      { q: 'Il CDCP copre le protesi su impianti?', a: 'Il Canadian Dental Care Plan (CDCP) al momento non copre la chirurgia implantare. Può coprire una parte della componente protesica a seconda del livello del piano. La situazione è in evoluzione — ci chiami e le diremo cosa è attualmente coperto.' },
      { q: 'Posso finanziare le protesi su impianti?', a: 'Non offriamo finanziamenti interni, ma molti nostri pazienti usano finanziamenti medici di terzi (es. Medicard, Dentalcard). Anche il chirurgo orale che inserisce gli impianti può offrire piani di pagamento.' },
      { q: 'I miei impianti sono stati inseriti altrove — quanto costa l’overdenture?', a: 'È uno dei nostri casi più comuni. Se i suoi impianti sono ben posizionati e in buone condizioni, possiamo realizzare una nuova overdenture o convertire la sua protesi attuale perché vi si agganci. Venga — valuteremo la situazione e le forniremo un preventivo scritto.' },
    ],
  },
};

const vi: ImplantCostContent = {
  meta: {
    title: "Hàm giả trên implant ở Toronto giá bao nhiêu? 5.250 $ mỗi hàm | Dentures Direct",
    description: "Hàm phủ trên implant: 5.250 $ cố định mỗi hàm, không thuế. Phí phẫu thuật cấy implant thay đổi theo mật độ xương, nhu cầu ghép xương và bác sĩ — trung bình năm ngoái ~2.370 $/trụ. Dùng bác sĩ của bạn hoặc chúng tôi giới thiệu. Tư vấn miễn phí tại North York, Toronto.",
    ogTitle: "Hàm giả trên implant 5.250 $ cố định mỗi hàm | Bảng chi phí minh bạch | Dentures Direct Toronto",
    ogDescription: "5.250 $ mỗi hàm — không thuế, không phát sinh. Phẫu thuật cấy implant do bác sĩ phẫu thuật báo giá riêng. Trung bình năm ngoái: ~2.370 $/trụ. Tư vấn miễn phí tại North York.",
  },
  hero: {
    badge: 'North York · Toronto · Vùng Đại Toronto',
    h1: 'Hàm giả trên implant ở Toronto giá bao nhiêu?',
    sub: 'Câu trả lời thẳng thắn từ Damien John Hiorth DD — 25 năm hành nghề. Hai khoản chi phí. Một khoản bạn kiểm soát được, một khoản thì không. Đây là cách nó vận hành.',
    ctaCall: 'Nhận báo giá miễn phí — (416) 245-7474',
    ctaBreakdown: 'Xem chi tiết ↓',
  },
  fee: {
    badge: 'Phí của chúng tôi — cố định, minh bạch, dứt khoát',
    h2: 'Hàm phủ kỹ thuật số trên implant.',
    sub: 'Đây là phần chúng tôi kiểm soát. Cùng một mức phí cho mọi bệnh nhân, mọi hàm, mọi lần.',
    perArch: 'Mỗi hàm — trên hoặc dưới',
    price: '5.250 $',
    priceNote: 'Cố định. Không thuế. Không phát sinh. Không “từ … trở lên”.',
    bullets: [
      'Thiết kế kỹ thuật số, phay CNC tại phòng lab của chúng tôi — không thuê ngoài',
      'Dùng được với 2, 3 hoặc 4 trụ implant — cùng một mức phí',
      'Bao gồm hệ thống khớp nối LOCATOR R-TX',
      'Bảo hành gãy vỡ 5 năm',
      'Báo giá bằng văn bản trước khi bạn cam kết bất cứ điều gì',
    ],
    haveImplantsTitle: 'Bạn đã có sẵn implant?',
    haveImplantsBody: 'Nếu trụ implant đã được cấy và bạn chỉ cần hàm phủ — đây là chi phí duy nhất của bạn. Hãy đến. Chúng tôi sẽ đánh giá trụ implant và cho bạn biết chính xác điều gì khả thi.',
    bothArchesTitle: 'Cả hai hàm?',
    bothArchesBody: 'Đặt cả hàm trên và dưới cùng lúc với giá **10.000 $** — tiết kiệm 500 $. Không thuế, không bất ngờ.',
  },
  surgery: {
    badge: 'Không phải phí của chúng tôi — phí của bác sĩ phẫu thuật',
    h2: 'Phẫu thuật cấy implant.',
    sub: 'Đây là phần thay đổi — và do bác sĩ phẫu thuật quyết định, không phải chúng tôi. Đây là lý do nó thay đổi và những điều bạn nên biết.',
    factors: [
      { icon: '🦴', title: 'Mật độ và chất lượng xương', desc: 'Xương chắc = cấy đơn giản. Nhiều năm mất răng hoặc hàm giả lắp không khít có thể gây tiêu xương — đôi khi phải ghép xương trước khi cấy implant.' },
      { icon: '📍', title: 'Số lượng trụ implant', desc: 'Hàm dưới thường cần 3 trụ. Hàm trên thường cần 4 (xương mềm hơn, lực khác nhau). Mỗi trụ implant là một khoản phí phẫu thuật riêng.' },
      { icon: '🩺', title: 'Ghép xương', desc: 'Nếu xương của bạn chưa đủ dày, bác sĩ có thể cần thêm vật liệu ghép. Việc này tăng chi phí và thời gian lành thương — nhưng là cách duy nhất để bảo đảm trụ implant giữ được lâu dài.' },
      { icon: '🎓', title: 'Kinh nghiệm và cơ sở của bác sĩ', desc: 'Một bác sĩ phẫu thuật miệng giàu kinh nghiệm trong phòng mổ đầy đủ sẽ tính phí khác với một nha sĩ tổng quát cấy implant tại ghế. Bạn cần bác sĩ chuyên môn, không phải con đường tắt.' },
      { icon: '⚙️', title: 'Thương hiệu và hệ thống implant', desc: 'Các hệ thống cao cấp như Straumann hay Nobel Biocare đắt hơn các thương hiệu giá rẻ. Chúng tôi làm việc với mọi hệ thống lớn — nhưng sẽ nói thẳng loại nào chúng tôi tin dùng.' },
      { icon: '📷', title: 'Chụp CBCT', desc: 'Mọi bác sĩ đều yêu cầu chụp CT 3D cone-beam trước khi báo giá hoặc cấy implant. Đó là cách họ nhìn thấy xương, dây thần kinh và vị trí xoang của bạn. Không thể bỏ qua.' },
    ],
    surgeonTitle: 'Dùng bác sĩ của bạn. Hoặc chúng tôi giới thiệu.',
    surgeonBody1: 'Chúng tôi không cấy implant — chúng tôi làm chiếc hàm phủ bấm vào chúng. Nghĩa là bạn tự do chọn **bất kỳ bác sĩ phẫu thuật miệng nào bạn tin tưởng.**',
    surgeonBody2: 'Nếu bạn chưa có, chúng tôi giới thiệu một mạng lưới nhỏ các bác sĩ phẫu thuật miệng đã hợp tác nhiều năm. Họ chụp CBCT, đánh giá xương, báo giá phẫu thuật và phối hợp trực tiếp với chúng tôi trong việc cấy implant.',
    surgeonNote: 'Điều duy nhất chúng tôi yêu cầu: bác sĩ của bạn phải chụp CBCT trước bất kỳ ca phẫu thuật nào. Nếu họ bỏ qua bước đó, hãy tìm bác sĩ khác.',
    cards: [
      { label: 'Đã có bác sĩ phẫu thuật?', value: 'Chúng tôi phối hợp với họ — gửi hồ sơ, khớp lịch trình, không vướng mắc.' },
      { label: 'Cần được giới thiệu?', value: 'Chúng tôi kết nối bạn với các bác sĩ phẫu thuật miệng đáng tin. Họ lo toàn bộ phần phẫu thuật.' },
      { label: 'Đã có sẵn implant?', value: 'Bỏ qua hoàn toàn phần phẫu thuật. Chỉ cần đến làm hàm phủ.' },
    ],
  },
  average: {
    badge: 'Dữ liệu thật — không phải khoảng giá quảng cáo',
    h2: 'Số tiền bệnh nhân của chúng tôi thực sự đã trả năm ngoái.',
    avgLabel: 'Chi phí phẫu thuật trung bình mỗi trụ implant (từ mạng lưới giới thiệu của chúng tôi)',
    avgValue: '~2.370 $',
    avgUnit: 'mỗi trụ · trên tất cả các ca · 2025',
    cases: [
      { label: 'Ca đơn giản (xương tốt)', value: 'Mức thấp', detail: '3 trụ · không ghép xương' },
      { label: 'Ca trung bình', value: 'Mức giữa', detail: '3–4 trụ · ghép xương nhẹ' },
      { label: 'Ca phức tạp (tiêu xương)', value: 'Mức cao', detail: '4 trụ · ghép xương · nâng xoang' },
    ],
    disclaimer: 'Đây là số trung bình từ bệnh nhân được giới thiệu — bác sĩ của bạn sẽ đưa ra con số chính xác sau khi chụp CBCT. Cách duy nhất để biết ca của bạn tốn bao nhiêu là đến gặp chúng tôi.',
  },
  close: {
    badge: 'Tư vấn miễn phí · Báo giá bằng văn bản',
    h2a: 'Cuối cùng bạn đã nhận ra',
    h2b: 'mình xứng đáng với điều tốt hơn?',
    paras: [
      'Bạn đã chịu đựng nó suốt nhiều năm. Keo dán. Sự xê dịch. Nỗi hoảng loạn âm thầm trong mỗi bữa ăn, mỗi cuộc trò chuyện, mỗi bữa cơm gia đình.',
      'Bạn đã cố xoay xở. Bạn tự nhủ rằng vẫn ổn. Bạn kiêng những món mình yêu thích, che miệng khi cười, bỏ lỡ những sự kiện vì không tin hàm răng sẽ nằm yên.',
      '**Mọi thứ không nhất thiết phải như vậy.**',
      'Hàm phủ kỹ thuật số trên implant trả lại cho bạn những gì chiếc hàm giả lỏng lẻo đã lấy đi: **độ khít, chức năng, sự tự tin và phẩm giá.** Chúng bấm khớp, không xê dịch, và cho phép bạn ăn, nói và sống mà không phải bận tâm đến hàm răng.',
      'Hãy đến. Ngồi xuống cùng Damien. Kể cho ông ấy nghe những gì bạn đang trải qua. Ông sẽ đưa ra đánh giá trung thực, một bản báo giá bằng văn bản, và sự thật về những gì khả thi cho trường hợp của bạn.',
    ],
    kicker: 'Không ép buộc. Không cam kết. Chỉ là câu trả lời mà bạn đã chờ đợi quá lâu.',
    book: 'Đặt lịch tư vấn miễn phí',
  },
  faq: {
    h2: 'Câu hỏi thường gặp về chi phí',
    items: [
      { q: 'Có lựa chọn nào rẻ hơn implant không?', a: 'Có — một chiếc hàm phủ kỹ thuật số làm tốt không cần implant sẽ khít hơn nhiều so với một chiếc hàm làm kém có implant. Nếu xương hàm của bạn ổn định và ngân sách là ưu tiên, nên cân nhắc trước một chiếc hàm giả kỹ thuật số phay CNC mới. Chúng tôi sẽ nói thẳng lựa chọn nào hợp lý hơn cho tình huống cụ thể của bạn.' },
      { q: 'OHIP hoặc bảo hiểm có chi trả hàm phủ trên implant không?', a: 'OHIP không chi trả cho implant nha khoa hay hàm phủ. Hầu hết bảo hiểm tư nhân chi trả một phần cho hàm phủ (phần hàm giả), nhưng không chi trả cho phẫu thuật cấy implant. Chúng tôi khuyên bạn gọi cho công ty bảo hiểm trước buổi hẹn. Chúng tôi có thể cung cấp thư xác định trước nếu cần.' },
      { q: 'CDCP có chi trả cho hàm giả trên implant không?', a: 'Chương trình Chăm sóc Nha khoa Canada (CDCP) hiện không chi trả cho phẫu thuật cấy implant. Nó có thể chi trả một phần cho thành phần hàm giả tùy theo cấp độ chương trình. Điều này đang thay đổi — hãy gọi cho chúng tôi và chúng tôi sẽ cho bạn biết hiện đang được chi trả những gì.' },
      { q: 'Tôi có thể trả góp hàm giả trên implant không?', a: 'Chúng tôi không cung cấp trả góp nội bộ, nhưng nhiều bệnh nhân của chúng tôi dùng dịch vụ tài chính y tế của bên thứ ba (ví dụ Medicard, Dentalcard). Bác sĩ phẫu thuật cấy implant cho bạn cũng có thể có phương án trả góp.' },
      { q: 'Implant của tôi được cấy ở nơi khác — hàm phủ giá bao nhiêu?', a: 'Đây là một trong những ca phổ biến nhất của chúng tôi. Nếu trụ implant của bạn đúng vị trí và tình trạng tốt, chúng tôi có thể làm một hàm phủ mới hoặc chuyển đổi hàm hiện tại để bấm vào chúng. Hãy đến — chúng tôi sẽ đánh giá tình huống và đưa cho bạn báo giá bằng văn bản.' },
    ],
  },
};

export const implantCostContent: Record<string, ImplantCostContent> = { en, fr, es, it, vi };

export function getImplantCostContent(locale: string): ImplantCostContent {
  return implantCostContent[locale] ?? en;
}
