/* ============================================
   SASTI BEAUTY PARLOUR — MAIN SCRIPT V2
   Google Calendar + WhatsApp Booking + UI
   ============================================ */

// ===== PHOTO LIBRARY FROM LOCAL PHOTOS FOLDER =====
const PHOTOS_FOLDER = 'PHOTOS/';
const PHOTO_NAMES = [
    'Screenshot 2026-04-12 173429.png',
    'Screenshot 2026-04-12 173505.png',
    'Screenshot 2026-04-12 173522.png',
    'Screenshot 2026-04-12 173536.png',
    'Screenshot 2026-04-12 173556.png',
    'Screenshot 2026-04-12 173610.png',
    'Screenshot 2026-04-12 173656.png',
    'Screenshot 2026-04-12 173717.png',
    'Screenshot 2026-04-12 173733.png',
    'Screenshot 2026-04-12 173754.png',
    'Screenshot 2026-04-12 173802.png',
    'Screenshot 2026-04-12 173819.png',
    'Screenshot 2026-04-12 173836.png',
    'Screenshot 2026-04-12 173847.png',
    'Screenshot 2026-04-12 173923.png',
    'Screenshot 2026-04-12 173935.png',
    'Screenshot 2026-04-12 174000.png',
    'Screenshot 2026-04-12 174008.png',
    'Screenshot 2026-04-12 174028.png',
    'Screenshot 2026-04-12 174039.png',
    'Screenshot 2026-04-12 174058.png',
    'Screenshot 2026-04-12 174110.png',
    'Screenshot 2026-04-12 174115.png',
    'Screenshot 2026-04-12 174120.png',
    'Screenshot 2026-04-12 174124.png',
    'Screenshot 2026-04-12 174140.png',
    'Screenshot 2026-04-12 174233.png',
    'Screenshot 2026-04-12 174242.png',
    'Screenshot 2026-04-12 174251.png',
    'Screenshot 2026-04-12 174323.png',
    'Screenshot 2026-04-12 174353.png',
    'Screenshot 2026-04-12 174408.png',
    'Screenshot 2026-04-12 174437.png',
    'Screenshot 2026-04-12 174450.png',
    'Screenshot 2026-04-12 174502.png',
    'Screenshot 2026-04-12 174650.png',
    'Screenshot 2026-04-12 174923.png',
    'Screenshot 2026-04-12 174928.png',
    'Screenshot 2026-04-12 174933.png',
    'Screenshot 2026-04-12 174935.png',
    'Screenshot 2026-04-12 175007.png',
    'Screenshot 2026-04-12 175016.png',
    'Screenshot 2026-04-12 175951.png',
    'Screenshot 2026-04-12 180026.png',
    'Screenshot 2026-04-12 180051.png',
    'Screenshot 2026-04-12 180105.png',
    'Screenshot 2026-04-12 180115.png',
    'Screenshot 2026-04-12 180135.png',
    'Screenshot 2026-04-12 180156.png',
    'Screenshot 2026-04-12 180202.png',
    'Screenshot 2026-04-12 180219.png',
    'Screenshot 2026-04-12 180235.png',
    'Screenshot 2026-04-12 180508.png',
    'Screenshot 2026-04-12 180530.png',
    'Screenshot 2026-04-12 180604.png',
    'Screenshot 2026-04-12 180610.png',
    'Screenshot 2026-04-12 180831.png',
    'Screenshot 2026-04-12 180852.png',
    'Screenshot 2026-04-12 180900.png',
    'Screenshot 2026-04-12 181031.png',
    'Screenshot 2026-04-12 181129.png',
    'Screenshot 2026-04-12 181141.png',
    'Screenshot 2026-04-12 181151.png',
    'Screenshot 2026-04-12 181208.png',
    'Screenshot 2026-04-12 181308.png',
    'Screenshot 2026-04-12 181341.png',
    'Screenshot 2026-04-12 181348.png',
    'Screenshot 2026-04-12 181358.png',
    'Screenshot 2026-04-12 181408.png',
    'Screenshot 2026-04-12 181451.png',
    'Screenshot 2026-04-12 181513.png',
    'Screenshot 2026-04-12 181523.png',
    'Screenshot 2026-04-12 181534.png',
    'Screenshot 2026-04-12 181544.png',
    'Screenshot 2026-04-12 181927.png',
    'Screenshot 2026-04-12 182020.png',
    'Screenshot 2026-04-12 182028.png',
    'Screenshot 2026-04-12 182054.png',
    'Screenshot 2026-04-12 182101.png',
    'Screenshot 2026-04-12 182108.png',
    'Screenshot 2026-04-12 182118.png',
    'Screenshot 2026-04-12 182126.png',
    'Screenshot 2026-04-12 182217.png',
    'Screenshot 2026-04-12 182230.png',
    'Screenshot 2026-04-12 182237.png',
    'Screenshot 2026-04-12 182519.png',
    'Screenshot 2026-04-12 182531.png',
    'Screenshot 2026-04-12 182543.png',
    'Screenshot 2026-04-12 182602.png',
    'Screenshot 2026-04-12 182608.png',
    'Screenshot 2026-04-12 182625.png',
    'Screenshot 2026-04-12 182644.png',
    'Screenshot 2026-04-12 182658.png',
    'Screenshot 2026-04-12 182707.png',
    'Screenshot 2026-04-12 182714.png',
    'Screenshot 2026-04-12 182726.png',
    'Screenshot 2026-04-12 182739.png',
    'Screenshot 2026-04-12 182808.png',
    'Screenshot 2026-04-12 182853.png',
    'Screenshot 2026-04-12 182900.png',
    'Screenshot 2026-04-12 183135.png',
    'Screenshot 2026-04-12 183144.png',
    'Screenshot 2026-04-12 184914.png'
];

