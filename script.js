/* --- 1. Global Core Application Memory Pools & Datasets --- */
const GLOBAL_PALETTES = [
    { primary: "#250e2c", secondary: "#837ab6", fontPri: "#f7c2ca", fontSec: "#9d85b6", accent: "#cc8db3" },
    { primary: "#0b192c", secondary: "#1f3e5a", fontPri: "#e2e8f0", fontSec: "#94a3b8", accent: "#38bdf8" },
    { primary: "#141e27", secondary: "#203239", fontPri: "#eeebdd", fontSec: "#e0d8b0", accent: "#f2a154" },
    { primary: "#1a1a2e", secondary: "#16213e", fontPri: "#e94560", fontSec: "#0f3460", accent: "#e94560" }
];

let activePaletteIndex = 0;
let profileTitleScrollInterval = null;
let currentModalSlideshowIndex = 0;
let currentSlideshowImageCollection = [];

// GALLERY DATABASE: Feeds your large popup slideshow with your precise images & journey content!
const GALLERY_DATABASE = {
    chromosis: {
        title: "Chromosis Technologies Pvt Ltd — Detailed Corporate Journey",
        narrative: `
            <div style="text-align: left; margin-top: 15px;">
                <h4 style="color: #cc8db3; margin-bottom: 5px;"><i class="fa-solid fa-map-location-dot"></i> My Journey:</h4>
                <p style="font-size: 0.92rem; color: #333; margin-bottom: 12px; line-height: 1.5;">Stepping into Chromosis Technologies in Hubli was my foundational leap into software engineering environments. I was immersed inside high-velocity agile product workflows, daily scrum checkpoints, and application design planning cycles.</p>
                <h4 style="color: #cc8db3; margin-bottom: 5px;"><i class="fa-solid fa-microchip"></i> Technologies Used:</h4>
                <p style="font-size: 0.92rem; color: #333; margin-bottom: 12px; line-height: 1.5;">HTML5, CSS3, JavaScript (ES6+), Git Repository Architecture, Frontend Responsive Emulators.</p>
                <h4 style="color: #cc8db3; margin-bottom: 5px;"><i class="fa-solid fa-square-poll-vertical"></i> Detailed Description & Task Scope:</h4>
                <p style="font-size: 0.92rem; color: #333; margin-bottom: 12px; line-height: 1.5;">I refactored legacy layout presentation modules, tracked cross-device design anomalies, and created modular code structures. I ensured seamless application render rules across 12 distinct system simulated breakpoints.</p>
                <h4 style="color: #cc8db3; margin-bottom: 5px;"><i class="fa-solid fa-chart-line"></i> Measurable Outcomes:</h4>
                <p style="font-size: 0.92rem; color: #333; margin-bottom: 12px; line-height: 1.5;">Optimized client viewport interface presentation models and dropped runtime display failures, drastically streamlining asset loading performance rules.</p>
                <h4 style="color: #cc8db3; margin-bottom: 5px;"><i class="fa-solid fa-graduation-cap"></i> What I Learnt:</h4>
                <p style="font-size: 0.92rem; color: #333; line-height: 1.5;">Gained complete professional competency handling isolated feature branching, structural style separation patterns, and resolving Git merge conflicts cleanly.</p>
            </div>
        `,
        images: ["35159.jpg", "35160.jpg", "35172.jpg"]
    },
    hpe: {
        title: "Hewlett Packard Enterprise (HPE) — Enterprise Infrastructure Specialist",
        narrative: `
            <div style="text-align: left; margin-top: 15px;">
                <h4 style="color: #3498db; margin-bottom: 5px;"><i class="fa-solid fa-route"></i> My Journey:</h4>
                <p style="font-size: 0.92rem; color: #333; margin-bottom: 12px; line-height: 1.5;">Operating inside a world-class workspace like HPE Bengaluru taught me structural resilience, high-availability demands, and infrastructure quality protocols.</p>
                <h4 style="color: #3498db; margin-bottom: 5px;"><i class="fa-solid fa-terminal"></i> Technologies Used:</h4>
                <p style="font-size: 0.92rem; color: #333; margin-bottom: 12px; line-height: 1.5;">Enterprise Dashboard Systems, Telemetry Logging Frameworks, Database Status Tracers.</p>
                <h4 style="color: #3498db; margin-bottom: 5px;"><i class="fa-solid fa-shield-halved"></i> Detailed Description & Task Scope:</h4>
                <p style="font-size: 0.92rem; color: #333; margin-bottom: 12px; line-height: 1.5;">Managed production server log tracking datasets, handled environment error triggers, and isolated critical configuration failures to draft structural triage paths for core engineers.</p>
                <h4 style="color: #3498db; margin-bottom: 5px;"><i class="fa-solid fa-square-check"></i> Measurable Outcomes:</h4>
                <p style="font-size: 0.92rem; color: #333; margin-bottom: 12px; line-height: 1.5;">Maximized processing stability benchmarks by trapping early-warning resource spikes and configuration discrepancies before system leaks spread.</p>
                <h4 style="color: #3498db; margin-bottom: 5px;"><i class="fa-solid fa-brain"></i> What I Learnt:</h4>
                <p style="font-size: 0.92rem; color: #333; line-height: 1.5;">Mastered corporate Service Level Agreements (SLAs), cloud network routing paths, and rapid system diagnostic mechanics.</p>
            </div>
        `,
        images: ["35161.jpg", "35162.jpg", "35173.jpg"]
    },
    phonemax: {
        title: "PhoneMax Core Marketing Division — Telemetry Campaign Hub",
        narrative: `
            <div style="text-align: left; margin-top: 15px;">
                <h4 style="color: #2ecc71; margin-bottom: 5px;"><i class="fa-solid fa-arrow-trend-up"></i> My Journey:</h4>
                <p style="font-size: 0.92rem; color: #333; margin-bottom: 12px; line-height: 1.5;">My 6-month stay at PhoneMax allowed me to integrate software engineering analytics with active target traffic workflows, tracing conversion lifecycles.</p>
                <h4 style="color: #2ecc71; margin-bottom: 5px;"><i class="fa-solid fa-sliders"></i> Technologies Used:</h4>
                <p style="font-size: 0.92rem; color: #333; margin-bottom: 12px; line-height: 1.5;">Conversion Pixels, Data Scripts, Split A/B Telemetry Engine, Analytical Tracking Systems.</p>
                <h4 style="color: #2ecc71; margin-bottom: 5px;"><i class="fa-solid fa-chart-pie"></i> Detailed Description & Task Scope:</h4>
                <p style="font-size: 0.92rem; color: #333; margin-bottom: 12px; line-height: 1.5;">Configured user monitoring scripts, evaluated audience navigation paths, and monitored controlled multi-variant (A/B testing) models to systematically drop interface friction.</p>
                <h4 style="color: #2ecc71; margin-bottom: 5px;"><i class="fa-solid fa-gem"></i> Measurable Outcomes:</h4>
                <p style="font-size: 0.92rem; color: #333; margin-bottom: 12px; line-height: 1.5;">Successfully scaled core customer interaction indices by 22% using clear, data-justified structural tweaks.</p>
                <h4 style="color: #2ecc71; margin-bottom: 5px;"><i class="fa-solid fa-lightbulb"></i> What I Learnt:</h4>
                <p style="font-size: 0.92rem; color: #333; line-height: 1.5;">Mastered quantitative demographic analytics, behavioral processing hooks, and metrics-driven frontend layout engineering.</p>
            </div>
        `,
        images: ["35174.jpg", "35175.jpg"]
    },
    nieit: {
        title: "NIE Institute Campus Memories — Mysuru",
        narrative: "Academic research sessions, engineering project milestone presentations, technical labs, and varsity leadership memory logs compiled throughout my Computer Science engineering training.",
        images: ["35163.jpg", "35164.jpg", "35158.jpg", "35171.jpg"]
    }
};

