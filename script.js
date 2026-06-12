/* --- 1. Global Memory Databases & Repositories --- */
const GLOBAL_PALETTES = [
    { primary: "#250e2c", secondary: "#837ab6", fontPri: "#f7c2ca", fontSec: "#9d85b6", accent: "#cc8db3" },
    { primary: "#0b192c", secondary: "#1f3e5a", fontPri: "#e2e8f0", fontSec: "#94a3b8", accent: "#38bdf8" },
    { primary: "#141e27", secondary: "#203239", fontPri: "#eeebdd", fontSec: "#e0d8b0", accent: "#f2a154" }
];

let activePaletteIndex = 0;
let profileTitleScrollInterval = null;
let currentModalSlideshowIndex = 0;
let currentSlideshowImageCollection = [];

// EXTENSIVE INFORMATION PORTFOLIO DATABASE (Description, Stacks, Outcomes, Learnings, Journeys)
const GALLERY_DATABASE = {
    chromosis: {
        title: "Chromosis Technologies Pvt Ltd — Software Engineering Intern Workspace",
        narrative: `
            <div class="deepdive-modal-content" style="text-align: left; margin-top: 15px; color: #222; font-family: sans-serif;">
                <p style="margin-bottom: 12px; line-height: 1.6;"><strong>🌟 Journey of Adarsh in the Company:</strong> Stepping into Chromosis Technologies in Hubli marked my transition into real-world workspace dynamics. Immersed completely in an active engineering team environment, I learned how software updates flow from design rooms to daily production staging pipelines while matching strict timelines.</p>
                <p style="margin-bottom: 12px; line-height: 1.6;"><strong>📝 Detailed Description & Scope:</strong> Worked directly with senior technical leads layout components, building and verifying modular interface blocks, managing source control updates, and resolving rendering errors across multiple device sizes.</p>
                <p style="margin-bottom: 12px; line-height: 1.6;"><strong>⚙️ Technologies Used:</strong> HTML5, CSS3, JavaScript (ES6+ Layout Matrix structures), Git Architecture, Frontend Emulators.</p>
                <p style="margin-bottom: 12px; line-height: 1.6;"><strong>🚀 Core Project Outcomes:</strong> Upgraded client layout styling rules across 12 unique mobile and tablet viewport layout models, dropping layout loading failures and making asset retrieval much cleaner.</p>
                <p style="margin-bottom: 4px; line-height: 1.6;"><strong>🎓 What I Learnt:</strong> Developed clean formatting methods, absolute stylesheet namespace separation workflows, and mastered cross-collaborative feature branching loops without running into Git synchronization issues.</p>
            </div>
        `,
        images: ["35159.jpg", "35160.jpg"]
    },
    hpe: {
        title: "Hewlett Packard Enterprise (HPE) — Technical Solutions Hub",
        narrative: `
            <div class="deepdive-modal-content" style="text-align: left; margin-top: 15px; color: #222; font-family: sans-serif;">
                <p style="margin-bottom: 12px; line-height: 1.6;"><strong>🌟 Journey of Adarsh in the Company:</strong> Entering the corporate workspace at HPE in Bengaluru pushed my software experience towards high-availability requirements. Over a 4-month specialized tenure, I operated inside the technical support framework analyzing system data configurations.</p>
                <p style="margin-bottom: 12px; line-height: 1.6;"><strong>📝 Detailed Description & Scope:</strong> Monitored distributed cloud servers, logged hardware tracking files, isolated operational runtime failure markers, and optimized server health checklists.</p>
                <p style="margin-bottom: 12px; line-height: 1.6;"><strong>⚙️ Technologies Used:</strong> Cloud Metric Tracers, Enterprise Support Systems, Automated Monitoring Consoles, System Logging Libraries.</p>
                <p style="margin-bottom: 12px; line-height: 1.6;"><strong>🚀 Core Project Outcomes:</strong> Successfully reviewed resource exhaustion spikes across production blocks, preventing platform downtime events by mapping clear predictive alert points for engineering teams.</p>
                <p style="margin-bottom: 4px; line-height: 1.6;"><strong>🎓 What I Learnt:</strong> Mastered the rules of corporate Service Level Agreements (SLAs), enterprise disaster risk recovery procedures, and infrastructure tracking concepts.</p>
            </div>
        `,
        images: ["35161.jpg", "35162.jpg"]
    },
    phonemax: {
        title: "PhoneMax Operations — Quantitative Audience Analytics Campaign",
        narrative: `
            <div class="deepdive-modal-content" style="text-align: left; margin-top: 15px; color: #222; font-family: sans-serif;">
                <p style="margin-bottom: 12px; line-height: 1.6;"><strong>🌟 Journey of Adarsh in the Company:</strong> My 6-month stay at PhoneMax allowed me to balance backend knowledge with digital layout telemetry systems, driving large-scale consumer behavior mapping pipelines.</p>
                <p style="margin-bottom: 12px; line-height: 1.6;"><strong>📝 Detailed Description & Scope:</strong> Engineered conversion analytics scripts, processed clickstream matrix tracking data, oversaw web traffic tags, and executed high-fidelity behavioral split-testing runs.</p>
                <p style="margin-bottom: 12px; line-height: 1.6;"><strong>⚙️ Technologies Used:</strong> Behavioral Analytics Panels, Split A/B Telemetry Engine, Data Mapping Scripts, Excel Processing Systems.</p>
                <p style="margin-bottom: 12px; line-height: 1.6;"><strong>🚀 Core Project Outcomes:</strong> Multiplied general user interaction index rates by 22% regionally by reorganizing layout presentation tunnels via real data-driven insights.</p>
                <p style="margin-bottom: 4px; line-height: 1.6;"><strong>🎓 What I Learnt:</strong> Gained deep quantitative insight into target demographic modeling, interaction lifecycle monitoring, and high-conversion structural placement mechanics.</p>
            </div>
        `,
        images: ["PhoneMax.jpg", "PhoneMax1.jpg", "PhoneMax2.jpg", "PhoneMax3.jpg", "PhoneMax4.jpg", "PhoneMax5.jpg", "PhoneMax6.jpg", "PhoneMax7.jpg", "PhoneMax8.jpg"]
    },
    nieit: {
        title: "NIE Institute of Technology — Academic Portfolio Display",
        narrative: `
            <div class="deepdive-modal-content" style="text-align: left; margin-top: 15px; color: #222; font-family: sans-serif;">
                <p style="margin-bottom: 8px;"><strong>🎓 The Academic Path (2021 - 2025):</strong> My engineering journey in Computer Science was built on a strong technical base. This media repository holds memories from research cycles, software layout reviews, labs, and collaborative team showcases.</p>
                <p><strong>💡 Key Focus Areas:</strong> Foundational Algorithms, Object-Oriented Software Design patterns, Relational Schemas, and Real-time Concurrent Computing.</p>
            </div>
        `,
        images: ["35163.jpg", "35164.jpg", "35158.jpg"]
    }
};

