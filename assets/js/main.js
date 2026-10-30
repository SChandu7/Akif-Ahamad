/* =====================================================================
   Dr. Akif Ahamad Baig — portfolio site
   All editable content lives in the DATA section below.
   Change text here; the page updates itself. No build step needed.
   ===================================================================== */

/* ---------------------------------------------------------------------
   DATA — edit these
   --------------------------------------------------------------------- */

// Phone numbers are from the Beat N Breath flyer (Aaira Heart & Polyclinic address).
// TODO: confirm which number has WhatsApp, and replace the clinic hours with the real ones.
const CONFIG = {
  phoneDisplay: '+91 91212 95507',
  phoneTel: '+919121295507',
  altPhoneDisplay: '+91 93817 40718',
  altPhoneTel: '+919381740718',
  whatsapp: '919381740718',          // country code + number, no "+" or spaces
  // Django endpoint that saves appointment requests (see backend/ folder)
  bookingApi: 'https://api.chandus7.in/api/akif/appointments/',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Aaira+Heart+%26+Polyclinic+Anandapet+Ponnur+Road+Guntur',
  hours: {
    label: 'Monday to Saturday, 6:00 PM to 9:00 PM. Closed on Sunday.',
    days: [1, 2, 3, 4, 5, 6],        // 0 = Sunday … 6 = Saturday
    open: '18:00',
    close: '21:00',
  },
};

// Social profiles. Leave a value as '' to hide that button.
// TODO: add his LinkedIn profile URL (none was found publicly).
const SOCIAL = {
  youtube:   { url: 'https://www.youtube.com/@infusionmedz', handle: '@infusionmedz', name: 'Dr. Akif Baig (DM-Cardiology)', meta: '2.65K subscribers, 339 videos' },
  instagram: { url: 'https://www.instagram.com/akifahamad/', handle: '@akifahamad', name: 'TheHeartDoc', meta: 'Reels on heart health and doctor life' },
  linkedin:  { url: '', handle: '', name: 'Dr. Akif Ahamad Baig', meta: 'Professional profile' },
  slideshare:{ url: 'https://www.slideshare.net/akifab93', handle: 'akifab93', name: 'SlideShare', meta: '108 teaching talks' },
};

// Videos shown in the "Watch and follow" section
const VIDEOS = [
  { kind: 'youtube', id: 'dc8HThZNOso', title: 'Poor R wave progression on ECG', meta: 'ECG lecture on YouTube', thumb: 'assets/img/yt-poor-r-wave.webp' },
  { kind: 'youtube', id: 'tX_jBd140Uk', title: 'Cardioversion vs defibrillation', meta: 'Clinical lecture on YouTube', thumb: 'assets/img/yt-cardioversion.webp' },
  { kind: 'instagram', id: 'Dcox-2dz1TA', title: 'Opika unna Doctor Garu', meta: 'Instagram reel, 23K likes', thumb: 'assets/img/reel-doctor-garu.webp' },
  { kind: 'instagram', id: 'DceBYPTTiQ7', title: 'Just for fun', meta: 'Instagram reel, 21K likes', thumb: 'assets/img/reel-just-for-fun.webp' },
];

const EXPERTISE = [
  { name: 'Coronary angiography', text: 'A thin tube is passed through the wrist or groin and a dye is injected so X-rays show any blockage in the heart arteries. It is the main test before deciding on a stent or surgery.' },
  { name: 'Coronary angioplasty', text: 'A tiny balloon opens a blocked heart artery and a stent keeps it open. It restores blood flow, often during a heart attack, usually without open surgery.' },
  { name: '2D echocardiography', text: 'An ultrasound scan of the heart. It shows how well the heart pumps and how the valves work. It is painless and takes about 20 minutes.' },
  { name: 'Transesophageal echo (TEE)', text: 'A small ultrasound probe goes down the food pipe, close to the heart, for a much clearer view of valves, holes and clots than a regular echo.' },
  { name: 'Pacemaker implantation', text: 'A small device is placed under the skin below the collarbone. It keeps the heart beating at a safe rate when the heart\'s own rhythm is too slow.' },
  { name: 'Pericardiocentesis', text: 'A needle drains fluid that has collected around the heart and is pressing on it. It gives quick relief and the fluid can be tested for the cause.' },
  { name: 'Complex coronary intervention', text: 'Stenting for difficult blockages: at artery branch points, long or hard calcified blockages, or several arteries at once.' },
  { name: 'Structural heart disease', text: 'Care for valve problems and holes in the heart, including procedures done through a catheter instead of open-heart surgery.' },
];

