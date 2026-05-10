/*  TYPING EFFECT — terminal style  */
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

    function tick() {
        const word = strings[si];
        if (!deleting) {
            el.textContent = word.slice(0, ++ci);
            if (ci === word.length) {
                deleting = true;
                setTimeout(tick, 2000);
                return;
            }
            setTimeout(tick, 60);
        } else {
            el.textContent = word.slice(0, --ci);
            if (ci === 0) {
                deleting = false;
                si = (si + 1) % strings.length;
                setTimeout(tick, 500);
                return;
            }
            setTimeout(tick, 38);
        }
    }

    setTimeout(tick, 800);
})();

/*  CUSTOM CURSOR — square bracket caret  */
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
        rx += (mx - rx) * .14;
        ry += (my - ry) * .14;
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

/*  NAV SCROLL SHRINK + SCROLL-TO-TOP  */
(function () {
    const mainNav   = document.getElementById('main-nav');
    const scrollBtn = document.getElementById('scroll-top');

    window.addEventListener('scroll', () => {
        if (mainNav)   mainNav.classList.toggle('scrolled', window.scrollY > 60);
        if (scrollBtn) scrollBtn.classList.toggle('visible', window.scrollY > 400);
    });
})();

/*  HAMBURGER MENU  */
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

/*  SCROLL TO TOP  */
(function () {
    const btn = document.getElementById('scroll-top');
    if (!btn) return;
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

/*  REVEAL ON SCROLL  */
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

/*  TERMINAL BOOT SEQUENCE — console easter egg  */
(function () {
    const styles = {
        green:  'color:#3fb950;font-family:monospace',
        cyan:   'color:#79c0ff;font-family:monospace',
        muted:  'color:#636e7b;font-family:monospace',
        yellow: 'color:#e3b341;font-family:monospace',
    };
    console.log('%c╔══════════════════════════════════╗', styles.green);
    console.log('%c║   rachit.agarwal — portfolio     ║', styles.cyan);
    console.log('%c╚══════════════════════════════════╝', styles.green);
    console.log('%c> system  : loaded', styles.muted);
    console.log('%c> stack   : Java · Spring Boot · Python', styles.muted);
    console.log('%c> status  : open to opportunities 🚀', styles.yellow);
    console.log('%c> github  : github.com/Wolf1904', styles.cyan);
})();