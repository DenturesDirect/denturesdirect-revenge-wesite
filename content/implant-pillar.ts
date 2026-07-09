// Copy for the implant-retained overdentures pillar page, all locales.
// Used by both the page (visible content) and the layout (metadata + FAQ JSON-LD)
// so the structured data always matches the on-page answers.
// Strings may contain **bold** markers rendered by the page's renderBold helper.

export type ImplantPillarContent = {
  meta: { title: string; description: string; ogTitle: string; ogDescription: string };
  crumbs: { home: string; services: string; current: string };
  hero: {
    badge: string; h1a: string; h1b: string; sub: string;
    priceLine: string; ctaCall: string; ctaPricing: string;
  };
  stats: { stat: string; label: string }[];
  what: {
    badge: string; h2: string; p1: string; p2: string;
    bullets: string[]; guideLink: string; caption: string;
  };
  compare: {
    h2: string; intro: string;
    snap: { tag: string; title: string; body: string; bullets: string[]; price: string; priceSuffix: string; priceNote: string };
    fixed: { title: string; body: string; bullets: string[]; price: string; priceSuffix: string; priceNote: string };
    costLink: string;
  };
  process: {
    h2: string; intro: string;
    steps: { title: string; body: string }[];
    already: { title: string; body: string; cta: string };
  };
  why: {
    h2a: string; h2b: string;
    p1: string;
    p2pre: string; p2link: string; p2post: string;
    bullets: string[];
    photoTitle: string;
  };
  faq: { h2: string; sub: string; items: { q: string; a: string }[]; costLinkLabel: string };
  areas: { h2: string; introPre: string; introLink: string; introPost: string; list: string[] };
  cta: { h2a: string; h2b: string; p: string; book: string };
};

const en: ImplantPillarContent = {
  meta: {
    title: 'Implant-Retained Dentures Toronto | Snap-On & Fixed Overdentures — $5,250 Flat Per Arch',
    description: 'Implant-retained dentures in Toronto by Damien Hiorth DD — 25 years of implant denture experience. Snap-on overdentures $5,250 flat per arch, designed and CNC-milled in our own North York lab. Free consultation: (416) 245-7474.',
    ogTitle: 'Implant-Retained Dentures Toronto | Snap-On & Fixed Overdentures',
    ogDescription: 'Stop struggling with loose dentures. Snap-on and fixed implant overdentures, $5,250 flat per arch, CNC-milled in our own North York lab. Free consultation.',
  },
  crumbs: { home: 'Home', services: 'Denture Services', current: 'Implant-Retained Dentures' },
  hero: {
    badge: "Toronto's Implant Denture Specialists · 25 Years",
    h1a: 'Implant-Retained Dentures',
    h1b: 'in Toronto',
    sub: 'Snap-on and fixed implant overdentures that never shift, float, or need adhesive — designed by Damien Hiorth DD and CNC-milled in our own North York lab.',
    priceLine: '**$5,250 flat per arch.** No tax. No "and up." Free consultation.',
    ctaCall: 'Book Your Free Consultation — (416) 245-7474',
    ctaPricing: 'See Exact Pricing',
  },
  stats: [
    { stat: '$5,250', label: 'Flat Per Arch — No Tax' },
    { stat: '25+', label: 'Years Implant Denture Experience' },
    { stat: '3–4', label: 'Implants Per Arch' },
    { stat: '100%', label: 'Designed & Milled In-House' },
  ],
  what: {
    badge: 'The Permanent Fix for Loose Dentures',
    h2: 'What Are Implant-Retained Dentures?',
    p1: "An implant-retained denture — you'll also hear implant overdenture, snap-on denture, or snap-in denture — clips onto dental implants anchored in your jawbone instead of resting on your gums. The result: a denture that stays put when you eat, laugh, and speak.",
    p2: 'If you use adhesive every day, avoid steak, corn, or crusty bread, or feel your lower denture float the moment you bite down — you are exactly who this treatment was invented for.',
    bullets: [
      'No adhesive — the attachments hold, not glue',
      'Eat the foods you stopped ordering',
      'No clicking, rocking, or floating',
      'Slows the jawbone loss traditional dentures accelerate',
      'Removable at home for easy cleaning (snap-on)',
    ],
    guideLink: 'Struggling with a loose denture? Read our free guide',
    caption: 'Actual Dentures Direct patient — implant-retained overdenture, designed and milled in our North York lab.',
  },
  compare: {
    h2: 'Snap-On vs. Fixed Implant Dentures',
    intro: 'Both attach to implants. The difference is how — and what they cost. Most of our Toronto patients choose snap-on for one simple reason: near-fixed stability at a fifth of the price.',
    snap: {
      tag: 'Our Specialty',
      title: 'Snap-On Overdentures',
      body: 'Clips onto **3 implants (lower)** or **4 implants (upper)** with locator-style attachments. You remove it at home for cleaning; it snaps back rock-solid.',
      bullets: [
        'Dramatically more stable than traditional dentures',
        'Easy to clean and maintain at home',
        'Attachments replaceable as they wear — low upkeep cost',
        'CNC-milled in-house for a precise, repeatable fit',
      ],
      price: '$5,250',
      priceSuffix: 'flat per arch · no tax',
      priceNote: 'Both arches: $10,000 (save $500). Implant surgery quoted separately by the oral surgeon.',
    },
    fixed: {
      title: 'Fixed Dentures (All-on-4)',
      body: 'Screwed permanently onto 4+ implants and only removed by a professional. Feels closest to natural teeth — at a significantly higher investment.',
      bullets: [
        'Maximum stability for eating and speaking',
        'Never removed at home',
        'Helps prevent jawbone deterioration',
      ],
      price: '$25,000+',
      priceSuffix: 'per arch, typically',
      priceNote: "Complexity, components, and surgical requirements drive the cost. We'll tell you honestly if it's worth it for your case.",
    },
    costLink: 'Full transparent cost breakdown — including surgery fees',
  },
  process: {
    h2: 'The 5 Stages of Implant-Retained Dentures',
    intro: "From first consultation to your final fitting — here's exactly what happens, and who does what.",
    steps: [
      { title: 'Free Consultation', body: "We assess your jaw, your current denture, and any existing implants. Honest advice — if you're not a candidate, we'll say so." },
      { title: 'Implant Placement', body: 'An oral surgeon places the implants — 3 lower, 4 upper. Use your own surgeon or one from our trusted GTA network. A CBCT scan is always required first.' },
      { title: 'Healing & Integration', body: "Implants integrate with your bone over 3–6 months. You wear a temporary denture the whole time — you're never without teeth." },
      { title: 'Digital Impressions', body: 'No goop. Our intraoral scanner captures your jaw and implant positions to the micron, and Damien DD designs your overdenture personally.' },
      { title: 'Milling & Fitting', body: 'CNC-milled in our on-site North York lab — no outsourcing. We fit it, fine-tune the attachments, and show you exactly how to care for it.' },
    ],
    already: {
      title: 'Already have implants?',
      body: 'Skip to stage 4. We build overdentures on implants placed anywhere — typically ready in 2–4 weeks.',
      cta: 'Call for a written quote →',
    },
  },
  why: {
    h2a: 'Why Toronto Patients Choose Us',
    h2b: 'for implant dentures',
    p1: "Most clinics send implant denture work to a third-party lab and wait weeks. We don't. Every overdenture is **designed by Damien personally and milled in our own lab down the hall** — which means faster turnaround, direct quality control, and a fit that's mathematically precise.",
    p2pre: "We're a ",
    p2link: 'fully digital clinic',
    p2post: ": intraoral scanning instead of goop impressions, CAD design, and CNC milling to 3-micron tolerance. And our pricing is flat and public — $5,250 per arch, because you shouldn't need three consultations to learn what something costs.",
    bullets: [
      '25 years of implant denture experience',
      'In-house digital lab — zero outsourcing',
      'Flat, published pricing',
      'Regulated by the College of Denturists of Ontario',
    ],
    photoTitle: 'Founder & Lead Denturist · 25 Years',
  },
  faq: {
    h2: 'Implant Denture Questions, Answered',
    sub: 'Straight answers from 25 years of building implant-retained dentures in Toronto.',
    items: [
      { q: 'What are implant-retained dentures?', a: "Implant-retained dentures — also called implant overdentures or snap-on dentures — clip onto dental implants anchored in your jawbone. Unlike traditional dentures that rest on your gums, they don't shift, float, or need adhesive. They come in two forms: removable (snap-on) and fixed (All-on-4 style)." },
      { q: 'How much do implant-retained dentures cost in Toronto?', a: "Our implant overdenture is $5,250 flat per arch — no tax, no variation. Both arches together are $10,000. The implant surgery is a separate fee set by the oral surgeon — last year's average was ~$2,370 per implant." },
      { q: 'How many implants do I need?', a: 'Typically 3 implants for a lower overdenture and 4 for an upper. The exact number depends on your bone density and jaw anatomy — confirmed with a CBCT scan before any surgery.' },
      { q: "What's the difference between snap-on and fixed?", a: 'Snap-on overdentures clip onto your implants and come out at home for cleaning — dramatically more stable than traditional dentures at a fraction of the fixed price. Fixed dentures (All-on-4) are screwed on and only removed by a professional; maximum stability, but usually over $25,000 per arch.' },
      { q: 'I already have implants — can you make a denture that fits them?', a: 'Yes — this is one of our most common cases. If your implants are healthy and well positioned, we design and mill a new digital overdenture to clip onto them, or convert your existing denture. Your only cost is the overdenture fee.' },
      { q: 'How long does the process take?', a: 'If you already have implants: typically 2–4 weeks. If implants need to be placed first: 3–6 months of healing after surgery, then 2–4 weeks for design and milling in our on-site lab.' },
      { q: 'Do implant-retained dentures stop bone loss?', a: "Implants stimulate the jawbone the way natural tooth roots do, which helps slow the bone resorption that traditional dentures accelerate. It's one of the biggest long-term health benefits of going with implants." },
      { q: 'Where in the GTA do your patients come from?', a: 'Our clinic and lab are at 2833 Weston Road in North York. Patients visit from across the GTA — Etobicoke, Scarborough, York, Vaughan, Woodbridge, Mississauga, Brampton, Markham, and Richmond Hill.' },
    ],
    costLinkLabel: 'See the full cost breakdown →',
  },
  areas: {
    h2: 'Serving Toronto & the GTA',
    introPre: 'Our clinic and lab are at ',
    introLink: '2833 Weston Road, North York',
    introPost: ' — minutes from Highways 400 and 401, with free parking. Implant denture patients visit us from:',
    list: ['North York', 'Etobicoke', 'Weston', 'York', 'Scarborough', 'Downtown Toronto', 'Vaughan', 'Woodbridge', 'Mississauga', 'Brampton', 'Markham', 'Richmond Hill'],
  },
  cta: {
    h2a: 'Ready to stop fighting',
    h2b: 'your own denture?',
    p: "Free consultation. Honest assessment. Flat pricing. If you're not a candidate for implant-retained dentures, we'll tell you that too.",
    book: 'Book Online',
  },
};

