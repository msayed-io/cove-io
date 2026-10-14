export type Locale = 'ar';

export const site = {
  name: 'Cove',
  repo: 'https://github.com/msayed-io/cove',
  releaseUrl: 'https://github.com/msayed-io/cove/releases',
  license: 'مستودع مفتوح المصدر · راجع ملفات التراخيص المرفقة داخل المستودع قبل إعادة توزيع الموارد الخارجية.',
};

export const nav = [
  { href: '#features', label: 'المزايا' },
  { href: '#screenshots', label: 'داخل Cove' },
  { href: '#workflow', label: 'كيف يعمل' },
  { href: '#downloads', label: 'التنزيلات' },
];

export const features = [
  { number: '01', title: 'استخراج الوسائط من الرابط', body: 'الصق رابطًا أو ابحث عنه، ثم اعرض العنوان والصورة المصغرة والصيغ المتاحة قبل بدء التنزيل.', tone: 'silver' },
  { number: '02', title: 'تنزيلات مستمرة في الخلفية', body: 'يعمل WorkManager حتى بعد إغلاق التطبيق أو قفل الشاشة، مع الاستئناف وإعادة المحاولة التلقائية.', tone: 'blue' },
  { number: '03', title: 'تشغيل عبر Media3', body: 'شغّل الفيديو والصوت داخل التطبيق، واستمر في الاستماع من خلال خدمة التشغيل في الخلفية.', tone: 'blue' },
  { number: '04', title: 'مشاركة فورية من أي تطبيق', body: 'أرسل الرابط إلى Cove من قائمة المشاركة في Android لبدء التنزيل مباشرة من ورقة زجاجية سريعة.', tone: 'silver' },
];

export const screenshots = [
  { id: 'home', label: 'الرئيسية', path: '/screenshots/home.webp', alt: 'الشاشة الرئيسية لتطبيق Cove', width: 1080, height: 2340, caption: 'نقطة البداية: رابط واحد، وصيغة واضحة، وقرار تنزيل مباشر.' },
  { id: 'browser', label: 'التصفح', path: '/screenshots/browser.webp', alt: 'شاشة التصفح المدمج في Cove', width: 1080, height: 2340, caption: 'تصفح واكتشف الروابط دون مغادرة مسار التنزيل.' },
  { id: 'player', label: 'المشغل', path: '/screenshots/player.webp', alt: 'مشغل الوسائط الكامل في Cove', width: 1080, height: 2340, caption: 'تحكم كامل بالفيديو والصوت وقائمة الانتظار والسرعة.' },
  { id: 'downloads', label: 'ملفاتي', path: '/screenshots/downloads.webp', alt: 'سجل التنزيلات في Cove', width: 1080, height: 2340, caption: 'تقدم حي، سرعة، حجم، واستئناف من المكان نفسه.' },
];

export const faq = [
  { q: 'ما الذي يفعله Cove؟', a: 'Cove تطبيق Android عربي لتنزيل الوسائط وتشغيلها وإدارتها. يستقبل رابطًا أو عبارة بحث، يستخرج معلومات الوسائط والصيغ المتاحة، ثم ينفّذ التنزيل محليًا مع سجل وتشغيل.' },
  { q: 'هل يستمر التنزيل عند إغلاق التطبيق؟', a: 'نعم. يستخدم Cove WorkManager مع خدمة أمامية من نوع dataSync، لذلك يستمر التنزيل بعد إغلاق الواجهة أو قفل الشاشة، ويعيد المحاولة تلقائيًا عند تعثر الشبكة.' },
  { q: 'ما إصدارات Android المدعومة؟', a: 'المتطلب الأدنى المعلن في المستودع هو Android 7.0، أي API 24 أو أحدث.' },
  { q: 'كيف أساهم أو أبلغ عن مشكلة؟', a: 'المشروع مفتوح المصدر على GitHub. استخدم Issues لبلاغات الأخطاء والاقتراحات، أو افتح المستودع واقرأ طريقة التشغيل والبناء قبل إرسال مساهمة.' },
];

export const tech = [
  ['Kotlin', 'لغة التطبيق'], ['Jetpack Compose', 'واجهة Android'], ['Material 3', 'المكونات البصرية'], ['WorkManager', 'تنزيل مستمر'], ['Media3', 'تشغيل الوسائط'], ['OkHttp · Retrofit · Jsoup', 'الشبكة والاستخراج'],
];