// Project Deep Dives
const PROJECT_CASE_STUDIES = {
    "deaf-comm": {
        title: "Two Way Communication Systems for Deaf People",
        bullets: [
            "<strong>Description & Journey:</strong> Designed an automated mathematical processing matrix to bridge accessibility divides by translating physical gestural movements straight into readable text readouts.",
            "<strong>Technologies Used:</strong> Computer Vision Tracking Frameworks, Vector Processing Pipelines, Asynchronous Frame Streams.",
            "<strong>Outcomes & Learning:</strong> Built high-speed frame monitoring structures ensuring real-time transcription displays under minimal system delays, teaching me complex concepts in stream performance tuning."
        ]
    },
    "car-rental": {
        title: "Car Rental Management Systems",
        bullets: [
            "<strong>Description & Journey:</strong> Engineered a robust transactional database application layout to manage vehicle inventory distribution and system logging pipelines.",
            "<strong>Technologies Used:</strong> Node.js, Express.js Frameworks, Relational Schemas, Atomic Concurrency Rules.",
            "<strong>Outcomes & Learning:</strong> Safely blocked race conditions and reservation concurrency overlap errors, sharpening my competency in building resilient database isolation layers."
        ]
    }
};

/* --- 2. Initialization & Sequenced Message Preloader Controls --- */
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const structuralLoaderMask = document.getElementById("loader-screen");
        const primaryAppContentWrapper = document.getElementById("app-content");
        if (structuralLoaderMask && !structuralLoaderMask.classList.contains("hidden-node")) {
            structuralLoaderMask.classList.add("hidden-node");
            if (primaryAppContentWrapper) primaryAppContentWrapper.classList.remove("hidden-node");
            unveilRestOfPortfolioSystems();
        }
    }, 10000);

    executeSequencedWelcomePreloader();

    const themeBtn = document.getElementById("theme-swapper");
    if (themeBtn) {
        themeBtn.addEventListener("click", cycleNextApplicationPalette);
    }
});

