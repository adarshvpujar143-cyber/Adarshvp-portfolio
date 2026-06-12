/* --- 1. Global Core Application Memory Pools & Datasets --- */
const GLOBAL_PALETTES = [
    { primary: "#250e2c", secondary: "#837ab6", fontPri: "#f7c2ca", fontSec: "#9d85b6", accent: "#cc8db3" },
    { primary: "#0b192c", secondary: "#1f3e5a", fontPri: "#e2e8f0", fontSec: "#94a3b8", accent: "#38bdf8" },
    { primary: "#141e27", secondary: "#203239", fontPri: "#eeebdd", fontSec: "#e0d8b0", accent: "#f2a154" },
    { primary: "#1a1a2e", secondary: "#16213e", fontPri: "#e94560", fontSec: "#0f3460", accent: "#e94560" }
];

let activePaletteIndex = 0;
let portfolioCarouselInterval = null;
let profileTitleScrollInterval = null;
let currentModalSlideshowIndex = 0;
let currentSlideshowImageCollection = [];

// Image database including PhoneMax Gallery Configuration
const GALLERY_DATABASE = {
    chromosis: {
        title: "Chromosis Technologies Pvt Ltd",
        narrative: "An active chronicle detailing UI experimentation blueprints, cross-device verification phases, production layout parameters, and continuous collaboration sprint reviews conducted inside the engineering department.",
        images: ["chromosis1.jpg", "chromosis2.jpg", "chromosis3.jpg", "chromosis4.jpg"]
    },
    hpe: {
        title: "Hewlett Packard Enterprise (HPE)",
        narrative: "Corporate architecture parameters and technical systems monitoring log workflows. This deck represents active enterprise software engineering solutions and analytical tracking parameters deployed across production server lines.",
        images: ["hpe1.jpg", "hpe2.jpg", "hpe3.jpg"]
    },
    phonemax: {
        title: "PhoneMax Campaign Gallery",
        narrative: "Comprehensive review of creative marketing collaterals, performance telemetry charts, audience interaction matrices, and corporate digital campaign designs crafted to boost regional brand positioning.",
        images: [
            "PhoneMax.jpg", "PhoneMax1.jpg", "PhoneMax2.jpg", "PhoneMax3.jpg", 
            "PhoneMax4.jpg", "PhoneMax5.jpg", "PhoneMax6.jpg", "PhoneMax7.jpg", "PhoneMax8.jpg"
        ]
    },
    nieit: {
        title: "NIE Institute Campus Memories",
        narrative: "Academic research sessions, engineering project milestone presentations, cultural networking initiatives, and varsity leadership memory logs compiled throughout the computer science and systems training periods.",
        images: ["nieit1.jpg", "nieit2.jpg", "nieit3.jpg"]
    }
};

// Case Study Deep Dives
const PROJECT_CASE_STUDIES = {
    "deaf-comm": {
        title: "Two Way Communication Systems for Deaf People",
        bullets: [
            "Engineered an automated mathematical processing matrix to translate hand gestures into natural language string readouts.",
            "Utilized high-performance frame monitoring structures to capture spatial orientation data matrices asynchronously.",
            "Integrated cross-platform presentation frameworks to output real-time text layouts to portable devices with minimal system delays."
        ]
    },
    "car-rental": {
        title: "Car Rental Management Systems",
        bullets: [
            "Architected an optimized transactional database system designed to resolve inventory concurrency faults and asset distribution requests.",
            "Integrated atomic reservation engines containing localized checking workflows to shield table schemas against racial-condition overlaps.",
            "Created responsive system analytics dashboards tracing rental revenue patterns, asset maintenance status logs, and customer returns."
        ]
    }
};

