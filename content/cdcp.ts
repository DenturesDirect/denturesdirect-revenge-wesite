// Copy for the CDCP pages (pillar, covered services, how to apply), all locales.
// Consumed by the three pages and the pillar layout metadata.

export type CdcpContent = {
  meta: { title: string; description: string; ogTitle: string; ogDescription: string };
  pillar: { badge: string; h1: string; sub: string; ctaApply: string; ctaServices: string };
  services: {
    metaTitle: string; metaDescription: string;
    badge: string; h1a: string; h1b: string; sub: string;
    coveredTitle: string;
    covered: { title: string; desc: string }[];
    preauthTitle: string; preauth1: string; preauth2: string;
    copayTitle: string; copayText: string; disclaimer: string;
  };
  apply: {
    metaTitle: string; metaDescription: string;
    badge: string; h1a: string; h1b: string; sub: string;
    stepsTitle: string;
    steps: { title: string; desc: string }[];
    ctaTitle: string; ctaText: string; ctaBtn: string;
  };
};

const en: CdcpContent = {
  meta: {
    title: 'CDCP Denturist Toronto | Canadian Dental Care Plan Dentures | Dentures Direct',
    description: 'Dentures Direct is an official CDCP provider in Toronto and North York. Get your digital dentures covered under the Canadian Dental Care Plan. Serving eligible Canadian seniors in the GTA.',
    ogTitle: 'CDCP Denturist Toronto | Canadian Dental Care Plan Dentures',
    ogDescription: 'Official CDCP provider in Toronto. Get premium digital dentures fully covered under the Canadian Dental Care Plan for eligible Canadian seniors.',
  },
  pillar: {
    badge: 'Official Provider',
    h1: 'Canadian Dental Care Plan (CDCP)',
    sub: 'We proudly accept the CDCP. Get your premium digital dentures covered if you are an eligible Canadian senior.',
    ctaApply: 'Check Eligibility & Apply',
    ctaServices: 'View Covered Services',
  },
  services: {
    metaTitle: 'CDCP Covered Denture Services Toronto | What the Plan Pays For | Dentures Direct',
    metaDescription: 'See which denture services the Canadian Dental Care Plan (CDCP) covers in Toronto — complete dentures, partials, repairs, relines, exams. Official CDCP provider, North York.',
    badge: 'CDCP Benefits Guide',
    h1a: 'CDCP Covered',
    h1b: 'Denture Services',
    sub: 'As an authorized provider in Toronto, Dentures Direct accepts the Canadian Dental Care Plan for a wide variety of essential prosthodontic services. Discover what is covered under your new plan.',
    coveredTitle: 'Covered Denture Services',
    covered: [
      { title: 'Complete Standard Dentures', desc: 'Full upper and lower plates for patients missing all teeth in an arch.' },
      { title: 'Removable Partial Dentures', desc: 'Standard cast metal or acrylic partials to replace specific missing teeth.' },
      { title: 'Emergency Repairs', desc: 'Fixing cracked bases or reattaching lost artificial teeth.' },
      { title: 'Relining & Rebasing', desc: 'Adjusting the fit of your current dentures to accommodate natural bone loss.' },
      { title: 'Exams & Checkups', desc: 'Regular clinical examinations and periodic checkups are covered to maintain your oral health.' },
      { title: 'Tooth Additions & Adjustments', desc: 'We can add teeth to existing appliances or provide necessary adjustments for comfort.' },
    ],
    preauthTitle: 'Important Pre-Authorizations',
    preauth1: 'While the CDCP covers many standard denture services, it\'s important to know that major prosthodontic work (like new complete or partial dentures) often requires **pre-authorization**.',
    preauth2: 'Don\'t worry — our administration team handles all the paperwork. We will examine your mouth, submit the exact treatment plan to Sun Life, and confirm your coverage amounts before any work begins, so you never have unexpected out-of-pocket costs.',
    copayTitle: 'Note on Co-Payments',
    copayText: 'Depending on your family income bracket, the CDCP may cover 100%, 60%, or 40% of the standard fee guide. You are responsible for any remaining co-payment portion.',
    disclaimer: 'Disclaimer: Please note that 100% coverage under the CDCP fee guide does not fall in line with usual denturist fees. We will be happy to provide 100% transparency on pricing during your initial consultation.',
  },
  apply: {
    metaTitle: 'How to Apply for CDCP Dentures in Toronto | Step-by-Step | Dentures Direct',
    metaDescription: 'How to apply for the Canadian Dental Care Plan (CDCP): eligibility, Service Canada application, and booking with Dentures Direct in North York Toronto. We handle the paperwork.',
    badge: 'Official CDCP Provider',
    h1a: 'How to Apply for the',
    h1b: 'Canadian Dental Care Plan',
    sub: 'The CDCP provides coverage for high-quality digital dentures to eligible Canadians. Dentures Direct is proud to be an official participating provider in Toronto. Here is everything you need to know to get started.',
    stepsTitle: 'Your 3-Step Guide to CDCP Dentures',
    steps: [
      { title: 'Check Your Eligibility', desc: 'The CDCP is open to seniors aged 65 and older, adults with a valid Disability Tax Credit certificate, and children under 18. You must have an adjusted family net income under $90,000 and have filed your tax return for the previous year.' },
      { title: 'Apply via Service Canada', desc: 'You can apply online through the official Service Canada website. Once approved, you will receive a welcome package from Sun Life (the program administrator) containing your member card, start date, and details on your exact coverage percentage.' },
      { title: 'Book Your Consultation with Dentures Direct', desc: 'Once your coverage begins, simply bring your Sun Life member card to our clinic. We will handle all the direct billing and pre-authorizations for you, so you can focus entirely on getting your new, custom-milled smile.' },
    ],
    ctaTitle: 'Have Your Sun Life Card Ready?',
    ctaText: 'Call our front desk to schedule your impression-free digital scan today.',
    ctaBtn: 'Call (416) 245-7474',
  },
};