const PROJECT_CASE_STUDIES = {
    "deaf-comm": {
        title: "Two Way Communication Systems for Deaf People",
        bullets: [
            "<strong>Description & Journey:</strong> Designed to remove accessibility gaps by mapping real-time physical hand motions straight into standard text parameters.",
            "<strong>Technologies Used:</strong> Computer Vision Tracking Frameworks, Asynchronous Data Pipelines, Mathematical Vector Mapping.",
            "<strong>Outcomes & Learning:</strong> Built high-speed frame analytical matrices ensuring sub-second transcription layouts, teaching me a massive lesson in signal capturing and runtime stream optimizations."
        ]
    },
    "car-rental": {
        title: "Car Rental Management Systems",
        bullets: [
            "<strong>Description & Journey:</strong> Created a highly reliable data portal designed to streamline booking requests and handle asset operations.",
            "<strong>Technologies Used:</strong> Node.js, Express.js, SQL Relational Schemas, Atomic Verification Rules.",
            "<strong>Outcomes & Learning:</strong> Safely mitigated multi-user runtime booking collisions and table lock errors. I learned how to create clean isolation layers and robust transaction patterns."
        ]
    }
};

/* --- 2. Initializers & Preloaders --- */
document.addEventListener("DOMContentLoaded", () => {
    // Safety exit rule to clear loader screen if any exception triggers
    setTimeout(() => {
        const preloader = document.getElementById("loader-screen");
        const appMain = document.getElementById("app-content");
        if (preloader && !preloader.classList.contains("hidden-node")) {
            preloader.classList.add("hidden-node");
            if (appMain) appMain.classList.remove("hidden-node");
            initializeVisualDynamics();
        }
    }, 2800);

    // Structural fade triggers
    setTimeout(() => {
        const preloader = document.getElementById("loader-screen");
        const appMain = document.getElementById("app-content");
        if (preloader) preloader.classList.add("hidden-node");
        if (appMain) appMain.classList.remove("hidden-node");
        initializeVisualDynamics();
    }, 2000);

    const paletteBtn = document.getElementById("theme-swapper");
    if (paletteBtn) paletteBtn.addEventListener("click", cycleApplicationPalettes);
});

