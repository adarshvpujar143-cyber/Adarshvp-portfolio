// --- 1. Preloader Synchronization Matrix ---
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('loader-screen').classList.add('hidden-node');
        document.getElementById('app-content').classList.remove('hidden-node');
        runHeroTextRoller();
    }, 1000); 
});

// --- 2. Synchronous Hero Headline Text Rolling Engine ---
function runHeroTextRoller() {
    const nodes = document.querySelectorAll('.roll-node');
    let pointer = 0;

    setInterval(() => {
        let currentNode = nodes[pointer];
        let nextPointer = (pointer + 1) % nodes.length;
        let nextNode = nodes[nextPointer];

        currentNode.classList.remove('active');
        currentNode.classList.add('exit');
        nextNode.classList.add('active');

        setTimeout(() => {
            currentNode.classList.remove('exit');
        }, 500);

        pointer = nextPointer;
    }, 3000);
}

// --- 3. Dynamic Structured Repository Content Engine ---
const portfolioDataset = {
    chromosis: {
        title: "Chromosis - Professional Product Architecture Memories",
        images: ["Chromosis.jpg", "Chromosis1.jpg", "Chromosis2.jpg", "Chromosis3.jpg", "Chromosis4.jpg", "Chromosis5.jpg", "Chromosis6.jpg", "Chromosis7.jpg", "Chromosis8.jpg"],
        paragraph: "During my engineering role at Chromosis, I sat at the center of frontend system components construction and asset layout creation. These files capture product visualization workshops, agile coordination sequences, and real-time design implementations. The experience reinforced my knowledge in building clean interface architectures that remain deeply performant under highly distributed client environments."
    },
    hpe: {
        title: "Hewlett Packard Enterprise - Corporate Solutions Architecture",
        images: ["HPE.jpg", "HPE1.jpg", "HPE2.jpg", "HPE3.jpg", "HPE4.jpg", "HPE5.jpg", "HPE6.jpg", "HPE7.jpg", "HPE8.jpg", "HPE9.jpg", "HPE10.jpg", "HPE11.jpg", "HPE12.jpg", "HPE13.jpg", "HPE14.jpg", "HPE15.jpg", "HPE16.jpg", "HPE17.jpg", "HPE18.jpg", "HPE19.jpg"],
        paragraph: "My operational deployment inside Hewlett Packard Enterprise specialized in system validation loops and processing logic frameworks. This detailed archive showcases system metrics tracing, internal tool design reviews, and engineering deployment parameters. Working at this scale trained me to prioritize runtime speed, structural database normalization, and fault-tolerant computing routines."
    },
    nieit: {
        title: "NIEIT - Engineering Formations & Campus Memories",
        images: ["nieit.jpg", "nieit1.jpg", "nieit2.jpg", "nieit3.jpg", "nieit4.jpg", "nieit5.jpg", "nieit6.jpg", "nieit7.jpg", "nieit8.jpg", "nieit9.jpg", "nieit10.jpg", "nieit11.jpg", "nieit12.jpg", "nieit13.jpg", "nieit14.jpg", "nieit15.jpg", "nieit16.jpg", "nieit17.jpg"],
        paragraph: "My academic development at NIEIT provided the rigorous baseline required to master modern full-stack development and complex database analysis. These snapshots document technical laboratory marathons, system design presentation blueprints, and code optimization sprints alongside faculty advisors. This environment cemented my technical versatility and analytical problem-solving skills."
    },
    'deaf-comm': {
        title: "Two Way Communication Systems for Deaf People",
        tech: "Python, Signal Processing Libraries, Custom Event Driven WebSockets, Modern Adaptive UI Matrix",
        outcomes: "Engineered high-speed real-time language translations, sustaining latency patterns under 160ms with a validated operational success metrics curve.",
        learning: "Gained specialized insight into human-computer interaction paradigms, accessibility-first component lifecycles, and low-latency thread allocation."
    },
    'car-rental': {
        title: "Car Rental Management Systems Infrastructure",
        tech: "Node.js Platform, Express Engine, Relational Storage Matrices, Advanced Token Validations",
        outcomes: "Constructed a secure multi-user vehicle management platform that optimized asset indexing and reduced concurrency reservation collision metrics to zero.",
        learning: "Deepened engineering knowledge across relational database normalization constraints, route security strategies, and transactional operations."
    }
};

// --- 4. Sub-Page Modals Router Mechanisms ---
let activeAutoplayTimer = null;