/* --- 2. Initialization & Boot Sequence Event Handlers --- */
document.addEventListener("DOMContentLoaded", () => {
    // Phase 1: Boot Animation Sequencing
    setTimeout(() => {
        const loader = document.getElementById("loader-screen");
        const mainContent = document.getElementById("app-content");
        if (loader) loader.classList.add("hidden-node");
        if (mainContent) mainContent.classList.remove("hidden-node");
        
        initializeHeroScrollingAnimations();
        initializeSectionNavigationIntersectionObservers();
    }, 1800);

    // Phase 2: Core Event Bindings
    const themeBtn = document.getElementById("theme-swapper");
    if (themeBtn) {
        themeBtn.addEventListener("click", cycleNextApplicationPalette);
    }
});

/* --- 3. UI Presentation Mechanics & Theme Engines --- */
function cycleNextApplicationPalette() {
    activePaletteIndex = (activePaletteIndex + 1) % GLOBAL_PALETTES.length;
    const selection = GLOBAL_PALETTES[activePaletteIndex];
    const targetRoot = document.documentElement;
    
    targetRoot.style.setProperty("--bg-primary", selection.primary);
    targetRoot.style.setProperty("--bg-secondary", selection.secondary);
    targetRoot.style.setProperty("--font-primary", selection.fontPri);
    targetRoot.style.setProperty("--font-secondary", selection.fontSec);
    targetRoot.style.setProperty("--accent", selection.accent);
}

function initializeHeroScrollingAnimations() {
    let activeIndex = 0;
    const rolls = document.querySelectorAll(".roll-node");
    
    profileTitleScrollInterval = setInterval(() => {
        if (rolls.length === 0) return;
        rolls[activeIndex].classList.remove("active");
        rolls[activeIndex].classList.add("exit");
        
        let previousIndex = activeIndex;
        activeIndex = (activeIndex + 1) % rolls.length;
        
        rolls[activeIndex].classList.remove("exit");
        rolls[activeIndex].classList.add("active");
        
        setTimeout(() => {
            rolls[previousIndex].classList.remove("exit");
        }, 500);
    }, 3000);
}

