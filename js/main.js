// Default configuration
const defaultConfig = {
    consultant_name: "Dominik Notzon",
    tagline: "Senior IT Consultant · Integration (Boomi & MuleSoft) · Oracle APEX",
    hero_text: "Ich verbinde Systeme, Daten und Prozesse – mit skalierbaren Integrationen und maßgeschneiderten APEX‑Applikationen, die produktiv machen.",
    about_title: "Über mich",
    services_title: "Leistungen",
    portfolio_title: "Projekte",
    publications_title: "Publikationen",
    contact_title: "Kontakt",
    primary_color: "#1e40af",
    secondary_color: "#3b82f6",
    accent_color: "#10b981",
    secondary_accent: "#059669",
    surface_color: "#f9fafb",
    text_color: "#374151",
    font_family: "Inter",
    font_size: 16
};

// Mobile menu functionality
document.getElementById('mobile-menu-btn').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            document.getElementById('mobile-menu').classList.add('hidden');
        }
    });
});


// Animate skill bars when they come into view
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                bar.style.width = bar.style.width || '0%';
            });
        }
    });
}, observerOptions);

const aboutSection = document.getElementById('about');
if (aboutSection) {
    observer.observe(aboutSection);
}

// Element SDK implementation
async function onConfigChange(config) {
    // Update CSS custom properties
    document.documentElement.style.setProperty('--primary-color', config.primary_color || defaultConfig.primary_color);
    document.documentElement.style.setProperty('--secondary-color', config.secondary_color || defaultConfig.secondary_color);
    document.documentElement.style.setProperty('--accent-color', config.accent_color || defaultConfig.accent_color);
    document.documentElement.style.setProperty('--secondary-accent', config.secondary_accent || defaultConfig.secondary_accent);
    document.documentElement.style.setProperty('--surface-color', config.surface_color || defaultConfig.surface_color);
    document.documentElement.style.setProperty('--text-color', config.text_color || defaultConfig.text_color);

    // Update text content
    const consultantName = config.consultant_name || defaultConfig.consultant_name;
    const tagline = config.tagline || defaultConfig.tagline;
    const heroText = config.hero_text || defaultConfig.hero_text;
    const aboutTitle = config.about_title || defaultConfig.about_title;
    const servicesTitle = config.services_title || defaultConfig.services_title;
    const portfolioTitle = config.portfolio_title || defaultConfig.portfolio_title;
    const publicationsTitle = config.publications_title || defaultConfig.publications_title;
    const contactTitle = config.contact_title || defaultConfig.contact_title;

    document.getElementById('nav-name').textContent = consultantName;
    document.getElementById('hero-name').textContent = consultantName;
    document.getElementById('hero-tagline').textContent = tagline;
    document.getElementById('hero-text').textContent = heroText;
    document.getElementById('about-title').textContent = aboutTitle;
    document.getElementById('services-title').textContent = servicesTitle;
    document.getElementById('portfolio-title').textContent = portfolioTitle;
    document.getElementById('publications-title').textContent = publicationsTitle;
    document.getElementById('contact-title').textContent = contactTitle;

    // Update font family
    const customFont = config.font_family || defaultConfig.font_family;
    const baseFontStack = 'system-ui, -apple-system, sans-serif';
    document.body.style.fontFamily = `${customFont}, ${baseFontStack}`;

    // Update font sizes
    const baseSize = config.font_size || defaultConfig.font_size;
    document.body.style.fontSize = `${baseSize}px`;
    
    // Scale headings proportionally
    const headings = document.querySelectorAll('h1, h2, h3');
    headings.forEach(heading => {
        if (heading.tagName === 'H1') {
            heading.style.fontSize = `${baseSize * 2.5}px`;
        } else if (heading.tagName === 'H2') {
            heading.style.fontSize = `${baseSize * 2}px`;
        } else if (heading.tagName === 'H3') {
            heading.style.fontSize = `${baseSize * 1.25}px`;
        }
    });
}

function mapToCapabilities(config) {
    return {
        recolorables: [
            {
                get: () => config.primary_color || defaultConfig.primary_color,
                set: (value) => {
                    config.primary_color = value;
                    if (window.elementSdk) {
                        window.elementSdk.setConfig({ primary_color: value });
                    }
                }
            },
            {
                get: () => config.surface_color || defaultConfig.surface_color,
                set: (value) => {
                    config.surface_color = value;
                    if (window.elementSdk) {
                        window.elementSdk.setConfig({ surface_color: value });
                    }
                }
            },
            {
                get: () => config.text_color || defaultConfig.text_color,
                set: (value) => {
                    config.text_color = value;
                    if (window.elementSdk) {
                        window.elementSdk.setConfig({ text_color: value });
                    }
                }
            },
            {
                get: () => config.accent_color || defaultConfig.accent_color,
                set: (value) => {
                    config.accent_color = value;
                    if (window.elementSdk) {
                        window.elementSdk.setConfig({ accent_color: value });
                    }
                }
            },
            {
                get: () => config.secondary_color || defaultConfig.secondary_color,
                set: (value) => {
                    config.secondary_color = value;
                    if (window.elementSdk) {
                        window.elementSdk.setConfig({ secondary_color: value });
                    }
                }
            }
        ],
        borderables: [],
        fontEditable: {
            get: () => config.font_family || defaultConfig.font_family,
            set: (value) => {
                config.font_family = value;
                if (window.elementSdk) {
                    window.elementSdk.setConfig({ font_family: value });
                }
            }
        },
        fontSizeable: {
            get: () => config.font_size || defaultConfig.font_size,
            set: (value) => {
                config.font_size = value;
                if (window.elementSdk) {
                    window.elementSdk.setConfig({ font_size: value });
                }
            }
        }
    };
}

function mapToEditPanelValues(config) {
    return new Map([
        ["consultant_name", config.consultant_name || defaultConfig.consultant_name],
        ["tagline", config.tagline || defaultConfig.tagline],
        ["hero_text", config.hero_text || defaultConfig.hero_text],
        ["about_title", config.about_title || defaultConfig.about_title],
        ["services_title", config.services_title || defaultConfig.services_title],
        ["portfolio_title", config.portfolio_title || defaultConfig.portfolio_title],
        ["publications_title", config.publications_title || defaultConfig.publications_title],
        ["contact_title", config.contact_title || defaultConfig.contact_title]
    ]);
}

// Initialize Element SDK
if (window.elementSdk) {
    window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities,
        mapToEditPanelValues
    });
}