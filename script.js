// --- 1. System Initial Loading Engine ---
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('loader-screen').classList.add('hidden-node');
        document.getElementById('app-content').classList.remove('hidden-node');
        runTextRollingPipeline();
    }, 1000);
});

// --- 2. Live Dynamic 7-Palette Switching Engine Matrix ---
let currentPaletteIndex = 0;
const totalPalettesCount = 7;

function cyclePortfolioPalette() {
    // Drop existing palette track from root node
    document.body.classList.remove(`palette-${currentPaletteIndex}`);
    
    // Cycle array pointer index cleanly
    currentPaletteIndex = (currentPaletteIndex + 1) % totalPalettesCount;
    
    // Inject brand new palette rule token matrix
    document.body.classList.add(`palette-${currentPaletteIndex}`);
}

// Set up first class configuration at script runtime execution stage
document.body.classList.add('palette-0');

// --- 3. Synchronized Headline Rolling Text Routine ---
function runTextRollingPipeline() {
    const nodes = document.querySelectorAll('.roll-node');
    if (!nodes.length) return;
    let index = 0;

    setInterval(() => {
        let activeNode = nodes[index];
        let nextIndex = (index + 1) % nodes.length;
        let nextNode = nodes[nextIndex];

        activeNode.classList.remove('active');
        activeNode.classList.add('exit');
        nextNode.classList.add('active');

        setTimeout(() => {
            activeNode.classList.remove('exit');
        }, 500);

        index = nextIndex;
    }, 3000);
}

// --- 4. Sub-Page Structural Content Portfolio Datastores ---
const structuralMediaRegistry = {
    chromosis: {
        title: "Chromosis Technologies Pvt Ltd — Image SlideShow",
        images: ["Chromosis.jpg", "Chromosis1.jpg", "Chromosis2.jpg", "Chromosis3.jpg", "Chromosis4.jpg", "Chromosis5.jpg", "Chromosis6.jpg", "Chromosis7.jpg", "Chromosis8.jpg"],
        paragraph: "Captured workshops and dynamic engineering components tracking modules at Chromosis Technologies Pvt Ltd. The imagery maps layout engineering reviews, prototype reviews, and clean interface integration workflows completed inside the Hubli core team engine."
    },
    hpe: {
        title: "Hewlett Packard Enterprise (HPE) — Image SlideShow",
        images: ["HPE.jpg", "HPE1.jpg", "HPE2.jpg", "HPE3.jpg", "HPE4.jpg", "HPE5.jpg", "HPE6.jpg", "HPE7.jpg", "HPE8.jpg", "HPE9.jpg", "HPE10.jpg", "HPE11.jpg", "HPE12.jpg", "HPE13.jpg", "HPE14.jpg", "HPE15.jpg", "HPE16.jpg", "HPE17.jpg", "HPE18.jpg", "HPE19.jpg"],
        paragraph: "Technical execution files logging automated logic validations and performance dashboard engineering reviews during my frontend internship role at HPE Bengaluru. Focus areas depict telemetry logs tracing and data visualization matrices."
    },
    phonemax: {
        title: "PhoneMax Corporation — Image SlideShow",
        images: ["profile4.jpg", "profile5.jpg"], // Secondary placeholder set pointing to uploaded repository structures
        paragraph: "Strategic execution workflows documenting click optimization routines and analytics logging completed during my 6-month marketing tenure in Mysore. Images depict target data conversion sets."
    },
    nieit: {
        title: "NIEIT College Campus Graduation Memories",
        images: ["nieit.jpg", "nieit1.jpg", "nieit2.jpg", "nieit3.jpg", "nieit4.jpg", "nieit5.jpg", "nieit6.jpg", "nieit7.jpg", "nieit8.jpg", "nieit9.jpg", "nieit10.jpg", "nieit11.jpg", "nieit12.jpg", "nieit13.jpg", "nieit14.jpg", "nieit15.jpg", "nieit16.jpg", "nieit17.jpg"],
        paragraph: "Academic tracking history from NIEIT (2021-2025). Highlighting algorithm implementation workshops, software presentation trials, and collaborative developer laboratories."
    },
    'deaf-comm': {
        title: "Two Way Communication Systems for Deaf People",
        description: "An assistive translation pipeline developed to bridge the communication gap for deaf individuals by converting digital gestures into processed text outputs and vice versa, targeting immediate system synchronization.",
        tech: ["Python Computing Engine", "Signal Frequency Processing Libraries", "Event-Driven WebSockets Layer", "Responsive User Core Matrix"],
        outcomes: "Sustained algorithmic translation latencies well under 165ms, verifying robust communication parsing across active evaluations.",
        learning: "Mastered specialized aspects of accessible user path workflows, event-driven socket handling, and low-latency thread assignment loops."
    },
    'car-rental': {
        title: "Car Rental Management Systems Architecture",
        description: "An automated web management application tailored to optimize enterprise car fleet rentals, concurrent vehicle logging loops, and multi-tier user verification gates.",
        tech: ["Node.js Platform Runtime", "Express Routing Engine", "Relational Storage Matrices (SQL)", "Token Access Security Controls"],
        outcomes: "Eliminated simultaneous transaction booking collisions completely, optimizing administrative asset generation metrics.",
        learning: "Advanced my understanding of database normalizations, route execution safeguards, and structured transaction exception workflows."
    }
};