const fr: CdcpContent = {
  meta: {
    title: 'Denturologiste RCSD à Toronto | Prothèses du Régime canadien de soins dentaires | Dentures Direct',
    description: 'Dentures Direct est un fournisseur officiel du RCSD à Toronto et North York. Faites couvrir vos prothèses numériques par le Régime canadien de soins dentaires. Au service des aînés canadiens admissibles du Grand Toronto.',
    ogTitle: 'Denturologiste RCSD à Toronto | Prothèses du Régime canadien de soins dentaires',
    ogDescription: 'Fournisseur officiel du RCSD à Toronto. Faites couvrir vos prothèses numériques haut de gamme par le Régime canadien de soins dentaires pour les aînés canadiens admissibles.',
  },
  pillar: {
    badge: 'Fournisseur officiel',
    h1: 'Régime canadien de soins dentaires (RCSD)',
    sub: 'Nous acceptons fièrement le RCSD. Faites couvrir vos prothèses numériques haut de gamme si vous êtes un aîné canadien admissible.',
    ctaApply: 'Vérifier l\'admissibilité et postuler',
    ctaServices: 'Voir les services couverts',
  },
  services: {
    metaTitle: 'Services de prothèses couverts par le RCSD à Toronto | Ce que le régime paie | Dentures Direct',
    metaDescription: 'Découvrez quels services de prothèses le Régime canadien de soins dentaires (RCSD) couvre à Toronto — prothèses complètes, partielles, réparations, regarnissages, examens. Fournisseur officiel RCSD, North York.',
    badge: 'Guide des prestations RCSD',
    h1a: 'Services de prothèses',
    h1b: 'couverts par le RCSD',
    sub: 'À titre de fournisseur autorisé à Toronto, Dentures Direct accepte le Régime canadien de soins dentaires pour une grande variété de services prosthodontiques essentiels. Découvrez ce qui est couvert par votre nouveau régime.',
    coveredTitle: 'Services de prothèses couverts',
    covered: [
      { title: 'Prothèses complètes standard', desc: 'Prothèses complètes supérieures et inférieures pour les patients qui ont perdu toutes leurs dents sur une arcade.' },
      { title: 'Prothèses partielles amovibles', desc: 'Prothèses partielles standard en métal coulé ou en acrylique pour remplacer des dents manquantes précises.' },
      { title: 'Réparations d\'urgence', desc: 'Réparation des bases fissurées ou recollage des dents artificielles perdues.' },
      { title: 'Regarnissage et rebasage', desc: 'Ajustement de vos prothèses actuelles pour compenser la perte osseuse naturelle.' },
      { title: 'Examens et contrôles', desc: 'Les examens cliniques réguliers et les contrôles périodiques sont couverts pour préserver votre santé buccodentaire.' },
      { title: 'Ajouts de dents et ajustements', desc: 'Nous pouvons ajouter des dents à vos appareils existants ou effectuer les ajustements nécessaires pour votre confort.' },
    ],
    preauthTitle: 'Autorisations préalables importantes',
    preauth1: 'Bien que le RCSD couvre de nombreux services de prothèses standard, il est important de savoir que les travaux prosthodontiques majeurs (comme de nouvelles prothèses complètes ou partielles) exigent souvent une **autorisation préalable**.',
    preauth2: 'Ne vous inquiétez pas — notre équipe administrative s\'occupe de toute la paperasse. Nous examinerons votre bouche, soumettrons le plan de traitement exact à Sun Life et confirmerons vos montants de couverture avant tout travail, pour que vous n\'ayez jamais de frais imprévus.',
    copayTitle: 'À propos des quotes-parts',
    copayText: 'Selon votre tranche de revenu familial, le RCSD peut couvrir 100 %, 60 % ou 40 % du guide de tarifs standard. Vous êtes responsable de toute quote-part restante.',
    disclaimer: 'Avis : Veuillez noter qu\'une couverture à 100 % selon le guide de tarifs du RCSD ne correspond pas aux honoraires habituels des denturologistes. Nous serons heureux de vous offrir une transparence totale sur les prix lors de votre consultation initiale.',
  },
  apply: {
    metaTitle: 'Comment demander des prothèses RCSD à Toronto | Étape par étape | Dentures Direct',
    metaDescription: 'Comment demander le Régime canadien de soins dentaires (RCSD) : admissibilité, demande auprès de Service Canada et prise de rendez-vous chez Dentures Direct à North York, Toronto. Nous gérons la paperasse.',
    badge: 'Fournisseur officiel du RCSD',
    h1a: 'Comment demander le',
    h1b: 'Régime canadien de soins dentaires',
    sub: 'Le RCSD offre une couverture pour des prothèses numériques de haute qualité aux Canadiens admissibles. Dentures Direct est fier d\'être un fournisseur participant officiel à Toronto. Voici tout ce qu\'il faut savoir pour commencer.',
    stepsTitle: 'Votre guide en 3 étapes vers les prothèses RCSD',
    steps: [
      { title: 'Vérifiez votre admissibilité', desc: 'Le RCSD est offert aux aînés de 65 ans et plus, aux adultes titulaires d\'un certificat valide de crédit d\'impôt pour personnes handicapées et aux enfants de moins de 18 ans. Vous devez avoir un revenu familial net rajusté inférieur à 90 000 $ et avoir produit votre déclaration de revenus de l\'année précédente.' },
      { title: 'Faites votre demande via Service Canada', desc: 'Vous pouvez faire votre demande en ligne sur le site officiel de Service Canada. Une fois approuvé, vous recevrez une trousse d\'accueil de Sun Life (l\'administrateur du programme) contenant votre carte de membre, votre date de début et les détails de votre pourcentage de couverture exact.' },
      { title: 'Prenez rendez-vous chez Dentures Direct', desc: 'Une fois votre couverture commencée, apportez simplement votre carte de membre Sun Life à notre clinique. Nous nous occupons de toute la facturation directe et des autorisations préalables, pour que vous puissiez vous concentrer sur votre nouveau sourire usiné sur mesure.' },
    ],
    ctaTitle: 'Votre carte Sun Life est prête?',
    ctaText: 'Appelez notre réception pour planifier votre numérisation numérique sans empreinte dès aujourd\'hui.',
    ctaBtn: 'Appelez le (416) 245-7474',
  },
};

