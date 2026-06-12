// --- 1. Comprehensive Theme Engine Matrix Implementation ---
const themeMatrix = [
    { bgPri: "#250e2c", bgSec: "#837ab6", fontPri: "#f7c2ca", fontSec: "#9d85b6", accent: "#cc8db3" }, // Salmverse
    { bgPri: "#22251d", bgSec: "#796841", fontPri: "#e2b662", fontSec: "#a57928", accent: "#e1a327" }, // Carnation Yellow
    { bgPri: "#2c1614", bgSec: "#4e0e12", fontPri: "#d0cece", fontSec: "#b1b2a6", accent: "#80101a" }, // Candles Maroon
    { bgPri: "#DADEE1", bgSec: "#B9D8E1", fontPri: "#0D1A2F", fontSec: "#447F98", accent: "#629BB5" }, // Blue Cream
    { bgPri: "#050F2A", bgSec: "#B8A9FF", fontPri: "#F2FDFF", fontSec: "#7BBBFF", accent: "#B8A9FF" }, // Clash Display
    { bgPri: "#d5faf9", bgSec: "#96d2c2", fontPri: "#4fc7a7", fontSec: "#6dd0b7", accent: "#7fe3d7" }, // Minty Greens
    { bgPri: "#0D1A2F", bgSec: "#17364F", fontPri: "#09D8C7", fontSec: "#411E3A", accent: "#BD0927" }  // Teal & Red
];

let currentThemePointer = 0;

document.getElementById('theme-swapper').addEventListener('click', () => {
    currentThemePointer = (currentThemePointer + 1) % themeMatrix.length;
    const activeTheme = themeMatrix[currentThemePointer];
    
    const targetRoot = document.documentElement;
    targetRoot.style.setProperty('--bg-primary', activeTheme.bgPri);
    targetRoot.style.setProperty('--bg-secondary', activeTheme.bgSec);
    targetRoot.style.setProperty('--font-primary', activeTheme.fontPri);
    targetRoot.style.setProperty('--font-secondary', activeTheme.fontSec);
    targetRoot.style.setProperty('--accent', activeTheme.accent);
});

// --- 2. Preloader & Navigation Monitor Systems ---
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('loader-screen').classList.add('hidden-node');
        document.getElementById('app-content').classList.remove('hidden-node');
        initHeadlineRoller();
    }, 900);
});

function initHeadlineRoller() {
    const segments = document.querySelectorAll('.roll-node');
    let idx = 0;
    setInterval(() => {
        let activeSeg = segments[idx];
        let nextIdx = (idx + 1) % segments.length;
        let nextSeg = segments[nextIdx];

        activeSeg.classList.remove('active');
        activeSeg.classList.add('exit');
        nextSeg.classList.add('active');

        setTimeout(() => { activeSeg.classList.remove('exit'); }, 500);
        idx = nextIdx;
    }, 3000);
}