function openGallery(key) {
    const data = portfolioDataset[key];
    if (!data) return;

    let destination = document.getElementById('modal-injection-point');
    
    let viewHTML = data.images.map((img, i) => `
        <img src="${img}" class="picture-node ${i === 0 ? 'active-img' : ''}" data-index="${i}" alt="Slideshow Image">
    `).join('');

    let indicatorHTML = data.images.map((img, i) => `
        <img src="${img}" class="thumb-node ${i === 0 ? 'active-thumb' : ''}" data-index="${i}" onclick="setSlideInstance(${i})" alt="Thumb Link">
    `).join('');

    destination.innerHTML = `
        <div class="gallery-root">
            <h2 style="margin-bottom:14px; font-weight:800;">${data.title}</h2>
            <div class="slideshow-box">
                ${viewHTML}
                <div class="slideshow-nav-row">
                    <button class="nav-btn" onclick="offsetSlideInstance(-1)"><i class="fa-solid fa-arrow-left"></i></button>
                    <button class="nav-btn" onclick="offsetSlideInstance(1)"><i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
            <div class="thumbs-row-container">${indicatorHTML}</div>
            <p class="modal-narrative-p">${data.paragraph}</p>
        </div>
    `;

    document.getElementById('universal-modal').classList.add('active-state');
    beginSlideshowLoop();
}

function openProject(key) {
    const project = portfolioDataset[key];
    let destination = document.getElementById('modal-injection-point');
    
    destination.innerHTML = `
        <div class="case-study-root">
            <h2 style="margin-bottom:12px;"><i class="fa-solid fa-cubes"></i> ${project.title}</h2>
            <p style="color:#447F98; font-weight:700; margin-bottom:16px;">System Tech Stack: ${project.tech}</p>
            <hr style="border:1px solid #B9D8E1; margin-bottom:16px;">
            <h4 style="margin-bottom:6px;">Performance Outcomes & Benchmarks</h4>
            <p style="margin-bottom:16px; opacity:0.9;">${project.outcomes}</p>
            <h4 style="margin-bottom:6px;">Engineering Adaptation Learnings</h4>
            <p style="opacity:0.9; line-height:1.65;">${project.learning}</p>
        </div>
    `;
    document.getElementById('universal-modal').classList.add('active-state');
}

function openAchievementDeepDive() {
    let destination = document.getElementById('modal-injection-point');
    destination.innerHTML = `
        <div class="achievement-modal-wrapper">
            <span class="gold-badge-node">EXECUTIVE PERFORMANCE LOG</span>
            <h2 style="margin:10px 0;">VTU Athletics Leadership Matrix</h2>
            <div style="display:flex; gap:12px; margin:20px 0;">
                <img src="nieit15.jpg" style="width:50%; height:220px; object-fit:cover; border-radius:10px;" alt="Athletics Match">
                <img src="nieit16.jpg" style="width:50%; height:220px; object-fit:cover; border-radius:10px;" alt="Team Captaincy">
            </div>
            <p style="line-height:1.65; color:#17364F;">
                <strong>The High-Pressure Scenario:</strong> Stood up during an intense crunch stage in the must-win VTU State Semi-Final match against <em>VidyaVikas Institute of Technology</em>, delivering an undefeated, quick-fire match winning performance of <strong>71* off 35 balls</strong> to lift the team to the finals.
                <br><br>
                <strong>The Engineering Parallel:</strong> This milestone translates directly to business delivery capabilities: remaining entirely calm under intense delivery deadlines, making split second critical decisions when production frameworks stall, and managing cross functional developer lines under corporate pressure.
            </p>
        </div>
    `;
    document.getElementById('universal-modal').classList.add('active-state');
}

function openCertificationDocument() {
    let destination = document.getElementById('modal-injection-point');
    destination.innerHTML = `
        <div style="text-align:center;">
            <h2 style="margin-bottom:14px;">Microsoft Verification Framework</h2>
            <img src="AI Azure.jpg" style="max-width:100%; max-height:380px; border-radius:10px; box-shadow:0 6px 20px rgba(0,0,0,0.1);" alt="Microsoft Azure AI Certificate Document">
            <p style="margin-top:16px; text-align:left; padding:14px; background:rgba(0,0,0,0.02); border-radius:6px; font-size:0.92rem;">
                Confirms official professional validation in core architectural design variables across cloud intelligence operations, predictive analytics matrices, automated natural language generation paths, and machine learning pipeline structures on Azure infrastructure.
            </p>
        </div>
    `;
    document.getElementById('universal-modal').classList.add('active-state');
}