function initializeSectionNavigationIntersectionObservers() {
    const targets = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-item");
    
    const config = { root: null, rootMargin: "-30% 0px -60% 0px", threshold: 0 };
    
    const navWatcher = new IntersectionObserver((items) => {
        items.forEach(node => {
            if (node.isIntersecting) {
                const sectionId = node.target.getAttribute("id");
                navItems.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }, config);
    
    targets.forEach(section => navWatcher.observe(section));
}

/* --- 4. Interactive Modal Subsystem Controls --- */
function openGallery(key) {
    const source = GALLERY_DATABASE[key];
    if (!source) return;
    
    currentModalSlideshowIndex = 0;
    currentSlideshowImageCollection = source.images;
    
    let slideshowMarkup = `
        <h2 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 12px; color: #111;">${source.title}</h2>
        <div class="slideshow-box">
    `;
    
    source.images.forEach((imgName, index) => {
        slideshowMarkup += `
            <img src="${imgName}" class="picture-node ${index === 0 ? 'active-img' : ''}" data-slide-idx="${index}" alt="Gallery Element">
        `;
    });
    
    slideshowMarkup += `
            <div class="slideshow-nav-row">
                <button class="nav-btn" onclick="shiftSlideshowViewport(-1)"><i class="fa-solid fa-chevron-left"></i></button>
                <button class="nav-btn" onclick="shiftSlideshowViewport(1)"><i class="fa-solid fa-chevron-right"></i></button>
            </div>
        </div>
        <div class="thumbs-row-container">
    `;
    
    source.images.forEach((imgName, index) => {
        slideshowMarkup += `
            <img src="${imgName}" class="thumb-node ${index === 0 ? 'active-thumb' : ''}" data-thumb-idx="${index}" onclick="jumpToSpecificSlide(${index})" alt="Thumbnail">
        `;
    });
    
    slideshowMarkup += `
        </div>
        <p class="modal-narrative-p">${source.narrative}</p>
    `;
    
    renderModalContentWrapper(slideshowMarkup);
}

function openProject(key) {
    const caseData = PROJECT_CASE_STUDIES[key];
    if (!caseData) return;
    
    let projectMarkup = `
        <h2 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 8px; color: #111;"><i class="fa-solid fa-laptop-code"></i> ${caseData.title}</h2>
        <h4 style="text-transform: uppercase; letter-spacing: 0.08em; font-size: 0.8rem; color: #666; margin-bottom: 14px;">Technical Engineering Core Implementation Specs</h4>
        <ul class="modal-list-node">
    `;
    
    caseData.bullets.forEach(sentence => {
        projectMarkup += `<li>${sentence}</li>`;
    });
    
    projectMarkup += `
        </ul>
        <p class="modal-narrative-p">This case study demonstrates robust compliance standards, relational transactional consistency, and production architecture rules designed under strict operational constraints.</p>
    `;
    
    renderModalContentWrapper(projectMarkup);
}

function openSingleDocument(docPath) {
    const structuralMarkup = `
        <h2 style="font-size: 1.4rem; font-weight: 800; margin-bottom: 14px; color: #111;"><i class="fa-solid fa-file-invoice"></i> Verified Academic Document</h2>
        <div style="width: 100%; border-radius: 6px; overflow: hidden; background: #222; text-align: center;">
            <img src="${docPath}" style="max-width: 100%; max-height: 65vh; object-fit: contain; display: block; margin: 0 auto;" alt="Academic Verification Ledger">
        </div>
    `;
    renderModalContentWrapper(structuralMarkup);
}

function openAchievementDeepDive() {
    const achievementMarkup = `
        <h2 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 8px; color: #111;"><i class="fa-solid fa-trophy"></i> VTU Championship Operational Review</h2>
        <p class="modal-narrative-p" style="margin-bottom: 14px;">Evaluating athletic performance variables through high-stress crisis management matrices.</p>
        <ul class="modal-list-node">
            <li><strong>Dynamic Variable Calibration:</strong> Handled a high-pressure collapse situation, altering hitting strategies instantly according to ball delivery analytics.</li>
            <li><strong>Strategic Pacing Matrix:</strong> Scored an unbeaten 71* off 35 deliveries, engineering risk paths to clear target numbers efficiently.</li>
            <li><strong>Team Execution Control:</strong> Coordinated base runners during critical phases, leading the university squad safely across qualification milestones.</li>
        </ul>
    `;
    renderModalContentWrapper(achievementMarkup);
}

function openCertificationDocument() {
    const certMarkup = `
        <h2 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 12px; color: #111;"><i class="fa-solid fa-certificate"></i> Enterprise Credentials Ledger</h2>
        <div style="background: #f4f6f8; padding: 20px; border-radius: 8px; border: 1px dashed #ccc; text-align: center; margin-bottom: 14px;">
            <i class="fa-brands fa-microsoft" style="font-size: 3.5rem; color: #00a4ef; margin-bottom: 10px;"></i>
            <h3 style="font-size: 1.2rem; color: #222; font-weight: 700;">Microsoft Certified: Azure AI Fundamentals</h3>
            <p style="font-size: 0.88rem; color: #555; margin-top: 4px;">Credential Scope: Machine Learning Models, Cognitive Service Integrations, Neural Computations, & Automated Pipeline Controls.</p>
        </div>
        <p class="modal-narrative-p">This credential verifies core competence in architecting production pipelines and mapping mathematical processes using Microsoft Azure enterprise cloud solutions.</p>
    `;
    renderModalContentWrapper(certMarkup);
}

function renderModalContentWrapper(innerHtmlSnippet) {
    const injector = document.getElementById("modal-injection-point");
    const container = document.getElementById("universal-modal");
    if (injector && container) {
        injector.innerHTML = innerHtmlSnippet;
        container.classList.add("active-state");
    }
}

function closeActiveModalWindow() {
    const container = document.getElementById("universal-modal");
    if (container) container.classList.remove("active-state");
}

function shiftSlideshowViewport(direction) {
    if (currentSlideshowImageCollection.length === 0) return;
    let newIndex = currentModalSlideshowIndex + direction;
    if (newIndex >= currentSlideshowImageCollection.length) newIndex = 0;
    if (newIndex < 0) newIndex = currentSlideshowImageCollection.length - 1;
    jumpToSpecificSlide(newIndex);
}

function jumpToSpecificSlide(targetIndex) {
    currentModalSlideshowIndex = targetIndex;
    
    const views = document.querySelectorAll(".picture-node");
    const thumbs = document.querySelectorAll(".thumb-node");
    
    views.forEach(node => {
        node.classList.remove("active-img");
        if (parseInt(node.getAttribute("data-slide-idx")) === targetIndex) {
            node.classList.add("active-img");
        }
    });
    
    thumbs.forEach(thumb => {
        thumb.classList.remove("active-thumb");
        if (parseInt(thumb.getAttribute("data-thumb-idx")) === targetIndex) {
            thumb.classList.add("active-thumb");
        }
    });
}

/* --- 5. Virtual AI Chatbot Engine Framework --- */
function toggleChatbotState() {
    const frame = document.getElementById("chatbot-frame");
    if (!frame) return;
    
    const isCurrentlyActive = frame.classList.contains("active-chat");
    
    if (isCurrentlyActive) {
        // Trigger exit sequence: Apply robot animation and say thank you before closing
        const robotAvatar = document.getElementById("chatbot-trigger");
        if (robotAvatar) {
            robotAvatar.classList.add("animate-robo-thanks");
            setTimeout(() => {
                robotAvatar.classList.remove("animate-robo-thanks");
            }, 1200);
        }
        
        appendMessageLogNode("🤖 Thank you for chatting with AVP engine! Have an amazing day! ✨👋", "incoming");
        
        // Let user see the thank you message briefly, then collapse window
        setTimeout(() => {
            frame.classList.remove("active-chat");
        }, 1000);
    } else {
        frame.classList.add("active-chat");
    }
}

function handleChatbotKeyPress(event) {
    if (event.key === "Enter") {
        executeChatbotQuery();
    }
}

function executeChatbotQuery(forcedValue = null) {
    const field = document.getElementById("chatbot-input-field");
    if (!field) return;
    
    const inputString = forcedValue ? forcedValue.trim() : field.value.trim();
    if (!inputString) return;
    
    // Append human question bubble
    appendMessageLogNode(inputString, "outgoing");
    if (!forcedValue) field.value = "";
    
    // Display flowing animated dot typing ripple
    const rippleElement = displayBotTypingRipple();
    
    // Process input text and select routing path after a tiny processing layout delay
    setTimeout(() => {
        removeBotTypingRipple(rippleElement);
        routeQueryToIntentEngine(inputString.toLowerCase());
    }, 900);
}

function displayBotTypingRipple() {
    const logs = document.getElementById("chatbot-logs");
    if (!logs) return null;
    
    const rippleChassis = document.createElement("div");
    rippleChassis.className = "typing-ripple-wrapper";
    rippleChassis.id = "active-engine-typing-ripple";
    
    rippleChassis.innerHTML = `
        <span class="ripple-dot"></span>
        <span class="ripple-dot"></span>
        <span class="ripple-dot"></span>
    `;
    
    logs.appendChild(rippleChassis);
    logs.scrollTop = logs.scrollHeight;
    return rippleChassis;
}

function removeBotTypingRipple(element) {
    if (element && element.parentNode) {
        element.parentNode.removeChild(element);
    }
}

function appendMessageLogNode(textText, targetClass) {
    const logs = document.getElementById("chatbot-logs");
    if (!logs) return;
    
    const bubble = document.createElement("div");
    bubble.className = `bot-bubble ${targetClass}`;
    bubble.innerText = textText;
    
    logs.appendChild(bubble);
    logs.scrollTop = logs.scrollHeight;
}

/* --- NEW: Interactive Directory Menu & Routing Engines --- */
function routeQueryToIntentEngine(processedInput) {
    // Intent Path A: Projects Selection Menu requested
    if (processedInput.includes("project") || processedInput.includes("case study") || processedInput.includes("portfolio")) {
        appendMessageLogNode("🤖 Project Directory Access Granted. Please select an option below:", "incoming");
        createInteractiveDirectoryMenu([
            { label: "1. Two Way Communication System for Deaf People", query: "deaf project deepdive" },
            { label: "2. Car Rental Management Platform", query: "car rental project deepdive" }
        ]);
        return;
    }
    
    // Intent Path B: Work Experience Selection Menu requested
    if (processedInput.includes("experience") || processedInput.includes("work") || processedInput.includes("history") || processedInput.includes("job")) {
        appendMessageLogNode("🤖 Experience Records Hub. Select a tenure layer to fetch metrics:", "incoming");
        createInteractiveDirectoryMenu([
            { label: "1. Chromosis Technologies (Internship)", query: "chromosis tenure overview" },
            { label: "2. Hewlett Packard Enterprise (HPE Specialist)", query: "hpe tenure overview" },
            { label: "3. PhoneMax (Digital Campaign Executive - Gallery Added!)", query: "phonemax tenure overview" }
        ]);
        return;
    }

    // Intent Path C: Technical Skill Sets Index Menu requested
    if (processedInput.includes("skill") || processedInput.includes("tech") || processedInput.includes("matrix") || processedInput.includes("code")) {
        appendMessageLogNode("🤖 Select a technical domain matrix category:", "incoming");
        createInteractiveDirectoryMenu([
            { label: "1. Frontend Frameworks & UI UI/UX Systems", query: "frontend tech stack query" },
            { label: "2. Backend & Relational Database Environments", query: "backend tech stack query" },
            { label: "3. Analytics & Specialized Data Engineering", query: "analytics tech stack query" }
        ]);
        return;
    }

    // Secondary Leaf Nodes Router Fallbacks
    if (processedInput.includes("deaf project")) {
        appendMessageLogNode("🔊 Deaf Communication Project: High-speed gesture mapping calculation framework designed to parse structural actions cleanly into readouts.", "incoming");
    } else if (processedInput.includes("car rental")) {
        appendMessageLogNode("🚗 Car Rental System: Enterprise asset coordination engine built to safeguard concurrency pipelines and resolve database lock contentions.", "incoming");
    } else if (processedInput.includes("chromosis")) {
        appendMessageLogNode("🏢 Chromosis Technologies: Serving as a Creative Design and Software Engineering Intern in Hubli, mapping custom layout protocols since May 2026.", "incoming");
    } else if (processedInput.includes("hpe")) {
        appendMessageLogNode("💻 HPE Solutions: Served 4 months as a Technical Solutions Specialist in Bengaluru managing cloud operations matrices.", "incoming");
    } else if (processedInput.includes("phonemax")) {
        appendMessageLogNode("📈 PhoneMax Operations: 6 months tenure handling digital marketing infrastructure campaigns. Expanded visibility by 25%. Image gallery updated inside web workspace!", "incoming");
    } else if (processedInput.includes("frontend")) {
        appendMessageLogNode("✨ Frontend Stack: Expert across HTML5, CSS3, JavaScript (ES6+), React.js layout architectures, and fluent responsive system patterns.", "incoming");
    } else if (processedInput.includes("backend")) {
        appendMessageLogNode("⚙️ Backend Core: Specialized in Node.js, Express Frameworks, Python scripting infrastructure, and production SQL database routines.", "incoming");
    } else if (proc

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