// Get random photo from PHOTOS folder
function getRandomPhoto() {
    return PHOTOS_FOLDER + PHOTO_NAMES[Math.floor(Math.random() * PHOTO_NAMES.length)];
}

// Get multiple random photos (unique)
function getRandomPhotos(count) {
    const shuffled = [...PHOTO_NAMES].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count).map(name => PHOTOS_FOLDER + name);
}

document.addEventListener('DOMContentLoaded', () => {

    // ===== ANNOUNCEMENT BAR CLOSE =====
    const annClose = document.getElementById('annClose');
    const annBar   = document.getElementById('annBar');
    if (annClose && annBar) {
        annClose.addEventListener('click', () => {
            annBar.style.display = 'none';
        });
    }

    // ===== NAVBAR SCROLL =====
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 40);
        bttBtn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

    // ===== BACK TO TOP =====
    const bttBtn = document.getElementById('btt');
    bttBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // ===== HAMBURGER / MOBILE MENU =====
    const hamburger  = document.getElementById('hamburger');
    const navLinks   = document.getElementById('navLinks');

    hamburger?.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        navLinks.classList.toggle('mobile-open');
        document.body.style.overflow = navLinks.classList.contains('mobile-open') ? 'hidden' : '';
    });

    document.querySelectorAll('.nl').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('open');
            navLinks.classList.remove('mobile-open');
            document.body.style.overflow = '';
        });
    });

    // ===== HERO SLIDESHOW =====
    const heroSlides = document.querySelectorAll('.hero-slide');
    const hsDots     = document.querySelectorAll('.hs-dot');
    let heroIdx = 0, heroTimer;

    function gotoHero(i) {
        heroSlides[heroIdx].classList.remove('active');
        hsDots[heroIdx].classList.remove('active');
        heroIdx = (i + heroSlides.length) % heroSlides.length;
        heroSlides[heroIdx].classList.add('active');
        hsDots[heroIdx].classList.add('active');
    }

    function startHeroAuto() { heroTimer = setInterval(() => gotoHero(heroIdx + 1), 5500); }
    function resetHeroAuto() { clearInterval(heroTimer); startHeroAuto(); }

    document.getElementById('hsPrev')?.addEventListener('click', () => { gotoHero(heroIdx - 1); resetHeroAuto(); });
    document.getElementById('hsNext')?.addEventListener('click', () => { gotoHero(heroIdx + 1); resetHeroAuto(); });
    hsDots.forEach((dot, i) => dot.addEventListener('click', () => { gotoHero(i); resetHeroAuto(); }));
    startHeroAuto();

    // ===== ACTIVE NAV ON SCROLL =====
    const allSections = document.querySelectorAll('section[id]');
    const allNavLinks  = document.querySelectorAll('.nl');

    window.addEventListener('scroll', () => {
        const pos = window.scrollY + 120;
        allSections.forEach(sec => {
            if (pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight) {
                allNavLinks.forEach(l => l.classList.remove('active'));
                const active = document.querySelector(`.nl[href="#${sec.id}"]`);
                if (active) active.classList.add('active');
            }
        });
    }, { passive: true });

    // ===== FAQ ACCORDION =====
    document.querySelectorAll('.faq-item').forEach(item => {
        item.querySelector('.faq-q').addEventListener('click', () => {
            const isOpen = item.classList.contains('open');
            document.querySelectorAll('.faq-item.open').forEach(o => o.classList.remove('open'));
            if (!isOpen) item.classList.add('open');
        });
    });

    // ===== GALLERY FILTER =====
    const gfBtns = document.querySelectorAll('.gf-btn');
    const gItems  = document.querySelectorAll('.gi');

    gfBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            gfBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            gItems.forEach(item => {
                const show = filter === 'all' || item.dataset.cat === filter;
                item.style.opacity  = show ? '1' : '0.15';
                item.style.transform = show ? 'scale(1)' : 'scale(0.95)';
                item.style.transition = 'all .35s ease';
            });
        });
    });

    // ===== GALLERY LIGHTBOX =====
    function createLightbox() {
        const lb = document.createElement('div');
        lb.id = 'lightbox';
        lb.style.cssText = 'position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;opacity:0;visibility:hidden;transition:all .3s ease;';
        lb.innerHTML = `
            <div class="lb-bg" style="position:absolute;inset:0;background:rgba(28,17,8,0.94);"></div>
            <button id="lbClose" style="position:absolute;top:24px;right:28px;font-size:1.6rem;color:white;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);width:48px;height:48px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:2;">✕</button>
            <button id="lbPrev" style="position:absolute;left:28px;top:50%;transform:translateY(-50%);font-size:1.5rem;color:white;background:rgba(255,255,255,.1);border:1.5px solid rgba(255,255,255,.2);width:52px;height:52px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:2;">&#8592;</button>
            <button id="lbNext" style="position:absolute;right:28px;top:50%;transform:translateY(-50%);font-size:1.5rem;color:white;background:rgba(255,255,255,.1);border:1.5px solid rgba(255,255,255,.2);width:52px;height:52px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:2;">&#8594;</button>
            <img id="lbImg" src="" alt="" style="position:relative;z-index:1;max-width:90vw;max-height:88vh;object-fit:contain;border-radius:12px;box-shadow:0 20px 80px rgba(0,0,0,.5);">
            <div id="lbCaption" style="position:absolute;bottom:28px;left:50%;transform:translateX(-50%);color:rgba(255,255,255,.7);font-size:.82rem;letter-spacing:.1em;text-transform:uppercase;z-index:2;"></div>
        `;
        document.body.appendChild(lb);
        return lb;
    }

    const lb = createLightbox();
    const lbImg = document.getElementById('lbImg');
    const lbCaption = document.getElementById('lbCaption');
    let lbImages = [], lbIdx = 0;

    function openLB(idx) {
        lbIdx = idx;
        lbImg.src = lbImages[lbIdx].src;
        lbCaption.textContent = lbImages[lbIdx].alt;
        lb.style.opacity = '1';
        lb.style.visibility = 'visible';
        document.body.style.overflow = 'hidden';
    }
    function closeLB() {
        lb.style.opacity = '0';
        lb.style.visibility = 'hidden';
        document.body.style.overflow = '';
    }

    // Collect gallery images
    document.querySelectorAll('.gi img').forEach((img, i) => {
        lbImages.push(img);
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', () => openLB(i));
    });

    document.getElementById('lbClose')?.addEventListener('click', closeLB);
    document.querySelector('.lb-bg')?.addEventListener('click', closeLB);
    document.getElementById('lbPrev')?.addEventListener('click', () => { lbIdx = (lbIdx - 1 + lbImages.length) % lbImages.length; openLB(lbIdx); });
    document.getElementById('lbNext')?.addEventListener('click', () => { lbIdx = (lbIdx + 1) % lbImages.length; openLB(lbIdx); });
    document.addEventListener('keydown', e => {
        if (lb.style.visibility === 'visible') {
            if (e.key === 'Escape') closeLB();
            if (e.key === 'ArrowLeft') { lbIdx = (lbIdx - 1 + lbImages.length) % lbImages.length; openLB(lbIdx); }
            if (e.key === 'ArrowRight') { lbIdx = (lbIdx + 1) % lbImages.length; openLB(lbIdx); }
        }
    });

    // ===== BOOKING FORM → WHATSAPP =====
    document.getElementById('bookingForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        const form = this;
        const inputs = form.querySelectorAll('input, select, textarea');
        const vals = {};
        inputs.forEach(inp => {
            if (inp.name) vals[inp.name] = inp.value;
        });

        // Build values from position
        const name     = form.querySelector('input[type="text"]')?.value || '';
        const phone    = form.querySelector('input[type="tel"]')?.value || '';
        const email    = form.querySelector('input[type="email"]')?.value || '';
        const service  = form.querySelector('select')?.value || '';
        const date     = form.querySelector('input[type="date"]')?.value || '';
        const time     = form.querySelector('input[type="time"]')?.value || '';
        const location = form.querySelectorAll('input[type="text"]')[1]?.value || '';
        const message  = form.querySelector('textarea')?.value || '';

        const text =
`Hello Sasti Beauty Parlour! 🌸

*New Appointment Request*
━━━━━━━━━━━━━━━━━━━━
👤 Name: ${name}
📞 Phone: ${phone}
${email ? `✉️ Email: ${email}` : ''}
💅 Service Required: ${service}
📅 Date: ${date || 'Not specified'}
🕐 Time: ${time || 'Not specified'}
📍 Location: ${location || 'Not specified'}
${message ? `📝 Message: ${message}` : ''}
━━━━━━━━━━━━━━━━━━━━
Please confirm availability and pricing. Thank you!`;

        window.open(`https://wa.me/919003618857?text=${encodeURIComponent(text)}`, '_blank');
    });

    // ===== SCROLL REVEAL =====
    const revealStyle = document.createElement('style');
    revealStyle.textContent = `.revealed{opacity:1!important;transform:translateY(0)!important}`;
    document.head.appendChild(revealStyle);

    const revealObs = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });

    const revealEls = document.querySelectorAll(
        '.sov-card, .svc-item, .salon-group, .bl-item, .emb-item, .tail-item, .bout-card, .pkg-card, .why-card, .tc, .gi, .cl-item, .moc-item'
    );
    revealEls.forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(22px)';
        el.style.transition = `opacity .5s ease ${(i % 12) * 0.05}s, transform .5s ease ${(i % 12) * 0.05}s`;
        revealObs.observe(el);
    });

    // ===== SMOOTH SCROLL (offset for fixed nav) =====
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            const id = link.getAttribute('href');
            if (id === '#') return;
            const target = document.querySelector(id);
            if (!target) return;
            e.preventDefault();
            const navH = navbar.offsetHeight + (annBar?.offsetHeight || 0) + 8;
            const top  = target.getBoundingClientRect().top + window.scrollY - navH;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });

    // ===== GOOGLE AUTH + CALENDAR INTEGRATION (from existing script) =====
    let tokenClient;
    let pendingBookingData = null;

    window.onload = () => {
        if (typeof google !== 'undefined' && google.accounts) {
            tokenClient = google.accounts.oauth2.initTokenClient({
                client_id: '430126948918-jm6279acvbhr5n330ai1uh2kan1qehb2.apps.googleusercontent.com',
                scope: 'https://www.googleapis.com/auth/calendar.events',
                callback: (response) => {
                    if (response.error) { console.error(response); return; }
                    if (pendingBookingData) {
                        createCalendarEvent(response.access_token, pendingBookingData);
                        pendingBookingData = null;
                    }
                }
            });
        }
    };

    function requestCalendarAccess(bookingData) {
        if (!tokenClient) {
            sendWhatsApp(bookingData);
            return;
        }
        pendingBookingData = bookingData;
        tokenClient.requestAccessToken({ prompt: 'consent' });
    }

    function createCalendarEvent(accessToken, data) {
        if (!data.date || !data.time) {
            sendWhatsApp(data);
            return;
        }
        const startDT = new Date(`${data.date}T${data.time}:00`);
        const endDT   = new Date(startDT.getTime() + 60 * 60 * 1000);

        const event = {
            summary: `Sasti Beauty – ${data.service}`,
            location: data.location,
            description: `Client: ${data.name}\nPhone: ${data.phone}\nService: ${data.service}\nLocation: ${data.location}\nMessage: ${data.message}`,
            start: { dateTime: startDT.toISOString(), timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone },
            end:   { dateTime: endDT.toISOString(),   timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone },
            attendees: [{ email: 'shastianbarasi@gmail.com' }]
        };

        fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
            body: JSON.stringify(event)
        })
        .then(res => res.json())
        .then(() => sendWhatsApp(data))
        .catch(() => sendWhatsApp(data));
    }

    function sendWhatsApp(data) {
        const text =
`Hello Sasti Beauty Parlour! 🌸

*New Appointment Request*
━━━━━━━━━━━━━━━━━━━━
👤 Name: ${data.name}
📞 Phone: ${data.phone}
${data.email ? `✉️ Email: ${data.email}` : ''}
💅 Service: ${data.service}
📅 Date: ${data.date || 'Not specified'}
🕐 Time: ${data.time || 'Not specified'}
📍 Location: ${data.location || 'Not specified'}
${data.message ? `📝 Message: ${data.message}` : ''}
━━━━━━━━━━━━━━━━━━━━
Please confirm availability. Thank you!`;
        window.open(`https://wa.me/919003618857?text=${encodeURIComponent(text)}`, '_blank');
    }

});