const fr: ImplantPillarContent = {
  meta: {
    title: 'Prothèses dentaires sur implants à Toronto | Overdentures à encliquetage et fixes — 5 250 $ fixe par arcade',
    description: "Prothèses sur implants à Toronto par Damien Hiorth DD — 25 ans d'expérience. Prothèses à encliquetage 5 250 $ prix fixe par arcade, conçues et usinées CNC dans notre laboratoire de North York. Consultation gratuite : (416) 245-7474.",
    ogTitle: 'Prothèses sur implants à Toronto | À encliquetage et fixes',
    ogDescription: 'Cessez de lutter contre une prothèse qui bouge. Prothèses sur implants à encliquetage et fixes, 5 250 $ fixe par arcade, usinées CNC dans notre laboratoire de North York. Consultation gratuite.',
  },
  crumbs: { home: 'Accueil', services: 'Services de prothèses', current: 'Prothèses sur implants' },
  hero: {
    badge: 'Les spécialistes des prothèses sur implants à Toronto · 25 ans',
    h1a: 'Prothèses dentaires sur implants',
    h1b: 'à Toronto',
    sub: "Des prothèses sur implants, à encliquetage ou fixes, qui ne bougent pas, ne flottent pas et n'exigent aucun adhésif — conçues par Damien Hiorth DD et usinées CNC dans notre propre laboratoire de North York.",
    priceLine: '**5 250 $ prix fixe par arcade.** Pas de taxes. Pas de « et plus ». Consultation gratuite.',
    ctaCall: 'Réservez votre consultation gratuite — (416) 245-7474',
    ctaPricing: 'Voir les prix exacts',
  },
  stats: [
    { stat: '5 250 $', label: 'Prix fixe par arcade — sans taxes' },
    { stat: '25+', label: "Ans d'expérience en prothèses sur implants" },
    { stat: '3–4', label: 'Implants par arcade' },
    { stat: '100 %', label: 'Conçues et usinées sur place' },
  ],
  what: {
    badge: 'La solution permanente aux prothèses qui bougent',
    h2: "Qu'est-ce qu'une prothèse sur implants?",
    p1: "Une prothèse sur implants — aussi appelée overdenture, prothèse à encliquetage ou « snap-on » — se fixe sur des implants dentaires ancrés dans votre mâchoire au lieu de reposer sur vos gencives. Résultat : une prothèse qui reste en place quand vous mangez, riez et parlez.",
    p2: "Si vous utilisez de l'adhésif chaque jour, évitez le steak, le maïs ou le pain croûté, ou sentez votre prothèse inférieure se soulever dès que vous mordez — ce traitement a été inventé exactement pour vous.",
    bullets: [
      "Aucun adhésif — ce sont les attaches qui tiennent, pas la colle",
      'Mangez de nouveau les aliments que vous évitiez',
      'Aucun claquement, basculement ou flottement',
      "Ralentit la perte osseuse que les prothèses traditionnelles accélèrent",
      'Retirable à la maison pour un nettoyage facile (encliquetage)',
    ],
    guideLink: 'Votre prothèse bouge? Lisez notre guide gratuit',
    caption: 'Patient réel de Dentures Direct — prothèse sur implants conçue et usinée dans notre laboratoire de North York.',
  },
  compare: {
    h2: 'Prothèses à encliquetage vs prothèses fixes',
    intro: "Les deux se fixent sur des implants. La différence : la méthode — et le prix. La plupart de nos patients de Toronto choisissent l'encliquetage pour une raison simple : une stabilité quasi fixe au cinquième du prix.",
    snap: {
      tag: 'Notre spécialité',
      title: 'Prothèses à encliquetage',
      body: "Se fixe sur **3 implants (bas)** ou **4 implants (haut)** avec des attaches de type locator. Vous la retirez à la maison pour le nettoyage; elle se réencliquette solidement.",
      bullets: [
        'Nettement plus stable que les prothèses traditionnelles',
        'Facile à nettoyer et à entretenir à la maison',
        "Attaches remplaçables à l'usure — entretien peu coûteux",
        'Usinée CNC sur place pour un ajustement précis et reproductible',
      ],
      price: '5 250 $',
      priceSuffix: 'fixe par arcade · sans taxes',
      priceNote: "Les deux arcades : 10 000 $ (économie de 500 $). La chirurgie implantaire est facturée séparément par le chirurgien buccal.",
    },
    fixed: {
      title: 'Prothèses fixes (All-on-4)',
      body: "Vissées en permanence sur 4 implants ou plus et retirées uniquement par un professionnel. La sensation la plus proche des dents naturelles — pour un investissement nettement plus élevé.",
      bullets: [
        'Stabilité maximale pour manger et parler',
        'Jamais retirée à la maison',
        'Aide à prévenir la détérioration osseuse',
      ],
      price: '25 000 $+',
      priceSuffix: 'par arcade, en général',
      priceNote: "La complexité, les composants et les exigences chirurgicales expliquent le coût. Nous vous dirons honnêtement si cela en vaut la peine dans votre cas.",
    },
    costLink: 'Détail complet et transparent des coûts — chirurgie incluse',
  },
  process: {
    h2: "Les 5 étapes d'une prothèse sur implants",
    intro: "De la première consultation à l'ajustement final — voici exactement ce qui se passe, et qui fait quoi.",
    steps: [
      { title: 'Consultation gratuite', body: "Nous évaluons votre mâchoire, votre prothèse actuelle et vos implants existants. Un avis honnête — si vous n'êtes pas candidat, nous vous le dirons." },
      { title: 'Pose des implants', body: "Un chirurgien buccal pose les implants — 3 en bas, 4 en haut. Votre propre chirurgien ou un membre de notre réseau de confiance du Grand Toronto. Un examen CBCT est toujours exigé au préalable." },
      { title: 'Guérison et intégration', body: "Les implants s'intègrent à l'os sur 3 à 6 mois. Vous portez une prothèse temporaire pendant tout ce temps — vous n'êtes jamais sans dents." },
      { title: 'Empreintes numériques', body: "Aucune pâte. Notre scanner intra-oral capture votre mâchoire et la position des implants au micron près, et Damien DD conçoit personnellement votre prothèse." },
      { title: 'Usinage et ajustement', body: "Usinée CNC dans notre laboratoire de North York — aucune sous-traitance. Nous l'ajustons, réglons les attaches et vous montrons exactement comment en prendre soin." },
    ],
    already: {
      title: 'Vous avez déjà des implants?',
      body: "Passez directement à l'étape 4. Nous fabriquons des prothèses sur des implants posés n'importe où — généralement prêtes en 2 à 4 semaines.",
      cta: 'Appelez pour un devis écrit →',
    },
  },
  why: {
    h2a: 'Pourquoi les patients de Toronto nous choisissent',
    h2b: 'pour leurs prothèses sur implants',
    p1: "La plupart des cliniques envoient le travail à un laboratoire externe et attendent des semaines. Pas nous. Chaque prothèse est **conçue personnellement par Damien et usinée dans notre laboratoire au bout du couloir** — délais plus courts, contrôle direct de la qualité et ajustement d'une précision mathématique.",
    p2pre: 'Nous sommes une ',
    p2link: 'clinique entièrement numérique',
    p2post: " : numérisation intra-orale au lieu d'empreintes à la pâte, conception CAO et usinage CNC à 3 microns de tolérance. Et nos prix sont fixes et publics — 5 250 $ par arcade, parce que vous ne devriez pas avoir besoin de trois consultations pour connaître le prix.",
    bullets: [
      "25 ans d'expérience en prothèses sur implants",
      'Laboratoire numérique sur place — zéro sous-traitance',
      'Prix fixes et affichés',
      "Réglementée par l'Ordre des denturologistes de l'Ontario",
    ],
    photoTitle: 'Fondateur et denturologiste en chef · 25 ans',
  },
  faq: {
    h2: 'Vos questions sur les prothèses sur implants',
    sub: "Des réponses franches, fruit de 25 ans de fabrication de prothèses sur implants à Toronto.",
    items: [
      { q: "Qu'est-ce qu'une prothèse sur implants?", a: "Les prothèses sur implants — aussi appelées overdentures ou prothèses à encliquetage — se fixent sur des implants dentaires ancrés dans la mâchoire. Contrairement aux prothèses traditionnelles qui reposent sur les gencives, elles ne bougent pas, ne flottent pas et n'exigent aucun adhésif. Deux formes existent : amovible (encliquetage) et fixe (type All-on-4)." },
      { q: 'Combien coûtent les prothèses sur implants à Toronto?', a: "Notre prothèse sur implants coûte 5 250 $ prix fixe par arcade — sans taxes, sans variation. Les deux arcades ensemble : 10 000 $. La chirurgie implantaire est un honoraire distinct fixé par le chirurgien buccal — la moyenne l'an dernier était d'environ 2 370 $ par implant." },
      { q: "Combien d'implants me faut-il?", a: "En général, 3 implants pour une prothèse inférieure et 4 pour une supérieure. Le nombre exact dépend de votre densité osseuse et de l'anatomie de votre mâchoire — confirmé par un examen CBCT avant toute chirurgie." },
      { q: 'Quelle est la différence entre encliquetage et fixe?', a: "Les prothèses à encliquetage se fixent sur vos implants et se retirent à la maison pour le nettoyage — nettement plus stables que les prothèses traditionnelles, à une fraction du prix des fixes. Les prothèses fixes (All-on-4) sont vissées et retirées uniquement par un professionnel; stabilité maximale, mais généralement plus de 25 000 $ par arcade." },
      { q: "J'ai déjà des implants — pouvez-vous fabriquer une prothèse qui s'y adapte?", a: "Oui — c'est l'un de nos cas les plus fréquents. Si vos implants sont sains et bien positionnés, nous concevons et usinons une nouvelle prothèse numérique qui s'y encliquette, ou nous convertissons votre prothèse actuelle. Votre seul coût : le prix de la prothèse." },
      { q: 'Combien de temps dure le processus?', a: "Si vous avez déjà des implants : généralement 2 à 4 semaines. S'il faut d'abord poser les implants : 3 à 6 mois de guérison après la chirurgie, puis 2 à 4 semaines pour la conception et l'usinage dans notre laboratoire." },
      { q: "Les prothèses sur implants arrêtent-elles la perte osseuse?", a: "Les implants stimulent l'os de la mâchoire comme le font les racines naturelles, ce qui ralentit la résorption osseuse que les prothèses traditionnelles accélèrent. C'est l'un des plus grands bienfaits à long terme des implants." },
      { q: "D'où viennent vos patients dans le Grand Toronto?", a: "Notre clinique et notre laboratoire sont au 2833 Weston Road à North York. Nos patients viennent de partout dans le Grand Toronto — Etobicoke, Scarborough, York, Vaughan, Woodbridge, Mississauga, Brampton, Markham et Richmond Hill." },
    ],
    costLinkLabel: 'Voir le détail complet des coûts →',
  },
  areas: {
    h2: 'Au service de Toronto et du Grand Toronto',
    introPre: 'Notre clinique et notre laboratoire sont au ',
    introLink: '2833 Weston Road, North York',
    introPost: " — à quelques minutes des autoroutes 400 et 401, stationnement gratuit. Nos patients en prothèses sur implants viennent de :",
    list: ['North York', 'Etobicoke', 'Weston', 'York', 'Scarborough', 'Centre-ville de Toronto', 'Vaughan', 'Woodbridge', 'Mississauga', 'Brampton', 'Markham', 'Richmond Hill'],
  },
  cta: {
    h2a: 'Prêt à cesser de vous battre',
    h2b: 'contre votre prothèse?',
    p: "Consultation gratuite. Évaluation honnête. Prix fixes. Si vous n'êtes pas candidat aux prothèses sur implants, nous vous le dirons aussi.",
    book: 'Prendre rendez-vous',
  },
};