const es: CdcpContent = {
  meta: {
    title: 'Denturista CDCP en Toronto | Dentaduras del Plan Canadiense de Atención Dental | Dentures Direct',
    description: 'Dentures Direct es un proveedor oficial del CDCP en Toronto y North York. Cubra sus dentaduras digitales con el Plan Canadiense de Atención Dental. Al servicio de adultos mayores canadienses elegibles en el área de Toronto.',
    ogTitle: 'Denturista CDCP en Toronto | Dentaduras del Plan Canadiense de Atención Dental',
    ogDescription: 'Proveedor oficial del CDCP en Toronto. Cubra sus dentaduras digitales premium con el Plan Canadiense de Atención Dental para adultos mayores canadienses elegibles.',
  },
  pillar: {
    badge: 'Proveedor oficial',
    h1: 'Plan Canadiense de Atención Dental (CDCP)',
    sub: 'Aceptamos con orgullo el CDCP. Cubra sus dentaduras digitales premium si es un adulto mayor canadiense elegible.',
    ctaApply: 'Verificar elegibilidad y solicitar',
    ctaServices: 'Ver servicios cubiertos',
  },
  services: {
    metaTitle: 'Servicios de dentaduras cubiertos por el CDCP en Toronto | Qué paga el plan | Dentures Direct',
    metaDescription: 'Vea qué servicios de dentaduras cubre el Plan Canadiense de Atención Dental (CDCP) en Toronto — dentaduras completas, parciales, reparaciones, rebases, exámenes. Proveedor oficial CDCP, North York.',
    badge: 'Guía de beneficios del CDCP',
    h1a: 'Servicios de dentaduras',
    h1b: 'cubiertos por el CDCP',
    sub: 'Como proveedor autorizado en Toronto, Dentures Direct acepta el Plan Canadiense de Atención Dental para una amplia variedad de servicios prostodónticos esenciales. Descubra qué cubre su nuevo plan.',
    coveredTitle: 'Servicios de dentaduras cubiertos',
    covered: [
      { title: 'Dentaduras completas estándar', desc: 'Placas completas superiores e inferiores para pacientes que han perdido todos los dientes de una arcada.' },
      { title: 'Dentaduras parciales removibles', desc: 'Parciales estándar de metal colado o acrílico para reemplazar dientes faltantes específicos.' },
      { title: 'Reparaciones de emergencia', desc: 'Reparación de bases agrietadas o recolocación de dientes artificiales perdidos.' },
      { title: 'Rebases y reajustes', desc: 'Ajuste de sus dentaduras actuales para compensar la pérdida ósea natural.' },
      { title: 'Exámenes y revisiones', desc: 'Los exámenes clínicos regulares y las revisiones periódicas están cubiertos para mantener su salud bucal.' },
      { title: 'Adiciones de dientes y ajustes', desc: 'Podemos añadir dientes a sus aparatos existentes o hacer los ajustes necesarios para su comodidad.' },
    ],
    preauthTitle: 'Autorizaciones previas importantes',
    preauth1: 'Aunque el CDCP cubre muchos servicios de dentaduras estándar, es importante saber que el trabajo prostodóntico mayor (como nuevas dentaduras completas o parciales) a menudo requiere **autorización previa**.',
    preauth2: 'No se preocupe — nuestro equipo administrativo se encarga de todo el papeleo. Examinaremos su boca, enviaremos el plan de tratamiento exacto a Sun Life y confirmaremos sus montos de cobertura antes de comenzar cualquier trabajo, para que nunca tenga costos inesperados.',
    copayTitle: 'Sobre los copagos',
    copayText: 'Según su nivel de ingresos familiares, el CDCP puede cubrir el 100 %, 60 % o 40 % de la guía de tarifas estándar. Usted es responsable de cualquier copago restante.',
    disclaimer: 'Aviso: Tenga en cuenta que la cobertura del 100 % según la guía de tarifas del CDCP no coincide con los honorarios habituales de los denturistas. Con gusto le ofreceremos total transparencia en los precios durante su consulta inicial.',
  },
  apply: {
    metaTitle: 'Cómo solicitar dentaduras del CDCP en Toronto | Paso a paso | Dentures Direct',
    metaDescription: 'Cómo solicitar el Plan Canadiense de Atención Dental (CDCP): elegibilidad, solicitud en Service Canada y cita con Dentures Direct en North York, Toronto. Nosotros gestionamos el papeleo.',
    badge: 'Proveedor oficial del CDCP',
    h1a: 'Cómo solicitar el',
    h1b: 'Plan Canadiense de Atención Dental',
    sub: 'El CDCP ofrece cobertura para dentaduras digitales de alta calidad a los canadienses elegibles. Dentures Direct se enorgullece de ser un proveedor participante oficial en Toronto. Esto es todo lo que necesita saber para empezar.',
    stepsTitle: 'Su guía de 3 pasos para las dentaduras del CDCP',
    steps: [
      { title: 'Verifique su elegibilidad', desc: 'El CDCP está disponible para adultos mayores de 65 años, adultos con un certificado válido de Crédito Fiscal por Discapacidad y niños menores de 18 años. Debe tener un ingreso familiar neto ajustado inferior a $90,000 y haber presentado su declaración de impuestos del año anterior.' },
      { title: 'Solicite a través de Service Canada', desc: 'Puede solicitarlo en línea a través del sitio web oficial de Service Canada. Una vez aprobado, recibirá un paquete de bienvenida de Sun Life (el administrador del programa) con su tarjeta de miembro, fecha de inicio y detalles de su porcentaje de cobertura exacto.' },
      { title: 'Reserve su consulta con Dentures Direct', desc: 'Una vez que comience su cobertura, simplemente traiga su tarjeta de miembro de Sun Life a nuestra clínica. Nos encargamos de toda la facturación directa y las autorizaciones previas, para que usted se concentre en su nueva sonrisa fresada a medida.' },
    ],
    ctaTitle: '¿Tiene lista su tarjeta de Sun Life?',
    ctaText: 'Llame a nuestra recepción para agendar hoy su escaneo digital sin impresiones.',
    ctaBtn: 'Llame al (416) 245-7474',
  },
};

