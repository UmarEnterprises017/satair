import { useState } from "react";

const phoneDisplay = "054 591 4297";
const whatsappUrl = "https://wa.me/966545914297";

const copy = {
  en: {
    nav: ["Our story", "Collections", "How it works", "Contact"],
    eyebrow: "CURTAINS, MADE PERSONAL",
    heroTitle: "A softer light.<br />A more <em>you</em> home.",
    heroText:
      "Thoughtfully made curtains, measured and fitted for the way you live. Your home, your light, your choice.",
    explore: "Explore our collection",
    madeIn: "Proudly serving Riyadh",
    scroll: "SCROLL TO DISCOVER",
    introLabel: "THE SATAIR WAFI DIFFERENCE",
    introTitle: "The finishing touch<br />that feels like <em>home.</em>",
    introText:
      "A curtain does more than dress a window. It softens the morning, gives you a little more privacy, and makes a room feel entirely your own. We’re here to help you find just the right one.",
    feature1Title: "Made for your space",
    feature1Text: "Carefully measured and tailored to fit your windows beautifully.",
    feature2Title: "Fabrics to fall for",
    feature2Text: "From airy sheers to rich, room-darkening textures.",
    feature3Title: "A lovely finish",
    feature3Text: "Professional installation, with care in every detail.",
    collectionEyebrow: "FIND YOUR FEEL",
    collectionTitle: "Made for the way<br />you <em>live.</em>",
    collectionText: "A few of the looks we love. Let’s find the one that feels like you.",
    card1: "Soft & airy",
    card1Sub: "Sheers · Gentle daylight",
    card2: "Warm & natural",
    card2Sub: "Linen looks · Effortless calm",
    card3: "Quiet & restful",
    card3Sub: "Blackout · A little more hush",
    inquire: "Ask us about this style",
    processEyebrow: "SIMPLE AS IT SHOULD BE",
    processTitle: "From first hello<br />to <em>happily home.</em>",
    step1Title: "Tell us what you love",
    step1Text: "Share your ideas, your room, or simply the feeling you’re after.",
    step2Title: "We’ll measure together",
    step2Text: "We’ll help you choose fabrics and arrange measurements in Riyadh.",
    step3Title: "Made and fitted for you",
    step3Text: "Your curtains are prepared with care and fitted in your home.",
    aboutLabel: "A LITTLE ABOUT US",
    aboutTitle: "Good curtains.<br /><em>Good feeling.</em>",
    aboutText:
      "Satair Wafi is a Riyadh curtain maker built around one simple idea: the details of home should feel right. We bring together considered fabrics, personal service, and careful fitting to make choosing curtains a little easier—and your rooms a little lovelier.",
    aboutLink: "Come say hello",
    quote: "“It’s not just about what hangs at the window. It’s how the whole room feels afterwards.”",
    quoteBy: "THE SATAIR WAFI WAY",
    contactEyebrow: "LET’S MAKE YOUR WINDOWS FEEL LIKE HOME",
    contactTitle: "Your next favourite<br />room starts <em>here.</em>",
    contactText: "Tell us a little about your space. We’d love to help.",
    nameLabel: "Your name",
    namePlaceholder: "How should we call you?",
    phoneLabel: "Phone number",
    phonePlaceholder: "05X XXX XXXX",
    messageLabel: "What are you looking for?",
    messagePlaceholder: "A room, a style, an idea…",
    send: "Start a WhatsApp conversation",
    formNote: "We’ll open WhatsApp so you can send your inquiry directly.",
    orCall: "Or call us on",
    location: "Al Aqiq, Riyadh, Saudi Arabia",
    footerText: "Thoughtfully made for the place you call home.",
    footerNav: ["Our story", "Collections", "Contact"],
    required: "Please add your name and phone number.",
    sendError: "We couldn't prepare your message. Please contact us on WhatsApp instead.",
  },
  ar: {
    nav: ["قصتنا", "التشكيلات", "كيف نعمل", "تواصل معنا"],
    eyebrow: "ستائر تُصمَّم لكم",
    heroTitle: "ضوء أهدأ.<br />ومنزل يشبه <em>ذوقكم.</em>",
    heroText:
      "ستائر مصممة بعناية، نقيسها ونركبها لتناسب أسلوب حياتكم. منزلكم، وضوؤكم، واختياركم.",
    explore: "اكتشفوا تشكيلتنا",
    madeIn: "بكل فخر نخدم مدينة الرياض",
    scroll: "اكتشفوا المزيد",
    introLabel: "ما يميز ستائر وافي",
    introTitle: "اللمسة الأخيرة<br />التي تمنحكم شعور <em>البيت.</em>",
    introText:
      "الستارة ليست مجرد زينة للنافذة؛ إنها ضوء الصباح الهادئ، وخصوصية أكثر، ولمسة تجعل الغرفة أقرب إليكم. نحن هنا لنساعدكم في اختيار الأنسب.",
    feature1Title: "تفصيل يناسب مساحتكم",
    feature1Text: "قياسات دقيقة وتفصيل ينسجم مع نوافذكم بكل جمال.",
    feature2Title: "أقمشة تستحق الاختيار",
    feature2Text: "من الشفافات الخفيفة إلى الأقمشة الغنية العازلة للضوء.",
    feature3Title: "تركيب متقن",
    feature3Text: "تركيب احترافي نهتم فيه بكل التفاصيل.",
    collectionEyebrow: "اختاروا ما يناسبكم",
    collectionTitle: "تفاصيل تناسب<br /><em>أسلوب حياتكم.</em>",
    collectionText: "هذه بعض التصاميم التي نحبها. دعونا نجد معاً ما يشبهكم.",
    card1: "نعومة وانسيابية",
    card1Sub: "شفافة · ضوء نهار هادئ",
    card2: "دفء وطبيعة",
    card2Sub: "مظهر الكتان · هدوء وبساطة",
    card3: "راحة وسكينة",
    card3Sub: "عازلة للضوء · أجواء أكثر هدوءاً",
    inquire: "اسألونا عن هذا التصميم",
    processEyebrow: "خطوات سهلة وواضحة",
    processTitle: "من أول تواصل<br />إلى بيت <em>أجمل.</em>",
    step1Title: "أخبرونا بما تحبون",
    step1Text: "شاركونا أفكاركم أو صور الغرفة أو حتى الأجواء التي تبحثون عنها.",
    step2Title: "نقيسها معاً",
    step2Text: "نساعدكم في اختيار الأقمشة وننسق موعد القياس في الرياض.",
    step3Title: "تفصيل وتركيب لكم",
    step3Text: "نجهز ستائركم بعناية ونركبها في منزلكم.",
    aboutLabel: "نبذة عنا",
    aboutTitle: "ستائر جميلة.<br /><em>وشعور أجمل.</em>",
    aboutText:
      "ستائر وافي، صانع ستائر في الرياض، انطلقت من فكرة بسيطة: تفاصيل المنزل تستحق أن تكون كما تحبون. نجمع بين الأقمشة المختارة بعناية، والخدمة الشخصية، والتركيب المتقن، لتكون تجربة اختيار الستائر أسهل وغرفكم أجمل.",
    aboutLink: "يسعدنا تواصلكم",
    quote: "«الأمر لا يتعلق بما يزيّن النافذة فحسب، بل بالشعور الذي تمنحه الغرفة بأكملها.»",
    quoteBy: "أسلوب ستائر وافي",
    contactEyebrow: "لنمنح نوافذكم شعور البيت",
    contactTitle: "غرفتكم المفضلة<br /><em>تبدأ من هنا.</em>",
    contactText: "أخبرونا قليلاً عن مساحتكم. يسعدنا مساعدتكم.",
    nameLabel: "الاسم",
    namePlaceholder: "بماذا نناديكم؟",
    phoneLabel: "رقم الجوال",
    phonePlaceholder: "05X XXX XXXX",
    messageLabel: "ما الذي تبحثون عنه؟",
    messagePlaceholder: "غرفة، تصميم، فكرة…",
    send: "ابدأوا محادثة واتساب",
    formNote: "سنفتح واتساب لتتمكنوا من إرسال طلبكم مباشرة.",
    orCall: "أو اتصلوا بنا",
    location: "حي العقيق، الرياض، المملكة العربية السعودية",
    footerText: "تفاصيل جميلة للمكان الذي تسمونه بيتاً.",
    footerNav: ["قصتنا", "التشكيلات", "تواصل معنا"],
    required: "يرجى إدخال الاسم ورقم الجوال.",
    sendError: "تعذر تجهيز رسالتكم. يمكنكم التواصل معنا عبر واتساب.",
  },
};

