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

const structure = {
  "Semester 1": {
    "C++ & Data Structures": [
      { name: "DEC 2020", url: "https://drive.google.com/file/d/1LonYGjWr5DJT-Kexr8XmxA80ZLLJYI8k/view?usp=sharing" },
      { name: "DEC 2021", url: "https://drive.google.com/file/d/YOUR_FILE_ID_2/view?usp=sharing" },
      { name: "DEC 2022", url: "https://drive.google.com/file/d/YOUR_FILE_ID_3/view?usp=sharing" },
      { name: "DEC 2023", url: "https://drive.google.com/file/d/YOUR_FILE_ID_4/view?usp=sharing" },
      { name: "JUN 2022", url: "https://drive.google.com/file/d/YOUR_FILE_ID_5/view?usp=sharing" },
      { name: "JUN 2023", url: "https://drive.google.com/file/d/YOUR_FILE_ID_6/view?usp=sharing" },
      { name: "JUNE 2024", url: "https://drive.google.com/file/d/YOUR_FILE_ID_7/view?usp=sharing" },
      { name: "MAY 2021", url: "https://drive.google.com/file/d/YOUR_FILE_ID_8/view?usp=sharing" }
    ],
    "Digital Logic Fundamentals": [
      { name: "DEC 2020", url: "https://drive.google.com/file/d/YOUR_FILE_ID_9/view?usp=sharing" },
      { name: "DEC 2021", url: "https://drive.google.com/file/d/YOUR_FILE_ID_10/view?usp=sharing" },
      { name: "DEC 2022", url: "https://drive.google.com/file/d/YOUR_FILE_ID_11/view?usp=sharing" },
      { name: "DEC 2023", url: "https://drive.google.com/file/d/YOUR_FILE_ID_12/view?usp=sharing" },
      { name: "JUN 2022", url: "https://drive.google.com/file/d/YOUR_FILE_ID_13/view?usp=sharing" },
      { name: "JUN 2023", url: "https://drive.google.com/file/d/YOUR_FILE_ID_14/view?usp=sharing" },
      { name: "JUNE 2024", url: "https://drive.google.com/file/d/YOUR_FILE_ID_15/view?usp=sharing" }
    ],
    "Database Management Systems": [
      { name: "DEC 2020", url: "https://drive.google.com/file/d/YOUR_FILE_ID_16/view?usp=sharing" },
      { name: "DEC 2021", url: "https://drive.google.com/file/d/YOUR_FILE_ID_17/view?usp=sharing" },
      { name: "DEC 2022", url: "https://drive.google.com/file/d/YOUR_FILE_ID_18/view?usp=sharing" },
      { name: "DEC 2023", url: "https://drive.google.com/file/d/YOUR_FILE_ID_19/view?usp=sharing" },
      { name: "JUN 2022", url: "https://drive.google.com/file/d/YOUR_FILE_ID_20/view?usp=sharing" },
      { name: "JUN 2023", url: "https://drive.google.com/file/d/YOUR_FILE_ID_21/view?usp=sharing" },
      { name: "JUNE 2024", url: "https://drive.google.com/file/d/YOUR_FILE_ID_22/view?usp=sharing" },
      { name: "MAY 2021", url: "https://drive.google.com/file/d/YOUR_FILE_ID_23/view?usp=sharing" }
    ],
    "Accounting & Financial Management": [
      { name: "DEC 2020", url: "https://drive.google.com/file/d/YOUR_FILE_ID_24/view?usp=sharing" },
      { name: "DEC 2021", url: "https://drive.google.com/file/d/YOUR_FILE_ID_25/view?usp=sharing" },
      { name: "DEC 2022", url: "https://drive.google.com/file/d/YOUR_FILE_ID_26/view?usp=sharing" },
      { name: "DEC 2023", url: "https://drive.google.com/file/d/YOUR_FILE_ID_27/view?usp=sharing" },
      { name: "JUN 2022", url: "https://drive.google.com/file/d/YOUR_FILE_ID_28/view?usp=sharing" },
      { name: "JUN 2023", url: "https://drive.google.com/file/d/YOUR_FILE_ID_29/view?usp=sharing" },
      { name: "JUNE 2024", url: "https://drive.google.com/file/d/YOUR_FILE_ID_30/view?usp=sharing" },
      { name: "MAY 2021", url: "https://drive.google.com/file/d/YOUR_FILE_ID_31/view?usp=sharing" }
    ],
    "Operating Systems": [
      { name: "DEC 2021", url: "https://drive.google.com/file/d/YOUR_FILE_ID_32/view?usp=sharing" },
      { name: "DEC 2022", url: "https://drive.google.com/file/d/YOUR_FILE_ID_33/view?usp=sharing" },
      { name: "DEC 2023", url: "https://drive.google.com/file/d/YOUR_FILE_ID_34/view?usp=sharing" },
      { name: "JUN 2022", url: "https://drive.google.com/file/d/YOUR_FILE_ID_35/view?usp=sharing" },
      { name: "JUN 2023", url: "https://drive.google.com/file/d/YOUR_FILE_ID_36/view?usp=sharing" },
      { name: "JUNE 2024", url: "https://drive.google.com/file/d/YOUR_FILE_ID_37/view?usp=sharing" },
      { name: "MAY 2021", url: "https://drive.google.com/file/d/YOUR_FILE_ID_38/view?usp=sharing" }
    ]
  },
  "Semester 2": {
    "Design and Analysis of Algorithms": [
      { name: "DEC 2021", url: "https://drive.google.com/file/d/YOUR_FILE_ID_39/view?usp=sharing" },
      { name: "DEC 2022", url: "https://drive.google.com/file/d/YOUR_FILE_ID_40/view?usp=sharing" },
      { name: "DEC 2023", url: "https://drive.google.com/file/d/YOUR_FILE_ID_41/view?usp=sharing" },
      { name: "JUN 2022", url: "https://drive.google.com/file/d/YOUR_FILE_ID_42/view?usp=sharing" },
      { name: "JUN 2023", url: "https://drive.google.com/file/d/YOUR_FILE_ID_43/view?usp=sharing" },
      { name: "JUNE 2024", url: "https://drive.google.com/file/d/YOUR_FILE_ID_44/view?usp=sharing" },
      { name: "MAY 2021", url: "https://drive.google.com/file/d/YOUR_FILE_ID_45/view?usp=sharing" }
    ],
    "Object Oriented Analysis and Design": [
      { name: "DEC 2021", url: "https://drive.google.com/file/d/YOUR_FILE_ID_46/view?usp=sharing" },
      { name: "DEC 2022", url: "https://drive.google.com/file/d/YOUR_FILE_ID_47/view?usp=sharing" },
      { name: "DEC 2023", url: "https://drive.google.com/file/d/YOUR_FILE_ID_48/view?usp=sharing" },
      { name: "JUN 2022", url: "https://drive.google.com/file/d/YOUR_FILE_ID_49/view?usp=sharing" },
      { name: "JUN 2023", url: "https://drive.google.com/file/d/YOUR_FILE_ID_50/view?usp=sharing" },
      { name: "JUNE 2024", url: "https://drive.google.com/file/d/YOUR_FILE_ID_51/view?usp=sharing" },
      { name: "MAY 2021", url: "https://drive.google.com/file/d/YOUR_FILE_ID_52/view?usp=sharing" }
    ],
    "Artificial Intelligence": [
      { name: "DEC 2021", url: "https://drive.google.com/file/d/YOUR_FILE_ID_53/view?usp=sharing" },
      { name: "DEC 2022", url: "https://drive.google.com/file/d/YOUR_FILE_ID_54/view?usp=sharing" },
      { name: "DEC 2023", url: "https://drive.google.com/file/d/YOUR_FILE_ID_55/view?usp=sharing" },
      { name: "JUN 2022", url: "https://drive.google.com/file/d/YOUR_FILE_ID_56/view?usp=sharing" },
      { name: "JUN 2023", url: "https://drive.google.com/file/d/YOUR_FILE_ID_57/view?usp=sharing" },
      { name: "JUNE 2024", url: "https://drive.google.com/file/d/YOUR_FILE_ID_58/view?usp=sharing" },
      { name: "MAY 2021", url: "https://drive.google.com/file/d/YOUR_FILE_ID_59/view?usp=sharing" }
    ],
    "Web Based Application Development": [
      { name: "DEC 2021", url: "https://drive.google.com/file/d/YOUR_FILE_ID_60/view?usp=sharing" },
      { name: "DEC 2022", url: "https://drive.google.com/file/d/YOUR_FILE_ID_61/view?usp=sharing" },
      { name: "DEC 2023", url: "https://drive.google.com/file/d/YOUR_FILE_ID_62/view?usp=sharing" },
      { name: "JUN 2022", url: "https://drive.google.com/file/d/YOUR_FILE_ID_63/view?usp=sharing" },
      { name: "JUN 2023", url: "https://drive.google.com/file/d/YOUR_FILE_ID_64/view?usp=sharing" },
      { name: "JUNE 2024", url: "https://drive.google.com/file/d/YOUR_FILE_ID_65/view?usp=sharing" },
      { name: "MAY 2021", url: "https://drive.google.com/file/d/YOUR_FILE_ID_66/view?usp=sharing" }
    ],
    "Computer Network": [
      { name: "DEC 2021", url: "https://drive.google.com/file/d/YOUR_FILE_ID_67/view?usp=sharing" },
      { name: "DEC 2022", url: "https://drive.google.com/file/d/YOUR_FILE_ID_68/view?usp=sharing" },
      { name: "DEC 2023", url: "https://drive.google.com/file/d/YOUR_FILE_ID_69/view?usp=sharing" },
      { name: "JUN 2022", url: "https://drive.google.com/file/d/YOUR_FILE_ID_70/view?usp=sharing" },
      { name: "JUN 2023", url: "https://drive.google.com/file/d/YOUR_FILE_ID_71/view?usp=sharing" },
      { name: "JUNE 2024", url: "https://drive.google.com/file/d/YOUR_FILE_ID_72/view?usp=sharing" },
      { name: "MAY 2021", url: "https://drive.google.com/file/d/YOUR_FILE_ID_73/view?usp=sharing" }
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
  
  const files = structure[sem][sub];
  
  if (files.length === 0) {
    div.innerHTML = `
      <h2>${sub}</h2>
      <p class="no-files">No question papers available yet.</p>
    `;
  } else {
    // Group files by year
    const filesByYear = {};
    
    files.forEach(file => {
      const year = file.name.match(/\d{4}/)?.[0] || 'Other';
      if (!filesByYear[year]) filesByYear[year] = [];
      filesByYear[year].push(file);
    });
    
    // Sort years in descending order
    const sortedYears = Object.keys(filesByYear).sort((a, b) => b - a);
    
    div.innerHTML = `
      <h2>${sub}</h2>
      <div class="files-count">${files.length} question papers available</div>
      ${sortedYears.map(year => `
        <div class="year-section">
          <h3 class="year-title">${year} Papers</h3>
          <div class="pdf-grid">
            ${filesByYear[year].map(file => {
              const downloadUrl = file.url.replace('/view?', '/preview?');
              const directDownloadUrl = file.url.replace('/view?', '/uc?export=download&');
              
              return `
              <div class="pdf-card">
                <i class="fas fa-file-pdf pdf-icon"></i>
                <div class="pdf-info">
                  <div class="pdf-name">${getFormattedFileName(file.name)}</div>
                  <div class="file-type">Google Drive PDF</div>
                  <div class="drive-actions">
                    <a href="${file.url}" target="_blank" class="view-btn">
                      <i class="fas fa-external-link-alt"></i> View in Drive
                    </a>
                    <a href="${directDownloadUrl}" class="download-btn" download>
                      <i class="fas fa-download"></i> Download
                    </a>
                    <button onclick="previewDrivePDF('${downloadUrl}')" class="preview-btn">
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
  
  // Smooth scroll to files section
  setTimeout(() => {
    div.scrollIntoView({ behavior: 'smooth', block: 'start' });
    div.style.animation = 'highlightFlash 2s ease';
  }, 100);
}

// Format file names with emojis
function getFormattedFileName(name) {
  let formatted = name
    .replace('DEC', 'December')
    .replace('JUN', 'June')
    .replace('JUNE', 'June')
    .replace('MAY', 'May');
  
  // Add emoji based on month
  if (formatted.includes('December')) formatted = '🎄 ' + formatted;
  else if (formatted.includes('June')) formatted = '☀️ ' + formatted;
  else if (formatted.includes('May')) formatted = '🌷 ' + formatted;
  
  return formatted;
}

// Preview Google Drive PDF
function previewDrivePDF(driveUrl) {
  playSound();
  window.open(driveUrl, '_blank', 'width=1000,height=700');
}

// Enhanced file existence check
async function checkFileExists(url) {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    console.log(`HEAD request to ${url}: Status ${response.status}`);
    return response.status === 200;
  } catch (error) {
    console.error(`Error checking ${url}:`, error);
    return false;
  }
}

// Enhanced path correction
function getCorrectedFilePath(originalPath) {
  // Encode each part of the path separately
  const pathParts = originalPath.split('/');
  const encodedParts = pathParts.map(part => {
    // Encode spaces and other special characters
    return encodeURIComponent(part).replace(/%20/g, ' ');
  });
  
  let correctedPath = encodedParts.join('/');
  
  console.log(`Path correction: ${originalPath} -> ${correctedPath}`);
  return correctedPath;
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