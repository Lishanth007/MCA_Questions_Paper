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
    "C++ & Data Structures": [
      "sem/sem1/PCATA_C++ & Data Structures/DEC 2020_PCAD1.PDF",
      "sem/sem1/PCATA_C++ & Data Structures/DEC 2021_PCAD1.PDF",
      "sem/sem1/PCATA_C++ & Data Structures/DEC 2022_PCAD1.PDF",
      "sem/sem1/PCATA_C++ & Data Structures/DEC 2023_PCAD1.PDF",
      "sem/sem1/PCATA_C++ & Data Structures/JUN  2022_PCAD1.PDF",
      "sem/sem1/PCATA_C++ & Data Structures/JUN-2023_PCAD1.PDF",
      "sem/sem1/PCATA_C++ & Data Structures/JUNE 2024_PCAD1.PDF",
      "sem/sem1/PCATA_C++ & Data Structures/MAY 2021_PCAD1.PDF"
    ],
    "Digital Logic Fundamentals": [
      "sem/sem1/PCATB_Digital Logic Fundamentals/DEC 2020_PCATB.PDF",
      "sem/sem1/PCATB_Digital Logic Fundamentals/DEC 2021_PCATB.PDF",
      "sem/sem1/PCATB_Digital Logic Fundamentals/DEC 2022_PCATB.PDF",
      "sem/sem1/PCATB_Digital Logic Fundamentals/DEC 2023_PCATB.PDF",
      "sem/sem1/PCATB_Digital Logic Fundamentals/JUN  2022_PCATB.PDF",
      "sem/sem1/PCATB_Digital Logic Fundamentals/JUN-2023_PCATB.PDF",
      "sem/sem1/PCATB_Digital Logic Fundamentals/JUNE 2024_PCATB.PDF"
    ],
    "Database Management Systems": [
      "sem/sem1/PCATC_Database Management Systems/DEC 2020_PCATC.PDF",
      "sem/sem1/PCATC_Database Management Systems/DEC 2021_PCATC.PDF",
      "sem/sem1/PCATC_Database Management Systems/DEC 2022_PCATC.PDF",
      "sem/sem1/PCATC_Database Management Systems/DEC 2023_PCATC.PDF",
      "sem/sem1/PCATC_Database Management Systems/JUN  2022_PCATC.PDF",
      "sem/sem1/PCATC_Database Management Systems/JUN-2023_PCATC.PDF",
      "sem/sem1/PCATC_Database Management Systems/JUNE 2024_PCATC.PDF",
      "sem/sem1/PCATC_Database Management Systems/MAY 2021_PCATC.PDF"
    ],
    "Accounting & Financial Management": [
      "sem/sem1/PCAD1_Accounting & Financial Management/DEC 2020_PCAD1.PDF",
      "sem/sem1/PCAD1_Accounting & Financial Management/DEC 2021_PCAD1.PDF",
      "sem/sem1/PCAD1_Accounting & Financial Management/DEC 2022_PCAD1.PDF",
      "sem/sem1/PCAD1_Accounting & Financial Management/DEC 2023_PCAD1.PDF",
      "sem/sem1/PCAD1_Accounting & Financial Management/JUN  2022_PCAD1.PDF",
      "sem/sem1/PCAD1_Accounting & Financial Management/JUN-2023_PCAD1.PDF",
      "sem/sem1/PCAD1_Accounting & Financial Management/JUNE 2024_PCAD1.PDF",
      "sem/sem1/PCAD1_Accounting & Financial Management/MAY 2021_PCAD1.PDF"
    ],
    "Operating Systems": [
      "sem/sem1/PCAEA_Operating Systems/DEC 2021_PCAEA.PDF",
      "sem/sem1/PCAEA_Operating Systems/DEC 2022_PCAEA.PDF",
      "sem/sem1/PCAEA_Operating Systems/DEC 2023_PCAEA.PDF",
      "sem/sem1/PCAEA_Operating Systems/JUN  2022_PCAEA.PDF",
      "sem/sem1/PCAEA_Operating Systems/JUN-2023_PCAEA.PDF",
      "sem/sem1/PCAEA_Operating Systems/JUNE 2024_PCAEA.PDF",
      "sem/sem1/PCAEA_Operating Systems/MAY 2021_PCAEA.PDF"
    ]
  },
  "Semester 2": {
    "Design and Analysis of Algorithms": [
      "sem/sem2/PCATD_Design and Analysis of Algorithms/DEC 2021_PCATD.PDF",
      "sem/sem2/PCATD_Design and Analysis of Algorithms/DEC 2022_PCATD.PDF",
      "sem/sem2/PCATD_Design and Analysis of Algorithms/DEC 2023_PCATD.PDF",
      "sem/sem2/PCATD_Design and Analysis of Algorithms/JUN  2022_PCATD.PDF",
      "sem/sem2/PCATD_Design and Analysis of Algorithms/JUN-2023_PCATD.PDF",
      "sem/sem2/PCATD_Design and Analysis of Algorithms/JUNE 2024_PCATD.PDF",
      "sem/sem2/PCATD_Design and Analysis of Algorithms/MAY 2021_PCATD.PDF"
    ],
    "Object Oriented Analysis and Design": [
      "sem/sem2/PCATE_Object Oriented Analysis and Design/DEC 2021_PCATE.PDF",
      "sem/sem2/PCATE_Object Oriented Analysis and Design/DEC 2022_PCATE.PDF",
      "sem/sem2/PCATE_Object Oriented Analysis and Design/DEC 2023_PCATE.PDF",
      "sem/sem2/PCATE_Object Oriented Analysis and Design/JUN  2022_PCATE.PDF",
      "sem/sem2/PCATE_Object Oriented Analysis and Design/JUN-2023_PCATE.PDF",
      "sem/sem2/PCATE_Object Oriented Analysis and Design/JUNE 2024_PCATE.PDF",
      "sem/sem2/PCATE_Object Oriented Analysis and Design/MAY 2021_PCATE.PDF"
    ],
    "Artificial Intelligence": [
      "sem/sem2/PCATF_Artificial Intelligence/DEC 2021_PCATF.PDF",
      "sem/sem2/PCATF_Artificial Intelligence/DEC 2022_PCATF.PDF",
      "sem/sem2/PCATF_Artificial Intelligence/DEC 2023_PCATF.PDF",
      "sem/sem2/PCATF_Artificial Intelligence/JUN  2022_PCATF.PDF",
      "sem/sem2/PCATF_Artificial Intelligence/JUN-2023_PCATF.PDF",
      "sem/sem2/PCATF_Artificial Intelligence/JUNE 2024_PCATF.PDF",
      "sem/sem2/PCATF_Artificial Intelligence/MAY 2021_PCATF.PDF"
    ],
    "Web Based Application Development": [
      "sem/sem2/PCAD2_Web Based Application Development/DEC 2021_PCAD2.PDF",
      "sem/sem2/PCAD2_Web Based Application Development/DEC 2022_PCAD2.PDF",
      "sem/sem2/PCAD2_Web Based Application Development/DEC 2023_PCAD2.PDF",
      "sem/sem2/PCAD2_Web Based Application Development/JUN  2022_PCAD2.PDF",
      "sem/sem2/PCAD2_Web Based Application Development/JUN-2023_PCAD2.PDF",
      "sem/sem2/PCAD2_Web Based Application Development/JUNE 2024_PCAD2.PDF",
      "sem/sem2/PCAD2_Web Based Application Development/MAY 2021_PCAD2.PDF"
    ],
    "Computer Network": [
      "sem/sem2/PCAED_Computer Network/DEC 2021_PCAED.PDF",
      "sem/sem2/PCAED_Computer Network/DEC 2022_PCAED.PDF",
      "sem/sem2/PCAED_Computer Network/DEC 2023_PCAED.PDF",
      "sem/sem2/PCAED_Computer Network/JUN  2022_PCAED.PDF",
      "sem/sem2/PCAED_Computer Network/JUN-2023_PCAED.PDF",
      "sem/sem2/PCAED_Computer Network/JUNE 2024_PCAED.PDF",
      "sem/sem2/PCAED_Computer Network/MAY 2021_PCAED.PDF"
    ]
  },
  "Semester 3": {
    "Machine Learning": [],
    "Software Engineering": [],
    "Cloud Computing": [],
    "Mobile Application Development": [],
    "Cyber Security": []
  },
  "Semester 4": {
    "Big Data Analytics": [],
    "Internet of Things": [],
    "Blockchain Technology": [],
    "Project Management": [],
    "Elective Subjects": []
  }
};
// Function to validate file URLs (for debugging)
async function validateFileStructure() {
  console.log('Validating file structure...');
  
  for (const [semester, subjects] of Object.entries(structure)) {
    console.log(`\n${semester}:`);
    
    for (const [subject, files] of Object.entries(subjects)) {
      console.log(`  ${subject}: ${files.length} files`);
      
      // Check first file to see if it exists
      if (files.length > 0) {
        const firstFile = files[0];
        const exists = await checkFileExists(firstFile);
        console.log(`    Sample file: ${firstFile} - ${exists ? '✅ EXISTS' : '❌ MISSING'}`);
      }
    }
  }
}

