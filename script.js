/* SOUND EFFECT */
const uiSound = new Audio("data:audio/mp3;base64,//uQxAAAAAAAAAAAA...");
uiSound.volume = 0.3;

/* MATRIX ANIMATION */
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const chars = "01";
const fontSize = 16;
const cols = canvas.width / fontSize;
let drops = Array(Math.floor(cols)).fill(1);
function drawMatrix() {
  ctx.fillStyle = "rgba(0,0,0,0.08)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#00C6FF";
  ctx.font = fontSize + "px monospace";
  drops.forEach((y, i) => {
    const text = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(text, i * fontSize, y * fontSize);
    if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  });
}
setInterval(drawMatrix, 50);

/* BACKGROUND PARALLAX */
document.addEventListener("mousemove", (e) => {
  let x = (e.clientX / innerWidth - 0.5) * 20;
  let y = (e.clientY / innerHeight - 0.5) * 20;
  document.body.style.backgroundPosition = `${x}px ${y}px`;
});

/* PDF STRUCTURE */
/* PDF STRUCTURE */
const structure = {
  "Semester 1": {
    "C++ & Data Structures": ["pdfs/sem1/cpp/file1.pdf"],
    "Digital Logic Fundamentals": [],
    "Database Management Systems": [],
    "Accounting & Financial Management": [],
    "Operating Systems": []
  },
  "Semester 2": {
    "Design and Analysis of Algorithms": [],
    "Object Oriented Analysis and Design": [],
    "Artificial Intelligence": [],
    "Web Based Application Development": [],
    "Computer Network": []
  },
  "Semester 3": {
    "No doc...": []
  },
  "Semester 4": {
    "No doc...": []
  }
};

function playSound() { uiSound.currentTime = 0; uiSound.play(); }

function openQuestionPapers() {
  playSound();
  
  // Hide the main button with fade out effect
  const mainBtn = document.querySelector('.btn');
  mainBtn.style.opacity = '0';
  mainBtn.style.transform = 'translateY(-20px)';
  
  setTimeout(() => {
    mainBtn.style.display = 'none';
    
    // Create semester sections with subjects
    const container = document.getElementById('semester-sections');
    container.innerHTML = `
      <div class="semester-section semester1-section">
        <h2 class="section-title">Semester 1</h2>
        <div class="subject-list">
          ${Object.keys(structure['Semester 1']).map(subject => `
            <button class="subject-btn" onclick="showFiles('Semester 1', '${subject}')">
              <i class="fas fa-book"></i> ${subject}
            </button>
          `).join('')}
        </div>
      </div>
      
      <div class="semester-section semester2-section">
        <h2 class="section-title">Semester 2</h2>
        <div class="subject-list">
          ${Object.keys(structure['Semester 2']).map(subject => `
            <button class="subject-btn" onclick="showFiles('Semester 2', '${subject}')">
              <i class="fas fa-book"></i> ${subject}
            </button>
          `).join('')}
        </div>
      </div>
      
      <div class="semester-section semester3-section">
        <h2 class="section-title">Semester 3</h2>
        <div class="subject-list">
          ${Object.keys(structure['Semester 3']).map(subject => `
            <button class="subject-btn" onclick="showFiles('Semester 3', '${subject}')">
              <i class="fas fa-book"></i> ${subject}
            </button>
          `).join('')}
        </div>
      </div>
      
      <div class="semester-section semester4-section">
        <h2 class="section-title">Semester 4</h2>
        <div class="subject-list">
          ${Object.keys(structure['Semester 4']).map(subject => `
            <button class="subject-btn" onclick="showFiles('Semester 4', '${subject}')">
              <i class="fas fa-book"></i> ${subject}
            </button>
          `).join('')}
        </div>
      </div>
    `;
    
    // Add fade-in animation
    container.style.display = 'flex';
    setTimeout(() => {
      container.style.opacity = '1';
      container.style.transform = 'translateY(0)';
    }, 50);
  }, 300);
}

function showFiles(sem, sub) {
  playSound();
  const div = document.getElementById("files");
  div.style.display = "block";
  div.innerHTML = `<h2>${sub}</h2><div class="loading">Loading files...</div>`;
  
  // Clear any previous content and scroll to files section
  setTimeout(() => {
    const files = structure[sem][sub];
    if (files.length === 0) {
      div.innerHTML = `<h2>${sub}</h2><p class="no-files">No files uploaded yet.</p>`;
    } else {
      div.innerHTML = `<h2>${sub}</h2>` + 
        files.map(file => 
          `<a href='${file}' download class="pdf-link">
            <i class="fas fa-file-pdf"></i> ${file.split("/").pop()}
          </a>`
        ).join('');
    }
    
    // Smooth scroll to files section
    setTimeout(() => {
      div.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });
      
      // Add highlight animation
      div.style.animation = 'highlightFlash 2s ease';
    }, 100);
  }, 500);
}

function downloadZip() {
  playSound();
  window.location.href = "all_question_papers.zip";
  setTimeout(() => alert("Upload all_question_papers.zip to repo root"), 600);
}