const VENTURES = [
  {
    id: 'aaira',
    short: 'Clinic in Guntur',
    logo: 'assets/img/logo-aaira.svg',
    name: 'Aaira Heart & Polyclinic',
    tagline: 'His own clinic for heart care and general medicine in Guntur.',
    color: '#C8102E',
    monogram: 'A',
    status: { live: true, text: 'Open for patients' },
    about: 'Patients see a cardiologist, a physician and a chest specialist under one roof. Dr. Akif leads the clinic and handles every heart consultation himself.',
    stats: [ { value: '3', label: 'specialist doctors' }, { value: 'Ponnur Road', label: 'Anandapet, Guntur' }, { value: 'Mon to Sat', label: 'evening clinic' } ],
    features: ['Heart check-ups and second opinions', 'ECG and echo review', 'Blood pressure, sugar and cholesterol follow-up', 'Physician and pulmonology consults', 'Referral for angiography and angioplasty'],
    people: [
      { name: 'Dr. Akif Ahamad Baig', role: 'Cardiology' },
      { name: 'Dr. M.A Sameena Farheen', role: 'Consultant Physician' },
      { name: 'Dr. Sheikh Reshma', role: 'MD, Pulmonology' },
    ],
    clinic: true,
    photo: 'assets/img/clinic-arms.webp',
  },
  {
    id: 'infumedz',
    short: 'Cardiology courses',
    name: 'InfuMedz',
    tagline: 'Cardiology lectures, notes and books for DM, DrNB, MD and MBBS.',
    color: '#1F4FBF',
    logo: 'assets/img/infusionmedz-logo.webp',
    status: { live: true, text: 'Live on web and Android' },
    about: 'Dr. Akif records chapter-wise lectures on adult, congenital and interventional cardiology and echocardiography. Students buy one course at a time, read concise notes in the browser, and can order printed books.',
    stats: [ { value: '200+', label: 'video lectures' }, { value: '50+', label: 'books and note sets' }, { value: '5K+', label: 'students' } ],
    features: ['Video courses for MBBS, MD/MS, DM, MCh and DrNB', 'Concise notes and question banks', 'Pay per course with UPI, card or netbanking', 'Printed hardcopy books delivered home', 'Research, thesis and seminar support'],
    steps: [
      { title: 'Preview free', text: 'Watch the first two lectures of any course before you buy.' },
      { title: 'Buy in one tap', text: 'Pay with UPI, card or netbanking. Access opens at once.' },
      { title: 'Learn anywhere', text: 'Your library syncs between the website and the app.' },
    ],
    platforms: {
      web: { href: 'https://infusionmedz.com', label: 'infusionmedz.com' },
      android: { href: 'https://play.google.com/store/apps/details?id=com.infumedz.app' },
      ios: { soon: true },
    },
  },
  {
    id: 'inforedz',
    logo: 'assets/img/logo-inforedz.webp',
    short: 'Blood donor network',
    name: 'Inforedz',
    tagline: 'Find blood donors and blood banks near you, fast.',
    color: '#A50D26',
    monogram: 'R',
    status: { live: true, text: 'Live on web and Android. iOS coming soon.' },
    about: 'When a patient needs blood, families often call around for hours. Inforedz lets them search willing donors by blood group and area, and reach them directly.',
    stats: [ { value: '8', label: 'blood groups searchable' }, { value: '1 tap', label: 'to call or WhatsApp' }, { value: 'Free', label: 'for donors and seekers' } ],
    features: ['Register as a voluntary donor', 'Search donors by blood group and area', 'Blood bank directory', 'Contact a donor by call or WhatsApp', 'Update your availability anytime'],
    steps: [
      { title: 'Search', text: 'Pick the blood group and your area.' },
      { title: 'Contact', text: 'Call or WhatsApp a willing donor in one tap.' },
      { title: 'Give back', text: 'Register yourself so the next family can find you.' },
    ],
    platforms: {
      web: { href: 'https://inforedz.com', label: 'inforedz.com' },
      android: { href: 'https://play.google.com/store/apps/details?id=com.inforedz.app&hl=en_IN' },
      ios: { soon: true },
    },
  },
  {
    id: 'clinova',
    logo: 'assets/img/infusionmedz-logo.webp',
    short: 'Medical journal',
    name: 'Clinova',
    tagline: 'An open-access journal of clinical and health sciences.',
    color: '#1E6F8A',
    monogram: 'C',
    status: { live: true, text: 'Live on the web. Accepting manuscripts.' },
    about: 'Clinova Journal of Clinical & Health Sciences, with Dr. Akif as Editor-in-Chief. It is peer reviewed, free to read and free to publish. The website also has medical calculators for daily practice.',
    stats: [ { value: '2984-7310', label: 'ISSN (Online)' }, { value: '4', label: 'issues a year' }, { value: 'Free', label: 'to read and publish' } ],
    features: ['Double-blind peer review', 'A DOI for every article', 'Online submission and author dashboard', 'Medical calculators', 'Original research, reviews and case reports'],
    steps: [
      { title: 'Register', text: 'Create an author account on the Clinova portal.' },
      { title: 'Submit', text: 'Upload your manuscript as PDF or DOCX.' },
      { title: 'Review', text: 'Double-blind review by subject experts.' },
      { title: 'Publish', text: 'Accepted papers go online, open access, with a DOI.' },
    ],
    platforms: {
      web: { href: 'https://clinova.org.in', label: 'clinova.org.in' },
      android: null,
      ios: null,
    },
  },
  {
    id: 'beatnbreath',
    logo: 'assets/img/logo-beatnbreath.svg',
    logoBleed: true,
    short: 'Cardiac rehab centre',
    name: 'Beat N Breath',
    tagline: 'Cardiac and pulmonary rehab. Stronger heart, better breath, better life.',
    color: '#2F3E9E',
    monogram: 'B',
    status: { live: true, text: 'Now enrolling. First 2 sessions free.' },
    offer: 'First 2 sessions free',
    about: 'A supervised rehab programme at Aaira Heart & Polyclinic. It helps patients rebuild heart health, stamina and breathing after a heart attack, a stent, bypass surgery or heart failure. Sessions run 3 times a week.',
    stats: [ { value: '3 a week', label: 'supervised sessions' }, { value: '₹899', label: 'per session' }, { value: '2 free', label: 'first sessions' } ],
    featuresTitle: 'Programme highlights',
    features: ['Supervised treadmill training', 'Recumbent cycle ergometer sessions', 'Spirometry-guided breathing support', 'Exercise tolerance and endurance training', 'Lifestyle, diet and risk-factor counselling', 'Safe, monitored rehabilitation'],
    audience: ['Patients after a heart attack', 'Patients after angioplasty or a stent', 'Patients after bypass surgery', 'People with heart failure', 'People with low stamina or breathlessness', 'Selected pulmonary rehab patients'],
    pricing: [
      { label: 'First assessment', price: '₹999' },
      { label: 'Single session', price: '₹899' },
      { label: '12 sessions', price: '₹6,999' },
      { label: '24 sessions', price: '₹12,999' },
      { label: '36 sessions', price: '₹18,999' },
    ],
    includes: ['Cardiologist consultation', 'Dietician consultation', 'Physiotherapist', 'Psychologist consultation', 'Health education', 'Programmed exercise'],
    contact: {
      phones: [ { display: '+91 91212 95507', tel: '+919121295507' }, { display: '+91 93817 40718', tel: '+919381740718' } ],
      address: 'Aaira Heart & Polyclinic, Anandapet 10th Lane, Ponnur Road, beside Panchavati Apartment, Guntur 522003',
      map: true,
      book: 'Cardiac rehab (Beat N Breath)',
    },
  },
  {
    id: 'reserz',
    logo: 'assets/img/logo-reserz.svg',
    logoBleed: true,
    short: 'Research support',
    name: 'RESERZ',
    tagline: 'Research assistance and academic support. Your research journey, our expert support.',
    color: '#7A2048',
    monogram: 'R',
    status: { live: true, text: 'Taking new projects' },
    about: 'RESERZ helps medical students and researchers at every step of a research project, from framing the synopsis and running the statistics to writing the thesis and getting the paper published.',
    stats: [ { value: '10', label: 'research services' }, { value: 'End to end', label: 'synopsis to publication' }, { value: 'Email or call', label: 'to get started' } ],
    featuresTitle: 'Services',
    features: ['Synopsis and protocol framing', 'Thesis assistance', 'Data and statistical analysis', 'Proofreading', 'Publication assistance', 'Citation formatting', 'Plagiarism check and correction', 'AI-content check and rewriting', 'Professional PPTs', 'Paper and poster presentation'],
    contact: {
      email: 'reserzresearch@gmail.com',
      phones: [ { display: '+91 93817 40718', tel: '+919381740718' } ],
    },
  },
  {
    id: 'infomedz',
    logo: 'assets/img/logo-infomedz.webp',
    short: 'All-in-one care app',
    name: 'InfoMedz',
    tagline: 'One app for patients, hospitals, labs and pharmacies.',
    color: '#E8772E',
    monogram: 'i',
    status: { live: false, text: 'In development' },
    about: 'Patients will find everything and providers will manage everything in one place: doctors, hospitals, labs, pharmacies and ambulances. Each kind of provider gets its own login and dashboard.',
    stats: [ { value: '10', label: 'provider logins' }, { value: '8', label: 'core services' }, { value: 'B2B + B2C', label: 'patients and providers' } ],
    modules: ['Find and book doctors', 'Book lab tests', 'Order medicines', 'Hospital listings', 'Store medical records', 'Video consultation', 'Ratings and reviews', 'Search by area and specialty'],
    roles: 'Logins for doctors, nurses, physiotherapists, dentists, dieticians, pharmacies, surgical shops, labs, hospitals and clinics.',
    platforms: {
      web: { soon: true },
      android: { soon: true },
      ios: { soon: true },
    },
  },
];

// Most viewed SlideShare talks (views as of Oct 2026)
const TALKS = [
  { title: 'P wave (ECG)', views: 7000 },
  { title: 'Tetralogy of Fallot', views: 3700 },
  { title: 'CT calcium score', views: 3100 },
  { title: 'Coronary bifurcation', views: 2900 },
  { title: 'Pulmonary hypertension', views: 2900 },
  { title: 'HOCM', views: 1700 },
];

// TODO: team members below (except the two doctors) are placeholders. Replace names, roles and add photos.
// To add a photo, set photo: 'assets/img/your-file.webp'
const TEAM = [
  { name: 'Dr. M.A Sameena Farheen', role: 'Consultant Physician, MD (General Medicine)', group: 'clinic' },
  { name: 'Dr. Sheikh Reshma', role: 'Pulmonologist', group: 'clinic' },
  { name: 'Ravi Teja K.', role: 'Clinic Manager', group: 'clinic' },
  { name: 'Sana Fatima', role: 'Senior Staff Nurse', group: 'clinic' },
  { name: 'Prasad V.', role: 'ECG and Echo Technician', group: 'clinic' },
  { name: 'Lakshmi P.', role: 'Front Desk and Appointments', group: 'clinic' },
  { name: 'Harika M.', role: 'Managing Editor, Clinova', group: 'academic' },
  { name: 'Dr. Imran Shaik', role: 'Associate Editor, Clinova', group: 'academic' },
  { name: 'Dr. Nikhil R.', role: 'Content Lead, InfuMedz', group: 'academic' },
  { name: 'Kiran Kumar', role: 'Operations Manager', group: 'ops' },
  { name: 'Ayesha Begum', role: 'Donor Coordinator, Inforedz', group: 'ops' },
  { name: 'InfuTechz', role: 'Technology Partner, Web and Apps', group: 'ops' },
];