function openSingleDocument(src) {
    let destination = document.getElementById('modal-injection-point');
    destination.innerHTML = `<img src="${src}" style="width:100%; border-radius:10px;" alt="Document Workspace">`;
    document.getElementById('universal-modal').classList.add('active-state');
}

function closeActiveModalWindow() {
    document.getElementById('universal-modal').classList.remove('active-state');
    clearInterval(activeAutoplayTimer);
}

// --- 5. Internal Slideshow Management Logic ---
function setSlideInstance(idx) {
    const images = document.querySelectorAll('.picture-node');
    const thumbs = document.querySelectorAll('.thumb-node');
    if (!images.length) return;

    images.forEach(img => img.classList.remove('active-img'));
    thumbs.forEach(t => t.classList.remove('active-thumb'));

    images[idx].classList.add('active-img');
    thumbs[idx].classList.add('active-thumb');
}

function offsetSlideInstance(direction) {
    const images = document.querySelectorAll('.picture-node');
    if (!images.length) return;
    let currentActiveIdx = Array.from(images).findIndex(img => img.classList.contains('active-img'));
    let netIdx = (currentActiveIdx + direction + images.length) % images.length;
    setSlideInstance(netIdx);
}

function beginSlideshowLoop() {
    activeAutoplayTimer = setInterval(() => { offsetSlideInstance(1); }, 3500);
}

// --- 6. Intelligent Virtual Chatbot Engine Mechanics ---
function toggleChatbotState() {
    document.getElementById('chatbot-frame').classList.toggle('active-chat');
}

function handleChatbotKeyPress(event) {
    if (event.key === 'Enter') executeChatbotQuery();
}

function executeChatbotQuery() {
    const consoleInput = document.getElementById('chatbot-input-field');
    const logsWindow = document.getElementById('chatbot-logs');
    const userPrompt = consoleInput.value.trim();
    if (!userPrompt) return;

    // Log user turn
    logsWindow.innerHTML += `<div class="bot-bubble outgoing">${userPrompt}</div>`;
    consoleInput.value = '';
    logsWindow.scrollTop = logsWindow.scrollHeight;

    // Match intent against professional metadata
    setTimeout(() => {
        let inputNormal = userPrompt.toLowerCase();
        let resolution = "Query processed. For continuous collaboration parameters, establish a direct bridge using the email icon grid located in the footer pipeline.";

        if (inputNormal.includes('cricket') || inputNormal.includes('leadership') || inputNormal.includes('pressure') || inputNormal.includes('71')) {
            resolution = "Adarsh performed under extreme crunch parameters in the VTU State Level Semi-Final against VidyaVikas, scoring 71* off 35 balls. This track record matches corporate leadership needs: handling high-pressure project deadlines and driving projects to successful completion.";
        } else if (inputNormal.includes('project') || inputNormal.includes('deaf') || inputNormal.includes('car')) {
            resolution = "Adarsh developed dual cornerstone solutions: an accessibility-focused Two-Way Communication translation pipeline for deaf individuals, and a distributed enterprise Car Rental Asset Optimization Matrix platform.";
        } else if (inputNormal.includes('hpe') || inputNormal.includes('chromosis') || inputNormal.includes('work')) {
            resolution = "Adarsh's industry experience spans both Chromosis (User Interface engineering, interactive prototypes, fluid components) and Hewlett Packard Enterprise (System validation validation and optimization pipelines).";
        } else if (inputNormal.includes('azure') || inputNormal.includes('cloud') || inputNormal.includes('certification')) {
            resolution = "Adarsh is a certified Microsoft Azure AI Fundamentals engineer, holding proven validation in deploying cloud-native automation setups and machine learning model workflows.";
        } else if (inputNormal.includes('school') || inputNormal.includes('education') || inputNormal.includes('nieit')) {
            resolution = "Adarsh completed his Bachelor of Engineering at NIEIT, his PUC foundation tracking at VVS Golden Jubilee PU College, and his SSLC training phase inside VVS Pandit Nehru High School.";
        }

        logsWindow.innerHTML += `<div class="bot-bubble incoming">${resolution}</div>`;
        logsWindow.scrollTop = logsWindow.scrollHeight;
    }, 550);
}