function initializeVisualDynamics() {
    initializeScrollingHeroTitleText();
    initializeSectionTrackingObservers();
}

/* --- 3. UI Display Engines & Palette Controls --- */
function cycleApplicationPalettes() {
    activePaletteIndex = (activePaletteIndex + 1) % GLOBAL_PALETTES.length;
    const layoutConfig = GLOBAL_PALETTES[activePaletteIndex];
    const targetRoot = document.documentElement;
    
    targetRoot.style.setProperty("--bg-primary", layoutConfig.primary);
    targetRoot.style.setProperty("--bg-secondary", layoutConfig.secondary);
    targetRoot.style.setProperty("--font-primary", layoutConfig.fontPri);
    targetRoot.style.setProperty("--font-secondary", layoutConfig.fontSec);
    targetRoot.style.setProperty("--accent", layoutConfig.accent);
}

function initializeScrollingHeroTitleText() {
    let activeIdx = 0;
    const rollNodes = document.querySelectorAll(".roll-node");
    if (rollNodes.length === 0) return;
    
    if (profileTitleScrollInterval) clearInterval(profileTitleScrollInterval);
    
    profileTitleScrollInterval = setInterval(() => {
        rollNodes[activeIdx].classList.remove("active");
        rollNodes[activeIdx].classList.add("exit");
        
        let priorIdx = activeIdx;
        activeIdx = (activeIdx + 1) % rollNodes.length;
        
        rollNodes[activeIdx].classList.remove("exit");
        rollNodes[activeIdx].classList.add("active");
        
        setTimeout(() => { rollNodes[priorIdx].classList.remove("exit"); }, 500);
    }, 3000);
}

function initializeSectionTrackingObservers() {
    const panels = document.querySelectorAll("section");
    const navigationLinks = document.querySelectorAll(".nav-item");
    if (panels.length === 0 || navigationLinks.length === 0) return;
    
    const intersectionConfig = { root: null, rootMargin: "-30% 0px -50% 0px", threshold: 0 };
    
    const dynamicObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const visibleSectionId = entry.target.getAttribute("id");
                navigationLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${visibleSectionId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }, intersectionConfig);
    
    panels.forEach(p => dynamicObserver.observe(p));
}

