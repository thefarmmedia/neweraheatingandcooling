/* =============================================
   NEW ERA HEATING & COOLING — SHARED COMPONENTS
   ============================================= */

const SITE = {
  company: 'New ERA Heating & Cooling',
  phone: '(417) 732-8400',
  phoneRaw: '4177328400',
  email: 'info@newerahvac.com',
  address: 'Serving Springfield, MO & Surrounding Areas',
  city: 'Springfield',
  state: 'MO',
  zip: '65804',
  hours: 'Mon–Fri 7am–6pm, Sat 8am–4pm',
  emergency: '24/7 Emergency Service Available',
  founded: '2009',
  owner: 'Bryan Swanson',
};

const NAV = [
  { label: 'Services', href: '/services/', id: 'services' },
  { label: 'Service Areas', href: '/service-areas/', id: 'areas' },
  { label: 'System Builder', href: '/system-builder.html', id: 'builder', badge: 'Free Tool' },
  { label: 'Financing', href: '/financing.html', id: 'financing' },
  { label: 'Blog', href: '/blog/', id: 'blog' },
  { label: 'About', href: '/about.html', id: 'about' },
];

const SERVICE_AREAS = [
  'Springfield','Republic','Nixa','Ozark','Willard','Battlefield',
  'Strafford','Rogersville','Bolivar','Branson','Hollister','Marionville',
  'Aurora','Monett','Mount Vernon','Carl Junction','Joplin','Webb City',
  'Carthage','Neosho','Fair Grove','Clever','Reeds Spring','Forsyth'
];

const SERVICE_AREA_SLUGS = {
  'Springfield': 'springfield','Republic': 'republic','Nixa': 'nixa',
  'Ozark': 'ozark','Willard': 'willard','Battlefield': 'battlefield',
  'Strafford': 'strafford','Rogersville': 'rogersville','Bolivar': 'bolivar',
  'Branson': 'branson','Hollister': 'hollister','Marionville': 'marionville',
  'Aurora': 'aurora','Monett': 'monett','Mount Vernon': 'mount-vernon',
  'Carl Junction': 'carl-junction','Joplin': 'joplin','Webb City': 'webb-city',
  'Carthage': 'carthage','Neosho': 'neosho','Fair Grove': 'fair-grove',
  'Clever': 'clever','Reeds Spring': 'reeds-spring','Forsyth': 'forsyth'
};

function svgIcon(name) {
  const icons = {
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.95 9.7a19.79 19.79 0 01-3.07-8.67A2 2 0 012.86 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20,6 9,17 4,12"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
    location: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    warning: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    wrench: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>',
    snowflake: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="2" x2="12" y2="22"/><path d="M17 7l-5 5-5-5"/><path d="M17 17l-5-5-5 5"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M7 7l5 5 5-5"/><path d="M7 17l5-5 5 5"/></svg>',
    flame: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"/></svg>',
    wind: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2"/></svg>',
    droplets: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/></svg>',
    zap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/></svg>',
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>',
    building: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16,8 20,8 23,11 23,16 16,16 16,8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
    thermometer: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z"/></svg>',
    award: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88"/></svg>',
    users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',
    dollar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>',
    calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
    tool: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>',
  };
  return icons[name] || '';
}

function renderTopBar() {
  return `
<div class="topbar">
  <div class="container">
    <div class="topbar-left">
      <span class="topbar-item">${svgIcon('location')} Serving Springfield, MO &amp; Surrounding Areas</span>
      <span class="topbar-item">${svgIcon('clock')} ${SITE.hours}</span>
    </div>
    <div class="topbar-right">
      <span class="topbar-item">${svgIcon('warning')} <strong>24/7 Emergency Service</strong></span>
      <a href="tel:${SITE.phoneRaw}" class="topbar-item">${svgIcon('phone')} ${SITE.phone}</a>
    </div>
  </div>
</div>`;
}