// Call this in console to check your file structure
// validateFileStructure();

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

// Function to validate and correct file paths
function getCorrectedFilePath(originalPath) {
  // Remove any extra spaces and normalize the path
  let correctedPath = originalPath
    .replace(/\/\//g, '/') // Remove double slashes
    .replace(/ /g, '%20') // Encode spaces for URLs
    .trim();
  
  return correctedPath;
}

// Enhanced showFiles function with path correction
function showFiles(sem, sub) {
  playSound();
  const div = document.getElementById("files");
  div.style.display = "block";
  div.innerHTML = `<h2>${sub}</h2><div class="loading">Loading question papers...</div>`;
  
  setTimeout(() => {
    const files = structure[sem][sub];
    if (files.length === 0) {
      div.innerHTML = `
        <h2>${sub}</h2>
        <p class="no-files">No question papers available yet.</p>
      `;
    } else {
      const filesByYear = groupFilesByYear(files);
      
      div.innerHTML = `
        <h2>${sub}</h2>
        <div class="files-count">${files.length} question papers available</div>
        ${Object.keys(filesByYear).map(year => `
          <div class="year-section">
            <h3 class="year-title">${year} Papers</h3>
            <div class="pdf-grid">
              ${filesByYear[year].map(file => {
                const correctedPath = getCorrectedFilePath(file);
                return `
                <div class="pdf-card">
                  <i class="fas fa-file-pdf pdf-icon"></i>
                  <div class="pdf-info">
                    <div class="pdf-name">${getCleanFileName(file)}</div>
                    <div class="file-path">${correctedPath}</div>
                    <div class="download-actions">
                      <a href="${correctedPath}" download class="download-btn" target="_blank">
                        <i class="fas fa-download"></i> Download
                      </a>
                      <button onclick="previewPDF('${correctedPath}')" class="preview-btn">
                        <i class="fas fa-eye"></i> Preview
                      </button>
                    </div>
                  </div>
                </div>
              `}).join('')}
            </div>
          </div>
        `).join('')}
      `;
    }
    
    setTimeout(() => {
      div.scrollIntoView({ behavior: 'smooth', block: 'start' });
      div.style.animation = 'highlightFlash 2s ease';
    }, 100);
  }, 500);
}

// PDF Preview function
function previewPDF(filePath) {
  playSound();
  const correctedPath = getCorrectedFilePath(filePath);
  window.open(correctedPath, '_blank');
}