/* --- 4. Large Page Opening Slideshow Modal Subsystem --- */
function openGallery(key) {
    const dataSet = GALLERY_DATABASE[key];
    if (!dataSet) return;
    
    currentModalSlideshowIndex = 0;
    currentSlideshowImageCollection = dataSet.images;
    
    let modalStructureHTML = `
        <h2 style="font-size: 1.4rem; font-weight:800; margin-bottom:12px; color:#111; text-align:left; border-bottom:2px solid #eee; padding-bottom:6px;">${dataSet.title}</h2>
        <div class="slideshow-box" style="position:relative; width:100%; height:340px; background:#111; border-radius:8px; overflow:hidden;">
    `;
    
    dataSet.images.forEach((name, i) => {
        modalStructureHTML += `
            <img src="${name}" class="picture-node ${i === 0 ? 'active-img' : ''}" data-slide-idx="${i}" style="position:absolute; inset:0; width:100%; height:100%; object-fit:contain; opacity:${i === 0 ? 1 : 0}; transition:opacity 0.4s ease;" alt="Portfolio Viewport Image Asset">
        `;
    });
    
    modalStructureHTML += `
            <div class="slideshow-nav-row" style="position:absolute; bottom:12px; left:50%; transform:translateX(-50%); display:flex; gap:12px; z-index:15;">
                <button class="nav-btn" onclick="shiftSlideshowViewport(-1)" style="background:#fff; border:none; width:34px; height:34px; border-radius:50%; cursor:pointer; font-weight:bold; box-shadow:0 2px 5px rgba(0,0,0,0.3);"><i class="fa-solid fa-chevron-left" style="color:#111;"></i></button>
                <button class="nav-btn" onclick="shiftSlideshowViewport(1)" style="background:#fff; border:none; width:34px; height:34px; border-radius:50%; cursor:pointer; font-weight:bold; box-shadow:0 2px 5px rgba(0,0,0,0.3);"><i class="fa-solid fa-chevron-right" style="color:#111;"></i></button>
            </div>
        </div>
        <div class="thumbs-row-container" style="display:flex; gap:8px; overflow-x:auto; padding:10px 0; margin-bottom:12px;">
    `;
    
    dataSet.images.forEach((name, i) => {
        modalStructureHTML += `
            <img src="${name}" class="thumb-node ${i === 0 ? 'active-thumb' : ''}" data-thumb-idx="${i}" onclick="jumpToSpecificSlide(${i})" style="width:70px; height:48px; object-fit:cover; border-radius:4px; cursor:pointer; opacity:${i === 0 ? 1 : 0.4}; border:${i === 0 ? '2px solid #cc8db3':'none'};" alt="Slide Preview Miniature">
        `;
    });
    
    modalStructureHTML += `
        </div>
        <div class="modal-narrative-p" style="font-size:0.95rem; color:#2c3e50; line-height:1.6; background:#f9f9f9; padding:15px; border-radius:6px; border-left:4px solid #cc8db3; max-height:220px; overflow-y:auto;">${dataSet.narrative}</div>
    `;
    
    injectAndTriggerUniversalModal(modalStructureHTML);
}

function openProject(key) {
    const match = PROJECT_CASE_STUDIES[key];
    if (!match) return;
    
    let structureMarkup = `
        <h2 style="font-size: 1.4rem; font-weight:800; margin-bottom:10px; color:#111; text-align:left;"><i class="fa-solid fa-folder-open"></i> ${match.title}</h2>
        <div style="background:#f9f9f9; padding:15px; border-radius:6px; border-left:4px solid #447F98; text-align:left;">
            <ul style="padding-left:18px; list-style-type:square; color:#333;">
    `;
    
    match.bullets.forEach(b => {
        structureMarkup += `<li style="margin-bottom:10px; font-size:0.95rem; line-height:1.5;">${b}</li>`;
    });
    
    structureMarkup += `
            </ul>
        </div>
    `;
    injectAndTriggerUniversalModal(structureMarkup);
}

function openSingleDocument(path) {
    const structuralLayout = `
        <h2 style="font-size: 1.3rem; font-weight:800; margin-bottom:12px; color:#111; text-align:left;"><i class="fa-solid fa-file-invoice"></i> Verified Academic Document</h2>
        <div style="width:100%; border-radius:6px; overflow:hidden; background:#111; padding:5px; box-shadow:0 4px 10px rgba(0,0,0,0.25);">
            <img src="${path}" style="max-width:100%; max-height:65vh; object-fit:contain; display:block; margin:0 auto;" alt="Verification Document Screen">
        </div>
    `;
    injectAndTriggerUniversalModal(structuralLayout);
}