function executeSequencedWelcomePreloader() {
    const textHolder = document.getElementById("loader-animated-text-container");
    const loaderScreen = document.getElementById("loader-screen");
    const mainContent = document.getElementById("app-content");

    if (!textHolder) {
        if (loaderScreen) loaderScreen.classList.add("hidden-node");
        if (mainContent) mainContent.classList.remove("hidden-node");
        unveilRestOfPortfolioSystems();
        return;
    }

    const preloaderMessagesPool = [
        { text: "INITIALIZING PORTFOLIO METRICS...", style: "font-size: 11px; letter-spacing: 0.35em; color: #e2b662; font-weight: 700;" },
        { text: '"While you\'re generating queries, I\'m generating solutions."', style: "font-size: 1.15rem; font-style: italic; font-weight: 600; color: #cc8db3; line-height: 1.4;" },
        { text: "Welcome to the digital workspace of Adarsh V Pujar. Exploring scalable, reliable, and user-centric systems. 🚀", style: "font-size: 1rem; font-weight: 500; color: #f7c2ca; line-height: 1.6;" }
    ];

    let sequentialStepIndex = 0;

    function renderNextPreloaderTextChunk() {
        if (sequentialStepIndex < preloaderMessagesPool.length) {
            textHolder.style.opacity = 0;
            setTimeout(() => {
                textHolder.innerHTML = `<p style="${preloaderMessagesPool[sequentialStepIndex].style}">${preloaderMessagesPool[sequentialStepIndex].text}</p>`;
                textHolder.style.transition = "opacity 0.5s ease";
                textHolder.style.opacity = 1;
                
                let visibilityHoldTime = sequentialStepIndex === 2 ? 3800 : 2000;
                sequentialStepIndex++;
                
                setTimeout(renderNextPreloaderTextChunk, visibilityHoldTime);
            }, 300);
        } else {
            if (loaderScreen) loaderScreen.classList.add("hidden-node");
            if (mainContent) mainContent.classList.remove("hidden-node");
            unveilRestOfPortfolioSystems();
        }
    }

    renderNextPreloaderTextChunk();
}