const it: CdcpContent = {
  meta: {
    title: 'Odontotecnico CDCP a Toronto | Protesi del Piano canadese di cure dentistiche | Dentures Direct',
    description: 'Dentures Direct è un fornitore ufficiale del CDCP a Toronto e North York. Fai coprire le tue protesi digitali dal Piano canadese di cure dentistiche. Al servizio degli anziani canadesi idonei nell\'area di Toronto.',
    ogTitle: 'Odontotecnico CDCP a Toronto | Protesi del Piano canadese di cure dentistiche',
    ogDescription: 'Fornitore ufficiale del CDCP a Toronto. Fai coprire le tue protesi digitali premium dal Piano canadese di cure dentistiche per gli anziani canadesi idonei.',
  },
  pillar: {
    badge: 'Fornitore ufficiale',
    h1: 'Piano canadese di cure dentistiche (CDCP)',
    sub: 'Accettiamo con orgoglio il CDCP. Fai coprire le tue protesi digitali premium se sei un anziano canadese idoneo.',
    ctaApply: 'Verifica l\'idoneità e fai domanda',
    ctaServices: 'Vedi i servizi coperti',
  },
  services: {
    metaTitle: 'Servizi protesici coperti dal CDCP a Toronto | Cosa paga il piano | Dentures Direct',
    metaDescription: 'Scopri quali servizi protesici copre il Piano canadese di cure dentistiche (CDCP) a Toronto — protesi totali, parziali, riparazioni, ribasature, visite. Fornitore ufficiale CDCP, North York.',
    badge: 'Guida alle prestazioni CDCP',
    h1a: 'Servizi protesici',
    h1b: 'coperti dal CDCP',
    sub: 'In qualità di fornitore autorizzato a Toronto, Dentures Direct accetta il Piano canadese di cure dentistiche per un\'ampia gamma di servizi protesici essenziali. Scopri cosa copre il tuo nuovo piano.',
    coveredTitle: 'Servizi protesici coperti',
    covered: [
      { title: 'Protesi totali standard', desc: 'Protesi complete superiori e inferiori per i pazienti che hanno perso tutti i denti di un\'arcata.' },
      { title: 'Protesi parziali rimovibili', desc: 'Parziali standard in metallo fuso o acrilico per sostituire denti mancanti specifici.' },
      { title: 'Riparazioni d\'urgenza', desc: 'Riparazione di basi incrinate o riattacco di denti artificiali persi.' },
      { title: 'Ribasature e ricostruzioni della base', desc: 'Adattamento delle protesi attuali per compensare la naturale perdita ossea.' },
      { title: 'Visite e controlli', desc: 'Le visite cliniche regolari e i controlli periodici sono coperti per mantenere la tua salute orale.' },
      { title: 'Aggiunte di denti e regolazioni', desc: 'Possiamo aggiungere denti agli apparecchi esistenti o effettuare le regolazioni necessarie per il tuo comfort.' },
    ],
    preauthTitle: 'Autorizzazioni preventive importanti',
    preauth1: 'Anche se il CDCP copre molti servizi protesici standard, è importante sapere che i lavori protesici maggiori (come nuove protesi totali o parziali) richiedono spesso un\'**autorizzazione preventiva**.',
    preauth2: 'Non preoccuparti — il nostro team amministrativo gestisce tutta la burocrazia. Esamineremo la tua bocca, invieremo il piano di trattamento esatto a Sun Life e confermeremo gli importi di copertura prima di iniziare qualsiasi lavoro, così non avrai mai spese impreviste.',
    copayTitle: 'Nota sui compartecipazioni',
    copayText: 'A seconda della tua fascia di reddito familiare, il CDCP può coprire il 100%, il 60% o il 40% del tariffario standard. Sei responsabile di eventuali quote di compartecipazione rimanenti.',
    disclaimer: 'Avviso: si prega di notare che la copertura al 100% secondo il tariffario CDCP non corrisponde alle consuete parcelle degli odontotecnici. Saremo lieti di offrirti totale trasparenza sui prezzi durante la consulenza iniziale.',
  },
  apply: {
    metaTitle: 'Come richiedere le protesi CDCP a Toronto | Passo dopo passo | Dentures Direct',
    metaDescription: 'Come richiedere il Piano canadese di cure dentistiche (CDCP): idoneità, domanda a Service Canada e appuntamento con Dentures Direct a North York, Toronto. Gestiamo noi la burocrazia.',
    badge: 'Fornitore ufficiale del CDCP',
    h1a: 'Come richiedere il',
    h1b: 'Piano canadese di cure dentistiche',
    sub: 'Il CDCP offre copertura per protesi digitali di alta qualità ai canadesi idonei. Dentures Direct è orgogliosa di essere un fornitore partecipante ufficiale a Toronto. Ecco tutto ciò che devi sapere per iniziare.',
    stepsTitle: 'La tua guida in 3 passi alle protesi CDCP',
    steps: [
      { title: 'Verifica la tua idoneità', desc: 'Il CDCP è aperto agli anziani dai 65 anni in su, agli adulti con un certificato valido di Credito d\'imposta per disabilità e ai minori di 18 anni. Devi avere un reddito familiare netto rettificato inferiore a 90.000 $ e aver presentato la dichiarazione dei redditi dell\'anno precedente.' },
      { title: 'Fai domanda tramite Service Canada', desc: 'Puoi fare domanda online sul sito ufficiale di Service Canada. Una volta approvato, riceverai un pacchetto di benvenuto da Sun Life (l\'amministratore del programma) con la tua tessera, la data di inizio e i dettagli sulla tua percentuale di copertura esatta.' },
      { title: 'Prenota la consulenza con Dentures Direct', desc: 'Una volta iniziata la copertura, porta semplicemente la tua tessera Sun Life nella nostra clinica. Gestiamo tutta la fatturazione diretta e le autorizzazioni preventive, così puoi concentrarti sul tuo nuovo sorriso fresato su misura.' },
    ],
    ctaTitle: 'Hai la tessera Sun Life pronta?',
    ctaText: 'Chiama la nostra reception per fissare oggi la tua scansione digitale senza impronte.',
    ctaBtn: 'Chiama il (416) 245-7474',
  },
};