function openAchievementDeepDive() {
    const markup = `
        <h2 style="font-size: 1.4rem; font-weight: 800; margin-bottom: 12px; color: #111; text-align:left;"><i class="fa-solid fa-trophy" style="color:#f1c40f;"></i> VTU Zonal Cricket Tournament Log</h2>
        <div style="width:100%; border-radius:6px; overflow:hidden; background:#111; text-align:center; margin-bottom:12px;">
            <img src="35158.jpg" style="max-width:100%; max-height:45vh; object-fit:contain; display:block; margin:0 auto;" alt="Adarsh Tournament Trophy Presentation">
        </div>
        <div style="background:#f8f9fa; padding:14px; border-radius:6px; text-align:left; color:#222; font-size:0.93rem; line-height:1.5;">
            <p style="margin-bottom:8px;"><strong>🏏 Tournament Summary:</strong> Selected across competitive selection pools to represent varsity layouts inside high-stakes matches.</p>
            <p style="margin-bottom:8px;"><strong>🔥 Match Record Performance:</strong> Successfully engineered an aggressive match-winning innings of 71* runs off just 35 deliveries inside high-stress closing thresholds.</p>
            <p><strong>💡 Operational Takeaway:</strong> Sharpened rapid focus, deep concentration under extreme group pressure, strategy formulation, and split-second precision planning.</p>
        </div>
    `;
    injectAndTriggerUniversalModal(markup);
}

function openCertificationDocument() {
    const designSnippet = `
        <h2 style="font-size: 1.4rem; font-weight: 800; margin-bottom: 12px; color: #111; text-align:left;"><i class="fa-solid fa-id-card-clip" style="color:#3498db;"></i> Verification Credentials Display</h2>
        <div style="background:#f3f4f6; border:1px dashed #ccc; padding:15px; border-radius:8px; text-align:center; margin-bottom:12px;">
            <h3 style="font-size:1.15rem; color:#111; margin-bottom:4px;">Microsoft Certified: Azure AI Fundamentals</h3>
            <p style="font-size:0.85rem; color:#555; margin-bottom:12px;">Validates technical competency mapping AI workflows, neural computation modeling, and machine learning structures on cloud grids.</p>
            <div style="width:100%; border-radius:6px; overflow:hidden; background:#111;">
                <img src="35161.jpg" style="max-width:100%; max-height:45vh; object-fit:contain; display:block; margin:0 auto;" alt="Microsoft Cloud Azure AI Certificate Ledger Image">
            </div>
        </div>
    `;
    injectAndTriggerUniversalModal(designSnippet);
}

function injectAndTriggerUniversalModal(htmlCode) {
    const container = document.getElementById("universal-modal");
    const targetDiv = document.getElementById("modal-injection-point");
    if (container && targetDiv) {
        targetDiv.innerHTML = htmlCode;
        container.classList.add("active-state");
    }
}

function closeActiveModalWindow() {
    const container = document.getElementById("universal-modal");
    if (container) container.classList.remove("active-state");
}

function shiftSlideshowViewport(step) {
    if (currentSlideshowImageCollection.length === 0) return;
    let nextIdx = currentModalSlideshowIndex + step;
    if (nextIdx >= currentSlideshowImageCollection.length) nextIdx = 0;
    if (nextIdx < 0) nextIdx = currentSlideshowImageCollection.length - 1;
    jumpToSpecificSlide(nextIdx);
}

function jumpToSpecificSlide(idx) {
    currentModalSlideshowIndex = idx;
    const items = document.querySelectorAll(".picture-node");
    const miniThumbs = document.querySelectorAll(".thumb-node");
    
    items.forEach(img => {
        img.style.opacity = parseInt(img.getAttribute("data-slide-idx")) === idx ? 1 : 0;
    });
    
    miniThumbs.forEach(t => {
        if (parseInt(t.getAttribute("data-thumb-idx")) === idx) {
            t.style.opacity = 1;
            t.style.border = "2px solid #cc8db3";
        } else {
            t.style.opacity = 0.4;
            t.style.border = "none";
        }
    });
}

/* --- 5. AI Chatbot Shell System --- */
function toggleChatbotState() {
    const webBox = document.getElementById("chatbot-frame");
    if (webBox) webBox.classList.toggle("active-chat");
}

function handleChatbotKeyPress(e) {
    if (e.key === "Enter") executeChatbotQuery();
}

