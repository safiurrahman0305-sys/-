function changeLang(lang) {
    const t = window.translations ? window.translations[lang] : null;
    if (!t) return;

    // Save language preference
    localStorage.setItem('madrasa_lang', lang);

    // Set direction and lang attribute
    document.documentElement.setAttribute('dir', t.dir);
    document.documentElement.setAttribute('lang', lang);

    // Update body class for CSS alignment
    document.body.className = t.dir;

    // Font preservation logic
    if (lang === 'ur') {
        document.body.style.fontFamily = "'Jameel Noori Nastaleeq', 'Noto Nastaliq Urdu', serif";
        document.body.style.lineHeight = "2.2";
    } else if (lang === 'ar') {
        document.body.style.fontFamily = "'Amiri', serif";
        document.body.style.lineHeight = "1.8";
    } else {
        document.body.style.fontFamily = "'Roboto', 'Montserrat', sans-serif";
        document.body.style.lineHeight = "1.6";
    }

    // Update Navigation
    const navMapping = [
        { id: 'nav-home', key: 'home' },
        { id: 'nav-about', key: 'about' },
        { id: 'nav-departments', key: 'departments' },
        { id: 'nav-fatwa', key: 'fatwa' },
        { id: 'nav-admission', key: 'admission' },
        { id: 'nav-faculty', key: 'faculty' },
        { id: 'nav-media', key: 'media' },
        { id: 'nav-tools', key: 'tools' },
        { id: 'nav-books-link', key: 'books' },
        { id: 'nav-contact', key: 'contact' }
    ];

    navMapping.forEach(item => {
        const el = document.getElementById(item.id);
        if (el) el.textContent = t.nav[item.key];
    });

    // Update Logo Title
    const logoText = document.getElementById('logo-text');
    if (logoText) {
        logoText.textContent = lang === 'ur' ? 'مدرسۃ الحسنین' : (lang === 'ar' ? 'مدرسة الحسنين' : 'Madrasa Al-Hasanain');
    }

    // Update Hero Section
    const heroTitle = document.getElementById('hero-title');
    const heroSub = document.getElementById('hero-subtitle');
    const heroCta = document.getElementById('hero-cta');
    if (heroTitle) heroTitle.textContent = t.hero.title;
    if (heroSub) heroSub.textContent = t.hero.subtitle;
    if (heroCta) heroCta.textContent = t.hero.cta;

    // Update All Section Titles
    const sectionIds = ['about', 'departments', 'fatwa', 'admission', 'faculty', 'media', 'tools', 'contact'];
    sectionIds.forEach(id => {
        const el = document.getElementById(`${id}-title`);
        if (el) el.textContent = t.sections[id];
    });

    // Update Dar-ul-Ifta Module Labels
    const portalIds = {
        'fatwaSearchInput': 'searchPlaceholder',
        'searchBtn': 'searchBtn',
        'ai-search-btn': 'aiSearch',
        'gen-search-btn': 'generalSearch',
        'stat-fatawa-label': 'totalFatawa',
        'stat-views-label': 'totalViews',
        'recent-fatwa-title': 'recent',
        'search-results-title': 'results'
    };

    for (let id in portalIds) {
        const el = document.getElementById(id);
        if (el) {
            if (id === 'fatwaSearchInput') el.placeholder = t.fatwaPortal[portalIds[id]];
            else el.textContent = t.fatwaPortal[portalIds[id]];
        }
    }

    // Update Admission Form Labels
    const formLabelsMapping = [
        { id: 'lbl-fullname', key: 'name' },
        { id: 'lbl-father', key: 'father' },
        { id: 'lbl-dob', key: 'dob' },
        { id: 'lbl-cnic', key: 'cnic' },
        { id: 'lbl-phone', key: 'phone' },
        { id: 'lbl-emergency', key: 'emergency' },
        { id: 'lbl-address', key: 'address' },
        { id: 'lbl-education', key: 'education' },
        { id: 'lbl-dept', key: 'department' }
    ];

    formLabelsMapping.forEach(item => {
        const el = document.getElementById(item.id);
        if (el) el.textContent = t.form[item.key];
    });

    const btnSubmit = document.getElementById('btn-submit');
    const btnDownload = document.getElementById('btn-download');
    if (btnSubmit) btnSubmit.textContent = t.form.submit;
    if (btnDownload) btnDownload.textContent = t.form.download;

    // Update Shariah Tools
    const toolIds = ['zakat', 'inheritance', 'measures', 'apps'];
    toolIds.forEach(id => {
        const el = document.getElementById(`tool-${id}`);
        if (el) el.textContent = t.tools[id];
    });

    // Update Footer Details
    if (t.footer) {
        const footerIds = {
            'footer-about-title': 'aboutTitle',
            'footer-about-text': 'aboutText',
            'footer-addr-label': 'addrLabel',
            'footer-addr-text': 'addrText',
            'footer-phone-label': 'phoneLabel',
            'footer-email-label': 'emailLabel'
        };

        for (let id in footerIds) {
            const el = document.getElementById(id);
            if (el) el.textContent = t.footer[footerIds[id]];
        }
    }

    // Update Books Section
    if (t.books) {
        const booksTitle = document.getElementById('books-title');
        const booksSearch = document.getElementById('librarySearchInput');
        if (booksTitle) booksTitle.textContent = t.books.title;
        if (booksSearch) booksSearch.placeholder = t.books.searchPlaceholder;

        for (let i = 1; i <= 6; i++) {
            const titleEl = document.getElementById(`book-title-${i}`);
            const descEl = document.getElementById(`book-desc-${i}`);
            const btnOnlineEl = document.getElementById(`book-online-btn-${i}`);
            const btnDownloadEl = document.getElementById(`book-download-btn-${i}`);
            const btnMirrorEl = document.getElementById(`book-mirror-btn-${i}`);

            if (titleEl) titleEl.textContent = t.books[`item${i}Title`];
            if (descEl) descEl.textContent = t.books[`item${i}Desc`];

            if (btnOnlineEl) {
                if (btnOnlineEl.getAttribute('href') === "#") {
                    btnOnlineEl.textContent = t.books.comingSoon;
                } else {
                    btnOnlineEl.textContent = t.books.readOnline;
                }
            }

            if (btnDownloadEl) {
                if (btnDownloadEl.getAttribute('href') === "#") {
                    btnDownloadEl.textContent = t.books.comingSoon;
                } else {
                    btnDownloadEl.textContent = t.books.download;
                }
            }

            if (btnMirrorEl) {
                if (btnMirrorEl.getAttribute('href') === "#") {
                    btnMirrorEl.style.display = 'none';
                } else {
                    btnMirrorEl.style.display = 'inline-block';
                    btnMirrorEl.textContent = t.books.mirrorLink;
                }
            }
        }
    }

    // Update Language Button Active State
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick').includes(`'${lang}'`)) {
            btn.classList.add('active');
        }
    });

    document.title = `${t.nav.home} - Madrasa Al-Hasanain`;
    window.currentT = t;
}