function renderHeader(activePage) {
  const path = window.location.pathname;

  const servicesMega = `
<div class="nav-item">
  <a href="/services/" class="${path.includes('/services') ? 'active' : ''}">Services</a>
  <div class="mega-menu mega-menu--wide">
    <div class="mega-cols mega-cols--4">
      <div class="mega-col">
        <h5>${svgIcon('snowflake')} Air Conditioning</h5>
        <a href="/services/ac-installation.html">${svgIcon('wrench')} AC Installation</a>
        <a href="/services/ac-repair.html">${svgIcon('tool')} AC Repair</a>
        <a href="/services/ac-maintenance.html">${svgIcon('check')} AC Maintenance</a>
        <a href="/services/ac-replacement.html">${svgIcon('arrow')} AC Replacement</a>
        <a href="/services/air-conditioning.html">${svgIcon('arrow')} All AC Services</a>
      </div>
      <div class="mega-col">
        <h5>${svgIcon('flame')} Heating</h5>
        <a href="/services/furnace-installation.html">${svgIcon('wrench')} Furnace Installation</a>
        <a href="/services/furnace-repair.html">${svgIcon('tool')} Furnace Repair</a>
        <a href="/services/furnace-maintenance.html">${svgIcon('check')} Furnace Maintenance</a>
        <a href="/services/furnace-replacement.html">${svgIcon('arrow')} Furnace Replacement</a>
        <a href="/services/boiler-service.html">${svgIcon('thermometer')} Boiler Service</a>
        <a href="/services/heat-pumps.html">${svgIcon('zap')} Heat Pumps</a>
        <a href="/services/mini-splits.html">${svgIcon('wind')} Mini-Splits</a>
      </div>
      <div class="mega-col">
        <h5>${svgIcon('wind')} Air Quality &amp; More</h5>
        <a href="/services/indoor-air-quality.html">${svgIcon('wind')} Indoor Air Quality</a>
        <a href="/services/air-purifiers.html">${svgIcon('shield')} Air Purifiers</a>
        <a href="/services/uv-lights.html">${svgIcon('zap')} UV Light Systems</a>
        <a href="/services/humidity-control.html">${svgIcon('droplets')} Humidity Control</a>
        <a href="/services/thermostats.html">${svgIcon('thermometer')} Smart Thermostats</a>
        <a href="/services/electrical.html">${svgIcon('zap')} Electrical</a>
      </div>
      <div class="mega-col">
        <h5>${svgIcon('droplets')} Water &amp; Commercial</h5>
        <a href="/services/water-heaters.html">${svgIcon('droplets')} Water Heaters</a>
        <a href="/services/water-heater-installation.html">${svgIcon('wrench')} Water Heater Install</a>
        <a href="/services/water-heater-repair.html">${svgIcon('tool')} Water Heater Repair</a>
        <a href="/services/tankless-water-heaters.html">${svgIcon('arrow')} Tankless Units</a>
        <a href="/services/commercial-hvac.html">${svgIcon('building')} Commercial HVAC</a>
        <a href="/services/residential-hvac.html">${svgIcon('home')} Residential HVAC</a>
        <a href="/services/">${svgIcon('arrow')} All Services →</a>
      </div>
    </div>
    <div class="mega-footer">
      <span style="font-size:.85rem;color:var(--gray-500)">Need help choosing? Our experts will guide you.</span>
      <div style="display:flex;gap:12px">
        <a href="/emergency.html" style="color:var(--red)!important">🚨 Emergency Service</a>
        <a href="/system-builder.html">Free System Builder →</a>
      </div>
    </div>
  </div>
</div>`;

  const areasMega = `
<div class="nav-item">
  <a href="/service-areas/" class="${path.includes('/service-areas') ? 'active' : ''}">Service Areas</a>
  <div class="mega-menu">
    <h5 style="font-size:.7rem;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:var(--gray-400);margin-bottom:16px">Southwest Missouri — 24 Communities Served</h5>
    <div class="mega-areas-grid">
      ${SERVICE_AREAS.map(a => `<a href="/service-areas/${SERVICE_AREA_SLUGS[a]}.html">${a}</a>`).join('')}
    </div>
    <div class="mega-footer">
      <span style="font-size:.85rem;color:var(--gray-500)">Based in Springfield, MO. Fast response to all areas.</span>
      <a href="/service-areas/">View All Service Areas →</a>
    </div>
  </div>
</div>`;

  return `
<header class="site-header">
  <div class="container">
    <div class="header-inner">
      <a href="/" class="logo" aria-label="${SITE.company} Home">
        <img src="/images/logo.svg" alt="${SITE.company} Logo" width="184" height="51" loading="eager">
      </a>
      <nav class="nav" aria-label="Main navigation">
        ${servicesMega}
        ${areasMega}
        <a href="/system-builder.html" class="${path.includes('system-builder') ? 'active' : ''}">
          System Builder <span class="badge badge--gold" style="margin-left:4px;font-size:.68rem">Free</span>
        </a>
        <a href="/financing.html" class="${path.includes('financing') ? 'active' : ''}">Financing</a>
        <a href="/blog/" class="${path.includes('/blog') ? 'active' : ''}">Blog</a>
        <a href="/about.html" class="${path.includes('about') ? 'active' : ''}">About</a>
        <a href="/contact.html" class="nav-cta">Get a Free Quote</a>
      </nav>
      <button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</header>
<div class="mobile-menu" id="mobileMenu" role="dialog" aria-label="Mobile navigation">
  <div class="mobile-menu-top">
    <a href="/" class="logo"><img src="/images/logo.svg" alt="${SITE.company}" height="44"></a>
    <button id="closeMenu" aria-label="Close menu" style="background:#f3f4f6;border-radius:8px;padding:8px;font-size:1.3rem">×</button>
  </div>
  <a href="/services/" style="font-weight:800">Services ↓</a>
  <a href="/services/air-conditioning.html" style="padding-left:28px;font-size:.95rem">Air Conditioning</a>
  <a href="/services/heating.html" style="padding-left:28px;font-size:.95rem">Heating &amp; Furnaces</a>
  <a href="/services/heat-pumps.html" style="padding-left:28px;font-size:.95rem">Heat Pumps &amp; Mini-Splits</a>
  <a href="/services/indoor-air-quality.html" style="padding-left:28px;font-size:.95rem">Indoor Air Quality</a>
  <a href="/services/water-heaters.html" style="padding-left:28px;font-size:.95rem">Water Heaters</a>
  <a href="/services/commercial-hvac.html" style="padding-left:28px;font-size:.95rem">Commercial HVAC</a>
  <a href="/service-areas/" style="font-weight:800">Service Areas ↓</a>
  ${SERVICE_AREAS.slice(0,8).map(a => `<a href="/service-areas/${SERVICE_AREA_SLUGS[a]}.html" style="padding-left:28px;font-size:.95rem">${a}</a>`).join('')}
  <a href="/service-areas/" style="padding-left:28px;font-size:.95rem;color:var(--blue-mid)">View All 24 Areas →</a>
  <a href="/system-builder.html">System Builder ✦ Free Tool</a>
  <a href="/financing.html">Financing</a>
  <a href="/blog/">Blog</a>
  <a href="/about.html">About</a>
  <a href="/emergency.html" style="color:var(--red);font-weight:800">🚨 Emergency Service</a>
  <div class="mobile-menu-cta">
    <a href="tel:${SITE.phoneRaw}" class="btn btn--primary btn--lg" style="justify-content:center;text-align:center">
      ${svgIcon('phone')} Call ${SITE.phone}
    </a>
    <a href="/contact.html" class="btn btn--ghost btn--lg" style="justify-content:center;text-align:center">Get Free Quote</a>
  </div>
</div>`;
}

