"use client";

import React, { useState } from 'react';
import { useLocale } from 'next-intl';

// Visible labels are localized; submitted <input value>s stay English
// so Damien's lead emails read consistently regardless of patient language.
type FormCopy = {
  successTitle: string;
  successBody: string;
  preferTalk: string;
  badge: string;
  heading: string;
  subhead: string;
  firstName: string; firstPlaceholder: string;
  lastName: string; lastPlaceholder: string;
  phone: string; phonePlaceholder: string;
  prep: string;
  archQ: string; arch: { value: string; label: string }[];
  implantsQ: string; implants: { value: string; label: string }[];
  situationQ: string; situationDefault: string; situations: { value: string; label: string }[];
  notesQ: string; optional: string; notesPlaceholder: string;
  deserveQ: string; deserve: { value: string; label: string }[];
  sending: string; submit: string;
  disclaimer: string;
  errorAlert: string;
};

const copy: Record<string, FormCopy> = {
  en: {
    successTitle: 'You are on Damien’s list.',
    successBody: 'We will call you within one business day to answer your questions and book your free consultation.',
    preferTalk: 'Prefer to talk now?',
    badge: 'Free Consultation — No Obligation',
    heading: 'Tell us about your situation.',
    subhead: 'We will call you back within one business day.',
    firstName: 'First Name', firstPlaceholder: 'First',
    lastName: 'Last Name', lastPlaceholder: 'Last',
    phone: 'Best Phone Number', phonePlaceholder: '(416) 000-0000',
    prep: 'A few quick questions so Damien is prepared:',
    archQ: 'Which arch are you concerned about?',
    arch: [{ value: 'Lower', label: 'Lower' }, { value: 'Upper', label: 'Upper' }, { value: 'Both', label: 'Both' }],
    implantsQ: 'Do you already have dental implants?',
    implants: [{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'Not yet' }, { value: 'unsure', label: 'Not sure' }],
    situationQ: 'How would you describe your current situation?',
    situationDefault: 'Select the closest one',
    situations: [
      { value: 'loose-denture-adhesive', label: 'My denture is loose — I use adhesive every day' },
      { value: 'loose-denture-no-adhesive', label: 'My denture is loose — I have given up on adhesive' },
      { value: 'has-implants-no-overdenture', label: 'I have implants but no overdenture yet' },
      { value: 'implants-elsewhere-need-overdenture', label: 'I had implants placed elsewhere, need the overdenture' },
      { value: 'exploring-options', label: 'Just starting to explore my options' },
      { value: 'other', label: 'Other — I will explain when you call' },
    ],
    notesQ: 'Anything else Damien should know?', optional: '(optional)',
    notesPlaceholder: 'e.g. I have 2 lower implants already placed, I just need the overdenture built...',
    deserveQ: 'Last question — do you know you deserve this?',
    deserve: [
      { value: 'yes-ready', label: 'Yes — and I am finally ready to do something about it' },
      { value: 'starting-to', label: 'I am starting to believe I do' },
      { value: 'not-sure-yet', label: 'Not sure yet — that is why I am here' },
    ],
    sending: 'Sending...', submit: 'Request My Free Consultation →',
    disclaimer: 'No hard sell. If you are not a candidate, we will tell you that too.',
    errorAlert: 'Something went wrong. Please call us at (416) 245-7474.',
  },
  fr: {
    successTitle: 'Vous êtes sur la liste de Damien.',
    successBody: 'Nous vous appellerons dans un jour ouvrable pour répondre à vos questions et fixer votre consultation gratuite.',
    preferTalk: 'Vous préférez parler maintenant?',
    badge: 'Consultation gratuite — sans engagement',
    heading: 'Parlez-nous de votre situation.',
    subhead: 'Nous vous rappellerons dans un jour ouvrable.',
    firstName: 'Prénom', firstPlaceholder: 'Prénom',
    lastName: 'Nom', lastPlaceholder: 'Nom',
    phone: 'Meilleur numéro de téléphone', phonePlaceholder: '(416) 000-0000',
    prep: 'Quelques questions rapides pour que Damien soit préparé :',
    archQ: 'Quelle arcade vous préoccupe?',
    arch: [{ value: 'Lower', label: 'Inférieure' }, { value: 'Upper', label: 'Supérieure' }, { value: 'Both', label: 'Les deux' }],
    implantsQ: 'Avez-vous déjà des implants dentaires?',
    implants: [{ value: 'yes', label: 'Oui' }, { value: 'no', label: 'Pas encore' }, { value: 'unsure', label: 'Je ne sais pas' }],
    situationQ: 'Comment décririez-vous votre situation actuelle?',
    situationDefault: 'Choisissez la plus proche',
    situations: [
      { value: 'loose-denture-adhesive', label: 'Ma prothèse bouge — j’utilise de l’adhésif chaque jour' },
      { value: 'loose-denture-no-adhesive', label: 'Ma prothèse bouge — j’ai renoncé à l’adhésif' },
      { value: 'has-implants-no-overdenture', label: 'J’ai des implants mais pas encore de prothèse' },
      { value: 'implants-elsewhere-need-overdenture', label: 'J’ai eu des implants ailleurs, il me faut la prothèse' },
      { value: 'exploring-options', label: 'Je commence à explorer mes options' },
      { value: 'other', label: 'Autre — je l’expliquerai lors de l’appel' },
    ],
    notesQ: 'Autre chose que Damien devrait savoir?', optional: '(facultatif)',
    notesPlaceholder: 'p. ex. J’ai déjà 2 implants inférieurs posés, il me faut juste la prothèse...',
    deserveQ: 'Dernière question — savez-vous que vous méritez ceci?',
    deserve: [
      { value: 'yes-ready', label: 'Oui — et je suis enfin prêt à agir' },
      { value: 'starting-to', label: 'Je commence à le croire' },
      { value: 'not-sure-yet', label: 'Pas encore sûr — c’est pourquoi je suis ici' },
    ],
    sending: 'Envoi...', submit: 'Demander ma consultation gratuite →',
    disclaimer: 'Aucune pression. Si vous n’êtes pas candidat, nous vous le dirons aussi.',
    errorAlert: 'Une erreur est survenue. Appelez-nous au (416) 245-7474.',
  },
  es: {
    successTitle: 'Está en la lista de Damien.',
    successBody: 'Le llamaremos dentro de un día hábil para responder sus preguntas y agendar su consulta gratuita.',
    preferTalk: '¿Prefiere hablar ahora?',
    badge: 'Consulta gratuita — sin compromiso',
    heading: 'Cuéntenos sobre su situación.',
    subhead: 'Le devolveremos la llamada dentro de un día hábil.',
    firstName: 'Nombre', firstPlaceholder: 'Nombre',
    lastName: 'Apellido', lastPlaceholder: 'Apellido',
    phone: 'Mejor número de teléfono', phonePlaceholder: '(416) 000-0000',
    prep: 'Unas preguntas rápidas para que Damien esté preparado:',
    archQ: '¿Qué arcada le preocupa?',
    arch: [{ value: 'Lower', label: 'Inferior' }, { value: 'Upper', label: 'Superior' }, { value: 'Both', label: 'Ambas' }],
    implantsQ: '¿Ya tiene implantes dentales?',
    implants: [{ value: 'yes', label: 'Sí' }, { value: 'no', label: 'Todavía no' }, { value: 'unsure', label: 'No estoy seguro' }],
    situationQ: '¿Cómo describiría su situación actual?',
    situationDefault: 'Elija la más cercana',
    situations: [
      { value: 'loose-denture-adhesive', label: 'Mi dentadura está floja — uso adhesivo cada día' },
      { value: 'loose-denture-no-adhesive', label: 'Mi dentadura está floja — ya no uso adhesivo' },
      { value: 'has-implants-no-overdenture', label: 'Tengo implantes pero aún no la sobredentadura' },
      { value: 'implants-elsewhere-need-overdenture', label: 'Me colocaron implantes en otro lugar, necesito la sobredentadura' },
      { value: 'exploring-options', label: 'Apenas empiezo a explorar mis opciones' },
      { value: 'other', label: 'Otro — lo explicaré cuando llamen' },
    ],
    notesQ: '¿Algo más que Damien deba saber?', optional: '(opcional)',
    notesPlaceholder: 'p. ej. Ya tengo 2 implantes inferiores colocados, solo necesito la sobredentadura...',
    deserveQ: 'Última pregunta — ¿sabe que merece esto?',
    deserve: [
      { value: 'yes-ready', label: 'Sí — y por fin estoy listo para hacer algo al respecto' },
      { value: 'starting-to', label: 'Empiezo a creer que sí' },
      { value: 'not-sure-yet', label: 'Aún no estoy seguro — por eso estoy aquí' },
    ],
    sending: 'Enviando...', submit: 'Solicitar mi consulta gratuita →',
    disclaimer: 'Sin presión. Si no es candidato, también se lo diremos.',
    errorAlert: 'Algo salió mal. Llámenos al (416) 245-7474.',
  },
  it: {
    successTitle: 'È nella lista di Damien.',
    successBody: 'La chiameremo entro un giorno lavorativo per rispondere alle sue domande e fissare la sua consulenza gratuita.',
    preferTalk: 'Preferisce parlare subito?',
    badge: 'Consulenza gratuita — senza impegno',
    heading: 'Ci racconti la sua situazione.',
    subhead: 'La richiameremo entro un giorno lavorativo.',
    firstName: 'Nome', firstPlaceholder: 'Nome',
    lastName: 'Cognome', lastPlaceholder: 'Cognome',
    phone: 'Miglior numero di telefono', phonePlaceholder: '(416) 000-0000',
    prep: 'Qualche domanda rapida per far preparare Damien:',
    archQ: 'Quale arcata la preoccupa?',
    arch: [{ value: 'Lower', label: 'Inferiore' }, { value: 'Upper', label: 'Superiore' }, { value: 'Both', label: 'Entrambe' }],
    implantsQ: 'Ha già impianti dentali?',
    implants: [{ value: 'yes', label: 'Sì' }, { value: 'no', label: 'Non ancora' }, { value: 'unsure', label: 'Non sono sicuro' }],
    situationQ: 'Come descriverebbe la sua situazione attuale?',
    situationDefault: 'Scelga la più vicina',
    situations: [
      { value: 'loose-denture-adhesive', label: 'La mia protesi balla — uso l’adesivo ogni giorno' },
      { value: 'loose-denture-no-adhesive', label: 'La mia protesi balla — ho rinunciato all’adesivo' },
      { value: 'has-implants-no-overdenture', label: 'Ho gli impianti ma non ancora l’overdenture' },
      { value: 'implants-elsewhere-need-overdenture', label: 'Ho fatto gli impianti altrove, mi serve l’overdenture' },
      { value: 'exploring-options', label: 'Sto solo iniziando a valutare le opzioni' },
      { value: 'other', label: 'Altro — lo spiegherò alla chiamata' },
    ],
    notesQ: 'Altro che Damien dovrebbe sapere?', optional: '(facoltativo)',
    notesPlaceholder: 'es. Ho già 2 impianti inferiori inseriti, mi serve solo l’overdenture...',
    deserveQ: 'Ultima domanda — sa di meritare tutto questo?',
    deserve: [
      { value: 'yes-ready', label: 'Sì — e finalmente sono pronto a fare qualcosa' },
      { value: 'starting-to', label: 'Comincio a crederci' },
      { value: 'not-sure-yet', label: 'Non ancora sicuro — è per questo che sono qui' },
    ],
    sending: 'Invio...', submit: 'Richiedi la mia consulenza gratuita →',
    disclaimer: 'Nessuna pressione. Se non è un candidato, glielo diremo.',
    errorAlert: 'Qualcosa è andato storto. Ci chiami al (416) 245-7474.',
  },
  vi: {
    successTitle: 'Bạn đã có trong danh sách của Damien.',
    successBody: 'Chúng tôi sẽ gọi cho bạn trong vòng một ngày làm việc để giải đáp thắc mắc và đặt lịch tư vấn miễn phí.',
    preferTalk: 'Muốn trao đổi ngay?',
    badge: 'Tư vấn miễn phí — không ràng buộc',
    heading: 'Hãy cho chúng tôi biết tình trạng của bạn.',
    subhead: 'Chúng tôi sẽ gọi lại trong vòng một ngày làm việc.',
    firstName: 'Tên', firstPlaceholder: 'Tên',
    lastName: 'Họ', lastPlaceholder: 'Họ',
    phone: 'Số điện thoại tốt nhất', phonePlaceholder: '(416) 000-0000',
    prep: 'Vài câu hỏi nhanh để Damien chuẩn bị:',
    archQ: 'Bạn lo lắng về hàm nào?',
    arch: [{ value: 'Lower', label: 'Hàm dưới' }, { value: 'Upper', label: 'Hàm trên' }, { value: 'Both', label: 'Cả hai' }],
    implantsQ: 'Bạn đã có trụ implant chưa?',
    implants: [{ value: 'yes', label: 'Rồi' }, { value: 'no', label: 'Chưa' }, { value: 'unsure', label: 'Không chắc' }],
    situationQ: 'Bạn mô tả tình trạng hiện tại thế nào?',
    situationDefault: 'Chọn mục gần nhất',
    situations: [
      { value: 'loose-denture-adhesive', label: 'Hàm giả của tôi lỏng — tôi dùng keo dán mỗi ngày' },
      { value: 'loose-denture-no-adhesive', label: 'Hàm giả của tôi lỏng — tôi đã bỏ keo dán' },
      { value: 'has-implants-no-overdenture', label: 'Tôi có implant nhưng chưa có hàm phủ' },
      { value: 'implants-elsewhere-need-overdenture', label: 'Tôi cấy implant ở nơi khác, cần làm hàm phủ' },
      { value: 'exploring-options', label: 'Tôi mới bắt đầu tìm hiểu lựa chọn' },
      { value: 'other', label: 'Khác — tôi sẽ giải thích khi bạn gọi' },
    ],
    notesQ: 'Còn điều gì Damien nên biết?', optional: '(không bắt buộc)',
    notesPlaceholder: 'ví dụ: Tôi đã cấy 2 trụ implant hàm dưới, chỉ cần làm hàm phủ...',
    deserveQ: 'Câu hỏi cuối — bạn có biết mình xứng đáng với điều này?',
    deserve: [
      { value: 'yes-ready', label: 'Có — và cuối cùng tôi đã sẵn sàng hành động' },
      { value: 'starting-to', label: 'Tôi bắt đầu tin là vậy' },
      { value: 'not-sure-yet', label: 'Chưa chắc — đó là lý do tôi ở đây' },
    ],
    sending: 'Đang gửi...', submit: 'Yêu cầu tư vấn miễn phí →',
    disclaimer: 'Không ép buộc. Nếu bạn không phù hợp, chúng tôi cũng sẽ nói thẳng.',
    errorAlert: 'Đã có lỗi xảy ra. Vui lòng gọi (416) 245-7474.',
  },
};