const collections = [
  {
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1100&q=85",
    className: "collection-image-sheer",
    key: "card1",
    subKey: "card1Sub",
  },
  {
    image:
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1100&q=85",
    className: "collection-image-natural",
    key: "card2",
    subKey: "card2Sub",
  },
  {
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1100&q=85",
    className: "collection-image-blackout",
    key: "card3",
    subKey: "card3Sub",
  },
];

function Arrow({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={diagonal ? "arrow-icon arrow-diagonal" : "arrow-icon"}
    >
      {diagonal ? (
        <path d="M5 15 15 5M6 5h9v9" />
      ) : (
        <path d="M3 10h13m-5-5 5 5-5 5" />
      )}
    </svg>
  );
}

function Brand({ footer = false }) {
  return (
    <a className={`brand${footer ? " brand-footer" : ""}`} href="#top" aria-label="Satair Wafi home">
      <span className="brand-mark" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      <span className="brand-name">satair <b>wafi</b></span>
      <span className="brand-caption">CURTAINS & HOME</span>
    </a>
  );
}

function App() {
  const [language, setLanguage] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const t = copy[language];
  const isArabic = language === "ar";

  const changeLanguage = (nextLanguage) => {
    setLanguage(nextLanguage);
    document.documentElement.lang = nextLanguage;
    document.documentElement.dir = nextLanguage === "ar" ? "rtl" : "ltr";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormMessage("");
    const form = new FormData(event.currentTarget);
    const payload = {
      name: form.get("name"),
      phone: form.get("phone"),
      message: form.get("message"),
    };
    if (!payload.name?.trim() || !payload.phone?.trim()) {
      setFormMessage(t.required);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok || !result.whatsappUrl) throw new Error("Unable to prepare inquiry");
      window.open(result.whatsappUrl, "_blank", "noopener,noreferrer");
    } catch {
      setFormMessage(t.sendError);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={isArabic ? "site site-ar" : "site"} id="top">
      <header className="site-header">
        <a className="skip-link" href="#main">{isArabic ? "انتقل إلى المحتوى" : "Skip to content"}</a>
        <div className="header-inner">
          <Brand />
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
          </button>
          <nav className={menuOpen ? "main-nav nav-open" : "main-nav"} aria-label="Main navigation">
            {t.nav.map((item, index) => (
              <a
                href={["#story", "#collection", "#process", "#contact"][index]}
                key={item}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <div className="language-switch" aria-label="Choose language">
              <button className={!isArabic ? "active" : ""} onClick={() => changeLanguage("en")} type="button">EN</button>
              <span aria-hidden="true">/</span>
              <button className={isArabic ? "active" : ""} onClick={() => changeLanguage("ar")} type="button">عربي</button>
            </div>
            <a className="header-cta" href="#contact">
              {isArabic ? "لنتحدث" : "Let’s talk"} <Arrow diagonal />
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-image" role="img" aria-label={isArabic ? "غرفة جلوس هادئة بستائر فاتحة" : "A serene living room with soft curtains"} />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow eyebrow-light"><span />{t.eyebrow}</p>
            <h1 id="hero-title" dangerouslySetInnerHTML={{ __html: t.heroTitle }} />
            <p className="hero-description">{t.heroText}</p>
            <a className="button button-light" href="#collection">{t.explore}<Arrow /></a>
            <p className="hero-location"><span className="location-dot" />{t.madeIn}</p>
          </div>
          <div className="hero-side-note" aria-hidden="true">EST. WITH CARE · RIYADH</div>
          <a href="#story" className="scroll-cue"><span>{t.scroll}</span><i /></a>
          <span className="hero-index">01 <i /> 04</span>
        </section>

        <section className="intro section-pad" id="story">
          <div className="intro-heading">
            <p className="eyebrow"><span />{t.introLabel}</p>
            <h2 dangerouslySetInnerHTML={{ __html: t.introTitle }} />
          </div>
          <div className="intro-body">
            <p>{t.introText}</p>
            <div className="intro-rule"><span>01</span><i /></div>
          </div>
        </section>

        <section className="features section-pad" aria-label={isArabic ? "مميزاتنا" : "Our qualities"}>
          {[
            ["01", t.feature1Title, t.feature1Text, "measure"],
            ["02", t.feature2Title, t.feature2Text, "fabric"],
            ["03", t.feature3Title, t.feature3Text, "finish"],
          ].map(([number, title, text, kind]) => (
            <article className="feature" key={number}>
              <span className={`feature-icon icon-${kind}`} aria-hidden="true">
                <i /><i /><i />
              </span>
              <span className="feature-number">{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </section>

        <section className="collection section-pad" id="collection">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span />{t.collectionEyebrow}</p>
              <h2 dangerouslySetInnerHTML={{ __html: t.collectionTitle }} />
            </div>
            <p className="section-intro">{t.collectionText}</p>
          </div>
          <div className="collection-grid">
            {collections.map((item, index) => (
              <article className="collection-card" key={item.key}>
                <a className={`collection-image ${item.className}`} href="#contact" aria-label={`${t[item.key]} — ${t.inquire}`}>
                  <img src={item.image} alt="" loading="lazy" />
                  <span className="image-index">0{index + 1}</span>
                  <span className="card-arrow"><Arrow diagonal /></span>
                </a>
                <div className="collection-card-copy">
                  <div><h3>{t[item.key]}</h3><p>{t[item.subKey]}</p></div>
                  <a href="#contact" className="text-link">{t.inquire}<Arrow diagonal /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="process section-pad" id="process">
          <div className="process-heading">
            <p className="eyebrow eyebrow-light"><span />{t.processEyebrow}</p>
            <h2 dangerouslySetInnerHTML={{ __html: t.processTitle }} />
            <span className="process-decoration" aria-hidden="true"><i /><i /><i /></span>
          </div>
          <div className="process-steps">
            {[
              [t.step1Title, t.step1Text],
              [t.step2Title, t.step2Text],
              [t.step3Title, t.step3Text],
            ].map(([title, text], index) => (
              <article className="process-step" key={title}>
                <span className="step-number">0{index + 1}</span>
                <span className="step-line" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about section-pad">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1200&q=85"
              alt={isArabic ? "تفاصيل منزلية دافئة بألوان طبيعية" : "Warm, natural details in a welcoming home"}
              loading="lazy"
            />
            <span className="about-image-label">SATAIR WAFI <i /> RIYADH</span>
          </div>
          <div className="about-copy">
            <p className="eyebrow"><span />{t.aboutLabel}</p>
            <h2 dangerouslySetInnerHTML={{ __html: t.aboutTitle }} />
            <p className="about-text">{t.aboutText}</p>
            <a className="text-link about-link" href="#contact">{t.aboutLink}<Arrow diagonal /></a>
            <blockquote>
              <span className="quote-mark">“</span>
              <p>{t.quote}</p>
              <cite>{t.quoteBy}</cite>
            </blockquote>
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="contact-heading">
            <p className="eyebrow eyebrow-light"><span />{t.contactEyebrow}</p>
            <h2 dangerouslySetInnerHTML={{ __html: t.contactTitle }} />
            <p>{t.contactText}</p>
            <div className="contact-direct">
              <a href={`tel:+966545914297`} className="phone-link">{phoneDisplay}<Arrow diagonal /></a>
              <span>{t.orCall}</span>
              <a
                className="contact-location"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  isArabic ? "حي العقيق، الرياض، المملكة العربية السعودية" : "Al Aqiq, Riyadh, Saudi Arabia",
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                {t.location}<Arrow diagonal />
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              <span>{t.nameLabel} <b>*</b></span>
              <input name="name" type="text" autoComplete="name" placeholder={t.namePlaceholder} required />
            </label>
            <label>
              <span>{t.phoneLabel} <b>*</b></span>
              <input name="phone" type="tel" autoComplete="tel" placeholder={t.phonePlaceholder} required />
            </label>
            <label>
              <span>{t.messageLabel}</span>
              <textarea name="message" rows="2" placeholder={t.messagePlaceholder} />
            </label>
            <button className="button button-light submit-button" type="submit" disabled={isSubmitting}>
              {isSubmitting ? (isArabic ? "جارٍ التجهيز…" : "Preparing…") : t.send}<Arrow />
            </button>
            {formMessage && <p className="form-message" role="alert">{formMessage}</p>}
            <p className="form-note">{t.formNote}</p>
            <a className="direct-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
              <span className="whatsapp-symbol">↗</span> WhatsApp
            </a>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand-block">
            <Brand footer />
            <p>{t.footerText}</p>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            {t.footerNav.map((item, index) => (
              <a href={["#story", "#collection", "#contact"][index]} key={item}>{item}</a>
            ))}
          </nav>
          <a className="footer-phone" href="tel:+966545914297">{phoneDisplay}<Arrow diagonal /></a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} SATAIR WAFI</span>
          <span>{t.location}</span>
          <a href="#top">{isArabic ? "العودة للأعلى ↑" : "BACK TO TOP ↑"}</a>
        </div>
      </footer>
      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Contact Satair Wafi on WhatsApp">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.8a8.3 8.3 0 0 1-12.3 7.3L3 20.5l1.4-5A8.3 8.3 0 1 1 20.5 11.8Z" /><path d="M8.2 7.7c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .5.4l.7 1.8c.1.3.1.5-.1.7l-.5.6c-.2.2-.3.4-.1.7.4.7.9 1.3 1.6 1.8.7.5 1.2.7 1.5.8.3.1.4.1.6-.1l.8-.9c.2-.2.4-.2.7-.1l1.7.8c.3.1.4.3.4.5 0 .2-.1 1.1-.7 1.6-.5.5-1.2.7-2 .6-.7-.1-1.7-.5-2.9-1.2-1.6-1-2.7-2.2-3.4-3.3-.7-1.1-.9-2-.9-2.7 0-.8.4-1.5.9-2Z" /></svg>
      </a>
    </div>
  );
}

export default App;