function renderEmergencyBar() {
  return `
<div class="emergency-bar">
  <div class="container">
    <strong>${svgIcon('warning')} HVAC Emergency? We're Available 24/7!</strong>
    <a href="tel:${SITE.phoneRaw}">Call Now: ${SITE.phone}</a>
  </div>
</div>`;
}

function renderTrustBar() {
  return `
<div class="trust-bar">
  <div class="container">
    <div class="trust-item">
      ${svgIcon('award')}
      <div class="trust-item-text"><strong>NATE Certified</strong><span>Technicians</span></div>
    </div>
    <div class="trust-item">
      ${svgIcon('star')}
      <div class="trust-item-text"><strong>500+ 5-Star Reviews</strong><span>Google &amp; Facebook</span></div>
    </div>
    <div class="trust-item">
      ${svgIcon('calendar')}
      <div class="trust-item-text"><strong>Since 2009</strong><span>15+ Years Experience</span></div>
    </div>
    <div class="trust-item">
      ${svgIcon('clock')}
      <div class="trust-item-text"><strong>24/7 Emergency</strong><span>Always Available</span></div>
    </div>
    <div class="trust-item">
      ${svgIcon('shield')}
      <div class="trust-item-text"><strong>Licensed &amp; Insured</strong><span>Bonded &amp; Certified</span></div>
    </div>
  </div>
</div>`;
}