const vi: CdcpContent = {
  meta: {
    title: 'Chuyên viên phục hình CDCP tại Toronto | Hàm giả theo Chương trình Chăm sóc Nha khoa Canada | Dentures Direct',
    description: 'Dentures Direct là nhà cung cấp CDCP chính thức tại Toronto và North York. Được chi trả hàm giả kỹ thuật số theo Chương trình Chăm sóc Nha khoa Canada. Phục vụ người cao tuổi Canada đủ điều kiện tại vùng Đại Toronto.',
    ogTitle: 'Chuyên viên phục hình CDCP tại Toronto | Hàm giả theo CDCP',
    ogDescription: 'Nhà cung cấp CDCP chính thức tại Toronto. Được chi trả hàm giả kỹ thuật số cao cấp theo Chương trình Chăm sóc Nha khoa Canada cho người cao tuổi Canada đủ điều kiện.',
  },
  pillar: {
    badge: 'Nhà cung cấp chính thức',
    h1: 'Chương trình Chăm sóc Nha khoa Canada (CDCP)',
    sub: 'Chúng tôi tự hào chấp nhận CDCP. Được chi trả hàm giả kỹ thuật số cao cấp nếu bạn là người cao tuổi Canada đủ điều kiện.',
    ctaApply: 'Kiểm tra điều kiện & đăng ký',
    ctaServices: 'Xem các dịch vụ được chi trả',
  },
  services: {
    metaTitle: 'Dịch vụ hàm giả được CDCP chi trả tại Toronto | Chương trình chi trả những gì | Dentures Direct',
    metaDescription: 'Xem những dịch vụ hàm giả mà Chương trình Chăm sóc Nha khoa Canada (CDCP) chi trả tại Toronto — hàm toàn phần, bán phần, sửa chữa, đệm hàm, khám. Nhà cung cấp CDCP chính thức, North York.',
    badge: 'Cẩm nang quyền lợi CDCP',
    h1a: 'Dịch vụ hàm giả',
    h1b: 'được CDCP chi trả',
    sub: 'Là nhà cung cấp được ủy quyền tại Toronto, Dentures Direct chấp nhận Chương trình Chăm sóc Nha khoa Canada cho nhiều dịch vụ phục hình thiết yếu. Khám phá những gì được chi trả theo chương trình mới của bạn.',
    coveredTitle: 'Các dịch vụ hàm giả được chi trả',
    covered: [
      { title: 'Hàm giả toàn phần tiêu chuẩn', desc: 'Hàm trên và dưới đầy đủ cho bệnh nhân mất toàn bộ răng trên một cung hàm.' },
      { title: 'Hàm giả bán phần tháo lắp', desc: 'Hàm bán phần tiêu chuẩn bằng khung kim loại đúc hoặc nhựa acrylic để thay thế các răng bị mất cụ thể.' },
      { title: 'Sửa chữa khẩn cấp', desc: 'Sửa nền hàm bị nứt hoặc gắn lại răng giả bị rơi.' },
      { title: 'Đệm hàm & làm lại nền', desc: 'Điều chỉnh độ khít của hàm giả hiện tại để bù cho tình trạng tiêu xương tự nhiên.' },
      { title: 'Khám & kiểm tra định kỳ', desc: 'Các buổi khám lâm sàng thường xuyên và kiểm tra định kỳ được chi trả để duy trì sức khỏe răng miệng của bạn.' },
      { title: 'Thêm răng & điều chỉnh', desc: 'Chúng tôi có thể thêm răng vào hàm hiện có hoặc thực hiện các điều chỉnh cần thiết để bạn thoải mái.' },
    ],
    preauthTitle: 'Phê duyệt trước quan trọng',
    preauth1: 'Mặc dù CDCP chi trả nhiều dịch vụ hàm giả tiêu chuẩn, cần lưu ý rằng các công việc phục hình lớn (như hàm toàn phần hoặc bán phần mới) thường cần **phê duyệt trước**.',
    preauth2: 'Đừng lo — đội ngũ hành chính của chúng tôi lo toàn bộ giấy tờ. Chúng tôi sẽ khám miệng cho bạn, gửi kế hoạch điều trị chính xác cho Sun Life và xác nhận mức chi trả trước khi bắt đầu bất kỳ công việc nào, để bạn không bao giờ phát sinh chi phí bất ngờ.',
    copayTitle: 'Lưu ý về phần đồng chi trả',
    copayText: 'Tùy theo mức thu nhập gia đình, CDCP có thể chi trả 100%, 60% hoặc 40% theo biểu phí tiêu chuẩn. Bạn chịu trách nhiệm cho phần đồng chi trả còn lại.',
    disclaimer: 'Miễn trừ: Xin lưu ý rằng mức chi trả 100% theo biểu phí CDCP không tương ứng với mức phí thông thường của chuyên viên phục hình. Chúng tôi sẵn lòng minh bạch hoàn toàn về giá trong buổi tư vấn đầu tiên.',
  },
  apply: {
    metaTitle: 'Cách đăng ký hàm giả CDCP tại Toronto | Từng bước | Dentures Direct',
    metaDescription: 'Cách đăng ký Chương trình Chăm sóc Nha khoa Canada (CDCP): điều kiện, đăng ký qua Service Canada và đặt hẹn với Dentures Direct tại North York, Toronto. Chúng tôi lo giấy tờ.',
    badge: 'Nhà cung cấp CDCP chính thức',
    h1a: 'Cách đăng ký',
    h1b: 'Chương trình Chăm sóc Nha khoa Canada',
    sub: 'CDCP cung cấp chi trả cho hàm giả kỹ thuật số chất lượng cao cho người Canada đủ điều kiện. Dentures Direct tự hào là nhà cung cấp tham gia chính thức tại Toronto. Đây là mọi điều bạn cần biết để bắt đầu.',
    stepsTitle: 'Hướng dẫn 3 bước nhận hàm giả CDCP',
    steps: [
      { title: 'Kiểm tra điều kiện của bạn', desc: 'CDCP dành cho người cao tuổi từ 65 tuổi trở lên, người lớn có giấy chứng nhận Tín thuế Người khuyết tật còn hiệu lực, và trẻ em dưới 18 tuổi. Bạn phải có thu nhập ròng gia đình đã điều chỉnh dưới 90.000 $ và đã nộp tờ khai thuế của năm trước.' },
      { title: 'Đăng ký qua Service Canada', desc: 'Bạn có thể đăng ký trực tuyến trên trang web chính thức của Service Canada. Sau khi được duyệt, bạn sẽ nhận gói chào mừng từ Sun Life (đơn vị quản lý chương trình) gồm thẻ thành viên, ngày bắt đầu và chi tiết về tỷ lệ chi trả chính xác của bạn.' },
      { title: 'Đặt lịch tư vấn với Dentures Direct', desc: 'Khi quyền lợi bắt đầu, chỉ cần mang thẻ thành viên Sun Life đến phòng khám của chúng tôi. Chúng tôi lo toàn bộ việc thanh toán trực tiếp và phê duyệt trước, để bạn hoàn toàn tập trung vào nụ cười mới được phay theo yêu cầu.' },
    ],
    ctaTitle: 'Đã có sẵn thẻ Sun Life?',
    ctaText: 'Gọi lễ tân của chúng tôi để đặt lịch quét kỹ thuật số không cần lấy dấu ngay hôm nay.',
    ctaBtn: 'Gọi (416) 245-7474',
  },
};

export const cdcpContent: Record<string, CdcpContent> = { en, fr, es, it, vi };

export function getCdcpContent(locale: string): CdcpContent {
  return cdcpContent[locale] ?? en;
}