// Clinic photos: put files in assets/img/ and add lines like
//   { src: 'assets/img/aaira-reception.webp', w: 1200, h: 900, cap: 'Reception, Aaira Heart & Polyclinic' },
// To remove a photo from the gallery: delete its line (or put // in front of it).
const GALLERY = [
  { src: 'assets/img/hero-portrait.webp', w: 900, h: 1125, cap: 'Studio portrait' },                  // 1
  { src: 'assets/img/clinic-arms.webp', w: 900, h: 1488, cap: 'Ready for the cath lab' },            // 2
  { src: 'assets/img/mumbai.webp', w: 800, h: 1200, cap: 'Mumbai, during his DNB years' },           // 3
  { src: 'assets/img/og-banner.webp', w: 1200, h: 900, cap: 'Consultant Interventional Cardiologist' }, // 4
  { src: 'assets/img/clinic-smile.webp', w: 900, h: 1488, cap: 'At the clinic' },                    // 5
  { src: 'assets/img/full-length.webp', w: 900, h: 1440, cap: 'Between rounds' },                    // 6
];

/* ---------------------------------------------------------------------
   HELPERS
   --------------------------------------------------------------------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isExternal = (href) => /^https?:/.test(href);

/* ---------------------------------------------------------------------
   HEADER: mobile menu + active section
   --------------------------------------------------------------------- */
(function header() {
  const btn = $('#menuBtn');
  const menu = $('#mobileMenu');
  const setOpen = (open) => {
    menu.hidden = !open;
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };
  btn.addEventListener('click', () => setOpen(menu.hidden));
  $$('.mm-link', menu).forEach((a) => a.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !menu.hidden) setOpen(false); });

  const links = $$('.nav-link');
  const map = new Map(links.map((a) => [a.getAttribute('href').slice(1), a]));
  if (!('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      links.forEach((l) => l.classList.remove('is-active'));
      const link = map.get(en.target.id);
      if (link) link.classList.add('is-active');
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  ['about', 'expertise', 'ventures', 'teaching', 'media', 'team', 'contact'].forEach((id) => { const s = document.getElementById(id); if (s) io.observe(s); });
})();

/* ---------------------------------------------------------------------
   MEDIA: social profiles + YouTube / Instagram players
   --------------------------------------------------------------------- */
