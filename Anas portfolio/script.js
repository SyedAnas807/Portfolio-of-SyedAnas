/* ============================================
   SYED ANAS ALI — PORTFOLIO STYLES
   Monochromatic | Futuristic | Minimalist
   ============================================ */
/* ============================================
   CSS VARIABLES
   ============================================ */
:root {
    /* Colors */
    --bg-primary: #E5E5E5;
    --bg-secondary: #D4D4D4;
    --bg-dark: #000000;
    --text-primary: #000000;
    --text-secondary: #333333;
    --text-muted: #666666;
    --accent: #1a1a1a;
    
    /* Typography */
    --font-heading: 'Inter', sans-serif;
    --font-body: 'Roboto Mono', monospace;
    
    /* Spacing */
    --section-padding: clamp(80px, 12vh, 150px);
    --container-padding: clamp(24px, 5vw, 80px);
    
    /* Transitions */
    --transition-fast: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-medium: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    
    /* Easing */
    --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
}
/* ============================================
   RESET & BASE
   ============================================ */
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
html.lenis,
html.lenis body {
    height: auto;
}
.lenis.lenis-smooth {
    scroll-behavior: auto !important;
}
.lenis.lenis-smooth [data-lenis-prevent] {
    overscroll-behavior: contain;
}
.lenis.lenis-stopped {
    overflow: hidden;
}
.lenis.lenis-scrolling iframe {
    pointer-events: none;
}
body {
    font-family: var(--font-body);
    background-color: var(--bg-primary);
    color: var(--text-primary);
    line-height: 1.6;
    overflow-x: hidden;
}
a {
    color: inherit;
    text-decoration: none;
}
button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
}
img {
    max-width: 100%;
    height: auto;
}
/* ============================================
   PRELOADER
   ============================================ */
.preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--bg-dark);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.preloader-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
}
.preloader-text {
    font-family: var(--font-heading);
    font-size: clamp(12px, 1.5vw, 14px);
    font-weight: 600;
    letter-spacing: 0.3em;
    color: var(--bg-primary);
    text-transform: uppercase;
}
.preloader-bar {
    width: 200px;
    height: 2px;
    background-color: rgba(229, 229, 229, 0.2);
    border-radius: 1px;
    overflow: hidden;
}
.preloader-progress {
    width: 0%;
    height: 100%;
    background-color: var(--bg-primary);
    transition: width 0.3s ease;
}
/* ============================================
   LAYOUT
   ============================================ */
.container {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 var(--container-padding);
}
.section {
    position: relative;
    padding: var(--section-padding) 0;
}
/* ============================================
   HERO SECTION
   ============================================ */
.hero {
    position: relative;
    height: 100vh;
    min-height: 600px;
    overflow: hidden;
}
.spline-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}
.spline-container spline-viewer {
    width: 100%;
    height: 100%;
    display: block;
}
.hero-overlay {
    position: relative;
    z-index: 10;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 32px var(--container-padding);
    pointer-events: none;
}
.hero-overlay * {
    pointer-events: auto;
}
.hero-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.hero-logo .logo-text {
    font-family: var(--font-heading);
    font-size: clamp(18px, 2vw, 24px);
    font-weight: 700;
    letter-spacing: -0.02em;
    text-transform: uppercase;
}
.menu-btn {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 0;
    transition: opacity var(--transition-fast);
}
.menu-btn:hover {
    opacity: 0.6;
}
.menu-text {
    font-family: var(--font-body);
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.05em;
    text-transform: uppercase;
}
.menu-icon {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 24px;
}
.menu-icon span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: var(--text-primary);
    transition: transform var(--transition-medium), opacity var(--transition-medium);
}
.menu-btn.active .menu-icon span:first-child {
    transform: translateY(4px) rotate(45deg);
}
.menu-btn.active .menu-icon span:last-child {
    transform: translateY(-4px) rotate(-45deg);
}
.hero-footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}
.hero-subtitle .subtitle-text {
    font-family: var(--font-body);
    font-size: clamp(11px, 1.2vw, 13px);
    font-weight: 400;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    opacity: 0.8;
}
.scroll-indicator {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 12px;
}
.scroll-text {
    font-family: var(--font-body);
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    opacity: 0.6;
}
.scroll-arrow {
    animation: bounce 2s infinite;
}
.scroll-arrow svg {
    transform: rotate(180deg);
}
@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-8px);
    }
    60% {
        transform: translateY(-4px);
    }
}
/* ============================================
   NAVIGATION MENU
   ============================================ */
