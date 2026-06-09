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

  /* --- 2. WHATSAPP DROPDOWN SCANNER TOGGLE MECHANIC --- */
  const qrTriggerBtn = document.getElementById("trigger-qr-view-btn");
  const qrDropBox = document.getElementById("qr-dropdown-content-box");

  if (qrTriggerBtn && qrDropBox) {
    qrTriggerBtn.addEventListener("click", () => {
      if (qrDropBox.className === "qr-content-hidden") {
        qrDropBox.className = "qr-content-visible";
        qrTriggerBtn.textContent = "✖ Hide WhatsApp Scanner QR Code";
      } else {
        qrDropBox.className = "qr-content-hidden";
        qrTriggerBtn.textContent = "📷 View WhatsApp Scanner QR Code";
      }
    });
  }

  /* --- 3. TOP NAVBAR SEARCH AND AUTOMATIC CONTENT SCROLL SNAP FOCUS --- */
  const searchInput = document.getElementById("portfolio-search-input");
  
  if (searchInput) {
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const term = searchInput.value.toLowerCase().trim();
        if (term === "") return;

        let bestMatchNode = null;
        const targetNodes = document.querySelectorAll(".searchable-node");

        for (let node of targetNodes) {
          if (node.textContent.toLowerCase().includes(term)) {
            bestMatchNode = node;
            break; // Stop at the first logical match section
          }
        }

        if (bestMatchNode) {
          // Smoothly scroll the view window right down to the matching container element!
          const elementPosition = bestMatchNode.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - 90, // Leave padding space for sticky navigation bars
            behavior: "smooth"
          });
          
          // Flash effect to show focus
          bestMatchNode.style.outline = "2px solid var(--text-main)";
          setTimeout(() => { bestMatchNode.style.outline = "none"; }, 1500);
        }
      }
    });
  }

  /* --- 4. HIGHLY STABLE GUARDED PORTFOLIO NLP CHATBOT --- */
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

  // Strictly prioritize matches to stop cross-category fallback glitches
  const portfolioKnowledge = [
    {
      keywords: ["contact", "phone", "call", "whatsapp", "instagram", "linkedin", "number", "reach", "social"],
      response: "📬 <strong>Adarsh's Direct Application Links:</strong><br><br>• <strong>WhatsApp Direct Chat:</strong> Click the WhatsApp icon link at the page bottom to text directly at +91 9886103154.<br>• <strong>LinkedIn:</strong> Verified profile loaded into the blue LinkedIn application logo container.<br>• <strong>Instagram:</strong> Connect over app logs via the pink Instagram button slot."
    },
    {
      keywords: ["education", "college", "school", "nie", "nieit", "mysore", "cgpa", "grade", "vvs"],
      response: "🎓 <strong>Academic Records:</strong><br><br>• <strong>B.E. Information Science & Engineering:</strong> NIE Institute of Technology, Mysore. Completed with a verified <strong>8.3 CGPA</strong> rating metrics track.<br>• <strong>School Foundations:</strong> VVS Educational Institution."
    },
    {
      keywords: ["project", "projects", "deaf", "communication", "car rental", "database"],
      response: "🚀 <strong>Project Deployments:</strong><br><br>• <strong>Two-Way Deaf Communication Tool:</strong> Processes real-time gestures into text/speech output using Python, OpenCV, and MediaPipe models at 95% accuracy.<br>• <strong>Car Rental DBMS:</strong> Enterprise-grade 3NF normalized system built on MySQL/MongoDB schemas to eliminate duplicate data collisions."
    },
    {
      keywords: ["skill", "skills", "technologies", "languages", "react", "python", "sql"],
      response: "🛠️ <strong>Technical Framework Inventory:</strong><br>• Engineering: React.js, Node.js, Express.js, JavaScript, Python, FastAPI, Flask, OpenCV, SQL, MySQL, MongoDB, and Azure AI modules."
    },
    {
      keywords: ["experience", "job", "intern", "chromosis", "hpe", "work"],
      response: "💼 <strong>Professional Work Records:</strong><br><br>• <strong>Full Stack Apprentice:</strong> Chromosis Technologies (Dec 2025 - Present).<br>• <strong>Frontend Intern:</strong> Hewlett Packard Enterprise (4 Months duration loop). React optimization structures.<br>• <strong>Marketing:</strong> PhoneMax Management. Scaled sales counts by 25%."
    },
    {
      keywords: ["certification", "azure", "ai-900", "fundamentals"],
      response: "📜 <strong>Cloud Credentials:</strong><br>Adarsh holds the formal <strong>Microsoft Certified: Azure AI Fundamentals (AI-900)</strong> designation, validating skills in cloud AI systems deployment."
    },
    {
      keywords: ["cricket", "sports", "vtu"],
      response: "🏏 <strong>Athletic Honors:</strong><br>Adarsh is a decorated state-level student athlete, having represented his university as a <strong>VTU Cricket Representative</strong>."
    }
  ];

  function processBotMessage() {
    const rawQuery = botInput.value.trim();
    if (rawQuery === "") return;

    const userBubble = document.createElement("div");
    userBubble.className = "chat-msg user-msg";
    userBubble.textContent = rawQuery;
    botChatLogs.appendChild(userBubble);
    botInput.value = "";
    botChatLogs.scrollTop = botChatLogs.scrollHeight;

    setTimeout(() => {
      const lowerQuery = rawQuery.toLowerCase();
      
      // Strict matching algorithm to catch precise keyword targets first
      let matchedEntry = portfolioKnowledge.find(entry => 
        entry.keywords.some(keyword => lowerQuery.includes(keyword))
      );

      let systemReplyText = matchedEntry 
        ? matchedEntry.response 
        : "ℹ️ I can only answer questions regarding Adarsh's explicit portfolio info (Skills, Projects, Education, Experience, Certifications, or Social Contacts). Please check your phrasing!";

      const botBubble = document.createElement("div");
      botBubble.className = "chat-msg bot-msg";
      botBubble.innerHTML = systemReplyText;
      botChatLogs.appendChild(botBubble);
      botChatLogs.scrollTop = botChatLogs.scrollHeight;
    }, 400);
  }

  if (botSendBtn && botInput) {
    botSendBtn.addEventListener("click", processBotMessage);
    botInput.addEventListener("keypress", (e) => { if (e.key === "Enter") processBotMessage(); });
  }

  /* --- 5. CONTINUOUS ROTATING HEADLINE TIMERS --- */
  const dynamicTitles = ["Full Stack Developer", "Data Analyst", "Azure AI Certified", "Software Engineer"];
  const headlineElement = document.getElementById("headline-target");
  let titleIndex = 0;

  if (headlineElement) {
    setInterval(() => {
      headlineElement.style.opacity = "0";
      setTimeout(() => {
        titleIndex = (titleIndex + 1) % dynamicTitles.length;
        headlineElement.textContent = dynamicTitles[titleIndex];
        headlineElement.style.opacity = "1";
      }, 300);
    }, 3000);
  }
});