(function media() {
  const SICON = {
    youtube: '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8ZM9.8 15V9l5.2 3-5.2 3Z"/></svg>',
    instagram: '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
    linkedin: '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4v11H3v-11Zm7 0h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6v5.4h-4v-4.8c0-1.1 0-2.6-1.6-2.6s-1.9 1.3-1.9 2.5v4.9h-4v-11Z"/></svg>',
    slideshare: '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M12 16v4M8 20h8M7 12l3-3 2 2 4-4"/></svg>',
  };
  const SCOLOR = { youtube: '#E62117', instagram: 'linear-gradient(45deg,#F58529,#DD2A7B 55%,#8134AF)', linkedin: '#0A66C2', slideshare: '#0E2A47' };
  const SLABEL = { youtube: 'YouTube', instagram: 'Instagram', linkedin: 'LinkedIn', slideshare: 'SlideShare' };
  const live = Object.entries(SOCIAL).filter(([, v]) => v.url);

  const sg = $('#socialGrid');
  if (sg) sg.classList.add(live.length >= 4 ? 'xl:grid-cols-4' : 'lg:grid-cols-3');
  if (sg) sg.innerHTML = live.map(([k, v]) => `
    <a class="social-card" href="${v.url}" target="_blank" rel="noopener">
      <span class="social-ico" style="background:${SCOLOR[k]}">${SICON[k]}</span>
      <span class="min-w-0">
        <span class="block text-[13px] font-bold text-ink-500">${SLABEL[k]}${v.handle ? ', ' + esc(v.handle) : ''}</span>
        <span class="block font-bold leading-tight truncate">${esc(v.name)}</span>
        <span class="block text-[13px] text-ink-500 truncate">${esc(v.meta)}</span>
      </span>
    </a>`).join('');

  const fs = $('#footSocial');
  if (fs) fs.innerHTML = live.map(([k, v]) => `<a href="${v.url}" target="_blank" rel="noopener" aria-label="${SLABEL[k]}" class="w-10 h-10 rounded-full grid place-items-center bg-white/10 hover:bg-white/20 text-white">${SICON[k].replace('w-6 h-6', 'w-5 h-5')}</a>`).join('');

  const watchUrl = (m) => m.kind === 'youtube' ? `https://www.youtube.com/watch?v=${m.id}` : `https://www.instagram.com/reel/${m.id}/`;
  // YouTube refuses to play embeds that arrive without a website address (Error 153).
  // That happens when index.html is opened by double-click (file://). Served from a real
  // site or localhost it plays inline; from file:// we open YouTube in a new tab instead.
  const canEmbed = /^https?:$/.test(location.protocol);
  const embedUrl = (m) => m.kind === 'youtube'
    ? `https://www.youtube.com/embed/${m.id}?autoplay=1&rel=0&playsinline=1&origin=${encodeURIComponent(location.origin)}`
    : `https://www.instagram.com/reel/${m.id}/embed/`;

  const grid = $('#mediaGrid');
  if (grid) grid.innerHTML = VIDEOS.map((m, i) => {
    const yt = m.kind === 'youtube';
    return `
      <figure class="${yt ? 'col-span-2 lg:col-span-4' : 'col-span-1 lg:col-span-2'} min-w-0">
        <button type="button" class="media-card ${yt ? 'aspect-video' : 'aspect-[9/10]'}" data-media="${i}" aria-label="Play: ${esc(m.title)}">
          <img src="${m.thumb}" alt="" loading="lazy">
          <span class="media-tag" style="background:${yt ? '#E62117' : 'linear-gradient(45deg,#F58529,#DD2A7B 55%,#8134AF)'}">${SICON[m.kind].replace('w-6 h-6', 'w-3.5 h-3.5')}${yt ? 'YouTube' : 'Reel'}</span>
          <span class="media-play" aria-hidden="true"><svg class="w-7 h-7 ml-1" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.5v15a1 1 0 0 0 1.5.86l12.5-7.5a1 1 0 0 0 0-1.72L8.5 3.64A1 1 0 0 0 7 4.5Z"/></svg></span>
        </button>
        <figcaption class="mt-3">
          <span class="block font-bold leading-snug">${esc(m.title)}</span>
          <span class="block text-[13px] text-ink-500">${esc(m.meta)}</span>
        </figcaption>
      </figure>`;
  }).join('');

  // Player modal
  const modal = $('#vmodal'), frame = $('#vmFrame'), title = $('#vmTitle'), openLink = $('#vmOpen');
  let lastFocus = null, current = null;
  function fallback() {
    if (!current) return;
    frame.innerHTML = `<div class="aspect-video grid place-items-center text-center p-8 text-white">
      <div><p class="font-bold text-lg">This video can't play inside this preview.</p>
      <a href="${watchUrl(current)}" target="_blank" rel="noopener" class="mt-4 inline-flex bg-heart text-white font-bold rounded-full px-5 py-3">Watch on ${current.kind === 'youtube' ? 'YouTube' : 'Instagram'}</a></div></div>`;
  }
  function open(m) {
    if (!canEmbed) { window.open(watchUrl(m), '_blank', 'noopener'); return; }
    current = m; lastFocus = document.activeElement;
    const yt = m.kind === 'youtube';
    frame.style.maxWidth = yt ? '1000px' : '400px';
    frame.innerHTML = yt
      ? `<div class="aspect-video"><iframe class="w-full h-full" src="${embedUrl(m)}" title="${esc(m.title)}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" referrerpolicy="strict-origin-when-cross-origin"></iframe></div>`
      : `<div style="height:min(78svh,720px)"><iframe class="w-full h-full bg-white" src="${embedUrl(m)}" title="${esc(m.title)}" allow="autoplay; encrypted-media" scrolling="no"></iframe></div>`;
    title.textContent = m.title;
    openLink.href = watchUrl(m);
    openLink.textContent = yt ? 'Open on YouTube' : 'Open on Instagram';
    modal.hidden = false; document.body.style.overflow = 'hidden';
    $('#vmClose').focus();
  }
  function close() {
    if (modal.hidden) return;
    modal.hidden = true; frame.innerHTML = ''; current = null; document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus({ preventScroll: true });
  }
  if (grid) grid.addEventListener('click', (e) => { const b = e.target.closest('[data-media]'); if (b) open(VIDEOS[+b.dataset.media]); });
  $('#vmClose').addEventListener('click', close);
  modal.addEventListener('click', (e) => { if (e.target === modal || e.target === modal.firstElementChild) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  // If the host page blocks embedded players, show a direct link instead.
  document.addEventListener('securitypolicyviolation', (e) => {
    if (current && /youtube|instagram/.test(e.blockedURI || '')) fallback();
  });
})();

/* ---------------------------------------------------------------------
   COUNTERS (count up when scrolled into view)
   --------------------------------------------------------------------- */
(function counters() {
  const els = $$('[data-count]');
  const fmt = (n, f) => (f === 'k' && n >= 1000 ? (n / 1000).toFixed(n % 1000 ? 1 : 0).replace('.0', '') + 'K' : String(n));
  if (reduceMotion || !('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      io.unobserve(en.target);
      const el = en.target, end = +el.dataset.count, f = el.dataset.format;
      const t0 = performance.now(), dur = 1400;
      const tick = (t) => {
        const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3);
        el.textContent = fmt(Math.round(end * e), f);
        if (k < 1) requestAnimationFrame(tick); else el.textContent = fmt(end, f);
      };
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.6 });
  els.forEach((el) => io.observe(el));
})();

/* ---------------------------------------------------------------------
   EXPERTISE (tap to reveal)
   --------------------------------------------------------------------- */
(function expertise() {
  const list = $('#expertiseList');
  list.innerHTML = EXPERTISE.map((e, i) => `
    <details class="exp-item group bg-white border border-mist-200 rounded-2xl open:shadow-lift open:border-transparent transition-shadow" ${i === 0 ? 'open' : ''}>
      <summary class="list-none cursor-pointer flex items-center justify-between gap-4 px-5 py-4">
        <span class="font-bold text-[17px]">${esc(e.name)}</span>
        <span class="exp-plus shrink-0 w-8 h-8 rounded-full bg-mist grid place-items-center text-ink transition-transform" aria-hidden="true">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
        </span>
      </summary>
      <p class="px-5 pb-5 -mt-1 text-ink-500 max-w-[62ch]">${esc(e.text)}</p>
    </details>`).join('');
})();

/* ---------------------------------------------------------------------
   VENTURES: hero cards + full-page view (#venture-<id>)
   --------------------------------------------------------------------- */
(function ventures() {
  const row = $('#ventureRow');
  const page = $('#vpage');
  const inner = $('#vpInner');

  const ICON = {
    web: '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.8 3.8 5.8 3.8 9s-1.3 6.2-3.8 9c-2.5-2.8-3.8-5.8-3.8-9S9.5 5.8 12 3Z"/></svg>',
    android: '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M6 3.5v17a1 1 0 0 0 1.5.86l14-8.5a1 1 0 0 0 0-1.72l-14-8.5A1 1 0 0 0 6 3.5Z"/></svg>',
    ios: '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="2.5" width="12" height="19" rx="3"/><path d="M11 18.5h2"/></svg>',
    clinic: '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
    arrow: '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    back: '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>',
    tick: '<svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 4.5 4.5L19 7"/></svg>',
    call: '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/></svg>',
    mail: '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m4 7 8 6 8-6"/></svg>',
    cal: '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M16 3v4M8 3v4M3 10h18"/></svg>',
  };

  const mark = (v, size) => v.logo
    ? (v.logoBleed
      ? `<img src="${v.logo}" alt="" class="${size} rounded-2xl object-cover shrink-0">`
      : `<img src="${v.logo}" alt="" class="${size} rounded-2xl bg-white object-contain p-1 shrink-0 ring-1 ring-black/5">`)
    : `<span class="vc-mono ${size} rounded-2xl grid place-items-center font-display font-semibold shrink-0" style="--vc:${v.color}">${esc(v.monogram)}</span>`;

  /* ----- Cards in the hero ----- */
  const platChips = (v) => {
    if (v.clinic) return `<span class="vc-plat" title="Clinic in Guntur">${ICON.clinic}</span>`;
    if (v.contact) return `<span class="vc-plat" title="Contact">${ICON.call.replace('w-5 h-5', 'w-4 h-4')}</span>`;
    return ['web', 'android', 'ios'].filter((k) => v.platforms[k]).map((k) => {
      const soon = v.platforms[k].soon;
      const name = { web: 'Website', android: 'Android app', ios: 'iPhone app' }[k];
      return `<span class="vc-plat ${soon ? 'is-soon' : ''}" title="${name}${soon ? ', coming soon' : ''}">${ICON[k]}</span>`;
    }).join('');
  };

  row.innerHTML = VENTURES.map((v, i) => `
    <a role="listitem" href="#venture-${v.id}" class="vcard" style="--vc:${v.color};--i:${i}" aria-label="Open ${esc(v.name)}">
      ${mark(v, 'w-11 h-11 text-lg')}
      <span class="min-w-0">
        <span class="block font-bold text-[15.5px] leading-tight">${esc(v.name)}</span>
        <span class="vc-sub flex items-center gap-1.5 text-[13px] font-semibold mt-1">
          <span class="w-2 h-2 rounded-full shrink-0" style="background:${v.status.live ? '#22B8A9' : '#F5B841'}"></span><span class="truncate">${esc(v.short)}</span>
        </span>
      </span>
      <span class="vc-go" aria-hidden="true">${ICON.arrow.replace('w-5 h-5', 'w-4 h-4')}</span>
    </a>`).join('');

  /* ----- Carousel: arrows, dots, edge fades, gentle auto-advance ----- */
  (function carousel() {
    const wrap = $('#vrowWrap'), prev = $('#vrowPrev'), next = $('#vrowNext'), dotsEl = $('#vrowDots');
    if (!wrap) return;
    const cards = $$('.vcard', row);
    dotsEl.innerHTML = cards.map(() => '<span></span>').join('');
    const dots = $$('span', dotsEl);
    const step = () => (cards[1] ? cards[1].offsetLeft - cards[0].offsetLeft : row.clientWidth);
    const maxX = () => row.scrollWidth - row.clientWidth;
    function update() {
      const x = row.scrollLeft, m = maxX();
      wrap.classList.toggle('at-start', x <= 4);
      wrap.classList.toggle('at-end', x >= m - 4);
      prev.disabled = x <= 4; next.disabled = x >= m - 4 && m > 0;
      const i = m <= 4 ? 0 : Math.round(x / step());
      dots.forEach((d, k) => d.classList.toggle('on', k === Math.min(i, dots.length - 1)));
      dotsEl.hidden = m <= 4;
      prev.hidden = next.hidden = m <= 4;
    }
    const go = (dir) => row.scrollBy({ left: dir * step(), behavior: reduceMotion ? 'auto' : 'smooth' });
    prev.addEventListener('click', () => { go(-1); pause(); });
    next.addEventListener('click', () => { go(1); pause(); });
    row.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });
    window.addEventListener('resize', update);

    // Auto-advance every 3.5s; stops while the visitor hovers, touches or focuses the row.
    let timer = null, hold = false, idle = null;
    function tick() {
      if (hold || document.hidden || !page.hidden) return;
      if (row.scrollLeft >= maxX() - 4) row.scrollTo({ left: 0, behavior: 'smooth' }); else go(1);
    }
    function pause() { hold = true; clearTimeout(idle); idle = setTimeout(() => { hold = false; }, 6000); }
    if (!reduceMotion) {
      timer = setInterval(tick, 3500);
      ['pointerenter', 'touchstart', 'focusin', 'wheel'].forEach((ev) => row.addEventListener(ev, () => { hold = true; clearTimeout(idle); }, { passive: true }));
      ['pointerleave', 'touchend', 'focusout'].forEach((ev) => row.addEventListener(ev, pause, { passive: true }));
    }
    update();
  })();

  /* ----- Full page ----- */
  const storeBtn = (kind, p, light, onLight) => {
    if (!p) return '';
    const txt = {
      web: p.soon ? ['Website', 'Coming soon'] : ['Visit website', p.label],
      android: p.soon ? ['Android app', 'Coming soon'] : ['Get it on', 'Google Play'],
      ios: p.soon ? ['iPhone app', 'Coming soon'] : ['Download on the', 'App Store'],
    }[kind];
    const inner = `<span class="shrink-0">${ICON[kind].replace('w-4 h-4', 'w-6 h-6')}</span><span class="leading-tight text-left"><span class="block text-[11.5px] font-semibold opacity-80">${esc(txt[0])}</span><span class="block text-[16px] font-bold">${esc(txt[1])}</span></span>`;
    if (p.soon) return `<span class="store-btn is-soon ${onLight ? 'on-light' : ''}" aria-disabled="true">${inner}</span>`;
    return `<a class="store-btn ${light ? 'is-light' : ''}" href="${p.href}" target="_blank" rel="noopener">${inner}</a>`;
  };

  const clinicBtns = () => `
    <a class="store-btn is-light" href="#contact">${ICON.cal}<span class="leading-tight"><span class="block text-[11.5px] font-semibold opacity-70">Request a time</span><span class="block text-[16px] font-bold">Book a visit</span></span></a>
    <a class="store-btn" href="tel:${CONFIG.phoneTel}">${ICON.call}<span class="leading-tight"><span class="block text-[11.5px] font-semibold opacity-80">Call the clinic</span><span class="block text-[16px] font-bold num">${esc(CONFIG.phoneDisplay)}</span></span></a>
    <a class="store-btn" href="${CONFIG.mapUrl}" target="_blank" rel="noopener">${ICON.clinic.replace('w-4 h-4', 'w-5 h-5')}<span class="leading-tight"><span class="block text-[11.5px] font-semibold opacity-80">Anandapet, Guntur</span><span class="block text-[16px] font-bold">Get directions</span></span></a>`;

  const contactBtns = (v, onLight) => {
    const c = v.contact, out = [];
    const cls = onLight ? 'store-btn' : 'store-btn';
    if (c.book) out.push(`<a class="store-btn ${onLight ? '' : 'is-light'}" href="#contact" data-reason="${esc(c.book === true ? '' : c.book)}">${ICON.cal}<span class="leading-tight"><span class="block text-[11.5px] font-semibold opacity-70">Request a time</span><span class="block text-[16px] font-bold">Book a consultation</span></span></a>`);
    if (c.email) out.push(`<a class="store-btn ${onLight ? '' : 'is-light'}" href="mailto:${c.email}">${ICON.mail}<span class="leading-tight"><span class="block text-[11.5px] font-semibold opacity-70">Email</span><span class="block text-[15px] font-bold select-all">${esc(c.email)}</span></span></a>`);
    (c.phones || []).forEach((ph) => out.push(`<a class="${cls}" href="tel:${ph.tel}">${ICON.call}<span class="leading-tight"><span class="block text-[11.5px] font-semibold opacity-80">Call or WhatsApp</span><span class="block text-[16px] font-bold num select-all">${esc(ph.display)}</span></span></a>`));
    if (c.map) out.push(`<a class="${cls}" href="${CONFIG.mapUrl}" target="_blank" rel="noopener">${ICON.clinic.replace('w-4 h-4', 'w-5 h-5')}<span class="leading-tight"><span class="block text-[11.5px] font-semibold opacity-80">At Aaira, Guntur</span><span class="block text-[16px] font-bold">Get directions</span></span></a>`);
    return out.join('');
  };

  function pageHTML(v) {
    const p = v.platforms || {};
    const btns = v.clinic ? clinicBtns() : v.contact ? contactBtns(v) : [storeBtn('web', p.web, true), storeBtn('android', p.android), storeBtn('ios', p.ios)].join('');

    const visual = v.photo
      ? `<img src="${v.photo}" alt="Dr. Akif at Aaira Heart & Polyclinic" class="w-full max-w-[380px] mx-auto aspect-[4/5] object-cover object-top rounded-[28px] shadow-2xl">`
      : `<div class="bg-white text-ink rounded-[28px] p-6 sm:p-8 shadow-2xl max-w-[420px] mx-auto w-full">
           <div class="flex items-center gap-4">${mark(v, 'w-16 h-16 text-3xl')}<div><div class="font-display text-2xl font-semibold leading-tight">${esc(v.name)}</div><div class="text-sm font-bold text-ink-500">At a glance</div></div></div>
           ${v.offer ? `<div class="mt-5 rounded-2xl px-4 py-3 font-bold text-white text-center" style="background:${v.color}">${esc(v.offer)}</div>` : ''}
           <dl class="mt-6 grid gap-4">
             ${v.stats.map((s) => `<div class="flex items-baseline justify-between gap-4 border-t border-mist-200 pt-4"><dt class="text-ink-500 font-semibold">${esc(s.label)}</dt><dd class="num font-display text-2xl font-semibold text-right">${esc(s.value)}</dd></div>`).join('')}
           </dl>
         </div>`;

    const stepsBlock = v.steps ? `
      <div>
        <h2 class="font-display text-[28px] sm:text-[34px] font-semibold leading-tight">How it works</h2>
        <ol class="mt-6 grid gap-3">
          ${v.steps.map((st, i) => `<li class="flex gap-4 rounded-2xl border border-mist-200 p-4 sm:p-5"><span class="num w-10 h-10 shrink-0 rounded-full grid place-items-center font-display text-lg font-semibold text-white" style="background:${v.color}">${i + 1}</span><span><span class="block font-bold">${esc(st.title)}</span><span class="block text-ink-500">${esc(st.text)}</span></span></li>`).join('')}
        </ol>
      </div>` : '';

    const peopleBlock = v.people ? `
      <div>
        <h2 class="font-display text-[28px] sm:text-[34px] font-semibold leading-tight">Doctors at the clinic</h2>
        <ul class="mt-6 grid gap-3">
          ${v.people.map((pp) => `<li class="flex items-center gap-4 rounded-2xl border border-mist-200 p-4"><span class="w-12 h-12 rounded-full grid place-items-center font-display font-semibold" style="background:#FDE8EB;color:${v.color}">${esc(pp.name.replace(/^Dr\.?\s+/, '').split(/\s+/).slice(0, 2).map((w) => w[0]).join(''))}</span><span><span class="block font-bold">${esc(pp.name)}</span><span class="block text-ink-500 text-[15px]">${esc(pp.role)}</span></span></li>`).join('')}
        </ul>
        <div class="mt-5 rounded-2xl bg-mist p-5"><div class="font-bold">Address</div><div class="text-ink-500">Door no 17-11-16, Anandapet 10th Lane, Ponnur Road, beside Panchavati Apartment, Guntur 522003</div><div class="mt-2 font-bold">Hours</div><div class="text-ink-500">${esc(CONFIG.hours.label)}</div></div>
      </div>` : '';

    const modulesBlock = v.modules ? `
      <div>
        <h2 class="font-display text-[28px] sm:text-[34px] font-semibold leading-tight">What it will do</h2>
        <ul class="mt-6 grid grid-cols-2 gap-3">
          ${v.modules.map((m) => `<li class="rounded-2xl border border-mist-200 px-4 py-4 font-bold leading-snug">${esc(m)}</li>`).join('')}
        </ul>
        <p class="mt-5 text-ink-500">${esc(v.roles)}</p>
      </div>` : '';

    const h2 = (t) => `<h2 class="font-display text-[28px] sm:text-[34px] font-semibold leading-tight">${esc(t)}</h2>`;

    const audienceBlock = v.audience ? `
      <div>
        ${h2('Who can benefit')}
        <ul class="mt-6 grid sm:grid-cols-2 gap-3">
          ${v.audience.map((a) => `<li class="rounded-2xl border border-mist-200 px-4 py-4 font-bold leading-snug">${esc(a)}</li>`).join('')}
        </ul>
      </div>` : '';

    const pricingBlock = v.pricing ? `
      <div>
        ${h2('Pricing')}
        <p class="mt-2 text-ink-500">3 sessions a week. ${v.offer ? esc(v.offer) + '.' : ''}</p>
        <div class="mt-6 rounded-2xl border border-mist-200 overflow-hidden">
          <table class="w-full text-left">
            <tbody>
              ${v.pricing.map((r, i) => `<tr class="${i ? 'border-t border-mist-200' : ''}"><th scope="row" class="font-semibold px-5 py-4">${esc(r.label)}</th><td class="num font-display text-xl font-semibold px-5 py-4 text-right">${esc(r.price)}</td></tr>`).join('')}
            </tbody>
          </table>
        </div>
      </div>` : '';

    const includesBlock = v.includes ? `
      <div>
        ${h2('Every programme includes')}
        <ul class="mt-6 grid grid-cols-2 gap-3">
          ${v.includes.map((m) => `<li class="flex gap-2.5 rounded-2xl bg-mist px-4 py-4 font-bold leading-snug" style="color:${v.color}">${ICON.tick}<span class="text-ink">${esc(m)}</span></li>`).join('')}
        </ul>
        ${v.contact && v.contact.address ? `<div class="mt-5 rounded-2xl border border-mist-200 p-5"><div class="font-bold">Where</div><div class="text-ink-500">${esc(v.contact.address)}</div></div>` : ''}
      </div>` : '';

    const contactBlock = v.contact && !v.contact.address ? `
      <div>
        ${h2('Start your project')}
        <p class="mt-3 text-ink-500 max-w-[52ch]">Share your topic, your course and your deadline by email or phone.</p>
        <dl class="mt-6 grid gap-3">
          ${v.contact.email ? `<div class="rounded-2xl border border-mist-200 p-5"><dt class="text-sm font-bold text-ink-500">Email</dt><dd class="font-bold text-lg select-all break-all">${esc(v.contact.email)}</dd></div>` : ''}
          ${(v.contact.phones || []).map((ph) => `<div class="rounded-2xl border border-mist-200 p-5"><dt class="text-sm font-bold text-ink-500">Phone</dt><dd class="num font-bold text-lg select-all">${esc(ph.display)}</dd></div>`).join('')}
        </dl>
      </div>` : '';

    const others = VENTURES.filter((o) => o.id !== v.id);

    return `
      <div class="vp-bar bg-white/95 backdrop-blur border-b border-mist-200">
        <div class="gutter"><div class="wrap h-16 flex items-center justify-between gap-3">
          <button type="button" data-vp-close class="inline-flex items-center gap-2 font-bold rounded-full pl-2 pr-4 py-2 hover:bg-mist">${ICON.back}Back to home</button>
          <a href="#contact" class="hidden sm:inline-flex items-center bg-heart hover:bg-heart-600 text-white font-bold text-sm px-4 py-2.5 rounded-full">Book a visit</a>
        </div></div>
      </div>

      <header class="text-white" style="background:linear-gradient(135deg, ${v.color} 0%, #0E2A47 115%)">
        <div class="gutter"><div class="wrap py-12 lg:py-20 grid lg:grid-cols-[1.15fr_.85fr] gap-10 lg:gap-16 items-center">
          <div class="min-w-0">
            <span class="inline-flex items-center gap-2 text-[13px] font-bold rounded-full px-3 py-1.5 bg-white/15">
              <span class="w-2 h-2 rounded-full" style="background:${v.status.live ? '#5EEAD4' : '#F5B841'}"></span>${esc(v.status.text)}
            </span>
            <h1 id="vpTitle" class="font-display font-semibold mt-5 leading-[1.02] tracking-[-0.02em]" style="font-size:clamp(40px,6vw,88px)">${esc(v.name)}</h1>
            <p class="mt-4 text-xl sm:text-2xl font-semibold text-white/90 max-w-[34ch]">${esc(v.tagline)}</p>
            <p class="mt-4 text-[17px] text-white/80 max-w-[60ch]">${esc(v.about)}</p>
            <div class="mt-8 flex flex-wrap gap-3">${btns}</div>
          </div>
          <div class="min-w-0">${visual}</div>
        </div></div>
      </header>

      ${v.photo ? `
      <div class="gutter"><div class="wrap -mt-px">
        <div class="grid grid-cols-3 border-b border-mist-200">
          ${v.stats.map((s, i) => `<div class="py-6 ${i ? 'pl-4 sm:pl-8 border-l border-mist-200' : ''}"><div class="num font-display text-xl sm:text-3xl font-semibold">${esc(s.value)}</div><div class="text-[13px] sm:text-sm text-ink-500 font-semibold">${esc(s.label)}</div></div>`).join('')}
        </div>
      </div></div>` : ''}

      <div class="gutter"><div class="wrap py-14 lg:py-20 grid lg:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <h2 class="font-display text-[28px] sm:text-[34px] font-semibold leading-tight">${esc(v.featuresTitle || (v.clinic ? 'Care at the clinic' : 'What you get'))}</h2>
          <ul class="mt-6 grid ${v.features && v.features.length > 6 ? 'sm:grid-cols-2' : ''} gap-4">
            ${(v.features || []).map((f) => `<li class="flex gap-3 text-[17px] font-semibold" style="color:${v.color}">${ICON.tick}<span class="text-ink">${esc(f)}</span></li>`).join('')}
          </ul>
        </div>
        ${audienceBlock}${stepsBlock}${peopleBlock}${modulesBlock}${pricingBlock}${includesBlock}${contactBlock}
      </div></div>

      <div class="bg-mist">
        <div class="gutter"><div class="wrap py-12">
          <h2 class="font-display text-2xl font-semibold">More from Dr. Akif</h2>
          <div class="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            ${others.map((o) => `<a href="#venture-${o.id}" data-vp-switch class="flex items-center gap-3 bg-white rounded-2xl p-4 border border-mist-200 hover:border-ink/40 transition-colors" style="--vc:${o.color}">${mark(o, 'w-12 h-12 text-xl')}<span class="min-w-0"><span class="block font-bold leading-tight">${esc(o.name)}</span><span class="block text-[13px] text-ink-500 truncate">${esc(o.tagline)}</span></span></a>`).join('')}
          </div>
        </div></div>
      </div>
      <div style="height:calc(24px + env(safe-area-inset-bottom, 0px))"></div>`;
  }

  let openedHere = false, lastFocus = null;

  function open(v) {
    if (page.hidden) lastFocus = document.activeElement;
    inner.innerHTML = pageHTML(v);
    page.hidden = false;
    page.classList.remove('is-open'); void page.offsetWidth; page.classList.add('is-open');
    page.scrollTop = 0;
    document.body.style.overflow = 'hidden';
    document.title = v.name + ' | Dr. Akif Ahamad Baig';
    page.focus({ preventScroll: true });
  }
  function close() {
    if (page.hidden) return;
    page.hidden = true;
    page.classList.remove('is-open');
    document.body.style.overflow = '';
    document.title = 'Dr. Akif Ahamad Baig';
    if (lastFocus && document.contains(lastFocus)) lastFocus.focus({ preventScroll: true });
  }
  function route() {
    const m = location.hash.match(/^#venture-([a-z]+)$/);
    const v = m && VENTURES.find((x) => x.id === m[1]);
    if (v) open(v); else close();
  }

  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#venture-"]');
    if (a && page.hidden) openedHere = true;
  });
  page.addEventListener('click', (e) => {
    if (e.target.closest('[data-vp-close]')) {
      if (openedHere) { openedHere = false; history.back(); }
      else { location.hash = 'ventures'; }
    }
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !page.hidden) $('[data-vp-close]', page).click(); });

  /* ----- Ventures section: tabs + summary panel ----- */
  const tabsEl = $('#ventureTabs');
  const panelEl = $('#venturePanel');
  if (tabsEl && panelEl) {
    tabsEl.innerHTML = VENTURES.map((v, i) => `
      <button role="tab" id="tab-${v.id}" aria-controls="venturePanel" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}" data-id="${v.id}"
        class="venture-tab snap-start shrink-0 lg:shrink text-left flex items-center gap-3 rounded-2xl border border-white/15 px-3 py-3 lg:px-4 min-w-[220px] lg:min-w-0 hover:border-white/40 transition-colors" style="--vc:${v.color}">
        ${mark(v, 'w-11 h-11 text-lg')}
        <span class="min-w-0">
          <span class="block font-bold leading-tight">${esc(v.name)}</span>
          <span class="tab-sub flex items-center gap-1.5 text-[13px] text-[#9FB2C8] mt-0.5"><span class="w-2 h-2 rounded-full" style="background:${v.status.live ? '#3BD1C3' : '#F5B841'}"></span>${esc(v.short)}</span>
        </span>
      </button>`).join('');

    const renderPanel = (v) => {
      const p = v.platforms || {};
      const btns = v.contact ? contactBtns(v, true) : v.clinic
        ? `<a class="store-btn" href="#contact">${ICON.cal}<span class="leading-tight"><span class="block text-[11.5px] font-semibold opacity-80">Request a time</span><span class="block text-[16px] font-bold">Book a visit</span></span></a>
           <a class="store-btn" href="${CONFIG.mapUrl}" target="_blank" rel="noopener">${ICON.clinic.replace('w-4 h-4', 'w-5 h-5')}<span class="leading-tight"><span class="block text-[11.5px] font-semibold opacity-80">Anandapet, Guntur</span><span class="block text-[16px] font-bold">Get directions</span></span></a>`
        : [storeBtn('web', p.web, false, true), storeBtn('android', p.android, false, true), storeBtn('ios', p.ios, false, true)].join('');
      panelEl.innerHTML = `
        <div class="venture-panel" style="--vc:${v.color}">
          <div class="flex flex-wrap items-center gap-4">
            ${mark(v, 'w-16 h-16 text-3xl')}
            <div class="min-w-0">
              <h3 class="font-display text-2xl sm:text-3xl font-semibold leading-tight">${esc(v.name)}</h3>
              <span class="mt-1 inline-flex items-center gap-2 text-[13px] font-bold rounded-full px-3 py-1 ${v.status.live ? 'bg-pulse-100 text-pulse' : 'bg-[#FDF0D9] text-[#8A5A00]'}"><span class="w-2 h-2 rounded-full ${v.status.live ? 'bg-pulse' : 'bg-[#F5B841]'}"></span>${esc(v.status.text)}</span>
            </div>
          </div>
          <p class="mt-5 text-[17px] text-ink-500 max-w-[64ch]">${esc(v.about)}</p>
          <div class="mt-6 grid grid-cols-3 gap-px bg-mist-200 rounded-2xl overflow-hidden border border-mist-200">
            ${v.stats.map((st) => `<div class="bg-white p-3 sm:p-4 min-w-0"><div class="num font-display text-lg sm:text-2xl font-semibold leading-tight break-words">${esc(st.value)}</div><div class="text-[12px] sm:text-[13px] text-ink-500 font-semibold mt-1">${esc(st.label)}</div></div>`).join('')}
          </div>
          <ul class="mt-6 grid sm:grid-cols-2 gap-3">
            ${(v.features || v.modules || []).slice(0, 4).map((f) => `<li class="flex gap-2.5 text-[15px] font-semibold" style="color:${v.color}">${ICON.tick}<span class="text-ink">${esc(f)}</span></li>`).join('')}
          </ul>
          <div class="mt-7 flex flex-wrap gap-3">
            <a href="#venture-${v.id}" class="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-bold bg-heart text-white hover:bg-heart-600 transition-colors">Open full page ${ICON.arrow}</a>
          </div>
          <div class="mt-4 flex flex-wrap gap-3">${btns}</div>
        </div>`;
    };

    const selectTab = (id, focus) => {
      $$('.venture-tab', tabsEl).forEach((t) => {
        const on = t.dataset.id === id;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        if (on && focus) t.focus();
      });
      panelEl.setAttribute('aria-labelledby', 'tab-' + id);
      renderPanel(VENTURES.find((v) => v.id === id));
    };
    tabsEl.addEventListener('click', (e) => { const b = e.target.closest('.venture-tab'); if (b) selectTab(b.dataset.id); });
    tabsEl.addEventListener('keydown', (e) => {
      if (!['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp', 'Home', 'End'].includes(e.key)) return;
      e.preventDefault();
      const all = $$('.venture-tab', tabsEl);
      let i = all.findIndex((t) => t.getAttribute('aria-selected') === 'true');
      if (e.key === 'Home') i = 0; else if (e.key === 'End') i = all.length - 1;
      else i = (i + (e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : -1) + all.length) % all.length;
      selectTab(all[i].dataset.id, true);
    });
    selectTab(VENTURES[0].id);
  }

  window.addEventListener('hashchange', route);
  route();
})();