function executeChatbotQuery(presetValue = null) {
    const bar = document.getElementById("chatbot-input-field");
    if (!bar) return;
    
    const value = presetValue ? presetValue.trim() : bar.value.trim();
    if (!value) return;
    
    appendMessageLogNode(value, "outgoing");
    if (!presetValue) bar.value = "";
    
    const loadingRipple = displayBotTypingRipple();
    
    setTimeout(() => {
        removeBotTypingRipple(loadingRipple);
        routeQueryToIntentEngine(value.toLowerCase());
    }, 850);
}

function displayBotTypingRipple() {
    const logs = document.getElementById("chatbot-logs");
    if (!logs) return null;
    const ripple = document.createElement("div");
    ripple.className = "typing-ripple-wrapper";
    ripple.id = "active-engine-typing-ripple";
    ripple.innerHTML = `<span class="ripple-dot"></span><span class="ripple-dot"></span><span class="ripple-dot"></span>`;
    logs.appendChild(ripple);
    logs.scrollTop = logs.scrollHeight;
    return ripple;
}

function removeBotTypingRipple(el) {
    if (el && el.parentNode) el.parentNode.removeChild(el);
}

function appendMessageLogNode(text, directionClass) {
    const trackingBox = document.getElementById("chatbot-logs");
    if (!trackingBox) return;
    const segment = document.createElement("div");
    segment.className = `bot-bubble ${directionClass}`;
    if (text.includes("<div") || text.includes("<h5")) {
        segment.innerHTML = text;
    } else {
        segment.innerText = text;
    }
    trackingBox.appendChild(segment);
    trackingBox.scrollTop = trackingBox.scrollHeight;
}

