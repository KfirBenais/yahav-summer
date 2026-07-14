const PHONE = '972507571715'
const PHONE_DISPLAY = '050-7571715'

const wa = (text) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`

const WA_DEFAULT = wa('היי יהב! ראיתי את האתר שלך ואשמח לשמוע פרטים 🙂')

const services = [
  {
    emoji: '🐕',
    tag: 'נוסעים לחו"ל?',
    title: 'שמירה וטיולים לכלבים',
    subtitle: 'אני אדאג לכלב שלכם — כאילו הוא הכלב שלי! ❤️',
    color: 'amber',
    features: [
      '🦴 טיולים, אוכל ומים — בזמן ובאחריות',
      '📸 תמונות ועדכונים שוטפים אליכם לנייד',
      '💛 יחס אישי ואוהב לכל כלב',
      '🏡 ביקורים בבית או טיולים בשכונה',
    ],
    cta: 'דברו איתי על הכלב 🐾',
    message: 'היי יהב! נוסעים לחו"ל ומחפשים מישהו שישמור על הכלב 🐕 אפשר פרטים?',
  },
  {
    emoji: '🚗',
    tag: 'עד הבית שלכם!',
    title: 'שטיפת רכבים',
    subtitle: 'לנקות את הרכב — מבלי לנקות את הארנק 😉',
    color: 'sky',
    features: [
      '✨ ניקוי יסודי של הפנים והחוץ',
      '🧴 חומרי ניקוי איכותיים ומטליות ייעודיות — ללא שריטות!',
      '🌀 שואב אלחוטי חזק לכל פירור',
      '📍 מגיעים אליכם — לא צריך לזוז מהבית',
    ],
    prices: [
      { label: 'שטיפה חיצונית', price: '50 ₪' },
      { label: 'חוץ + פנים', price: '70 ₪', hot: true },
    ],
    cta: 'קבעו שטיפה לרכב 🚿',
    message: 'היי יהב! אשמח לקבוע שטיפת רכב 🚗',
  },
  {
    emoji: '💦',
    tag: 'צוות הנוער של אלפי מנשה',
    title: 'שטיפה בלחץ מים גבוה',
    subtitle: 'גרניק מקצועי — הבית שלכם יבריק כמו חדש!',
    color: 'green',
    features: [
      '🧱 חומות אבן וגדרות — הסרת ירוקת',
      '🛢️ חניות ואבן משתלבת — כולל כתמי שמן',
      '🌞 מרפסות שמש ודקים',
      '🚙 שטיפת רכבים יסודית',
    ],
    cta: 'הצעת מחיר לשטיפה 💪',
    message: 'היי! אשמח להצעת מחיר לשטיפה בלחץ מים 💦 (מומלץ לצרף תמונה של השטח)',
  },
]

const perks = [
  { emoji: '🏆', title: 'מחירים ללא תחרות', text: 'זולים מחברות חיצוניות — בלי לוותר על התוצאה' },
  { emoji: '❤️', title: 'שירות מהלב', text: 'נוער מקומי שעובד בחיוך ובאהבה אמיתית' },
  { emoji: '🤝', title: 'תשלום רק בסוף', text: 'משלמים רק לאחר שביעות רצון מלאה!' },
  { emoji: '🌳', title: 'מקומיים לגמרי', text: 'הנוער המדהים של אלפי מנשה — ממש לידכם' },
]

function WhatsAppIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  )
}

function ServiceCard({ service }) {
  return (
    <article className={`card card--${service.color}`}>
      <div className="card__top">
        <span className="card__emoji" role="img" aria-hidden="true">{service.emoji}</span>
        <span className="card__tag">{service.tag}</span>
      </div>
      <h3 className="card__title">{service.title}</h3>
      <p className="card__subtitle">{service.subtitle}</p>
      <ul className="card__features">
        {service.features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      {service.prices && (
        <div className="card__prices">
          {service.prices.map((p) => (
            <div key={p.label} className={`price ${p.hot ? 'price--hot' : ''}`}>
              {p.hot && <span className="price__badge">הכי משתלם!</span>}
              <span className="price__label">{p.label}</span>
              <span className="price__value">{p.price}</span>
            </div>
          ))}
        </div>
      )}
      <a className="btn btn--card" href={wa(service.message)} target="_blank" rel="noreferrer">
        <WhatsAppIcon size={20} />
        {service.cta}
      </a>
    </article>
  )
}

export default function App() {
  return (
    <div className="page">
      {/* ===== Hero ===== */}
      <header className="hero">
        <div className="hero__sun" aria-hidden="true" />
        <div className="hero__inner">
          <span className="hero__badge">🌳 הנוער של אלפי מנשה</span>
          <h1 className="hero__title">
            היי, אני <span className="hero__name">יהב דמרי</span> 👋
          </h1>
          <p className="hero__tagline">
            עושה לכם את הקיץ קל: שומר על הכלב, מבריק את הרכב
            <br />
            ומחזיר לחצר שלכם את הצבע — הכל בחיוך ובמחיר שווה לכל כיס!
          </p>
          <div className="hero__actions">
            <a className="btn btn--whatsapp" href={WA_DEFAULT} target="_blank" rel="noreferrer">
              <WhatsAppIcon />
              שלחו הודעה בוואטסאפ
            </a>
            <a className="btn btn--ghost" href="#services">
              מה אני עושה? 👇
            </a>
          </div>
          <div className="hero__marquee" aria-hidden="true">
            <span>🐕 שמירה על כלבים</span>
            <span>·</span>
            <span>🚗 שטיפת רכבים</span>
            <span>·</span>
            <span>💦 גרניק בלחץ גבוה</span>
          </div>
        </div>
        <div className="hero__wave" aria-hidden="true">
          <svg viewBox="0 0 1440 90" preserveAspectRatio="none">
            <path d="M0,60 C240,100 480,10 720,40 C960,70 1200,20 1440,55 L1440,90 L0,90 Z" fill="var(--bg)" />
          </svg>
        </div>
      </header>

      {/* ===== Services ===== */}
      <main>
        <section className="section" id="services">
          <h2 className="section__title">במה אפשר לעזור לכם? 🌞</h2>
          <p className="section__subtitle">שלושה שירותים, מספר וואטסאפ אחד — לוחצים, כותבים, ומקבלים הצעת מחיר</p>
          <div className="cards">
            {services.map((s) => (
              <ServiceCard key={s.title} service={s} />
            ))}
          </div>
        </section>

        {/* ===== Testimonial ===== */}
        <section className="section section--quote">
          <figure className="quote">
            <span className="quote__emoji" aria-hidden="true">🐶</span>
            <blockquote>"אני ממליץ עליו! מטייל איתי, מאכיל אותי בזמן, ואפילו שולח תמונות שלי להורים. הב הב!"</blockquote>
            <figcaption>— צ'אקי, לקוח מרוצה 🐾</figcaption>
          </figure>
        </section>

        {/* ===== Why us ===== */}
        <section className="section">
          <h2 className="section__title">למה דווקא אנחנו? 💪</h2>
          <div className="perks">
            {perks.map((p) => (
              <div className="perk" key={p.title}>
                <span className="perk__emoji" aria-hidden="true">{p.emoji}</span>
                <h3 className="perk__title">{p.title}</h3>
                <p className="perk__text">{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="section">
          <div className="cta">
            <h2 className="cta__title">רוצים קיץ נקי, מבריק ורגוע? ✨</h2>
            <p className="cta__text">
              שלחו הודעה בוואטסאפ  — ותקבלו הצעת מחיר מהירה.
              <br />
              <strong>שימו לב: נשארו מקומות אחרונים לימים הקרובים! 🎉</strong>
            </p>
            <a className="btn btn--whatsapp btn--big" href={WA_DEFAULT} target="_blank" rel="noreferrer">
              <WhatsAppIcon size={26} />
              {PHONE_DISPLAY} — דברו עם יהב
            </a>
          </div>
        </section>
      </main>

      {/* ===== Footer ===== */}
      <footer className="footer">
        <p>
          יהב דמרי · אלפי מנשה והסביבה 🌳 · <a href={WA_DEFAULT} target="_blank" rel="noreferrer">{PHONE_DISPLAY}</a>
        </p>
        <p className="footer__small">נעשה באהבה בקיץ 2026 ☀️</p>
      </footer>

      {/* ===== Floating WhatsApp ===== */}
      <a
        className="float-wa"
        href={WA_DEFAULT}
        target="_blank"
        rel="noreferrer"
        aria-label="שלחו הודעה בוואטסאפ"
        title="שלחו הודעה בוואטסאפ"
      >
        <WhatsAppIcon size={30} />
      </a>
    </div>
  )
}