const es: ImplantPillarContent = {
  meta: {
    title: 'Dentaduras sobre implantes en Toronto | Sobredentaduras a presión y fijas — $5,250 fijo por arcada',
    description: 'Dentaduras retenidas por implantes en Toronto por Damien Hiorth DD — 25 años de experiencia. Sobredentaduras a presión $5,250 precio fijo por arcada, diseñadas y fresadas CNC en nuestro laboratorio de North York. Consulta gratuita: (416) 245-7474.',
    ogTitle: 'Dentaduras sobre implantes en Toronto | A presión y fijas',
    ogDescription: 'Deje de luchar con una dentadura floja. Sobredentaduras a presión y fijas, $5,250 fijo por arcada, fresadas CNC en nuestro laboratorio de North York. Consulta gratuita.',
  },
  crumbs: { home: 'Inicio', services: 'Servicios de dentaduras', current: 'Dentaduras sobre implantes' },
  hero: {
    badge: 'Especialistas en dentaduras sobre implantes en Toronto · 25 años',
    h1a: 'Dentaduras sobre implantes',
    h1b: 'en Toronto',
    sub: 'Sobredentaduras a presión y fijas que nunca se mueven, no flotan y no necesitan adhesivo — diseñadas por Damien Hiorth DD y fresadas CNC en nuestro propio laboratorio de North York.',
    priceLine: '**$5,250 precio fijo por arcada.** Sin impuestos. Sin «desde». Consulta gratuita.',
    ctaCall: 'Reserve su consulta gratuita — (416) 245-7474',
    ctaPricing: 'Ver precios exactos',
  },
  stats: [
    { stat: '$5,250', label: 'Fijo por arcada — sin impuestos' },
    { stat: '25+', label: 'Años de experiencia en implantes' },
    { stat: '3–4', label: 'Implantes por arcada' },
    { stat: '100%', label: 'Diseñadas y fresadas en el laboratorio propio' },
  ],
  what: {
    badge: 'La solución permanente a las dentaduras flojas',
    h2: '¿Qué son las dentaduras sobre implantes?',
    p1: 'Una dentadura retenida por implantes — también llamada sobredentadura o dentadura a presión — se fija a implantes dentales anclados en el hueso maxilar en lugar de apoyarse en las encías. El resultado: una dentadura que se queda en su sitio cuando come, ríe y habla.',
    p2: 'Si usa adhesivo todos los días, evita la carne, el elote o el pan crujiente, o siente que su dentadura inferior se levanta al morder — este tratamiento se inventó exactamente para usted.',
    bullets: [
      'Sin adhesivo — sujetan los anclajes, no el pegamento',
      'Coma los alimentos que había dejado de pedir',
      'Sin ruidos, balanceos ni flotación',
      'Frena la pérdida ósea que las dentaduras tradicionales aceleran',
      'Extraíble en casa para una limpieza fácil (a presión)',
    ],
    guideLink: '¿Su dentadura está floja? Lea nuestra guía gratuita',
    caption: 'Paciente real de Dentures Direct — sobredentadura sobre implantes, diseñada y fresada en nuestro laboratorio de North York.',
  },
  compare: {
    h2: 'Dentaduras a presión vs. fijas',
    intro: 'Ambas se fijan a implantes. La diferencia es cómo — y cuánto cuestan. La mayoría de nuestros pacientes en Toronto elige la de presión por una razón simple: estabilidad casi fija a una quinta parte del precio.',
    snap: {
      tag: 'Nuestra especialidad',
      title: 'Sobredentaduras a presión',
      body: 'Se fija sobre **3 implantes (inferior)** o **4 implantes (superior)** con anclajes tipo locator. Se la quita en casa para limpiarla; vuelve a encajar firme como una roca.',
      bullets: [
        'Muchísimo más estable que una dentadura tradicional',
        'Fácil de limpiar y mantener en casa',
        'Anclajes reemplazables con el desgaste — mantenimiento económico',
        'Fresada CNC en el laboratorio propio para un ajuste preciso y repetible',
      ],
      price: '$5,250',
      priceSuffix: 'fijo por arcada · sin impuestos',
      priceNote: 'Ambas arcadas: $10,000 (ahorre $500). La cirugía de implantes la cotiza por separado el cirujano oral.',
    },
    fixed: {
      title: 'Dentaduras fijas (All-on-4)',
      body: 'Atornilladas permanentemente sobre 4 o más implantes y retiradas solo por un profesional. La sensación más cercana a los dientes naturales — con una inversión considerablemente mayor.',
      bullets: [
        'Máxima estabilidad para comer y hablar',
        'Nunca se retira en casa',
        'Ayuda a prevenir el deterioro del hueso maxilar',
      ],
      price: '$25,000+',
      priceSuffix: 'por arcada, típicamente',
      priceNote: 'La complejidad, los componentes y los requisitos quirúrgicos elevan el costo. Le diremos con honestidad si vale la pena en su caso.',
    },
    costLink: 'Desglose completo y transparente de costos — incluida la cirugía',
  },
  process: {
    h2: 'Las 5 etapas de las dentaduras sobre implantes',
    intro: 'Desde la primera consulta hasta el ajuste final — esto es exactamente lo que ocurre y quién hace qué.',
    steps: [
      { title: 'Consulta gratuita', body: 'Evaluamos su mandíbula, su dentadura actual y sus implantes existentes. Consejo honesto — si no es candidato, se lo diremos.' },
      { title: 'Colocación de implantes', body: 'Un cirujano oral coloca los implantes — 3 abajo, 4 arriba. Use su propio cirujano o uno de nuestra red de confianza en el área de Toronto. Siempre se requiere primero una tomografía CBCT.' },
      { title: 'Cicatrización e integración', body: 'Los implantes se integran al hueso durante 3–6 meses. Usted lleva una dentadura temporal todo el tiempo — nunca se queda sin dientes.' },
      { title: 'Impresiones digitales', body: 'Sin masilla. Nuestro escáner intraoral captura su mandíbula y la posición de los implantes al micrón, y Damien DD diseña personalmente su sobredentadura.' },
      { title: 'Fresado y ajuste', body: 'Fresada CNC en nuestro laboratorio de North York — sin subcontratación. La ajustamos, afinamos los anclajes y le enseñamos exactamente cómo cuidarla.' },
    ],
    already: {
      title: '¿Ya tiene implantes?',
      body: 'Pase directo a la etapa 4. Fabricamos sobredentaduras sobre implantes colocados en cualquier lugar — normalmente listas en 2–4 semanas.',
      cta: 'Llame para una cotización por escrito →',
    },
  },
  why: {
    h2a: 'Por qué los pacientes de Toronto nos eligen',
    h2b: 'para sus dentaduras sobre implantes',
    p1: 'La mayoría de las clínicas envía el trabajo a un laboratorio externo y espera semanas. Nosotros no. Cada sobredentadura es **diseñada personalmente por Damien y fresada en nuestro laboratorio al final del pasillo** — lo que significa plazos más cortos, control de calidad directo y un ajuste matemáticamente preciso.',
    p2pre: 'Somos una ',
    p2link: 'clínica totalmente digital',
    p2post: ': escaneo intraoral en lugar de impresiones con masilla, diseño CAD y fresado CNC con tolerancia de 3 micrones. Y nuestros precios son fijos y públicos — $5,250 por arcada, porque no debería necesitar tres consultas para saber cuánto cuesta algo.',
    bullets: [
      '25 años de experiencia en dentaduras sobre implantes',
      'Laboratorio digital propio — cero subcontratación',
      'Precios fijos y publicados',
      'Regulada por el Colegio de Denturistas de Ontario',
    ],
    photoTitle: 'Fundador y denturista principal · 25 años',
  },
  faq: {
    h2: 'Preguntas sobre dentaduras sobre implantes, respondidas',
    sub: 'Respuestas directas tras 25 años fabricando dentaduras sobre implantes en Toronto.',
    items: [
      { q: '¿Qué son las dentaduras sobre implantes?', a: 'Las dentaduras retenidas por implantes — también llamadas sobredentaduras o dentaduras a presión — se fijan a implantes dentales anclados en el hueso maxilar. A diferencia de las dentaduras tradicionales que se apoyan en las encías, no se mueven, no flotan y no necesitan adhesivo. Existen en dos formas: removible (a presión) y fija (tipo All-on-4).' },
      { q: '¿Cuánto cuestan las dentaduras sobre implantes en Toronto?', a: 'Nuestra sobredentadura cuesta $5,250 precio fijo por arcada — sin impuestos, sin variación. Ambas arcadas juntas: $10,000. La cirugía de implantes es un honorario aparte que fija el cirujano oral — el promedio del año pasado fue de ~$2,370 por implante.' },
      { q: '¿Cuántos implantes necesito?', a: 'Normalmente 3 implantes para una sobredentadura inferior y 4 para una superior. El número exacto depende de su densidad ósea y anatomía — se confirma con una tomografía CBCT antes de cualquier cirugía.' },
      { q: '¿Cuál es la diferencia entre a presión y fija?', a: 'Las sobredentaduras a presión se fijan a sus implantes y se quitan en casa para limpiarlas — muchísimo más estables que las tradicionales, a una fracción del precio de las fijas. Las fijas (All-on-4) van atornilladas y solo las retira un profesional; máxima estabilidad, pero normalmente más de $25,000 por arcada.' },
      { q: 'Ya tengo implantes — ¿pueden hacer una dentadura que les quede?', a: 'Sí — es uno de nuestros casos más comunes. Si sus implantes están sanos y bien posicionados, diseñamos y fresamos una nueva sobredentadura digital que encaje en ellos, o convertimos su dentadura actual. Su único costo es el precio de la sobredentadura.' },
      { q: '¿Cuánto dura el proceso?', a: 'Si ya tiene implantes: normalmente 2–4 semanas. Si primero hay que colocarlos: 3–6 meses de cicatrización tras la cirugía, y luego 2–4 semanas para el diseño y fresado en nuestro laboratorio.' },
      { q: '¿Las dentaduras sobre implantes detienen la pérdida de hueso?', a: 'Los implantes estimulan el hueso maxilar como lo hacen las raíces naturales, lo que ayuda a frenar la reabsorción ósea que las dentaduras tradicionales aceleran. Es uno de los mayores beneficios a largo plazo de los implantes.' },
      { q: '¿De qué zonas del área de Toronto vienen sus pacientes?', a: 'Nuestra clínica y laboratorio están en 2833 Weston Road, North York. Nos visitan pacientes de toda el área metropolitana — Etobicoke, Scarborough, York, Vaughan, Woodbridge, Mississauga, Brampton, Markham y Richmond Hill.' },
    ],
    costLinkLabel: 'Ver el desglose completo de costos →',
  },
  areas: {
    h2: 'Atendemos Toronto y el área metropolitana',
    introPre: 'Nuestra clínica y laboratorio están en ',
    introLink: '2833 Weston Road, North York',
    introPost: ' — a minutos de las autopistas 400 y 401, con estacionamiento gratuito. Recibimos pacientes de dentaduras sobre implantes de:',
    list: ['North York', 'Etobicoke', 'Weston', 'York', 'Scarborough', 'Centro de Toronto', 'Vaughan', 'Woodbridge', 'Mississauga', 'Brampton', 'Markham', 'Richmond Hill'],
  },
  cta: {
    h2a: '¿Listo para dejar de pelear',
    h2b: 'con su propia dentadura?',
    p: 'Consulta gratuita. Evaluación honesta. Precios fijos. Si no es candidato para dentaduras sobre implantes, también se lo diremos.',
    book: 'Reservar cita',
  },
};