function unveilRestOfPortfolioSystems() {
    try {
        initializeHeroScrollingAnimations();
        initializeSectionNavigationIntersectionObservers();
    } catch (err) {
        console.warn("Secondary visualization systems skipped:", err);
    }
}

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
    if (rolls.length === 0) return;
    
    if (profileTitleScrollInterval) clearInterval(profileTitleScrollInterval);
    
    profileTitleScrollInterval = setInterval(() => {
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
    if (targets.length === 0 || navItems.length === 0) return;
    
    const config = { root: null, rootMargin: "-30% 0px -50% 0px", threshold: 0 };
    
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

/* --- 4. Dynamic Interactive Modal Subsystem --- */
function openGallery(key) {
    const source = GALLERY_DATABASE[key];
    if (!source) return;
    
    currentModalSlideshowIndex = 0;
    currentSlideshowImageCollection = source.images;
    
    let slideshowMarkup = `
        <h2 style="font-size: 1.4rem; font-weight: 800; margin-bottom: 12px; color: #111; border-bottom: 2px solid #eee; padding-bottom: 6px;">${source.title}</h2>
        <div class="slideshow-box" style="position: relative; width: 100%; height: 350px; background: #111; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
    `;
    
    source.images.forEach((imgName, index) => {
        slideshowMarkup += `
            <img src="${imgName}" class="picture-node ${index === 0 ? 'active-img' : ''}" data-slide-idx="${index}" style="position: absolute; inset:0; width: 100%; height: 100%; object-fit: contain; background: #111; opacity: ${index === 0 ? 1 : 0}; transition: opacity 0.4s ease;" alt="Gallery Media Matrix Asset">
        `;
    });
    
    slideshowMarkup += `
            <div class="slideshow-nav-row" style="position: absolute; bottom: 12px; left: 50%; transform: translateX(-50%); display: flex; gap: 10px; z-index: 10;">
                <button class="nav-btn" onclick="shiftSlideshowViewport(-1)" style="background: rgba(255,255,255,0.95); border: none; width: 34px; height: 34px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 5px rgba(0,0,0,0.2);"><i class="fa-solid fa-chevron-left" style="color:#222;"></i></button>
                <button class="nav-btn" onclick="shiftSlideshowViewport(1)" style="background: rgba(255,255,255,0.95); border: none; width: 34px; height: 34px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 5px rgba(0,0,0,0.2);"><i class="fa-solid fa-chevron-right" style="color:#222;"></i></button>
            </div>
        </div>
        <div class="thumbs-row-container" style="display: flex; gap: 8px; overflow-x: auto; padding: 10px 0; margin-bottom: 12px;">
    `;
    
    source.images.forEach((imgName, index) => {
        slideshowMarkup += `
            <img src="${imgName}" class="thumb-node ${index === 0 ? 'active-thumb' : ''}" data-thumb-idx="${index}" onclick="jumpToSpecificSlide(${index})" style="width: 75px; height: 50px; object-fit: cover; border-radius: 4px; cursor: pointer; opacity: ${index === 0 ? 1 : 0.4}; border: ${index === 0 ? '2px solid #cc8db3' : 'none'}; transition: all 0.2s;" alt="Thumbnail Ledger">
        `;
    });
    
    slideshowMarkup += `
        </div>
        <div class="modal-narrative-p" style="font-size: 0.95rem; color: #2c3e50; line-height: 1.6; background: #f8f9fa; padding: 16px; border-radius: 6px; max-height: 220px; overflow-y: auto; border-left: 4px solid #cc8db3;">${source.narrative}</div>
    `;
    
    renderModalContentWrapper(slideshowMarkup);
}

function openProject(key) {
    const caseData = PROJECT_CASE_STUDIES[key];
    if (!caseData) return;
    
    let projectMarkup = `
        <h2 style="font-size: 1.4rem; font-weight: 800; margin-bottom: 10px; color: #111;"><i class="fa-solid fa-folder-open"></i> ${caseData.title}</h2>
        <div style="background:#f9f9f9; padding:15px; border-radius:6px; border-left:4px solid #447F98; text-align:left;">
            <ul class="modal-list-node" style="padding-left: 18px; margin-bottom: 5px; color: #333; list-style-type: square;">
    `;
    
    caseData.bullets.forEach(sentence => {
        projectMarkup += `<li style="margin-bottom: 10px; font-size: 0.93rem; line-height: 1.5;">${sentence}</li>`;
    });
    
    projectMarkup += `
            </ul>
        </div>
    `;
    renderModalContentWrapper(projectMarkup);
}

function openSingleDocument(docPath) {
    const structuralMarkup = `
        <h2 style="font-size: 1.3rem; font-weight: 800; margin-bottom: 12px; color: #111;"><i class="fa-solid fa-file-invoice"></i> Verified Academic Document</h2>
        <div style="width: 100%; border-radius: 6px; overflow: hidden; background: #111; text-align: center; box-shadow: 0 4px 10px rgba(0,0,0,0.25);">
            <img src="${docPath}" style="max-width: 100%; max-height: 65vh; object-fit: contain; display: block; margin: 0 auto;" alt="Academic Verification Ledger">
        </div>
    `;
    renderModalContentWrapper(structuralMarkup);
}

function openAchievementDeepDive() {
    const achievementMarkup = `
        <h2 style="font-size: 1.4rem; font-weight: 800; margin-bottom: 12px; color: #111;"><i class="fa-solid fa-trophy" style="color: #f1c40f;"></i> VTU Zonal Cricket Championship</h2>
        <div style="width: 100%; border-radius: 6px; overflow: hidden; background: #111; text-align: center; margin-bottom: 12px;">
            <img src="35158.jpg" style="max-width: 100%; max-height: 45vh; object-fit: contain; display: block; margin: 0 auto;" alt="Cricket Achievement Trophy Media">
        </div>
        <div class="modal-narrative-p" style="text-align: left; font-size: 0.93rem; color: #222; line-height: 1.5; background: #f8f9fa; padding: 14px; border-radius: 6px;">
            <p style="margin-bottom: 8px;"><strong>🏏 Tournament Summary:</strong> Selected to represent varsity squads in competitive zonal tournaments under high stakes.</p>
            <p style="margin-bottom: 8px;"><strong>🔥 Match Record Performance:</strong> Successfully engineered an aggressive match-winning innings of 71* runs off just 35 deliveries inside championship final pressures.</p>
            <p style="margin:0;"><strong>💡 Leadership Matrix Execution:</strong> Sharpened rapid tactical planning, team pacing, and split-second precision planning under extreme stress variables.</p>
        </div>
    `;
    renderModalContentWrapper(achievementMarkup);
}

function openCertificationDocument() {
    const certMarkup = `
        <h2 style="font-size: 1.4rem; font-weight: 800; margin-bottom: 12px; color: #111;"><i class="fa-solid fa-certificate" style="color: #3498db;"></i> Professional Certification Display</h2>
        <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; border: 1px dashed #ccc; text-align: center; margin-bottom: 12px;">
            <h3 style="font-size: 1.15rem; color: #111; font-weight: 700; margin-bottom:4px;">Microsoft Certified: Azure AI Fundamentals</h3>
            <p style="font-size: 0.85rem; color: #555; margin-bottom: 12px;">Validates technical competency mapping cloud intelligent modules, cognitive pipeline solutions, and neural computing structures.</p>
            <div style="width: 100%; border-radius: 6px; overflow: hidden; background: #111; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">
                <img src="35161.jpg" style="max-width: 100%; max-height: 45vh; object-fit: contain; display: block; margin: 0 auto;" alt="Verified Azure AI Certification Image Display">
            </div>
        </div>
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
        node.style.opacity = parseInt(node.getAttribute("data-slide-idx")) === targetIndex ? 1 : 0;
    });
    
    thumbs.forEach(thumb => {
        if (parseInt(thumb.getAttribute("data-thumb-idx")) === targetIndex) {
            thumb.style.opacity = 1;
            thumb.style.border = "2px solid #cc8db3";
        } else {
            thumb.style.opacity = 0.4;
            thumb.style.border = "none";
        }
    });
}

/* --- 5. Virtual AI Chatbot Engine Framework --- */
function toggleChatbotState() {
    const frame = document.getElementById("chatbot-frame");
    if (frame) frame.classList.toggle("active-chat");
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
    
    appendMessageLogNode(inputString, "outgoing");
    if (!forcedValue) field.value = "";
    
    const rippleElement = displayBotTypingRipple();
    
    setTimeout(() => {
        removeBotTypingRipple(rippleElement);
        routeQueryToIntentEngine(inputString.toLowerCase());
    }, 850);
}

function displayBotTypingRipple() {
    const logs = document.getElementById("chatbot-logs");
    if (!logs) return null;
    
    const rippleChassis = document.createElement("div");
    rippleChassis.className = "typing-ripple-wrapper";
    rippleChassis.id = "active-engine-typing-ripple";
    rippleChassis.innerHTML = `<span class="ripple-dot"></span><span class="ripple-dot"></span><span class="ripple-dot"></span>`;
    
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
    
    if (textText.includes("<div") || textText.includes("<h5")) {
        bubble.innerHTML = textText;
    } else {
        bubble.innerText = textText;
    }
    
    logs.appendChild(bubble);
    logs.scrollTop = logs.scrollHeight;
}

/* --- 6. Interactive Directory Menu & Routing Engines --- */
function routeQueryToIntentEngine(processedInput) {
    const matchedIntentA = processedInput.includes("project") || processedInput.includes("case study") || processedInput.includes("portfolio");
    const matchedIntentB = processedInput.includes("experience") || processedInput.includes("work") || processedInput.includes("history") || processedInput.includes("job") || processedInput.includes("tenure") || processedInput.includes("chromosis") || processedInput.includes("hpe") || processedInput.includes("phonemax");
    const matchedIntentC = processedInput.includes("skill") || processedInput.includes("tech") || processedInput.includes("matrix") || processedInput.includes("code") || processedInput.includes("frontend") || processedInput.includes("backend") || processedInput.includes("analytics");
    const matchedIntentD = processedInput.includes("education") || processedInput.includes("academic") || processedInput.includes("college") || processedInput.includes("school") || processedInput.includes("vvs") || processedInput.includes("nie");
    const matchedIntentE = processedInput.includes("sports") || processedInput.includes("cricket") || processedInput.includes("achievement") || matchedIntentB;

    // CORE INTENT ROUTER GATES
    if (processedInput.includes("action_fetch_nie_records")) {
        appendMessageLogNode("🎓 NIE Institute of Technology: Completing Bachelor of Engineering in Computer Science (2021-2025) with a tracking benchmark score of 8.45 CGPA.", "incoming");
        return;
    }
    if (processedInput.includes("action_fetch_vvs_records")) {
        appendMessageLogNode("📜 VVS Golden Jubilee PU College: Completed Pre-University validation parameters scoring an aggregate performance rating of 88.50%.", "incoming");
        return;
    }
    if (processedInput.includes("action_proj_deaf")) {
        appendMessageLogNode("🔊 Deaf Communication Project: High-speed gesture mapping calculation framework designed to parse structural actions cleanly into readouts.", "incoming");
        return;
    }
    if (processedInput.includes("action_proj_car")) {
        appendMessageLogNode("🚗 Car Rental System: Enterprise asset coordination engine built to safeguard concurrency pipelines and resolve database lock contentions.", "incoming");
        return;
    }
    if (processedInput.includes("action_exp_chromosis")) {
        appendMessageLogNode("🏢 Chromosis Technologies: Served as a Software Engineering Intern in Hubli, mapping dynamic responsive styles across viewports.", "incoming");
        return;
    }
    if (processedInput.includes("action_exp_hpe")) {
        appendMessageLogNode("💻 HPE Solutions: Served 4 months as a Technical Solutions Specialist in Bengaluru managing infrastructure logs and alerts.", "incoming");
        return;
    }
    if (processedInput.includes("action_exp_phonemax")) {
        appendMessageLogNode("📈 PhoneMax Operations: 6 months tenure managing conversion analytics tags and tracking user traffic patterns to lift metric indices.", "incoming");
        return;
    }

    if (matchedIntentD) {
        appendMessageLogNode("🎓 Fetching Academic Records Ledger:", "incoming");
        createInteractiveDirectoryMenu([
            { label: "1. NIE Institute of Technology (B.E.)", query: "action_fetch_nie_records" },
            { label: "2. VVS Golden Jubilee College (PUC)", query: "action_fetch_vvs_records" }
        ]);
        return;
    }
    if (matchedIntentA) {
        appendMessageLogNode("🤖 Project Directory Access Granted. Please select an option below:", "incoming");
        createInteractiveDirectoryMenu([
            { label: "1. Two Way Communication System for Deaf People", query: "action_proj_deaf" },
            { label: "2. Car Rental Management Platform", query: "action_proj_car" }
        ]);
        return;
    }
    if (matchedIntentB) {
        appendMessageLogNode("🤖 Experience Records Hub. Select a tenure layer to fetch metrics:", "incoming");
        createInteractiveDirectoryMenu([
            { label: "1. Chromosis Technologies (Internship)", query: "action_exp_chromosis" },
            { label: "2. Hewlett Packard Enterprise (HPE Specialist)", query: "action_exp_hpe" },
            { label: "3. PhoneMax (Digital Campaign Executive)", query: "action_exp_phonemax" }
        ]);
        return;
    }
    if (matchedIntentC) {
        appendMessageLogNode("🤖 Technical Domain Stacks Overview:", "incoming");
        appendMessageLogNode("✨ Frontend: HTML5, CSS3, JavaScript (ES6+), React.js.\n⚙️ Backend: Node.js, Express, Relational SQL Schemas.\n📊 Cloud: Microsoft Azure AI Fundamentals, Telemetry Log Diagnostics.", "incoming");
        return;
    }
    if (processedInput.includes("back") || processedInput.includes("exit")) {
        toggleChatbotState();
        return;
    }

    // FALLBACK RESTRICTION SHIELD
    if (!matchedIntentA && !matchedIntentB && !matchedIntentC && !matchedIntentD && !matchedIntentE) {
        const fallbackOopsHTMLBox = `
            <div style="background: rgba(231, 76, 60, 0.12); border: 2px dashed #e74c3c; border-radius: 8px; padding: 14px; margin: 5px 0; text-align: left; width: 100%;">
                <h5 style="color: #e74c3c; font-weight: 800; font-size: 1rem; margin-bottom: 6px; text-transform: uppercase;"><i class="fa-solid fa-ban"></i> oops!! Sorry</h5>
                <p style="font-size: 0.85rem; color: #f4f4f4; line-height: 1.4; margin: 0;">Boss adarsh has restricted me over other things not to talk and waste the time of me as well as yours.</p>
            </div>
        `;
        appendMessageLogNode(fallbackOopsHTMLBox, "incoming");
    }
}

function createInteractiveDirectoryMenu(menuOptionsArray) {
    const logs = document.getElementById("chatbot-logs");
    if (!logs) return;
    
    const menuContainerChassis = document.createElement("div");
    menuContainerChassis.className = "bot-menu-wrapper";
    
    menuOptionsArray.forEach(option => {
        const optionButtonNode = document.createElement("button");
        optionButtonNode.className = "bot-menu-option";
        optionButtonNode.innerText = option.label;
        optionButtonNode.onclick = () => { executeChatbotQuery(option.query); };
        menuContainerChassis.appendChild(optionButtonNode);
    });
    
    logs.appendChild(menuContainerChassis);
    logs.scrollTop = logs.scrollHeight;
        }