/* --- 6. AI Routing Switch (Fixed Education Matching) --- */
function routeQueryToIntentEngine(input) {
    const matchProj = input.includes("project") || input.includes("case study") || input.includes("portfolio");
    const matchExp = input.includes("experience") || input.includes("work") || input.includes("history") || input.includes("job") || input.includes("tenure") || input.includes("chromosis") || input.includes("hpe") || input.includes("phonemax");
    const matchSkill = input.includes("skill") || input.includes("tech") || input.includes("matrix") || input.includes("code") || input.includes("frontend") || input.includes("backend") || input.includes("analytics");
    const matchEdu = input.includes("education") || input.includes("academic") || input.includes("college") || input.includes("school") || input.includes("vvs") || input.includes("nie");
    const matchAch = input.includes("sports") || input.includes("cricket") || input.includes("achievement") || input.includes("medal") || input.includes("trophy") || input.includes("azure") || input.includes("certification");

    // PRIORITY 1: Broad Category Directory Triggers
    if (matchEdu) {
        appendMessageLogNode("🎓 Fetching Academic Progress Ledger Records:", "incoming");
        createInteractiveDirectoryMenu([
            { label: "1. NIE Institute of Technology (B.E.)", query: "action_fetch_nie_records" },
            { label: "2. VVS Golden Jubilee College (PUC)", query: "action_fetch_vvs_records" }
        ]);
        return;
    }
    if (matchProj) {
        appendMessageLogNode("🤖 Project Directory Access Granted. Select an engineered layout:", "incoming");
        createInteractiveDirectoryMenu([
            { label: "1. Deaf Two-Way Communication System", query: "action_proj_deaf" },
            { label: "2. Car Rental Management Platform", query: "action_proj_car" }
        ]);
        return;
    }
    if (matchExp) {
        appendMessageLogNode("🤖 Experience Hub Active. Select an enterprise block:", "incoming");
        createInteractiveDirectoryMenu([
            { label: "1. Chromosis Technologies Profile", query: "action_exp_chromosis" },
            { label: "2. Hewlett Packard Enterprise Profile", query: "action_exp_hpe" },
            { label: "3. PhoneMax Campaign Profile", query: "action_exp_phonemax" }
        ]);
        return;
    }
    if (matchSkill) {
        appendMessageLogNode("🤖 Select technical competency tracking category:", "incoming");
        createInteractiveDirectoryMenu([
            { label: "1. Frontend UI Frameworks", query: "action_skill_front" },
            { label: "2. Backend & Schema Databases", query: "action_skill_back" },
            { label: "3. Cloud Ops & Azure Platforms", query: "action_skill_cloud" }
        ]);
        return;
    }

    // PRIORITY 2: Direct Action Callbacks (Leaf Processors)
    if (input.includes("nie_records")) {
        appendMessageLogNode("🎓 NIE Institute of Technology: Completing Bachelor of Engineering in Computer Science (2021-2025) with an aggregate benchmark score of 8.45 CGPA.", "incoming");
        return;
    }
    if (input.includes("vvs_records")) {
        appendMessageLogNode("📜 VVS Golden Jubilee PU College: Completed Pre-University validation layers, logging an aggregate score rating of 88.50%.", "incoming");
        return;
    }
    if (input.includes("proj_deaf")) {
        appendMessageLogNode("🔊 Deaf Communication Project: High-speed machine vision gesture translation structure configured to map physical movements into live text blocks.", "incoming");
        return;
    }
    if (input.includes("proj_car")) {
        appendMessageLogNode("🚗 Car Rental System: Structural transactional core designed to stop race conditions and manage concurrent rental distribution logs.", "incoming");
        return;
    }
    if (input.includes("exp_chromosis")) {
        appendMessageLogNode("🏢 Chromosis Technologies: Software Engineering Intern in Hubli. Refined responsive front-end structures and resolved multi-viewport layouts.", "incoming");
        return;
    }
    if (input.includes("exp_hpe")) {
        appendMessageLogNode("💻 HPE Solutions: Served as a Technical Solutions Specialist in Bengaluru mapping server resource monitors and cloud system alerts.", "incoming");
        return;
    }
    if (input.includes("exp_phonemax")) {
        appendMessageLogNode("📈 PhoneMax Operations: Processed audience telemetry tags and split-testing metrics to lift regional conversion ratios by 22%.", "incoming");
        return;
    }
    if (input.includes("skill_front")) {
        appendMessageLogNode("✨ Frontend Stack: Expert across HTML5, CSS3, JavaScript (ES6+), React.js layout trees, and responsive liquid wrappers.", "incoming");
        return;
    }
    if (input.includes("skill_back")) {
        appendMessageLogNode("⚙️ Backend Core: Capable across Node.js runtimes, Express endpoints, indexing relational workflows, and designing transaction locks.", "incoming");
        return;
    }
    if (input.includes("skill_cloud")) {
        appendMessageLogNode("📊 Cloud Architecture: Certified across Microsoft Azure, enterprise logging pipelines, and custom cloud model tracking arrays.", "incoming");
        return;
    }
    if (input.includes("exit") || input.includes("close")) {
        toggleChatbotState();
        return;
    }

    // FALLBACK RESTRICTION BOX (Fires only if zero intents matched above)
    if (!matchProj && !matchExp && !matchSkill && !matchEdu && !matchAch) {
        const fallbackBox = `
            <div style="background: rgba(231, 76, 60, 0.12); border: 2px dashed #e74c3c; border-radius: 8px; padding: 12px; margin: 5px 0; text-align: left; width: 100%;">
                <h5 style="color: #e74c3c; font-weight: 800; font-size: 0.95rem; margin-bottom: 4px; text-transform: uppercase;"><i class="fa-solid fa-ban"></i> oops!! Sorry</h5>
                <p style="font-size: 0.82rem; color: #f4f4f4; line-height: 1.4; margin: 0;">Boss adarsh has restricted me over other things not to talk and waste the time of me as well as yours.</p>
            </div>
        `;
        appendMessageLogNode(fallbackBox, "incoming");
    }
}

function createInteractiveDirectoryMenu(array) {
    const logs = document.getElementById("chatbot-logs");
    if (!logs) return;
    const container = document.createElement("div");
    container.className = "bot-menu-wrapper";
    array.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "bot-menu-option";
        btn.innerText = opt.label;
        btn.onclick = () => { executeChatbotQuery(opt.query); };
        container.appendChild(btn);
    });
    logs.appendChild(container);
    logs.scrollTop = logs.scrollHeight;
                }