const it: ImplantPillarContent = {
  meta: {
    title: 'Protesi su impianti a Toronto | Overdenture ad aggancio e fisse — 5.250 $ fisso per arcata',
    description: 'Protesi su impianti a Toronto di Damien Hiorth DD — 25 anni di esperienza. Overdenture ad aggancio 5.250 $ prezzo fisso per arcata, progettate e fresate CNC nel nostro laboratorio di North York. Consulenza gratuita: (416) 245-7474.',
    ogTitle: 'Protesi su impianti a Toronto | Ad aggancio e fisse',
    ogDescription: 'Basta lottare con una dentiera che balla. Overdenture ad aggancio e fisse, 5.250 $ fisso per arcata, fresate CNC nel nostro laboratorio di North York. Consulenza gratuita.',
  },
  crumbs: { home: 'Home', services: 'Servizi di protesi', current: 'Protesi su impianti' },
  hero: {
    badge: 'Gli specialisti delle protesi su impianti a Toronto · 25 anni',
    h1a: 'Protesi dentarie su impianti',
    h1b: 'a Toronto',
    sub: 'Overdenture ad aggancio e fisse che non si spostano, non ballano e non richiedono adesivo — progettate da Damien Hiorth DD e fresate CNC nel nostro laboratorio di North York.',
    priceLine: '**5.250 $ prezzo fisso per arcata.** Niente tasse. Niente «a partire da». Consulenza gratuita.',
    ctaCall: 'Prenoti la sua consulenza gratuita — (416) 245-7474',
    ctaPricing: 'Vedi i prezzi esatti',
  },
  stats: [
    { stat: '5.250 $', label: 'Fisso per arcata — senza tasse' },
    { stat: '25+', label: 'Anni di esperienza in protesi su impianti' },
    { stat: '3–4', label: 'Impianti per arcata' },
    { stat: '100%', label: 'Progettate e fresate in sede' },
  ],
  what: {
    badge: 'La soluzione permanente alle dentiere che ballano',
    h2: 'Cosa sono le protesi su impianti?',
    p1: "Una protesi su impianti — chiamata anche overdenture o protesi ad aggancio — si fissa a impianti dentali ancorati nell'osso mascellare invece di appoggiarsi alle gengive. Il risultato: una protesi che resta al suo posto quando mangia, ride e parla.",
    p2: "Se usa l'adesivo ogni giorno, evita bistecca, mais o pane croccante, o sente la protesi inferiore sollevarsi appena morde — questo trattamento è stato inventato esattamente per lei.",
    bullets: [
      "Niente adesivo — a tenere sono gli attacchi, non la colla",
      'Torni a mangiare i cibi che aveva eliminato',
      'Niente rumori, oscillazioni o movimenti',
      "Rallenta la perdita ossea che le dentiere tradizionali accelerano",
      'Rimovibile a casa per una pulizia facile (ad aggancio)',
    ],
    guideLink: 'La sua dentiera balla? Legga la nostra guida gratuita',
    caption: 'Paziente reale di Dentures Direct — overdenture su impianti, progettata e fresata nel nostro laboratorio di North York.',
  },
  compare: {
    h2: 'Protesi ad aggancio vs. fisse',
    intro: "Entrambe si fissano agli impianti. La differenza è il come — e il costo. La maggior parte dei nostri pazienti di Toronto sceglie l'aggancio per una ragione semplice: stabilità quasi fissa a un quinto del prezzo.",
    snap: {
      tag: 'La nostra specialità',
      title: 'Overdenture ad aggancio',
      body: 'Si aggancia a **3 impianti (inferiore)** o **4 impianti (superiore)** con attacchi tipo locator. La rimuove a casa per la pulizia; si riaggancia salda come una roccia.',
      bullets: [
        'Nettamente più stabile di una dentiera tradizionale',
        'Facile da pulire e mantenere a casa',
        "Attacchi sostituibili con l'usura — manutenzione economica",
        'Fresata CNC in sede per una precisione ripetibile',
      ],
      price: '5.250 $',
      priceSuffix: 'fisso per arcata · senza tasse',
      priceNote: "Entrambe le arcate: 10.000 $ (risparmio di 500 $). La chirurgia implantare è preventivata a parte dal chirurgo orale.",
    },
    fixed: {
      title: 'Protesi fisse (All-on-4)',
      body: 'Avvitate permanentemente su 4 o più impianti e rimosse solo da un professionista. La sensazione più vicina ai denti naturali — con un investimento decisamente maggiore.',
      bullets: [
        'Massima stabilità per mangiare e parlare',
        'Mai rimossa a casa',
        "Aiuta a prevenire il deterioramento dell'osso",
      ],
      price: '25.000 $+',
      priceSuffix: 'per arcata, di norma',
      priceNote: "Complessità, componenti e requisiti chirurgici determinano il costo. Le diremo onestamente se ne vale la pena nel suo caso.",
    },
    costLink: 'Analisi completa e trasparente dei costi — chirurgia inclusa',
  },
  process: {
    h2: 'Le 5 fasi delle protesi su impianti',
    intro: "Dalla prima consulenza alla prova finale — ecco esattamente cosa succede e chi fa cosa.",
    steps: [
      { title: 'Consulenza gratuita', body: "Valutiamo la mascella, la protesi attuale e gli impianti esistenti. Consigli onesti — se non è un candidato, glielo diremo." },
      { title: 'Inserimento degli impianti', body: "Un chirurgo orale inserisce gli impianti — 3 sotto, 4 sopra. Il suo chirurgo di fiducia o uno della nostra rete nell'area di Toronto. Prima è sempre richiesta una TAC CBCT." },
      { title: 'Guarigione e integrazione', body: "Gli impianti si integrano con l'osso in 3–6 mesi. Nel frattempo porta una protesi provvisoria — non resta mai senza denti." },
      { title: 'Impronte digitali', body: 'Niente paste. Il nostro scanner intraorale rileva mascella e posizione degli impianti al micron, e Damien DD progetta personalmente la sua overdenture.' },
      { title: 'Fresatura e prova', body: 'Fresata CNC nel nostro laboratorio di North York — nessuna esternalizzazione. La adattiamo, regoliamo gli attacchi e le mostriamo esattamente come prendersene cura.' },
    ],
    already: {
      title: 'Ha già gli impianti?',
      body: 'Salti alla fase 4. Realizziamo overdenture su impianti inseriti ovunque — di solito pronte in 2–4 settimane.',
      cta: 'Chiami per un preventivo scritto →',
    },
  },
  why: {
    h2a: 'Perché i pazienti di Toronto ci scelgono',
    h2b: 'per le protesi su impianti',
    p1: "La maggior parte delle cliniche manda il lavoro a un laboratorio esterno e aspetta settimane. Noi no. Ogni overdenture è **progettata personalmente da Damien e fresata nel nostro laboratorio in fondo al corridoio** — tempi più rapidi, controllo di qualità diretto e una precisione matematica.",
    p2pre: 'Siamo una ',
    p2link: 'clinica interamente digitale',
    p2post: ': scansione intraorale invece delle impronte con le paste, progettazione CAD e fresatura CNC con tolleranza di 3 micron. E i nostri prezzi sono fissi e pubblici — 5.250 $ per arcata, perché non dovrebbero servire tre consulenze per sapere quanto costa qualcosa.',
    bullets: [
      '25 anni di esperienza in protesi su impianti',
      'Laboratorio digitale interno — zero esternalizzazione',
      'Prezzi fissi e pubblicati',
      'Regolamentata dal College of Denturists of Ontario',
    ],
    photoTitle: 'Fondatore e denturista capo · 25 anni',
  },
  faq: {
    h2: 'Domande sulle protesi su impianti, con risposta',
    sub: 'Risposte dirette da 25 anni di protesi su impianti realizzate a Toronto.',
    items: [
      { q: 'Cosa sono le protesi su impianti?', a: "Le protesi su impianti — dette anche overdenture o protesi ad aggancio — si fissano a impianti dentali ancorati nell'osso mascellare. A differenza delle dentiere tradizionali che poggiano sulle gengive, non si spostano, non ballano e non richiedono adesivo. Esistono in due forme: rimovibile (ad aggancio) e fissa (tipo All-on-4)." },
      { q: 'Quanto costano le protesi su impianti a Toronto?', a: "La nostra overdenture costa 5.250 $ prezzo fisso per arcata — senza tasse, senza variazioni. Entrambe le arcate insieme: 10.000 $. La chirurgia implantare è un onorario separato stabilito dal chirurgo orale — la media dell'anno scorso era di circa 2.370 $ per impianto." },
      { q: 'Quanti impianti mi servono?', a: "Di norma 3 impianti per un'overdenture inferiore e 4 per una superiore. Il numero esatto dipende dalla densità ossea e dall'anatomia — confermato con una TAC CBCT prima di qualsiasi intervento." },
      { q: 'Che differenza c\'è tra aggancio e fissa?', a: "Le overdenture ad aggancio si fissano agli impianti e si tolgono a casa per la pulizia — nettamente più stabili delle dentiere tradizionali, a una frazione del prezzo delle fisse. Le protesi fisse (All-on-4) sono avvitate e rimosse solo da un professionista; massima stabilità, ma di solito oltre 25.000 $ per arcata." },
      { q: 'Ho già gli impianti — potete fare una protesi che si adatti?', a: "Sì — è uno dei nostri casi più comuni. Se i suoi impianti sono sani e ben posizionati, progettiamo e fresiamo una nuova overdenture digitale che vi si agganci, oppure convertiamo la sua protesi attuale. Il suo unico costo è il prezzo dell'overdenture." },
      { q: 'Quanto dura il processo?', a: 'Se ha già gli impianti: di norma 2–4 settimane. Se prima vanno inseriti: 3–6 mesi di guarigione dopo la chirurgia, poi 2–4 settimane per progettazione e fresatura nel nostro laboratorio.' },
      { q: 'Le protesi su impianti fermano la perdita ossea?', a: "Gli impianti stimolano l'osso mascellare come fanno le radici naturali, contribuendo a rallentare il riassorbimento osseo che le dentiere tradizionali accelerano. È uno dei maggiori benefici a lungo termine degli impianti." },
      { q: "Da dove arrivano i suoi pazienti nell'area di Toronto?", a: "La nostra clinica e il laboratorio sono al 2833 Weston Road a North York. I pazienti arrivano da tutta l'area metropolitana — Etobicoke, Scarborough, York, Vaughan, Woodbridge, Mississauga, Brampton, Markham e Richmond Hill." },
    ],
    costLinkLabel: 'Vedi l\'analisi completa dei costi →',
  },
  areas: {
    h2: "Al servizio di Toronto e dell'area metropolitana",
    introPre: 'La nostra clinica e il laboratorio sono al ',
    introLink: '2833 Weston Road, North York',
    introPost: ' — a pochi minuti dalle autostrade 400 e 401, con parcheggio gratuito. I pazienti delle protesi su impianti ci raggiungono da:',
    list: ['North York', 'Etobicoke', 'Weston', 'York', 'Scarborough', 'Centro di Toronto', 'Vaughan', 'Woodbridge', 'Mississauga', 'Brampton', 'Markham', 'Richmond Hill'],
  },
  cta: {
    h2a: 'Pronto a smettere di lottare',
    h2b: 'con la sua dentiera?',
    p: 'Consulenza gratuita. Valutazione onesta. Prezzi fissi. Se non è un candidato per le protesi su impianti, glielo diremo.',
    book: 'Prenota online',
  },
};

