/* ── TYPING EFFECT ───────────────────────────────────── */
(function () {
    const el = document.getElementById('typed-role');
    if (!el) return;

    const strings = [
        'Software Engineer',
        'Backend Developer',
        'Cybersecurity Enthusiast',
        'DevSecOps Learner'
    ];
    let si = 0, ci = 0, deleting = false;

    // Inject blink keyframe once
    const style = document.createElement('style');
    style.textContent = '@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }';
    document.head.appendChild(style);

    // Blinking cursor
    const cursor = document.createElement('span');
    cursor.textContent = '|';
    cursor.style.cssText = 'color:var(--accent);animation:blink 1s step-end infinite;margin-left:1px;';
    el.after(cursor);

    function tick() {
        const word = strings[si];
        if (!deleting) {
            el.textContent = word.slice(0, ++ci);
            if (ci === word.length) {
                deleting = true;
                setTimeout(tick, 1800);
                return;
            }
            setTimeout(tick, 55);
        } else {
            el.textContent = word.slice(0, --ci);
            if (ci === 0) {
                deleting = false;
                si = (si + 1) % strings.length;
                setTimeout(tick, 400);
                return;
            }
            setTimeout(tick, 35);
        }
    }

    setTimeout(tick, 700);
})();

/* ── CUSTOM CURSOR ───────────────────────────────────── */
(function () {
    const ring = document.getElementById('curRing');
    const dot  = document.getElementById('curDot');
    if (!ring || !dot) return;

    let mx = 0, my = 0, rx = 0, ry = 0;

    document.addEventListener('mousemove', e => {
        mx = e.clientX;
        my = e.clientY;
        dot.style.left = mx + 'px';
        dot.style.top  = my + 'px';
    });

    (function loop() {
        rx += (mx - rx) * .15;
        ry += (my - ry) * .15;
        ring.style.left = rx + 'px';
        ring.style.top  = ry + 'px';
        requestAnimationFrame(loop);
    })();

    document.querySelectorAll('a, button, .chip, .cert-card, .project-card, .about-card, .edu-card')
        .forEach(el => {
            el.addEventListener('mouseenter', () => ring.classList.add('hovered'));
            el.addEventListener('mouseleave', () => ring.classList.remove('hovered'));
        });

    document.addEventListener('mousedown', () => ring.classList.add('clicked'));
    document.addEventListener('mouseup',   () => ring.classList.remove('clicked'));
})();

/* ── NAV SCROLL SHRINK + SCROLL-TO-TOP VISIBILITY ───── */
(function () {
    const mainNav   = document.getElementById('main-nav');
    const scrollBtn = document.getElementById('scroll-top');

    window.addEventListener('scroll', () => {
        if (mainNav)   mainNav.classList.toggle('scrolled', window.scrollY > 60);
        if (scrollBtn) scrollBtn.classList.toggle('visible', window.scrollY > 400);
    });
})();

/* ── HAMBURGER MENU ──────────────────────────────────── */
(function () {
    const btn  = document.getElementById('hamburger-btn');
    const menu = document.getElementById('mobile-menu');
    if (!btn || !menu) return;

    btn.addEventListener('click', () => {
        btn.classList.toggle('open');
        menu.classList.toggle('open');
    });

    document.querySelectorAll('.mob-link').forEach(a => {
        a.addEventListener('click', () => {
            btn.classList.remove('open');
            menu.classList.remove('open');
        });
    });
})();

/* ── SCROLL TO TOP ───────────────────────────────────── */
(function () {
    const btn = document.getElementById('scroll-top');
    if (!btn) return;
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

/* ── REVEAL ON SCROLL ────────────────────────────────── */
(function () {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) e.target.classList.add('visible');
        });
    }, { threshold: 0.08 });

    els.forEach(el => observer.observe(el));
})();