/* ---------------------------------------------------------------------
   TEACHING: views chart (bars drawn to one scale)
   --------------------------------------------------------------------- */
(function talks() {
  const box = $('#talkChart');
  const max = Math.max(...TALKS.map((t) => t.views));
  const k = (n) => (n / 1000).toFixed(1) + 'K';
  box.innerHTML = TALKS.map((t, i) => `
    <div class="min-w-0">
      <div class="flex items-baseline justify-between gap-3 text-[15px]">
        <span class="font-bold truncate">${esc(t.title)}</span>
        <span class="num font-bold text-ink-500 shrink-0">${k(t.views)} views</span>
      </div>
      <div class="mt-1.5 h-3 rounded-full bg-mist overflow-hidden">
        <div class="h-full rounded-full ${i === 0 ? 'bg-heart' : 'bg-ink'}" style="width:${(t.views / max * 100).toFixed(1)}%"></div>
      </div>
    </div>`).join('');
})();

/* ---------------------------------------------------------------------
   TEAM (filter chips)
   --------------------------------------------------------------------- */
(function team() {
  const grid = $('#teamGrid');
  const groupColor = { clinic: ['#FDE8EB', '#A50D26'], academic: ['#DDF3F0', '#0B6F68'], ops: ['#E3E9F1', '#0E2A47'] };
  const groupName = { clinic: 'Clinic', academic: 'Academic', ops: 'Operations' };
  const initials = (n) => n.replace(/^Dr\.?\s+/i, '').split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase();

  grid.innerHTML = TEAM.map((p) => {
    const [bg, fg] = groupColor[p.group];
    const avatar = p.photo
      ? `<img src="${p.photo}" alt="" class="w-14 h-14 rounded-full object-cover shrink-0">`
      : `<span class="w-14 h-14 rounded-full grid place-items-center font-display text-lg font-semibold shrink-0" style="background:${bg};color:${fg}">${esc(initials(p.name))}</span>`;
    return `
      <li class="team-card bg-white rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 min-w-0" data-group="${p.group}">
        ${avatar}
        <div class="min-w-0">
          <div class="font-bold leading-tight">${esc(p.name)}</div>
          <div class="text-[14px] text-ink-500 leading-snug mt-0.5">${esc(p.role)}</div>
          <div class="text-[12px] font-bold mt-1" style="color:${fg}">${groupName[p.group]}</div>
        </div>
      </li>`;
  }).join('');

  const chips = $$('#teamFilters .chip');
  chips.forEach((c) => c.addEventListener('click', () => {
    chips.forEach((x) => x.setAttribute('aria-pressed', String(x === c)));
    const f = c.dataset.filter;
    $$('.team-card', grid).forEach((card) => { card.hidden = !(f === 'all' || card.dataset.group === f); });
  }));
})();