const vi: ImplantPillarContent = {
  meta: {
    title: 'Hàm giả trên implant tại Toronto | Hàm bấm khớp & cố định — 5.250 $ giá cố định mỗi hàm',
    description: 'Hàm giả trên implant tại Toronto bởi Damien Hiorth DD — 25 năm kinh nghiệm. Hàm bấm khớp 5.250 $ giá cố định mỗi hàm, thiết kế và phay CNC tại phòng lab riêng ở North York. Tư vấn miễn phí: (416) 245-7474.',
    ogTitle: 'Hàm giả trên implant tại Toronto | Bấm khớp & cố định',
    ogDescription: 'Chấm dứt hàm giả lỏng lẻo. Hàm giả bấm khớp và cố định trên implant, 5.250 $ giá cố định mỗi hàm, phay CNC tại phòng lab riêng ở North York. Tư vấn miễn phí.',
  },
  crumbs: { home: 'Trang chủ', services: 'Dịch vụ hàm giả', current: 'Hàm giả trên implant' },
  hero: {
    badge: 'Chuyên gia hàm giả trên implant tại Toronto · 25 năm',
    h1a: 'Hàm giả trên implant',
    h1b: 'tại Toronto',
    sub: 'Hàm giả bấm khớp và cố định trên implant — không xê dịch, không bập bênh, không cần keo dán — do Damien Hiorth DD thiết kế và phay CNC tại phòng lab riêng ở North York.',
    priceLine: '**5.250 $ giá cố định mỗi hàm.** Không thuế. Không “từ … trở lên”. Tư vấn miễn phí.',
    ctaCall: 'Đặt lịch tư vấn miễn phí — (416) 245-7474',
    ctaPricing: 'Xem bảng giá chi tiết',
  },
  stats: [
    { stat: '5.250 $', label: 'Cố định mỗi hàm — không thuế' },
    { stat: '25+', label: 'Năm kinh nghiệm hàm giả trên implant' },
    { stat: '3–4', label: 'Trụ implant mỗi hàm' },
    { stat: '100%', label: 'Thiết kế & phay tại chỗ' },
  ],
  what: {
    badge: 'Giải pháp vĩnh viễn cho hàm giả lỏng lẻo',
    h2: 'Hàm giả trên implant là gì?',
    p1: 'Hàm giả trên implant — còn gọi là hàm phủ trên implant hay hàm bấm khớp — gắn vào các trụ implant được cấy trong xương hàm thay vì tựa lên nướu. Kết quả: một chiếc hàm nằm yên tại chỗ khi bạn ăn, cười và nói chuyện.',
    p2: 'Nếu bạn phải dùng keo dán mỗi ngày, kiêng bít tết, bắp hay bánh mì giòn, hoặc cảm thấy hàm dưới bập bênh ngay khi cắn xuống — phương pháp này được tạo ra chính xác cho bạn.',
    bullets: [
      'Không keo dán — khớp nối giữ chặt, không phải keo',
      'Ăn lại những món bạn từng phải kiêng',
      'Không phát tiếng kêu, không lung lay, không bập bênh',
      'Làm chậm quá trình tiêu xương mà hàm giả truyền thống đẩy nhanh',
      'Tháo ra tại nhà để vệ sinh dễ dàng (loại bấm khớp)',
    ],
    guideLink: 'Hàm giả bị lỏng? Đọc cẩm nang miễn phí của chúng tôi',
    caption: 'Bệnh nhân thật của Dentures Direct — hàm giả trên implant, thiết kế và phay tại phòng lab North York của chúng tôi.',
  },
  compare: {
    h2: 'Hàm bấm khớp vs. hàm cố định trên implant',
    intro: 'Cả hai đều gắn vào implant. Khác biệt nằm ở cách gắn — và chi phí. Đa số bệnh nhân Toronto của chúng tôi chọn loại bấm khớp vì một lý do đơn giản: độ ổn định gần như cố định với một phần năm chi phí.',
    snap: {
      tag: 'Chuyên môn của chúng tôi',
      title: 'Hàm phủ bấm khớp',
      body: 'Bấm vào **3 trụ implant (hàm dưới)** hoặc **4 trụ (hàm trên)** bằng khớp nối kiểu locator. Bạn tháo ra tại nhà để vệ sinh; bấm lại là chắc như bàn thạch.',
      bullets: [
        'Ổn định vượt trội so với hàm giả truyền thống',
        'Dễ vệ sinh và bảo dưỡng tại nhà',
        'Khớp nối thay được khi mòn — chi phí bảo trì thấp',
        'Phay CNC tại chỗ cho độ khít chính xác, đồng nhất',
      ],
      price: '5.250 $',
      priceSuffix: 'cố định mỗi hàm · không thuế',
      priceNote: 'Cả hai hàm: 10.000 $ (tiết kiệm 500 $). Phẫu thuật cấy implant do bác sĩ phẫu thuật báo giá riêng.',
    },
    fixed: {
      title: 'Hàm cố định (All-on-4)',
      body: 'Bắt vít cố định vào 4 trụ implant trở lên, chỉ tháo được bởi chuyên gia. Cảm giác gần với răng thật nhất — với mức đầu tư cao hơn đáng kể.',
      bullets: [
        'Ổn định tối đa khi ăn và nói',
        'Không bao giờ tháo tại nhà',
        'Giúp ngăn ngừa tiêu xương hàm',
      ],
      price: '25.000 $+',
      priceSuffix: 'mỗi hàm, thông thường',
      priceNote: 'Độ phức tạp, vật liệu và yêu cầu phẫu thuật quyết định chi phí. Chúng tôi sẽ nói thẳng liệu nó có xứng đáng với trường hợp của bạn hay không.',
    },
    costLink: 'Bảng phân tích chi phí đầy đủ, minh bạch — bao gồm phí phẫu thuật',
  },
  process: {
    h2: '5 giai đoạn làm hàm giả trên implant',
    intro: 'Từ buổi tư vấn đầu tiên đến lần thử cuối cùng — đây chính xác là những gì diễn ra, và ai làm gì.',
    steps: [
      { title: 'Tư vấn miễn phí', body: 'Chúng tôi đánh giá xương hàm, hàm giả hiện tại và các trụ implant sẵn có. Tư vấn trung thực — nếu bạn không phù hợp, chúng tôi sẽ nói thẳng.' },
      { title: 'Cấy trụ implant', body: 'Bác sĩ phẫu thuật miệng cấy trụ — 3 trụ hàm dưới, 4 trụ hàm trên. Bạn có thể dùng bác sĩ riêng hoặc mạng lưới tin cậy của chúng tôi ở vùng Toronto. Luôn phải chụp CBCT trước.' },
      { title: 'Lành thương & tích hợp', body: 'Trụ implant tích hợp với xương trong 3–6 tháng. Suốt thời gian đó bạn đeo hàm tạm — không bao giờ phải thiếu răng.' },
      { title: 'Lấy dấu kỹ thuật số', body: 'Không bột dấu. Máy quét trong miệng ghi lại xương hàm và vị trí trụ implant chính xác đến micron, và Damien DD đích thân thiết kế hàm của bạn.' },
      { title: 'Phay & lắp hàm', body: 'Phay CNC tại phòng lab North York của chúng tôi — không thuê ngoài. Chúng tôi lắp hàm, tinh chỉnh khớp nối và hướng dẫn bạn cách chăm sóc chi tiết.' },
    ],
    already: {
      title: 'Bạn đã có sẵn implant?',
      body: 'Bỏ qua đến giai đoạn 4. Chúng tôi làm hàm phủ trên implant được cấy ở bất kỳ đâu — thường hoàn thành trong 2–4 tuần.',
      cta: 'Gọi để nhận báo giá bằng văn bản →',
    },
  },
  why: {
    h2a: 'Vì sao bệnh nhân Toronto chọn chúng tôi',
    h2b: 'cho hàm giả trên implant',
    p1: 'Đa số phòng khám gửi hàm implant cho lab bên ngoài rồi chờ hàng tuần. Chúng tôi thì không. Mỗi chiếc hàm đều được **Damien đích thân thiết kế và phay ngay tại phòng lab cuối hành lang** — nghĩa là nhanh hơn, kiểm soát chất lượng trực tiếp, và độ khít chính xác tuyệt đối.',
    p2pre: 'Chúng tôi là một ',
    p2link: 'phòng khám kỹ thuật số hoàn toàn',
    p2post: ': quét trong miệng thay vì lấy dấu bằng bột, thiết kế CAD, và phay CNC với dung sai 3 micron. Giá của chúng tôi cố định và công khai — 5.250 $ mỗi hàm, vì bạn không nên phải đi tư vấn ba lần chỉ để biết giá.',
    bullets: [
      '25 năm kinh nghiệm hàm giả trên implant',
      'Phòng lab kỹ thuật số tại chỗ — không thuê ngoài',
      'Giá cố định, công khai',
      'Được quản lý bởi College of Denturists of Ontario',
    ],
    photoTitle: 'Nhà sáng lập & Chuyên viên phục hình chính · 25 năm',
  },
  faq: {
    h2: 'Giải đáp về hàm giả trên implant',
    sub: 'Câu trả lời thẳng thắn từ 25 năm làm hàm giả trên implant tại Toronto.',
    items: [
      { q: 'Hàm giả trên implant là gì?', a: 'Hàm giả trên implant — còn gọi là hàm phủ hay hàm bấm khớp — gắn vào các trụ implant cấy trong xương hàm. Khác với hàm giả truyền thống tựa lên nướu, chúng không xê dịch, không bập bênh và không cần keo dán. Có hai loại: tháo lắp (bấm khớp) và cố định (kiểu All-on-4).' },
      { q: 'Hàm giả trên implant ở Toronto giá bao nhiêu?', a: 'Hàm phủ của chúng tôi giá 5.250 $ cố định mỗi hàm — không thuế, không phát sinh. Cả hai hàm là 10.000 $. Phẫu thuật cấy implant là chi phí riêng do bác sĩ phẫu thuật quyết định — trung bình năm ngoái khoảng 2.370 $ mỗi trụ.' },
      { q: 'Tôi cần bao nhiêu trụ implant?', a: 'Thông thường 3 trụ cho hàm dưới và 4 trụ cho hàm trên. Số lượng chính xác phụ thuộc vào mật độ xương và cấu trúc hàm — được xác nhận bằng phim CBCT trước khi phẫu thuật.' },
      { q: 'Hàm bấm khớp và hàm cố định khác nhau thế nào?', a: 'Hàm bấm khớp gắn vào trụ implant và tháo ra tại nhà để vệ sinh — ổn định vượt trội so với hàm truyền thống với chi phí chỉ bằng một phần nhỏ loại cố định. Hàm cố định (All-on-4) được bắt vít và chỉ chuyên gia mới tháo được; ổn định tối đa nhưng thường trên 25.000 $ mỗi hàm.' },
      { q: 'Tôi đã có implant — bạn có làm được hàm vừa với chúng không?', a: 'Có — đây là một trong những ca phổ biến nhất của chúng tôi. Nếu trụ implant của bạn khỏe và đúng vị trí, chúng tôi thiết kế và phay một hàm kỹ thuật số mới bấm vào chúng, hoặc chuyển đổi hàm hiện tại. Chi phí duy nhất là giá chiếc hàm.' },
      { q: 'Toàn bộ quá trình mất bao lâu?', a: 'Nếu bạn đã có implant: thường 2–4 tuần. Nếu cần cấy trước: 3–6 tháng lành thương sau phẫu thuật, rồi 2–4 tuần để thiết kế và phay tại phòng lab của chúng tôi.' },
      { q: 'Hàm giả trên implant có ngăn tiêu xương không?', a: 'Trụ implant kích thích xương hàm giống như chân răng thật, giúp làm chậm quá trình tiêu xương mà hàm giả truyền thống đẩy nhanh. Đây là một trong những lợi ích sức khỏe lâu dài lớn nhất của implant.' },
      { q: 'Bệnh nhân của bạn đến từ những khu vực nào?', a: 'Phòng khám và lab của chúng tôi ở 2833 Weston Road, North York. Bệnh nhân đến từ khắp vùng Đại Toronto — Etobicoke, Scarborough, York, Vaughan, Woodbridge, Mississauga, Brampton, Markham và Richmond Hill.' },
    ],
    costLinkLabel: 'Xem bảng phân tích chi phí đầy đủ →',
  },
  areas: {
    h2: 'Phục vụ Toronto & vùng Đại Toronto',
    introPre: 'Phòng khám và lab của chúng tôi tại ',
    introLink: '2833 Weston Road, North York',
    introPost: ' — cách cao tốc 400 và 401 vài phút, có bãi đậu xe miễn phí. Bệnh nhân hàm giả trên implant đến từ:',
    list: ['North York', 'Etobicoke', 'Weston', 'York', 'Scarborough', 'Trung tâm Toronto', 'Vaughan', 'Woodbridge', 'Mississauga', 'Brampton', 'Markham', 'Richmond Hill'],
  },
  cta: {
    h2a: 'Sẵn sàng chấm dứt cuộc chiến',
    h2b: 'với chính hàm giả của mình?',
    p: 'Tư vấn miễn phí. Đánh giá trung thực. Giá cố định. Nếu bạn không phù hợp với hàm giả trên implant, chúng tôi cũng sẽ nói thẳng.',
    book: 'Đặt lịch hẹn',
  },
};

export const implantPillarContent: Record<string, ImplantPillarContent> = { en, fr, es, it, vi };

export function getImplantPillarContent(locale: string): ImplantPillarContent {
  return implantPillarContent[locale] ?? en;
}