// --- 3. Dynamic Deep-Exploratory Repository Dataset Matrix ---
const portfolioDataset = {
    chromosis: {
        title: "Chromosis - Full Work Summary",
        images: ["Chromosis.jpg", "Chromosis1.jpg", "Chromosis2.jpg", "Chromosis3.jpg", "Chromosis4.jpg", "Chromosis5.jpg", "Chromosis6.jpg", "Chromosis7.jpg", "Chromosis8.jpg"],
        bullets: [
            "Architected scalable interface design systems layout across dynamic corporate web platforms.",
            "Built highly modular UI components maximizing cross-browser rendering efficiency.",
            "Collaborated directly with product management teams to convert engineering wireframes into structured user journeys.",
            "Optimized frontend media execution protocols, reducing interface frame drops by over 20%."
        ],
        paragraph: "My tenure at Chromosis focused on bridging aesthetic precision with modular, accessible code paradigms, ensuring robust layouts across desktop and mobile form-factors."
    },
    hpe: {
        title: "Hewlett Packard Enterprise (HPE) - Full Work Summary",
        images: ["HPE.jpg", "HPE1.jpg", "HPE2.jpg", "HPE3.jpg", "HPE4.jpg", "HPE5.jpg", "HPE6.jpg", "HPE7.jpg", "HPE8.jpg", "HPE9.jpg", "HPE10.jpg", "HPE11.jpg", "HPE12.jpg", "HPE13.jpg", "HPE14.jpg", "HPE15.jpg", "HPE16.jpg", "HPE17.jpg", "HPE18.jpg", "HPE19.jpg"],
        bullets: [
            "Implemented data validation matrices and data tracking systems across back-end server arrays.",
            "Constructed automated analytical parsing engines to review live system log data metrics.",
            "Designed automated test routines to proactively catch runtime memory leakage exceptions.",
            "Collaborated across global cloud teams to refactor internal API execution pathways."
        ],
        paragraph: "At HPE, I operated at scale, learning how to engineer performant logic loops and safeguard data pipeline workflows from failure conditions."
    },
    nieit: {
        title: "NIEIT - Engineering Academic Milestones",
        images: ["nieit.jpg", "nieit1.jpg", "nieit2.jpg", "nieit3.jpg", "nieit4.jpg", "nieit5.jpg", "nieit6.jpg", "nieit7.jpg", "nieit8.jpg", "nieit9.jpg", "nieit10.jpg", "nieit11.jpg", "nieit12.jpg", "nieit13.jpg", "nieit14.jpg", "nieit15.jpg", "nieit16.jpg", "nieit17.jpg"],
        bullets: [
            "Bachelor of Engineering track focusing on Advanced Algorithms and Distributed Systems.",
            "Maintained a verified cumulative score balance of 8.45 CGPA across semesters.",
            "Headed multiple technical seminar platforms mapping out optimization strategies for modern full-stack web products."
        ],
        paragraph: "My education at NIEIT established the core mathematical foundation, systems logic training, and baseline computational patterns that fuel my development work today."
    },
    'deaf-comm': {
        title: "Two Way Communication Systems for Deaf People",
        desc: "An accessibility system designed to facilitate immediate digital interaction for the hearing impaired by mapping physical tracking signals accurately into readable language models.",
        tech: ["Python Core", "Signal Processing Libraries", "Event Driven WebSockets", "Responsive HTML5/CSS3 Systems Framework"],
        outcomes: [
            "Achieved real-time conversational data transfer processing speeds under 160ms latency constraints.",
            "Successfully deployed an adaptive, high-contrast structural interface for effortless client usage."
        ],
        learning: "Mastered building thread configurations for real-time applications and implementing accessibility best practices."
    },
    'car-rental': {
        title: "Car Rental Management Systems Platform",
        desc: "An enterprise web automation application constructed to coordinate client registrations, live vehicle availability indexing, transactional validation tracking, and operational analytics logging.",
        tech: ["Node.js Environment", "Express Engine Integration", "Relational Database Engine (SQL Structure)", "Secure JSON Web Tokens Matrix"],
        outcomes: [
            "Built out a bulletproof concurrent reservation pipeline preventing double-booking scheduling conflicts completely.",
            "Optimized asset queries with indexed data structures to keep payload fetches under 80ms bounds."
        ],
        learning: "Gained significant expertise in structural database engineering and data normalization procedures."
    }
};

// --- 4. Sub-Page Modals Router Execution Channels ---
let slideshowTimerInstance = null;

function openGallery(key) {
    const nodeData = portfolioDataset[key];
    if (!nodeData) return;

    let destination = document.getElementById('modal-injection-point');
    
    let trackHTML = nodeData.images.map((img, i) => `
        <img src="${img}" class="picture-node ${i === 0 ? 'active-img' : ''}" data-index="${i}" alt="Memory Matrix Asset">
    `).join('');

    let indicatorHTML = nodeData.images.map((img, i) => `
        <img src="${img}" class="thumb-node ${i === 0 ? 'active-thumb' : ''}" data-index="${i}" onclick="jumpToSlide(${i})" alt="Thumbnail Link">
    `).join('');

    let listHTML = nodeData.bullets.map(b => `<li>${b}</li>`).join('');

    destination.innerHTML = `
        <div class="gallery-root">
            <h2 style="margin-bottom:12px; font-weight:800;">${nodeData.title}</h2>
            <div class="slideshow-box">
                ${trackHTML}
                <div class="slideshow-nav-row">
                    <button class="nav-btn" onclick="shiftSlide(-1)"><i class="fa-solid fa-chevron-left"></i></button>
                    <button class="nav-btn" onclick="shiftSlide(1)"><i class="fa-solid fa-chevron-right"></i></button>
                </div>
            </div>
            <div class="thumbs-row-container">${indicatorHTML}</div>
            <h3 style="margin:16px 0 8px; font-weight:700;">Key Technical Engagements:</h3>
            <ul class="modal-list-node">${listHTML}</ul>
            <p class="modal-narrative-p">${nodeData.paragraph}</p>
        </div>
    `;

    document.getElementById('universal-modal').classList.add('active-state');
    startSlideshowAutoplay();
}