/* ---------------------------------------------------------------------
   GALLERY + LIGHTBOX (keyboard + swipe)
   --------------------------------------------------------------------- */
(function gallery() {
  const grid = $('#galleryGrid');
  const clinicTile = `
    <div class="relative overflow-hidden rounded-2xl bg-ink text-white p-6 sm:p-7">
      <div class="absolute -right-10 -top-10 w-40 h-40 rounded-full border-[18px] border-heart/40" aria-hidden="true"></div>
      <div class="relative">
        <div class="text-sm font-bold text-[#F3A6B2]">The clinic</div>
        <div class="font-display text-2xl sm:text-3xl font-semibold leading-tight mt-1">Aaira Heart &amp; Polyclinic</div>
        <p class="mt-3 text-[15px] text-[#C7D3E2]">Anandapet 10th Lane, Ponnur Road, Guntur. Cardiology, general medicine and pulmonology under one roof.</p>
        <div class="mt-5 flex flex-wrap gap-2">
          <a href="#venture-aaira" class="inline-flex font-bold text-sm bg-white text-ink rounded-full px-4 py-2">See the clinic</a>
          <a href="${CONFIG.mapUrl}" target="_blank" rel="noopener" class="inline-flex font-bold text-sm border border-white/40 rounded-full px-4 py-2">Directions</a>
        </div>
      </div>
    </div>`;
  grid.innerHTML = clinicTile + GALLERY.map((g, i) => `
    <button class="group relative overflow-hidden rounded-2xl bg-mist text-left" data-i="${i}" aria-label="View photo: ${esc(g.cap)}">
      <img src="${g.src}" width="${g.w}" height="${g.h}" loading="lazy" alt="${esc(g.cap)}" class="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.03]">
      <span class="absolute inset-x-0 bottom-0 p-3 pt-10 bg-gradient-to-t from-ink/75 to-transparent text-white text-sm font-bold">${esc(g.cap)}</span>
    </button>`).join('');

  const lb = $('#lightbox'), img = $('#lbImg'), cap = $('#lbCap');
  let idx = 0, lastFocus = null;
  const show = (i) => { idx = (i + GALLERY.length) % GALLERY.length; img.src = GALLERY[idx].src; img.alt = GALLERY[idx].cap; cap.textContent = `${GALLERY[idx].cap}  (${idx + 1} of ${GALLERY.length})`; };
  const open = (i) => { lastFocus = document.activeElement; show(i); lb.hidden = false; document.body.style.overflow = 'hidden'; $('#lbClose').focus(); };
  const close = () => { lb.hidden = true; document.body.style.overflow = ''; if (lastFocus) lastFocus.focus(); };

  grid.addEventListener('click', (e) => { const b = e.target.closest('button[data-i]'); if (b) open(+b.dataset.i); });
  $('#lbClose').addEventListener('click', close);
  $('#lbPrev').addEventListener('click', () => show(idx - 1));
  $('#lbNext').addEventListener('click', () => show(idx + 1));
  lb.addEventListener('click', (e) => { if (e.target === lb || e.target === lb.firstElementChild) close(); });
  document.addEventListener('keydown', (e) => {
    if (lb.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(idx - 1);
    if (e.key === 'ArrowRight') show(idx + 1);
  });
  let sx = null;
  lb.addEventListener('touchstart', (e) => { sx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', (e) => {
    if (sx === null) return;
    const dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 50) show(idx + (dx < 0 ? 1 : -1));
    sx = null;
  });
})();

