// Preloader Timeout Handling
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.visibility = 'hidden', 500);
    }, 800);
});

// Light/Dark Theme Switching System
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    
    const btn = document.querySelector('.theme-toggle-btn');
    if (newTheme === 'light') {
        btn.innerHTML = '<i class="fas fa-sun"></i> Theme';
    } else {
        btn.innerHTML = '<i class="fas fa-moon"></i> Theme';
    }
}

// Deep Project Slide-In Dictionary Data Mapping
const projectData = {
    'deaf-comm': {
        title: "Two-Way Communication System for Deaf People",
        desc: "Designed and built a full-stack real-time communication platform using a React.js frontend and Python (Flask/FastAPI) backend, enabling seamless interaction between deaf and hearing users.",
        tech: "React.js, Python, Flask/FastAPI, OpenCV, MediaPipe, MongoDB, Firebase, gTTS, SpeechRecognition, Git",
        outcomes: "Integrated a computer vision pipeline achieving over 95% recognition accuracy for sign language gestures, successfully implementing real-time text-to-speech and speech-to-text bidirectional flows.",
        learnt: "Mastered working with media streaming pipelines, localized model prediction latency management inside user interfaces, asynchronous state coordination rules, and non-relational backend structures."
    },
    'car-rental': {
        title: "Car Rental Management System",
        desc: "Built a robust full-stack vehicle rental platform enabling users to browse vehicles, book rentals, view rental history, and manage end-to-end transaction records efficiently.",
        tech: "React.js, Node.js, Express.js, MongoDB/MySQL, JWT, bcrypt, Postman, Git",
        outcomes: "Designed an admin panel for tracking inventory, dynamic pricing logic, and secure user sessions, eliminating manual scheduling operational overheads.",
        learnt: "Deepened engineering knowledge surrounding authentication workflows (JWT, bcrypt hashing), schema data integrity normalization, RESTful router configurations, and API payload testing."
    }
};

// Opening and Closing the Project Panel with Slide Effect
function openProject(key) {
    const data = projectData[key];
    const content = `
        <h2>${data.title}</h2>
        <div class="panel-section">
            <h4>Description</h4>
            <p>${data.desc}</p>
        </div>
        <div class="panel-section">
            <h4>Technologies Used</h4>
            <p>${data.tech}</p>
        </div>
        <div class="panel-section">
            <h4>Outcomes</h4>
            <p>${data.outcomes}</p>
        </div>
        <div class="panel-section">
            <h4>What I Learnt</h4>
            <p>${data.learnt}</p>
        </div>
    `;
    document.getElementById('panel-content').innerHTML = content;
    document.getElementById('slide-panel').classList.add('active');
    document.getElementById('panel-overlay').classList.add('active');
}

function closeProject() {
    document.getElementById('slide-panel').classList.remove('active');
    document.getElementById('panel-overlay').classList.remove('active');
}

// Chatbot UI Toggle Visibility
function toggleChat() {
    document.getElementById('chat-window').classList.toggle('active');
}

function handleChatKey(e) {
    if (e.key === 'Enter') sendChatMessage();
}

// Portfolio-Constrained Profile AI Chat Engine
function sendChatMessage() {
    const input = document.getElementById('chat-input');
    const text = input.value.trim().toLowerCase();
    if (!text) return;

    appendMessage(input.value, 'user');
    input.value = '';

    setTimeout(() => {
        let reply = "I can only answer questions related specifically to Adarsh's portfolio sections (Skills, Experience, Education, Projects, Certifications, Contact). Please ask about these!";
        
        if (text.includes('skill') || text.includes('language') || text.includes('tech')) {
            reply = "Adarsh is proficient across the technical stack. Frontend: React.js, Angular, HTML5, CSS3, JS. Backend: Node.js, Express.js, PHP, Flask. Languages: Python, SQL, Java, C. Databases: MySQL, MongoDB, Firebase.";
        } else if (text.includes('project')) {
            reply = "He features two primary projects: 1. A Two-Way Communication System for Deaf People combining React and Python computer vision pipelines. 2. A transactional Car Rental Management System built with React, Node.js, and Express.";
        } else if (text.includes('experience') || text.includes('work') || text.includes('job')) {
            reply = "Adarsh's work history includes: 1. Full Stack Developer Apprentice at Chromosis Technologies (Dec 2025 - Present). 2. Frontend Developer Intern at Hewlett Packard Enterprise (4 months). 3. Digital Marketing Executive at PhoneMax (6 months).";
        } else if (text.includes('education') || text.includes('college') || text.includes('degree')) {
            reply = "Adarsh graduated with a Bachelor of Engineering in Information Science and Engineering from NIE Institute of Technology, maintaining a CGPA of 8.3/10.";
        } else if (text.includes('certif')) {
            reply = "Adarsh holds professional credentials including Microsoft Azure AI Engineer Associate and Microsoft Certified: Azure AI Fundamentals (AI-900).";
        } else if (text.includes('contact') || text.includes('email') || text.includes('phone')) {
            reply = "You can contact Adarsh directly via phone at +91 9886103154 or drop an email to adarshvpujar143@gmail.com.";
        } else if (text.includes('hi') || text.includes('hello') || text.includes('hey')) {
            reply = "Hello! I'm here to answer questions regarding Adarsh's skills, qualifications, or professional experience. What section would you like to explore?";
        }

        appendMessage(reply, 'bot');
    }, 600);
}

function appendMessage(text, sender) {
    const container = document.getElementById('chat-messages');
    const msgEl = document.createElement('div');
    msgEl.className = `msg ${sender}`;
    msgEl.innerText = text;
    container.appendChild(msgEl);
    container.scrollTop = container.scrollHeight;
}