function openProject(key) {
    const proj = portfolioDataset[key];
    let destination = document.getElementById('modal-injection-point');
    
    let techHTML = proj.tech.map(t => `<span class="metric-pill" style="background:#eef2f3; color:#111; margin-right:6px; font-size:0.8rem;">${t}</span>`).join('');
    let outcomesHTML = proj.outcomes.map(o => `<li>${o}</li>`).join('');

    destination.innerHTML = `
        <div class="project-modal-view">
            <h2 style="font-weight:800; margin-bottom:8px;">${proj.title}</h2>
            <p style="margin-bottom:16px; font-style:italic; color:#555;">${proj.desc}</p>
            <h4 style="margin-bottom:8px;">Technologies Utilized In Production:</h4>
            <div style="margin-bottom:16px; display:flex; flex-wrap:wrap; gap:6px;">${techHTML}</div>
            <h4 style="margin-bottom:6px;">Performance Outcomes & Benchmarks:</h4>
            <ul class="modal-list-node">${outcomesHTML}</ul>
            <h4 style="margin-bottom:6px;">Engineering Learning Curve:</h4>
            <p class="modal-narrative-p" style="background:#f9f9f9;">${proj.learning}</p>
        </div>
    `;
    document.getElementById('universal-modal').classList.add('active-state');
}

function openAchievementDeepDive() {
    let destination = document.getElementById('modal-injection-point');
    destination.innerHTML = `
        <div class="achievement-modal-root">
            <span class="gold-badge-node"><i class="fa-solid fa-trophy"></i> Elite Athlete Log</span>
            <h2 style="margin:12px 0 6px;">VTU State Tournament Analytics</h2>
            <p style="color:#666; font-size:0.9rem; margin-bottom:16px;"><i class="fa-solid fa-circle-nodes"></i> Match Stage: Semi-Finals vs VidyaVikas Institute of Technology</p>
            <div style="display:flex; gap:12px; margin-bottom:16px;">
                <img src="nieit15.jpg" style="width:50%; height:180px; object-fit:cover; border-radius:6px;" alt="Innings Action">
                <img src="nieit16.jpg" style="width:50%; height:180px; object-fit:cover; border-radius:6px;" alt="Post-Game Celebration">
            </div>
            <p class="modal-narrative-p">
                <strong>High-Pressure Execution:</strong> Under immense pressure during a vital, must-win match elimination stage, spearheaded a rapid counter-attack innings, scoring <strong>71* runs off just 35 deliveries</strong> to secure our slot in the state championship finals.
                <br><br>
                <strong>Corporate Application Mapping:</strong> This serves as clear validation of my leadership capacities. It directly mirrors a developer's capacity to maintain focus during sudden service degradation events, coordinate teams during intense release schedules, and deliver reliable solutions under tight timelines.
            </p>
        </div>
    `;
    document.getElementById('universal-modal').classList.add('active-state');
}

function openCertificationDocument() {
    let destination = document.getElementById('modal-injection-point');
    destination.innerHTML = `
        <div style="text-align:center;">
            <h2 style="margin-bottom:12px; font-weight:800;">Microsoft Cloud Competency Verification</h2>
            <img src="AI Azure.jpg" style="max-width:100%; max-height:340px; border-radius:6px; box-shadow:0 4px 16px rgba(0,0,0,0.1);" alt="Microsoft Azure AI Fundamentals Certificate">
            <h4 style="text-align:left; margin:16px 0 6px;">Course Mastery & Curricular Focus:</h4>
            <p class="modal-narrative-p" style="text-align:left;">
                This formal certification establishes verified expertise across fundamental cloud cognitive architectures on Microsoft Azure. Key subject evaluations include operational machine learning workflow management, computerized anomaly classification engines, automated visual sorting layers, and structural natural language model processing implementations.
            </p>
        </div>
    `;
    document.getElementById('universal-modal').classList.add('active-state');
}

function openSingleDocument(src) {
    let destination = document.getElementById('modal-injection-point');
    destination.innerHTML = `<img src="${src}" style="width:100%; border-radius:6px; box-shadow:0 4px 12px rgba(0,0,0,0.15);" alt="Academic Ledger Verification">`;
    document.getElementById('universal-modal').classList.add('active-state');
}