/* ---------------------------------------------------------------------
   CONTACT: hours, open-now, phone, WhatsApp booking
   --------------------------------------------------------------------- */
(function contact() {
  $('#hoursText').textContent = CONFIG.hours.label;
  $('#phoneText').textContent = CONFIG.phoneDisplay;
  if (CONFIG.altPhoneDisplay) $('#phoneText2').textContent = CONFIG.altPhoneDisplay;
  $('#mapLink').href = CONFIG.mapUrl;
  $('#barMap').href = CONFIG.mapUrl;
  $('#barCall').href = 'tel:' + CONFIG.phoneTel;
  $('#year').textContent = new Date().getFullYear();

  // Open now? (clinic time is India Standard Time)
  try {
    const parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Kolkata', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date());
    const get = (t) => parts.find((p) => p.type === t).value;
    const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
    const mins = (+get('hour') % 24) * 60 + +get('minute');
    const toM = (s) => { const [h, m] = s.split(':').map(Number); return h * 60 + m; };
    const isOpen = CONFIG.hours.days.includes(day) && mins >= toM(CONFIG.hours.open) && mins < toM(CONFIG.hours.close);
    const el = $('#openNow');
    el.innerHTML = isOpen
      ? '<span class="inline-flex items-center gap-2 text-pulse"><span class="w-2 h-2 rounded-full bg-pulse beat"></span>Open now</span>'
      : '<span class="text-ink-500">Closed right now</span>';
  } catch (e) { /* time zone not supported: skip the badge */ }

  $('#copyPhone').addEventListener('click', async (e) => {
    const btn = e.currentTarget;
    try { await navigator.clipboard.writeText(CONFIG.phoneDisplay); btn.textContent = 'Copied'; }
    catch { const r = document.createRange(); r.selectNodeContents($('#phoneText')); const s = getSelection(); s.removeAllRanges(); s.addRange(r); btn.textContent = 'Selected, press copy'; }
    setTimeout(() => { btn.textContent = 'Copy number'; }, 2000);
  });

  // Min date = today
  const d = $('#fDate');
  const today = new Date(); today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
  d.min = today.toISOString().slice(0, 10);

  // Venture buttons can preselect the reason (e.g. Beat N Breath)
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[data-reason]');
    if (!a || !a.dataset.reason) return;
    const sel = $('#fReason');
    if (![...sel.options].some((o) => o.value === a.dataset.reason)) sel.add(new Option(a.dataset.reason, a.dataset.reason));
    sel.value = a.dataset.reason;
  });

  const form = $('#bookForm'), err = $('#formError'), btn = $('#bookBtn');
  const showErr = (msg, field) => { err.textContent = msg; err.hidden = false; if (field) $(field).focus(); };

  function showDone(html) {
    let done = $('#bookDone');
    if (!done) { done = document.createElement('div'); done.id = 'bookDone'; done.setAttribute('role', 'status'); form.appendChild(done); }
    done.className = 'rounded-2xl bg-pulse-100 p-4 text-[15px]';
    done.innerHTML = html;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = {
      name: $('#fName').value.trim(),
      phone: $('#fPhone').value.replace(/\D/g, '').slice(-10),
      reason: $('#fReason').value,
      preferred_date: d.value || null,
      note: $('#fNote').value.trim(),
      website: $('#fWebsite').value,          // honeypot: real people leave this empty
      source: 'portfolio',
    };
    if (!data.name) return showErr('Enter your name.', '#fName');
    if (data.phone.length !== 10) return showErr('Enter a 10-digit mobile number.', '#fPhone');
    err.hidden = true;

    const label = btn.innerHTML;
    btn.disabled = true; btn.textContent = 'Sending...';
    try {
      const res = await fetch(CONFIG.bookingApi, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) {
        const first = body && typeof body === 'object' ? Object.values(body)[0] : null;
        throw new Error(Array.isArray(first) ? first[0] : (first || 'The request could not be saved.'));
      }
      form.reset(); d.min = today.toISOString().slice(0, 10);
      showDone(`<div class="font-bold text-pulse">Request received${body.reference ? `, reference ${esc(body.reference)}` : ''}.</div>
        <div class="text-ink-500 mt-1">The clinic will call ${esc(data.phone)} to confirm a time.</div>`);
    } catch (ex) {
      // Server unreachable or rejected: offer WhatsApp so the patient is never stuck.
      const date = data.preferred_date ? new Date(data.preferred_date + 'T00:00').toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' }) : 'Any day';
      const msg = ['Appointment request for Dr. Akif Ahamad Baig', `Name: ${data.name}`, `Phone: ${data.phone}`, `Reason: ${data.reason}`, `Preferred date: ${date}`, data.note ? `Note: ${data.note}` : ''].filter(Boolean).join('\n');
      showErr(`${ex.message || 'The request could not be sent.'} You can send it on WhatsApp instead.`);
      showDone(`<a href="https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}" target="_blank" rel="noopener" class="inline-flex font-bold text-heart hover:underline">Send on WhatsApp</a>`);
    } finally {
      btn.disabled = false; btn.innerHTML = label;
    }
  });
})();