export default function ImplantLeadForm() {
  const locale = useLocale();
  const t = copy[locale] ?? copy.en;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    formData.append('access_key', '15d45c6f-794e-4981-a6e0-077f6a48d70d');
    formData.append('subject', 'New Implant Overdenture Lead — Dentures Direct Website');
    formData.append('from_name', 'Dentures Direct — Implant Page');
    formData.append('locale', locale);
    try {
      const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
      const data = await response.json();
      if (data.success) { setIsSuccess(true); } else { alert(t.errorAlert); }
    } catch { alert(t.errorAlert); } finally { setIsSubmitting(false); }
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-3xl p-10 text-center border border-gray-200 shadow-xl">
        <div className="w-20 h-20 bg-green-50 border-2 border-green-200 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-9 h-9 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{t.successTitle}</h3>
        <p className="text-gray-500 leading-relaxed max-w-sm mx-auto">{t.successBody}</p>
        <p className="text-gray-400 text-sm mt-4">{t.preferTalk} <a href="tel:416-245-7474" className="text-blue-600 font-semibold hover:underline">(416) 245-7474</a></p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
      <div className="bg-gray-900 px-8 pt-8 pb-6">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />{t.badge}
        </span>
        <h3 className="text-2xl font-bold text-white leading-snug">{t.heading}</h3>
        <p className="text-white/50 text-sm mt-1.5">{t.subhead}</p>
      </div>
      <form onSubmit={handleSubmit} className="px-8 py-7 space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="implant-first-name" className="block text-sm font-semibold text-gray-800">{t.firstName}</label>
            <input required type="text" id="implant-first-name" name="first_name" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm" placeholder={t.firstPlaceholder} />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="implant-last-name" className="block text-sm font-semibold text-gray-800">{t.lastName}</label>
            <input required type="text" id="implant-last-name" name="last_name" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm" placeholder={t.lastPlaceholder} />
          </div>
        </div>
        <div className="space-y-1.5">
          <label htmlFor="implant-phone" className="block text-sm font-semibold text-gray-800">{t.phone}</label>
          <input required type="tel" id="implant-phone" name="phone" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm" placeholder={t.phonePlaceholder} />
        </div>
        <div className="border-t border-gray-100 pt-1">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">{t.prep}</p>
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-800">{t.archQ}</label>
          <div className="grid grid-cols-3 gap-2">
            {t.arch.map((opt) => (
              <label key={opt.value} className="flex items-center justify-center p-3 rounded-xl border border-gray-200 cursor-pointer text-sm font-semibold text-gray-700 hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:text-blue-700">
                <input type="radio" name="arch" value={opt.value} className="sr-only" required />{opt.label}
              </label>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-800">{t.implantsQ}</label>
          <div className="grid grid-cols-3 gap-2">
            {t.implants.map((opt) => (
              <label key={opt.value} className="flex items-center justify-center p-3 rounded-xl border border-gray-200 cursor-pointer text-sm font-semibold text-gray-700 hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:text-blue-700">
                <input type="radio" name="has_implants" value={opt.value} className="sr-only" required />{opt.label}
              </label>
            ))}
          </div>
        </div>
        <div className="space-y-1.5">
          <label htmlFor="implant-situation" className="block text-sm font-semibold text-gray-800">{t.situationQ}</label>
          <select id="implant-situation" name="situation" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm" required defaultValue="">
            <option value="" disabled>{t.situationDefault}</option>
            {t.situations.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
        <div className="space-y-1.5">
          <label htmlFor="implant-note" className="block text-sm font-semibold text-gray-800">{t.notesQ} <span className="font-normal text-gray-400">{t.optional}</span></label>
          <textarea id="implant-note" name="notes" rows={2} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm resize-none" placeholder={t.notesPlaceholder} />
        </div>
        <div className="space-y-2 pt-1">
          <label className="block text-sm font-semibold text-gray-800">{t.deserveQ}</label>
          <div className="grid grid-cols-1 gap-2">
            {t.deserve.map((opt) => (
              <label key={opt.value} className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-200 cursor-pointer text-sm font-medium text-gray-700 hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:text-blue-700">
                <input type="radio" name="deserve_this" value={opt.value} className="sr-only" required />
                <span className="w-4 h-4 rounded-full border-2 border-current shrink-0" />{opt.label}
              </label>
            ))}
          </div>
        </div>
        <button type="submit" disabled={isSubmitting} id="submit-implant-lead-form" className={`w-full py-4 px-6 rounded-full font-bold text-base text-white transition-all duration-300 hover:-translate-y-0.5 ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/30'}`}>
          {isSubmitting ? t.sending : t.submit}
        </button>
        <p className="text-xs text-gray-400 text-center leading-relaxed">{t.disclaimer}</p>
      </form>
    </div>
  );
}
