document.addEventListener("DOMContentLoaded", () => {
  
  /* --- 1. CONFIGURING THE MULTI-THEME ROTATOR ENGINE --- */
  const themesList = [
    { id: "theme-1", name: "Pale Teal Green" },
    { id: "theme-2", name: "Lavender Purple" },
    { id: "theme-3", name: "Sky Blue / Navy" },
    { id: "theme-4", name: "Glacier Mint" },
    { id: "theme-5", name: "Midnight Teal" },
    { id: "theme-6", name: "Cyan Ocean Blue" }
  ];

  let savedThemeId = localStorage.getItem("activePortfolioTheme") || "theme-1";
  let activeIndex = themesList.findIndex(t => t.id === savedThemeId);
  if (activeIndex === -1) activeIndex = 0;

  document.body.setAttribute("data-theme", themesList[activeIndex].id);
  const labelIndicator = document.getElementById("current-theme-name");
  if (labelIndicator) labelIndicator.textContent = themesList[activeIndex].name;

  const toggleBtn = document.getElementById("theme-toggle-btn");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      activeIndex = (activeIndex + 1) % themesList.length;
      document.body.setAttribute("data-theme", themesList[activeIndex].id);
      localStorage.setItem("activePortfolioTheme", themesList[activeIndex].id);
      if (labelIndicator) labelIndicator.textContent = themesList[activeIndex].name;
    });
  }

  /* --- 2. THE LOCAL ARCHITECTURE LIVE FILTER SEARCH ENGINE --- */
  const searchInput = document.getElementById("portfolio-search-input");
  const searchFeedback = document.getElementById("search-results-feedback");
  const searchableNodes = document.querySelectorAll(".searchable-node");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const term = e.target.value.toLowerCase().trim();
      let matchesCount = 0;

      if (term === "") {
        searchableNodes.forEach(node => node.style.display = "block");
        searchFeedback.textContent = "";
        return;
      }

      searchableNodes.forEach(node => {
        const contentText = node.textContent.toLowerCase();
        if (contentText.includes(term)) {
          node.style.display = "block";
          matchesCount++;
        } else {
          node.style.display = "none";
        }
      });

      searchFeedback.textContent = matchesCount > 0 
        ? `Showing ${matchesCount} matching sections` 
        : "No sections found matching your search.";
    });
  }

  /* --- 3. RULE-BASED VERIFIED PORTFOLIO INSIGHTS AI CHATBOT --- */
  const botToggle = document.getElementById("bot-toggle-badge");
  const botWindow = document.getElementById("bot-window-panel");
  const botClose = document.getElementById("bot-close-panel-btn");
  const botSendBtn = document.getElementById("bot-send-btn");
  const botInput = document.getElementById("bot-user-query");
  const botChatLogs = document.getElementById("bot-chat-logs");

  if (botToggle && botWindow && botClose) {
    botToggle.addEventListener("click", () => {
      botWindow.style.display = botWindow.style.display === "flex" ? "none" : "flex";
    });
    botClose.addEventListener("click", () => botWindow.style.display = "none");
  }

  // Knowledge base containing only your explicit, true portfolio details
  const portfolioKnowledge = [
    {
      keywords: ["project", "projects", "deaf", "communication", "sign language", "car rental", "database", "mysql"],
      response: "📋 <strong>Adarsh's Featured Projects:</strong><br><br><strong>1. Two-Way Communication System for Deaf People:</strong> Full-stack app utilizing React, Python (Flask/FastAPI), OpenCV, and MediaPipe to translate hand gestures to text/speech with 95% accuracy.<br><br><strong>2. Car Rental Database Management System:</strong> Relational schema database normalized to 3NF using MySQL/MongoDB and Node.js/Django backend to handle variables and eliminate double booking error configurations."
    },
    {
      keywords: ["skill", "skills", "technologies", "languages", "code", "react", "python"],
      response: "🛠️ <strong>Technical Skills Stack:</strong><br>• Frontend: React.js, Angular, JavaScript ES6+, HTML5, CSS3, Bootstrap<br>• Backend: Node.js, Express.js, Python, Flask, FastAPI, REST APIs<br>• Databases: SQL, MySQL, MongoDB<br>• Tools & Cloud: Azure AI, Power BI, Git, GitHub, OpenCV"
    },
    {
      keywords: ["experience", "job", "intern", "internship", "chromosis", "hpe", "work"],
      response: "💼 <strong>Professional Timeline Experience:</strong><br><br>• <strong>Full Stack Apprentice:</strong> Chromosis Technologies Pvt Ltd (Dec 2025 - Present). Engineering robust code bases, debugging core features, and tuning REST architectures.<br><br>• <strong>Frontend Intern:</strong> Hewlett Packard Enterprise (4 Months). Tuned cross-browser rendering models in React.js loops.<br><br>• <strong>Marketing Executive:</strong> PhoneMax (6 Months). Driven regional sales conversions upwards by 25%."
    },
    {
      keywords: ["certification", "azure", "ai", "microsoft", "ai-900"],
      response: "📜 <strong>Verified Credentials:</strong><br>Adarsh holds the official <strong>Microsoft Certified: Azure AI Fundamentals (AI-900)</strong> badge. He is trained to design cloud solutions deploying cognitive models, image classification systems, and natural language sentiment tasks over API lines safely."
    },
    {
      keywords: ["contact", "email", "phone", "call", "hire", "linkedin", "message"],
      response: "📬 <strong>Get in touch directly with Adarsh V Pujar:</strong><br>• Email: adarshvpujar143@gmail.com<br>• Phone: +91 9886103154<br>• Location: Mysore, Karnataka, India.<br>You can also drop a message using the form right at the bottom of the page!"
    },
    {
      keywords: ["education", "college", "cgpa", "grade", "mysore", "nie"],
      response: "🎓 <strong>Education & Credentials:</strong><br>Adarsh graduated with an engineering degree in Information Science and Engineering from <strong>NIE Institute of Technology, Mysore</strong>, achieving an excellent cumulative grade point score of <strong>8.3 CGPA</strong>."
    },
    {
      keywords: ["cricket", "sports", "vtu", "hobby"],
      response: "🏏 <strong>Extracurricular Highlights:</strong><br>Alongside engineering, Adarsh is an accomplished athlete, having represented his university at the <strong>State Level as a VTU Cricket Representative</strong>."
    }
  ];

  function processBotMessage() {
    const rawQuery = botInput.value.trim();
    if (rawQuery === "") return;

    // 1. Render user message
    const userBubble = document.createElement("div");
    userBubble.className = "chat-msg user-msg";
    userBubble.textContent = rawQuery;
    botChatLogs.appendChild(userBubble);
    botInput.value = "";

    // Scroll chat downward
    botChatLogs.scrollTop = botChatLogs.scrollHeight;

    // 2. Generate portfolio-guarded response
    setTimeout(() => {
      const lowerQuery = rawQuery.toLowerCase();
      let matches = portfolioKnowledge.find(entry => 
        entry.keywords.some(keyword => lowerQuery.includes(keyword))
      );

      let systemReplyText = matches 
        ? matches.response 
        : "ℹ️ I can only answer questions regarding Adarsh's skills, projects, experience, education, or contact details specified directly in his portfolio. Please ask something related to those sections!";

      const botBubble = document.createElement("div");
      botBubble.className = "chat-msg bot-msg";
      botBubble.innerHTML = systemReplyText;
      botChatLogs.appendChild(botBubble);
      
      botChatLogs.scrollTop = botChatLogs.scrollHeight;
    }, 450);
  }

  if (botSendBtn && botInput) {
    botSendBtn.addEventListener("click", processBotMessage);
    botInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") processBotMessage();
    });
  }

  /* --- 4. CONTINUOUS ROTATING HEADLINE TIMERS --- */
  const dynamicTitles = ["Full Stack Developer", "Data Analyst", "Azure AI Certified", "Software Engineer"];
  const headlineElement = document.getElementById("headline-target");
  let stringIndex = 0;

  if (headlineElement) {
    setInterval(() => {
      headlineElement.style.opacity = "0";
      setTimeout(() => {
        stringIndex = (stringIndex + 1) % dynamicTitles.length;
        headlineElement.textContent = dynamicTitles[stringIndex];
        headlineElement.style.opacity = "1";
      }, 300);
    }, 3000);
  }
});
