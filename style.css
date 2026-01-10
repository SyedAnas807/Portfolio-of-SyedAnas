/* ============================================
   SYED ANAS ALI — PORTFOLIO SCRIPTS
   GSAP + ScrollTrigger + Lenis
   ============================================ */
// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);
// ============================================
// LENIS SMOOTH SCROLL
// ============================================
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
});
// Connect Lenis to GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);
// ============================================
// DOM ELEMENTS
// ============================================
const preloader = document.getElementById('preloader');
const preloaderProgress = document.querySelector('.preloader-progress');
const mainContent = document.getElementById('main-content');
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const splineContainer = document.querySelector('.spline-container');
const heroElements = {
    logo: document.querySelector('.hero-logo'),
    menuBtn: document.querySelector('.menu-btn'),
    subtitle: document.querySelector('.hero-subtitle'),
    scrollIndicator: document.querySelector('.scroll-indicator'),
};
// ============================================
// PRELOADER ANIMATION
// ============================================
function initPreloader() {
    const tl = gsap.timeline();
    
    // Simulate loading progress
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            clearInterval(progressInterval);
        }
        preloaderProgress.style.width = progress + '%';
    }, 100);
    
    // Wait for Spline to load (or timeout after 3 seconds)
    const splineViewer = document.querySelector('spline-viewer');
    
    const revealPage = () => {
        progress = 100;
        preloaderProgress.style.width = '100%';
        clearInterval(progressInterval);
        
        tl.to(preloader, {
            yPercent: -100,
            duration: 1,
            ease: 'power4.inOut',
            delay: 0.3,
        })
        .add(() => {
            preloader.style.display = 'none';
            initHeroAnimations();
        });
    };
    
    if (splineViewer) {
        splineViewer.addEventListener('load', () => {
            setTimeout(revealPage, 500);
        });
        
        // Fallback timeout
        setTimeout(revealPage, 4000);
    } else {
        setTimeout(revealPage, 1500);
    }
}
// ============================================
// HERO ANIMATIONS
// ============================================
function initHeroAnimations() {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    tl.to(heroElements.logo, {
        opacity: 1,
        y: 0,
        duration: 0.8,
    })
    .to(heroElements.menuBtn, {
        opacity: 1,
        y: 0,
        duration: 0.8,
    }, '-=0.6')
    .to(heroElements.subtitle, {
        opacity: 1,
        y: 0,
        duration: 0.8,
    }, '-=0.6')
    .to(heroElements.scrollIndicator, {
        opacity: 1,
        y: 0,
        duration: 0.8,
    }, '-=0.6');
    
    // Initial positions
    gsap.set([heroElements.logo, heroElements.menuBtn, heroElements.subtitle, heroElements.scrollIndicator], {
        y: 30,
    });
}
// ============================================
// SPLINE SCROLL EFFECT
// ============================================
function initSplineScrollEffect() {
    gsap.to(splineContainer, {
        opacity: 0,
        scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
        },
    });
    
    // Optional: Make Spline container fixed during hero
    ScrollTrigger.create({
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        pin: splineContainer,
        pinSpacing: false,
    });
}
// ============================================
// SECTION ANIMATIONS
// ============================================
function initSectionAnimations() {
    // Section titles entrance
    gsap.utils.toArray('.section-title').forEach((title) => {
        gsap.fromTo(title, 
            {
                y: 80,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: title,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                },
            }
        );
    });
    
    // Section numbers entrance
    gsap.utils.toArray('.section-number').forEach((num) => {
        gsap.fromTo(num,
            {
                x: -20,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: num,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                },
            }
        );
    });
}
// ============================================
// ABOUT SECTION TEXT REVEAL
// ============================================
function initAboutAnimations() {
    const aboutTexts = document.querySelectorAll('.about-text');
    
    aboutTexts.forEach((text, index) => {
        gsap.to(text, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: text,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            },
            delay: index * 0.2,
        });
    });
}
// ============================================
// CAPABILITIES CARDS ANIMATION
// ============================================
function initCapabilitiesAnimations() {
    const cards = document.querySelectorAll('.capability-card');
    
    cards.forEach((card, index) => {
        gsap.fromTo(card,
            {
                y: 60,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                },
                delay: index * 0.1,
            }
        );
    });
}
// ============================================
// ACADEMICS TIMELINE ANIMATION
// ============================================
function initAcademicsAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-content');
    
    timelineItems.forEach((item, index) => {
        gsap.to(item, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
            },
            delay: index * 0.2,
        });
    });
    
    // Animate timeline markers
    const markers = document.querySelectorAll('.timeline-marker');
    markers.forEach((marker, index) => {
        gsap.fromTo(marker,
            {
                scale: 0,
            },
            {
                scale: 1,
                duration: 0.5,
                ease: 'back.out(2)',
                scrollTrigger: {
                    trigger: marker,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                },
                delay: index * 0.2,
            }
        );
    });
}
// ============================================
// FOOTER ANIMATION
// ============================================
function initFooterAnimations() {
    const footerTitle = document.querySelector('.footer-title');
    const footerLinks = document.querySelectorAll('.footer-link');
    
    gsap.to(footerTitle, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: footerTitle,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
        },
    });
    
    footerLinks.forEach((link, index) => {
        gsap.fromTo(link,
            {
                y: 40,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: link,
                    start: 'top 90%',
                    toggleActions: 'play none none reverse',
                },
                delay: index * 0.15,
            }
        );
    });
}
// ============================================
// NAVIGATION MENU
// ============================================
function initNavigation() {
    let isMenuOpen = false;
    
    menuToggle.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        menuToggle.classList.toggle('active', isMenuOpen);
        navMenu.classList.toggle('active', isMenuOpen);
        
        if (isMenuOpen) {
            lenis.stop();
        } else {
            lenis.start();
        }
    });
    
    // Close menu on link click
    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Close menu
            isMenuOpen = false;
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            lenis.start();
            
            // Scroll to section
            if (targetSection) {
                lenis.scrollTo(targetSection, {
                    offset: 0,
                    duration: 1.5,
                });
            }
        });
    });
}
// ============================================
// CURSOR EFFECTS (Optional Enhancement)
// ============================================
function initCursorEffects() {
    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .capability-card');
    
    interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => {
            document.body.style.cursor = 'pointer';
        });
        
        el.addEventListener('mouseleave', () => {
            document.body.style.cursor = 'default';
        });
    });
}
// ============================================
// INITIALIZE
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initSplineScrollEffect();
    initSectionAnimations();
    initAboutAnimations();
    initCapabilitiesAnimations();
    initAcademicsAnimations();
    initFooterAnimations();
    initNavigation();
    initCursorEffects();
});
// Handle page visibility for Lenis
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
        lenis.stop();
    } else {
        lenis.start();
    }
});