// --- 5. Integrated Sub-Page Modal Router Mechanics ---
let activeSlideLoopId = null;

function openGallery(key) {
    const targetNode = structuralMediaRegistry[key];
    if (!targetNode) return;

    let targetContainer = document.getElementById('modal-injection-point');
    
    let trackHTML = targetNode.images.map((img, index) => `
        <img src="${img}" class="picture-node ${index === 0 ? 'active-img' : ''}" data-index="${index}" alt="Slide Matrix Image">
    `).join('');

    let thumbHTML = targetNode.images.map((img, index) => `
        <img src="${img}" class="thumb-node ${index === 0 ? 'active-thumb' : ''}" data-index="${index}" onclick="setTargetSlideIndex(${index})" alt="Mini Thumb Link">
    `).join('');

    targetContainer.innerHTML = `
        <div>
            <h3 style="margin-bottom:12px; font-weight:800; font-size:1.3rem;">${targetNode.title}</h3>
            <div class="slideshow-box">${trackHTML}
                <div class="slideshow-nav-row">
                    <button class="nav-btn" onclick="shiftActiveSlideInstance(-1)"><i class="fa-solid fa-chevron-left"></i></button>
                    <button class="nav-btn" onclick="shiftActiveSlideInstance(1)"><i class="fa-solid fa-chevron-right"></i></button>
                </div>
            </div>
            <div class="thumbs-row-container">${thumbHTML}</div>
            <p class="modal-narrative-p">${targetNode.paragraph}</p>
        </div>
    `;

    document.getElementById('universal-modal').classList.add('active-state');
    startSlideAutomationTrack();
}

function openProject(key) {
    const data = structuralMediaRegistry[key];
    let targetContainer = document.getElementById('modal-injection-point');
    
    let badgeHTML = data.tech.map(t => `<span class="skill-pill" style="margin-right:6px; display:inline-block; margin-bottom:6px;">${t}</span>`).join('');

    targetContainer.innerHTML = `
        <div class="case-study-modal-body">
            <h3 style="font-size:1.4rem; font-weight:800; margin-bottom:10px;">${data.title}</h3>
            
            <div class="ordered-sub-section">
                <h4><i class="fa-solid fa-file-align"></i> Description</h4>
                <p>${data.description}</p>
            </div>
            
            <div class="ordered-sub-section" style="margin:14px 0;">
                <h4><i class="fa-solid fa-gears"></i> Technologies Used</h4>
                <div style="margin-top:6px;">${badgeHTML}</div>
            </div>
            
            <div class="ordered-sub-section">
                <h4><i class="fa-solid fa-chart-line"></i> Outcomes</h4>
                <p>${data.outcomes}</p>
            </div>
            
            <div class="ordered-sub-section" style="margin-top:14px;">
                <h4><i class="fa-solid fa-brain"></i> What I Learnt</h4>
                <p>${data.learning}</p>
            </div>
        </div>
    `;
    document.getElementById('universal-modal').classList.add('active-state');
}

function openStructuredAchievement() {
    let targetContainer = document.getElementById('modal-injection-point');
    targetContainer.innerHTML = `
        <div>
            <span class="gold-badge-node">CRITICAL CASE EVALUATION</span>
            <h3 style="font-size:1.4rem; font-weight:800; margin:8px 0;">VTU Championship Leadership Mapping</h3>
            <div style="display:flex; gap:10px; margin:16px 0;">
                <img src="nieit15.jpg" style="width:50%; height:190px; object-fit:cover; border-radius:8px;" alt="Championship Match Asset">
                <img src="nieit16.jpg" style="width:50%; height:190px; object-fit:cover; border-radius:8px;" alt="Championship Lineup Asset">
            </div>
            <p class="modal-narrative-p">
                <strong>High-Pressure Scenario:</strong> Stood up during an intense crunch stage in the must-win VTU State Semi-Final match against <em>VidyaVikas Institute of Technology</em>, delivering an undefeated, quick-fire match-winning performance of <strong>71* off 35 balls</strong> to lift the team to the finals.
                <br><br>
                <strong>The Engineering Parallel:</strong> This milestone translates directly to business delivery capabilities: remaining entirely calm under intense delivery deadlines, making split-second critical decisions when production frameworks stall, and managing cross-functional developer lines under corporate pressure.
            </p>
        </div>
    `;
    document.getElementById('universal-modal').classList.add('active-state');
}

