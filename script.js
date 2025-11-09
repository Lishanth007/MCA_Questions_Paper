// SOUND EFFECT
const uiSound = new Audio("data:audio/mp3;base64,//uQxAAAAAAAAAAAA...");
uiSound.volume = 0.3;

// MATRIX ANIMATION
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

// BACKGROUND PARALLAX
document.addEventListener("mousemove", (e) => {
  let x = (e.clientX / innerWidth - 0.5) * 20;
  let y = (e.clientY / innerHeight - 0.5) * 20;
  document.body.style.backgroundPosition = `${x}px ${y}px`;
});

// SUBJECT → GOOGLE DRIVE STRUCTURE
const structure = {
  "Semester 1": {
    "C++ & Data Structures": "https://drive.google.com/drive/folders/1_qw_JPM3hUUDiOBbSDQ-4YBPke0e3G3D?usp=sharing",
    "Digital Logic Fundamentals": "https://drive.google.com/drive/folders/1YmKBsboUgsEk2wfn0vZEDbwiKwODaamA?usp=sharing",
    "Database Management Systems": "https://drive.google.com/drive/folders/1kizUECT-xujBDOpuU7BrH6wzISOj3kY2?usp=sharing",
    "Accounting & Financial Management": "https://drive.google.com/drive/folders/1UmfwotFdMGhj57d41EoRSvdlU6BRkSMd?usp=sharing",
    "Operating Systems": "https://drive.google.com/drive/folders/1QJ3s0p1uOqrgEQTAqek6IvJbBGABIl6u?usp=sharing"
  },
  "Semester 2": {
    "Design and Analysis of Algorithms": "https://drive.google.com/drive/folders/196GWoj0NY82W0StdjbSGVHICVfN_tzZK?usp=sharing",
    "Object Oriented Analysis and Design": "https://drive.google.com/drive/folders/1J46QcyNAMKXgzlHjHuR4TijUGJKkmKT5?usp=sharing",
    "Artificial Intelligence": "https://drive.google.com/drive/folders/1iz_l4miXs9tjOZYsyJiXpBoplivutfeF?usp=sharing",
    "Web Based Application Development": "https://drive.google.com/drive/folders/18bvMPRseR8p9f_PfHlxMijMKgHSetSjo?usp=sharing",
    "Computer Network": "https://drive.google.com/drive/folders/1d-t3QMYj4nRL8iTw3l3oGx596NrCIt0I?usp=sharing"
  },
  "Semester 3": {
    "Machine Learning": "",
    "Software Engineering": "",
    "Cloud Computing": "",
    "Mobile Application Development": "",
    "Cyber Security": ""
  },
  "Semester 4": {
    "Big Data Analytics": "",
    "Internet of Things": "",
    "Blockchain Technology": "",
    "Project Management": "",
    "Elective Subjects": ""
  }
};

// Simple sound
function playSound() { uiSound.currentTime = 0; uiSound.play(); }

// Subject button click → open Drive or alert
function openDriveLink(sem, sub) {
  playSound();
  const driveLink = structure[sem][sub];
  if (driveLink && driveLink.trim() !== "") {
    window.open(driveLink, '_blank');
  } else {
    alert(`No Google Drive link available for ${sub} yet.\n\nPlease check back later or contact the administrator.`);
  }
}

// Renders the semester/subject buttons dynamically
function openQuestionPapers() {
  playSound();
  const mainBtn = document.querySelector('.btn');
  mainBtn.style.opacity = '0';
  mainBtn.style.transform = 'translateY(-20px)';
  setTimeout(() => {
    mainBtn.style.display = 'none';
    const container = document.getElementById('semester-sections');
    container.innerHTML = `
      <div class="semester-section semester1-section">
        <h2 class="section-title">Semester 1</h2>
        <div class="subject-list">
          ${Object.keys(structure['Semester 1']).map(subject => {
            const hasLink = structure['Semester 1'][subject] && structure['Semester 1'][subject].trim() !== "";
            return `
            <button class="subject-btn ${hasLink ? 'has-link' : 'no-link'}"
                    onclick="openDriveLink('Semester 1', '${subject}')">
              <i class="fas ${hasLink ? 'fa-folder-open' : 'fa-folder'}"></i>
              ${subject}
              ${hasLink ? '<span class="link-indicator">↗</span>' : '<span class="no-link-indicator">⏳</span>'}
            </button>
          `}).join('')}
        </div>
      </div>
      <div class="semester-section semester2-section">
        <h2 class="section-title">Semester 2</h2>
        <div class="subject-list">
          ${Object.keys(structure['Semester 2']).map(subject => {
            const hasLink = structure['Semester 2'][subject] && structure['Semester 2'][subject].trim() !== "";
            return `
            <button class="subject-btn ${hasLink ? 'has-link' : 'no-link'}"
                    onclick="openDriveLink('Semester 2', '${subject}')">
              <i class="fas ${hasLink ? 'fa-folder-open' : 'fa-folder'}"></i>
              ${subject}
              ${hasLink ? '<span class="link-indicator">↗</span>' : '<span class="no-link-indicator">⏳</span>'}
            </button>
          `}).join('')}
        </div>
      </div>
      <div class="semester-section semester3-section">
        <h2 class="section-title">Semester 3</h2>
        <div class="subject-list">
          ${Object.keys(structure['Semester 3']).map(subject => {
            const hasLink = structure['Semester 3'][subject] && structure['Semester 3'][subject].trim() !== "";
            return `
            <button class="subject-btn ${hasLink ? 'has-link' : 'no-link'}"
                    onclick="openDriveLink('Semester 3', '${subject}')">
              <i class="fas ${hasLink ? 'fa-folder-open' : 'fa-folder'}"></i>
              ${subject}
              ${hasLink ? '<span class="link-indicator">↗</span>' : '<span class="no-link-indicator">⏳</span>'}
            </button>
          `}).join('')}
        </div>
      </div>
      <div class="semester-section semester4-section">
        <h2 class="section-title">Semester 4</h2>
        <div class="subject-list">
          ${Object.keys(structure['Semester 4']).map(subject => {
            const hasLink = structure['Semester 4'][subject] && structure['Semester 4'][subject].trim() !== "";
            return `
            <button class="subject-btn ${hasLink ? 'has-link' : 'no-link'}"
                    onclick="openDriveLink('Semester 4', '${subject}')">
              <i class="fas ${hasLink ? 'fa-folder-open' : 'fa-folder'}"></i>
              ${subject}
              ${hasLink ? '<span class="link-indicator">↗</span>' : '<span class="no-link-indicator">⏳</span>'}
            </button>
          `}).join('')}
        </div>
      </div>
    `;
    container.style.display = 'flex';
    setTimeout(() => {
      container.style.opacity = '1';
      container.style.transform = 'translateY(0)';
    }, 50);
  }, 300);
}