.nav-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--bg-dark);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    transition: clip-path 0.8s var(--ease-out-expo);
}
.nav-menu.active {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}
.nav-content {
    text-align: center;
}
.nav-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 24px;
}
.nav-link {
    font-family: var(--font-heading);
    font-size: clamp(32px, 8vw, 72px);
    font-weight: 700;
    color: var(--bg-primary);
    text-transform: uppercase;
    letter-spacing: -0.02em;
    display: inline-block;
    position: relative;
    transition: opacity var(--transition-fast);
    opacity: 0;
    transform: translateY(40px);
}
.nav-menu.active .nav-link {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.6s var(--ease-out-expo), transform 0.6s var(--ease-out-expo);
}
.nav-list li:nth-child(1) .nav-link { transition-delay: 0.1s; }
.nav-list li:nth-child(2) .nav-link { transition-delay: 0.15s; }
.nav-list li:nth-child(3) .nav-link { transition-delay: 0.2s; }
.nav-list li:nth-child(4) .nav-link { transition-delay: 0.25s; }
.nav-list li:nth-child(5) .nav-link { transition-delay: 0.3s; }
.nav-link:hover {
    opacity: 0.5;
}
.nav-link::before {
    content: attr(data-index);
    position: absolute;
    left: -60px;
    top: 50%;
    transform: translateY(-50%);
    font-family: var(--font-body);
    font-size: 12px;
    font-weight: 400;
    opacity: 0.5;
}
/* ============================================
   SECTION HEADERS
   ============================================ */
.section-header {
    margin-bottom: clamp(48px, 8vh, 80px);
    overflow: hidden;
}
.section-number {
    display: block;
    font-family: var(--font-body);
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 0.1em;
    color: var(--text-muted);
    margin-bottom: 16px;
}
.section-title {
    font-family: var(--font-heading);
    font-size: clamp(36px, 7vw, 80px);
    font-weight: 800;
    letter-spacing: -0.03em;
    text-transform: uppercase;
    line-height: 1.1;
}
/* ============================================
   ABOUT SECTION
   ============================================ */
.about-section {
    background-color: var(--bg-primary);
    min-height: 100vh;
    display: flex;
    align-items: center;
}
.about-content {
    max-width: 900px;
}
.about-text {
    font-family: var(--font-body);
    font-size: clamp(18px, 2.5vw, 28px);
    font-weight: 400;
    line-height: 1.7;
    color: var(--text-secondary);
    margin-bottom: 32px;
}
.about-text:last-child {
    margin-bottom: 0;
}
.reveal-text {
    opacity: 0;
    transform: translateY(40px);
}
/* ============================================
   CAPABILITIES SECTION
   ============================================ */
.capabilities-section {
    background-color: var(--bg-secondary);
}
.capabilities-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
}
.capability-card {
    background-color: var(--bg-primary);
    padding: clamp(32px, 4vw, 48px);
    border: 1px solid transparent;
    position: relative;
    overflow: hidden;
    transition: all var(--transition-medium);
    cursor: default;
}
.capability-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--bg-dark);
    transform: translateY(100%);
    transition: transform var(--transition-medium);
    z-index: 0;
}
.capability-card:hover::before {
    transform: translateY(0);
}
.capability-card > * {
    position: relative;
    z-index: 1;
    transition: color var(--transition-medium);
}
.capability-card:hover > * {
    color: var(--bg-primary);
}
.card-number {
    font-family: var(--font-body);
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.1em;
    color: var(--text-muted);
    margin-bottom: 24px;
}
.capability-card:hover .card-number {
    color: rgba(229, 229, 229, 0.5);
}
.card-title {
    font-family: var(--font-heading);
    font-size: clamp(20px, 2.5vw, 28px);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: -0.02em;
    margin-bottom: 12px;
}
.card-description {
    font-family: var(--font-body);
    font-size: 14px;
    font-weight: 400;
    color: var(--text-muted);
    letter-spacing: 0.02em;
}
.capability-card:hover .card-description {
    color: rgba(229, 229, 229, 0.7);
}
.card-icon {
    position: absolute;
    bottom: clamp(24px, 3vw, 40px);
    right: clamp(24px, 3vw, 40px);
    opacity: 0.2;
    transition: opacity var(--transition-medium);
}
.capability-card:hover .card-icon {
    opacity: 0.4;
}
/* ============================================
   ACADEMICS SECTION
   ============================================ */