function openCertificationDocument() {
    let targetContainer = document.getElementById('modal-injection-point');
    targetContainer.innerHTML = `
        <div style="text-align:center;">
            <h3 style="margin-bottom:12px; font-weight:800;">Microsoft Technical Verification Card</h3>
            <img src="AI Azure.jpg" style="max-width:100%; max-height:320px; border-radius:8px; box-shadow:0 4px 12px rgba(0,0,0,0.15);" alt="Microsoft Azure Certificate File">
            <p class="modal-narrative-p" style="text-align:left; margin-top:16px;">
                <strong>Course Breakdown:</strong> Validates official engineering competencies required to build cognitive data loops, select machine learning pipelines, configure neural layers, and design automated cloud orchestration environments on modern Azure server frameworks.
            </p>
        </div>
    `;
    document.getElementById('universal-modal').classList.add('active-state');
}

function openSingleDocument(src) {
    let targetContainer = document.getElementById('modal-injection-point');
    targetContainer.innerHTML = `<img src="${src}" style="width:100%; border-radius:8px; box-shadow:0 4px 12px rgba(0,0,0,0.15);" alt="Document Preview Layer">`;
    document.getElementById('universal-modal').classList.add('active-state');
}

function closeActiveModalWindow() {
    document.getElementById('universal-modal').classList.remove('active-state');
    clearInterval(activeSlideLoopId);
}

// --- 6. Slideshow Interactivity Sub-routines ---
function setTargetSlideIndex(idx) {
    const images = document.querySelectorAll('.picture-node');
    const thumbs = document.querySelectorAll('.thumb-node');
    if (!images.length) return;

    images.forEach(img => img.classList.remove('active-img'));
    thumbs.forEach(t => t.classList.remove('active-thumb'));

    images[idx].classList.add('active-img');
    thumbs[idx].classList.add('active-thumb');
}

function shiftActiveSlideInstance(direction) {
    const images = document.querySelectorAll('.picture-node');
    if (!images.length) return;
    let activePointer = Array.from(images).findIndex(img => img.classList.contains('active-img'));
    let calculatedTarget = (activePointer + direction + images.length) % images.length;
    setTargetSlideIndex(calculatedTarget);
}

function startSlideAutomationTrack() {
    activeSlideLoopId = setInterval(() => { shiftActiveSlideInstance(1); }, 3000);
}

// --- 7. Virtual Chatbot Logic Matrix ---
function toggleChatbotState() {
    document.getElementById('chatbot-frame').classList.toggle('active-chat');
}

function handleChatbotKeyPress(event) {
    if (event.key === 'Enter') executeChatbotQuery();
}

function executeChatbotQuery() {
    const textInputNode = document.getElementById('chatbot-input-field');
    const logsWindowNode = document.getElementById('chatbot-logs');
    const queryStr = textInputNode.value.trim();
    if (!queryStr) return;

    logsWindowNode.innerHTML += `<div class="bot-bubble outgoing">${queryStr}</div>`;
    textInputNode.value = '';
    logsWindowNode.scrollTop = logsWindowNode.scrollHeight;

    setTimeout(() => {
        let matchingKey = queryStr.toLowerCase();
        let promptResponse = "Request logged. To connect directly, choose one of the communications routing options located within the footer element.";

        if (matchingKey.includes('cricket') || matchingKey.includes('leadership') || matchingKey.includes('71') || matchingKey.includes('pressure')) {
            promptResponse = "Adarsh demonstrated high-pressure team leadership by hitting 71* off 35 deliveries in a crucial, must-win VTU tournament match against VidyaVikas IT.";
        } else if (matchingKey.includes('chromosis') || matchingKey.includes('hpe') || matchingKey.includes('phonemax') || matchingKey.includes('experience')) {
            promptResponse = "Adarsh's structural corporate background encompasses roles at Chromosis Technologies Pvt Ltd (Full Stack), HPE (Frontend Intern), and PhoneMax (Digital Marketing Executive).";
        } else if (matchingKey.includes('project') || matchingKey.includes('deaf') || matchingKey.includes('car')) {
            promptResponse = "Adarsh engineered an accessibility-focused Two-Way Communication translation pipeline for deaf users and built a highly performant, distributed Car Rental Asset Tracking Optimization engine.";
        } else if (matchingKey.includes('azure') || matchingKey.includes('certification') || matchingKey.includes('cloud')) {
            promptResponse = "Adarsh is formally certified in Microsoft Azure AI Fundamentals, validating his skills in cognitive cloud infrastructure management.";
        } else if (matchingKey.includes('education') || matchingKey.includes('nieit') || matchingKey.includes('college')) {
            promptResponse = "Adarsh completed his Bachelor of Engineering at NIEIT with a 8.13 CGPA, his PUC at VVS Golden Jubilee College (86.4%), and his SSLC tracking at VVS Pandit Nehru High School (87.2%).";
        }

        logsWindowNode.innerHTML += `<div class="bot-bubble incoming">${promptResponse}</div>`;
        logsWindowNode.scrollTop = logsWindowNode.scrollHeight;
    }, 450);
}