function closeActiveModalWindow() {
    document.getElementById('universal-modal').classList.remove('active-state');
    clearInterval(slideshowTimerInstance);
}

// --- 5. Slideshow Transition Logic Subroutines ---
function jumpToSlide(idx) {
    const images = document.querySelectorAll('.picture-node');
    const thumbs = document.querySelectorAll('.thumb-node');
    if (!images.length) return;

    images.forEach(img => img.classList.remove('active-img'));
    thumbs.forEach(t => t.classList.remove('active-thumb'));

    images[idx].classList.add('active-img');
    thumbs[idx].classList.add('active-thumb');
}

function shiftSlide(direction) {
    const images = document.querySelectorAll('.picture-node');
    if (!images.length) return;
    let currentlyActive = Array.from(images).findIndex(img => img.classList.contains('active-img'));
    let computeNextIdx = (currentlyActive + direction + images.length) % images.length;
    jumpToSlide(computeNextIdx);
}

function startSlideshowAutoplay() {
    slideshowTimerInstance = setInterval(() => { shiftSlide(1); }, 3000);
}

// --- 6. Intelligent Robot AI Agent System Interaction Logic ---
function toggleChatbotState() {
    document.getElementById('chatbot-frame').classList.toggle('active-chat');
}

function handleChatbotKeyPress(evt) {
    if (evt.key === 'Enter') executeChatbotQuery();
}

function executeChatbotQuery() {
    const field = document.getElementById('chatbot-input-field');
    const panel = document.getElementById('chatbot-logs');
    const promptValue = field.value.trim();
    if (!promptValue) return;

    panel.innerHTML += `<div class="bot-bubble outgoing">${promptValue}</div>`;
    field.value = '';
    panel.scrollTop = panel.scrollHeight;

    setTimeout(() => {
        let cleanText = promptValue.toLowerCase();
        let fallbackMsg = "Query registered. Please utilize the phone or email gateways in the footer alignment section for direct correspondence channels.";

        if (cleanText.includes('cricket') || cleanText.includes('leadership') || cleanText.includes('71') || cleanText.includes('vidyavikas')) {
            fallbackMsg = "Adarsh scored 71* off 35 balls in the critical VTU Semi-Final against VidyaVikas IT. This demonstrates exceptional pressure management and critical execution capacities.";
        } else if (cleanText.includes('project') || cleanText.includes('deaf') || cleanText.includes('car')) {
            fallbackMsg = "Adarsh's major projects include an accessibility-focused Two-Way Communication System for Deaf People and an enterprise-scale Car Rental Management System.";
        } else if (cleanText.includes('hpe') || cleanText.includes('chromosis') || cleanText.includes('experience')) {
            fallbackMsg = "Adarsh has verified industry exposure at Chromosis (modular layout systems, engineering wireframes) and Hewlett Packard Enterprise (data validation matrices, data tracking).";
        } else if (cleanText.includes('skill') || cleanText.includes('languages') || cleanText.includes('tech')) {
            fallbackMsg = "Adarsh is proficient in React.js, Node.js, Express, SQL, Python, UI/UX Architecture, and cloud data configurations.";
        } else if (cleanText.includes('education') || cleanText.includes('gpa') || cleanText.includes('college')) {
            fallbackMsg = "Adarsh holds a B.E. from NIEIT (8.45 CGPA), Pre-University training from VVS PU College (88.5%), and secondary schooling from VVS Pandit Nehru High School (91.2%).";
        }

        panel.innerHTML += `<div class="bot-bubble incoming">${fallbackMsg}</div>`;
        panel.scrollTop = panel.scrollHeight;
    }, 450);
}

// --- 7. Single-Page Interactive Active Navigation Intersection Matrix Observer ---
const targetViews = document.querySelectorAll('section');
const links = document.querySelectorAll('.nav-item');

window.addEventListener('scroll', () => {
    let activeSectionId = "";
    targetViews.forEach(sect => {
        const topBound = sect.offsetTop - 120;
        if (window.scrollY >= topBound) { activeSectionId = sect.getAttribute('id'); }
    });

    links.forEach(lnk => {
        lnk.classList.remove('active');
        if (lnk.getAttribute('href') === `#${activeSectionId}`) { lnk.classList.add('active'); }
    });
});