.academics-section {
    background-color: var(--bg-primary);
    min-height: 80vh;
    display: flex;
    align-items: center;
}
.academics-timeline {
    position: relative;
    padding-left: 60px;
}
.academics-timeline::before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 1px;
    background-color: var(--text-muted);
    opacity: 0.3;
}
.timeline-item {
    position: relative;
    margin-bottom: 64px;
}
.timeline-item:last-child {
    margin-bottom: 0;
}
.timeline-marker {
    position: absolute;
    left: -48px;
    top: 8px;
    width: 16px;
    height: 16px;
    border: 2px solid var(--text-primary);
    border-radius: 50%;
    background-color: var(--bg-primary);
}
.timeline-content {
    opacity: 0;
    transform: translateY(30px);
}
.timeline-date {
    display: block;
    font-family: var(--font-body);
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.15em;
    color: var(--text-muted);
    text-transform: uppercase;
    margin-bottom: 12px;
}
.timeline-title {
    font-family: var(--font-heading);
    font-size: clamp(22px, 3vw, 32px);
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 8px;
}
.timeline-description {
    font-family: var(--font-body);
    font-size: 15px;
    font-weight: 400;
    color: var(--text-muted);
}
/* ============================================
   FOOTER SECTION
   ============================================ */
.footer-section {
    background-color: var(--bg-dark);
    color: var(--bg-primary);
    min-height: 100vh;
    display: flex;
    align-items: center;
    overflow: hidden;
}
.footer-content {
    width: 100%;
}
.footer-header {
    margin-bottom: clamp(48px, 10vh, 100px);
}
.footer-header .section-number {
    color: rgba(229, 229, 229, 0.4);
}
.footer-title {
    font-family: var(--font-heading);
    font-size: clamp(48px, 12vw, 160px);
    font-weight: 800;
    letter-spacing: -0.04em;
    text-transform: uppercase;
    line-height: 0.95;
    opacity: 0;
    transform: translateY(80px);
}
.footer-links {
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-bottom: clamp(64px, 12vh, 120px);
}
.footer-link {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 24px 0;
    border-bottom: 1px solid rgba(229, 229, 229, 0.1);
    transition: border-color var(--transition-fast);
}
.footer-link:hover {
    border-color: rgba(229, 229, 229, 0.4);
}
.link-label {
    font-family: var(--font-body);
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    opacity: 0.4;
}
.link-value {
    font-family: var(--font-heading);
    font-size: clamp(18px, 3vw, 32px);
    font-weight: 600;
    letter-spacing: -0.01em;
    transition: opacity var(--transition-fast);
}
.footer-link:hover .link-value {
    opacity: 0.7;
}
.footer-bottom {
    padding-top: 32px;
    border-top: 1px solid rgba(229, 229, 229, 0.1);
}
.copyright {
    font-family: var(--font-body);
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.05em;
    opacity: 0.4;
}
/* ============================================
   ANIMATIONS - Initial States
   ============================================ */
.hero-logo,
.menu-btn,
.hero-subtitle,
.scroll-indicator {
    opacity: 0;
}
/* ============================================
   RESPONSIVE STYLES
   ============================================ */
@media (max-width: 768px) {
    .hero-footer {
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;
    }
    
    .scroll-indicator {
        align-items: flex-start;
    }
    
    .capabilities-grid {
        grid-template-columns: 1fr;
    }
    
    .academics-timeline {
        padding-left: 40px;
    }
    
    .academics-timeline::before {
        left: 12px;
    }
    
    .timeline-marker {
        left: -34px;
        width: 12px;
        height: 12px;
    }
    
    .nav-link::before {
        display: none;
    }
    
    .footer-links {
        gap: 24px;
    }
}
@media (max-width: 480px) {
    :root {
        --container-padding: 20px;
    }
    
    .hero-overlay {
        padding: 24px var(--container-padding);
    }
}
/* ============================================
   UTILITIES
   ============================================ */
.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}