function renderFooter() {
  const areaLinks = SERVICE_AREAS.map(a =>
    `<a href="/service-areas/${SERVICE_AREA_SLUGS[a]}.html">${a}</a>`
  ).slice(0,12).join('');

  return `
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="/images/logo-white.svg" alt="${SITE.company}" height="52">
        <p>Springfield's trusted HVAC experts since ${SITE.founded}. Residential &amp; commercial heating, cooling, air quality, and water heater services.</p>
        <a href="tel:${SITE.phoneRaw}" class="phone">${SITE.phone}</a>
        <a href="mailto:${SITE.email}" style="color:rgba(255,255,255,.6);font-size:.88rem">${SITE.email}</a>
        <div style="margin-top:16px;font-size:.82rem;color:rgba(255,255,255,.5)">${SITE.hours}<br>${SITE.emergency}</div>
      </div>
      <div class="footer-col">
        <h4>Our Services</h4>
        <div class="footer-links">
          <a href="/services/air-conditioning.html">Air Conditioning</a>
          <a href="/services/heating.html">Heating &amp; Furnaces</a>
          <a href="/services/heat-pumps.html">Heat Pumps</a>
          <a href="/services/mini-splits.html">Mini-Splits</a>
          <a href="/services/indoor-air-quality.html">Indoor Air Quality</a>
          <a href="/services/water-heaters.html">Water Heaters</a>
          <a href="/services/electrical.html">Electrical</a>
          <a href="/services/commercial-hvac.html">Commercial HVAC</a>
          <a href="/services/">All Services</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Service Areas</h4>
        <div class="footer-links">
          ${areaLinks}
          <a href="/service-areas/" style="color:var(--gold)">View All Areas →</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <div class="footer-links">
          <a href="/about.html">About Us</a>
          <a href="/reviews.html">Customer Reviews</a>
          <a href="/financing.html">Financing Options</a>
          <a href="/system-builder.html">HVAC System Builder</a>
          <a href="/faq.html">FAQ</a>
          <a href="/blog/">HVAC Blog</a>
          <a href="/careers.html">Careers</a>
          <a href="/emergency.html">Emergency Service</a>
          <a href="/contact.html">Contact Us</a>
        </div>
      </div>
    </div>
  </div>
  <div style="background:rgba(0,0,0,.2)">
    <div class="container">
      <div class="footer-bottom">
        <span>&copy; ${new Date().getFullYear()} ${SITE.company}. All rights reserved. Licensed &amp; Insured. Serving Springfield, MO &amp; surrounding areas.</span>
        <div style="display:flex;gap:16px">
          <a href="/privacy.html">Privacy Policy</a>
          <a href="/sitemap.html">Sitemap</a>
        </div>
      </div>
    </div>
  </div>
</footer>`;
}

function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const closeMenu = document.getElementById('closeMenu');
  const mobileMenu = document.getElementById('mobileMenu');
  if (!hamburger || !mobileMenu) return;
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('open');
    hamburger.setAttribute('aria-expanded','true');
    document.body.style.overflow = 'hidden';
  });
  const close = () => {
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded','false');
    document.body.style.overflow = '';
  };
  if (closeMenu) closeMenu.addEventListener('click', close);
  mobileMenu.addEventListener('click', e => { if (e.target === mobileMenu) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      const isOpen = btn.classList.contains('open');
      document.querySelectorAll('.faq-question.open').forEach(b => {
        b.classList.remove('open');
        b.nextElementSibling.classList.remove('open');
      });
      if (!isOpen) { btn.classList.add('open'); answer.classList.add('open'); }
    });
  });
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('[type=submit]');
    btn.textContent = 'Sending…';
    btn.disabled = true;
    setTimeout(() => {
      form.innerHTML = `<div style="text-align:center;padding:40px"><div style="font-size:3rem">✓</div><h3 style="color:var(--green);margin:16px 0 8px">Thank You!</h3><p>We received your request and will contact you within 1 hour during business hours.</p></div>`;
    }, 900);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const topbarEl = document.getElementById('topbar');
  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');
  const emergencyEl = document.getElementById('emergency-bar');
  const trustEl = document.getElementById('trust-bar');

  if (topbarEl) topbarEl.innerHTML = renderTopBar();
  if (headerEl) headerEl.innerHTML = renderHeader();
  if (emergencyEl) emergencyEl.innerHTML = renderEmergencyBar();
  if (trustEl) trustEl.innerHTML = renderTrustBar();
  if (footerEl) footerEl.innerHTML = renderFooter();

  initMobileMenu();
  initFAQ();
  initContactForm();
});