window.changeLang = changeLang;

window.searchFatwa = function () {
    const query = document.getElementById('fatwaSearchInput').value.trim();
    const resultsArea = document.getElementById('searchResults');
    const resultsList = document.getElementById('resultsList');
    const t = window.currentT || window.translations['ur'];

    if (!query) return;

    resultsArea.style.display = 'block';
    resultsList.innerHTML = `<p style="padding: 20px; border-radius: 10px; background: #fff5f5; border: 1px solid #ffcccc; color: #d32f2f;">${t.fatwaPortal.noResults} "${query}"</p>`;

    resultsArea.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('madrasa_theme', isDark ? 'dark' : 'light');
    updateThemeIcon(isDark);
}

function updateThemeIcon(isDark) {
    const icon = document.querySelector('#theme-toggle i');
    if (icon) {
        icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    }
}

function applyTheme() {
    const savedTheme = localStorage.getItem('madrasa_theme');
    const isDark = savedTheme === 'dark';
    if (isDark) {
        document.body.classList.add('dark-mode');
    }
    updateThemeIcon(isDark);
}

window.toggleTheme = toggleTheme;

window.searchLibrary = function () {
    const input = document.getElementById('librarySearchInput');
    const filter = input.value.toLowerCase();
    const cards = document.querySelectorAll('#library-grid .card');

    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        if (title.indexOf(filter) > -1) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
};

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('madrasa_lang') || 'ur';
    changeLang(savedLang);
    applyTheme();
});
