import Image from 'next/image';
import Link from 'next/link';
import { promises as fs } from 'fs';
import path from 'path';
import { DownloadPanel } from '../components/download-panel';
import { MobileNav } from '../components/mobile-nav';
import { RepoStats } from '../components/repo-stats';
import { site, nav, features, screenshots, faq, tech } from '../lib/content';

async function availableScreenshots() {
  return Promise.all(screenshots.map(async (shot) => {
    try { await fs.access(path.join(process.cwd(), 'public', shot.path)); return { ...shot, exists: true }; }
    catch { return { ...shot, exists: false }; }
  }));
}

function Mark({ size = 34 }: { size?: number }) {
  return <Image src="/icons/cove-mark.png" alt="" width={size} height={size} className="brand-mark" priority />;
}

function Icon({ name }: { name: 'arrow' | 'github' | 'play' | 'download' | 'external' | 'check' | 'plus' }) {
  const paths: Record<string, React.ReactNode> = {
    arrow: <><path d="M5 12h13"/><path d="m13 6 6 6-6 6"/></>,
    github: <><path d="M15 22v-4.2c.04-1-.4-1.7-1.1-2.2 3.7-.4 5.6-2 5.6-5.5a4.3 4.3 0 0 0-1.1-3.1c.35-.9.3-1.9-.1-2.8 0 0-1 0-3.2 1.2a11.2 11.2 0 0 0-6.2 0C3.7 4.2 2.7 4.2 2.7 4.2a5.8 5.8 0 0 0-.1 2.8 4.3 4.3 0 0 0-1.1 3.1c0 3.5 1.9 5.1 5.6 5.5-.7.5-1.1 1.3-1.1 2.3V22"/><path d="M6 18c-2.2 1-2.2-1-3.1-1"/></>,
    play: <path d="m9 6 8 6-8 6V6Z"/>,
    download: <><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></>,
    external: <><path d="M14 5h5v5"/><path d="m19 5-8 8"/><path d="M19 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"/></>,
    check: <path d="m5 12 4 4L19 7"/>,
    plus: <><path d="M12 5v14"/><path d="M5 12h14"/></>,
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

function ScreenshotFrame({ shot }: { shot: Awaited<ReturnType<typeof availableScreenshots>>[number] }) {
  return <div className={`shot-frame ${shot.exists ? 'has-shot' : ''}`} style={{ aspectRatio: `${shot.width} / ${shot.height}` }}>
    {shot.exists ? <Image src={shot.path} alt={shot.alt} fill sizes="(max-width: 768px) 86vw, 280px" loading="lazy" className="shot-image" /> : <>
      <div className="shot-placeholder-top"><span>Cove</span><span>●</span></div>
      <div className="shot-placeholder-glow" />
      <div className="shot-placeholder-copy"><strong>{shot.label}</strong><span>أضف الصورة هنا</span></div>
      <div className="shot-placeholder-bars"><i /><i /><i /></div>
    </>}
  </div>;
}

export default async function Home() {
  const shots = await availableScreenshots();
  return <main>
    <a className="skip-link" href="#main-content">انتقل إلى المحتوى</a>
    <header className="site-header">
      <div className="nav-shell">
        <Link href="#top" className="wordmark" aria-label="Cove — العودة إلى البداية"><Mark /><span>Cove</span></Link>
        <nav className="desktop-nav" aria-label="التنقل الرئيسي">{nav.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
        <div className="nav-actions"><a className="nav-github" href={site.repo} target="_blank" rel="noopener noreferrer"><Icon name="github" /><span>GitHub</span></a><a className="nav-download" href="#downloads">تنزيل <Icon name="arrow" /></a></div>
        <MobileNav repo={site.repo} />
      </div>
    </header>

    <div id="top" className="hero-wrap">
      <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
      <section className="hero section-shell" id="main-content">
        <div className="hero-copy reveal"><p className="eyebrow"><span className="eyebrow-dot" /> تطبيق Android عربي مفتوح المصدر</p><h1>حمّل وسائطك<br /><em>بأعلى جودة.</em></h1><p className="hero-lead">رابط واحد يوصلك إلى تنزيل واضح، تشغيل مستمر، وتحكم كامل بملفاتك.</p><div className="hero-actions"><a className="button button-primary" href="#downloads">ابدأ من أحدث إصدار <Icon name="arrow" /></a><a className="button button-quiet" href={site.repo} target="_blank" rel="noopener noreferrer"><Icon name="github" /> استكشف المصدر</a></div><div className="hero-note"><span className="status-pulse" /> يعمل على Android 7.0+ <span className="note-separator" /> Kotlin · Compose · Media3</div></div>
        <div className="hero-product reveal reveal-delay"><div className="hero-device-shell"><div className="hero-device"><div className="device-top"><span>Cove</span><span className="device-menu">•••</span></div><div className="device-hero"><span className="mini-label">رابط جديد</span><strong>حمّل وسائطك،<br /><b>بأعلى جودة.</b></strong><div className="device-input"><span>الصق الرابط أو ابحث للتنزيل الفوري...</span><i><Icon name="arrow" /></i></div></div><div className="device-card"><div className="device-toggle"><b>جودة فائقة 4K</b><span>صوت نقي MP3</span></div><div className="device-row"><span>تنزيل بجودة Ultra HD</span><i><Icon name="check" /></i></div><div className="device-row"><span>كشف ذكي للوسائط</span><i><Icon name="check" /></i></div><div className="device-row"><span>تشغيل بالخلفية</span><i><Icon name="check" /></i></div></div><div className="device-cta">بدء التنزيل السريع الآن <Icon name="arrow" /></div><div className="device-dock"><span className="active"><Icon name="download" /> تنزيل</span><span><Icon name="play" /></span><span><Icon name="github" /></span></div></div></div><div className="hero-product-caption"><span>واجهة Cobalt Glass</span><span>01 / 04</span></div></div>
      </section>
    </div>

    <section className="intro section-shell reveal"><div className="section-kicker">مصمم حول الفعل</div><h2>من أول رابط<br /><span>إلى ملف جاهز.</span></h2><p>لا يضع Cove طبقة أخرى بينك وبين الوسائط. يلتقط الرابط، يوضح الخيارات، ويحافظ على التنزيل والتشغيل في مسار واحد مفهوم.</p></section>

    <section className="features section-shell" id="features"><div className="section-heading reveal"><div><div className="section-kicker">ما الذي ينجزه</div><h2>أداة صغيرة<br /><span>بتفكير كامل.</span></h2></div><p>كل شاشة في التطبيق مبنية حول رحلة حقيقية: اكتشاف، استخراج، تنزيل، ثم تشغيل.</p></div><div className="feature-grid">{features.map((feature, i) => <article className={`feature-item reveal reveal-delay-${i + 1}`} key={feature.number}><div className={`feature-index ${feature.tone}`}>{feature.number}</div><div><h3>{feature.title}</h3><p>{feature.body}</p></div><Icon name="arrow" /></article>)}</div></section>

    <section className="screens section-shell" id="screenshots"><div className="section-heading reveal"><div><div className="section-kicker">لقطات ستصل لاحقًا</div><h2>الواجهة التي<br /><span>تعمل في يدك.</span></h2></div><p>الإطارات جاهزة الآن. ضع لقطات Android في المسارات المحددة، وستظهر تلقائيًا بدل المعاينات.</p></div><div className="shots-grid">{shots.map(shot => <figure className="shot-card reveal" key={shot.id}><ScreenshotFrame shot={shot} /><figcaption><div><strong>{shot.label}</strong><span>{shot.caption}</span></div><span className="shot-count">{shot.width} × {shot.height}</span></figcaption></figure>)}</div></section>

    <section className="workflow section-shell" id="workflow"><div className="workflow-copy reveal"><div className="section-kicker">رحلة الاستخدام</div><h2>أربع حركات.<br /><span>ولا خطوة ضائعة.</span></h2><p>بنية Cove تفصل الواجهة عن منطق البيانات، حتى يبقى التنزيل طويل النفس واضحًا للمستخدم وقابلًا للصيانة للمطور.</p><a className="text-link" href={site.repo} target="_blank" rel="noopener noreferrer">اقرأ بنية المشروع <Icon name="external" /></a></div><div className="workflow-steps">{[['01','الصق أو ابحث','يستقبل Cove الرابط أو عبارة البحث من الواجهة أو قائمة المشاركة.'],['02','استخرج واختَر','تظهر الصورة المصغرة والعنوان والصيغ المتاحة قبل أي تنزيل.'],['03','نزّل واستأنف','يتولى WorkManager المهمة مع التقدم الحي والاستئناف وإعادة المحاولة.'],['04','شغّل واحتفظ','تجد الملف في السجل، وتشغله عبر Media3 حتى في الخلفية.']].map(([n,t,b], i) => <div className={`workflow-step reveal reveal-delay-${i + 1}`} key={n}><span>{n}</span><div><h3>{t}</h3><p>{b}</p></div></div>)}</div></section>

    <section className="tech section-shell reveal"><div className="tech-top"><div><div className="section-kicker">تحت السطح</div><h2>Kotlin في القلب.<br /><span>وضوح في كل طبقة.</span></h2></div><p>تقنيات التطبيق كما تظهر في المستودع، لا قائمة شعارات عامة.</p></div><div className="tech-list">{tech.map(([name, role]) => <div key={name}><span>{name}</span><small>{role}</small></div>)}</div></section>

    <section className="open-source section-shell reveal"><div className="oss-mark"><Mark size={54} /><span>OSS</span></div><div className="oss-copy"><div className="section-kicker">مفتوح من الداخل</div><h2>استخدمه. افحصه.<br /><span>وساهم فيه.</span></h2><p>{site.license}</p><div className="oss-links"><RepoStats /><a className="button button-primary" href={site.repo} target="_blank" rel="noopener noreferrer">افتح المستودع <Icon name="github" /></a><a className="text-link" href={`${site.repo}/issues`} target="_blank" rel="noopener noreferrer">Issues <Icon name="external" /></a></div></div></section>

    <section className="download-section section-shell" id="downloads"><div className="download-intro reveal"><div className="section-kicker">أحدث إصدار من GitHub</div><h2>خذ Cove معك<br /><span>في ثوانٍ.</span></h2><p>تظهر هنا ملفات الإصدار الحقيقي تلقائيًا، مصنفة حسب ما ينشره المشروع في GitHub.</p></div><DownloadPanel /></section>

    <section className="faq section-shell" id="faq"><div className="section-heading reveal"><div><div className="section-kicker">أسئلة واضحة</div><h2>قبل أن<br /><span>تبدأ.</span></h2></div><p>إجابات قصيرة مبنية على بنية Cove الحالية، لا وعود خارج الكود.</p></div><div className="faq-list">{faq.map((item, i) => <details className="faq-item reveal reveal-delay-1" key={item.q}><summary><span>{String(i + 1).padStart(2, '0')}</span><strong>{item.q}</strong><i><Icon name="plus" /></i></summary><p>{item.a}</p></details>)}</div></section>

    <section className="closing section-shell reveal"><div className="closing-glow" /><div className="section-kicker">الخطوة التالية بسيطة</div><h2>رابط واحد.<br /><em>تحكم أكبر.</em></h2><a className="button button-primary" href="#downloads">تنزيل Cove الآن <Icon name="download" /></a></section>

    <footer className="site-footer section-shell"><Link href="#top" className="wordmark"><Mark size={28} /><span>Cove</span></Link><p>تطبيق Android عربي لتنزيل الوسائط وتشغيلها وإدارتها.</p><div><a href={site.repo} target="_blank" rel="noopener noreferrer">GitHub</a><a href={`${site.repo}/issues`} target="_blank" rel="noopener noreferrer">Issues</a><a href={site.releaseUrl} target="_blank" rel="noopener noreferrer">Releases</a></div><small>© {new Date().getFullYear()} Cove · مفتوح المصدر</small></footer>
  </main>;
}
