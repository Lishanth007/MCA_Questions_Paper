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

// Simple function to open drive link when subject is clicked
function openDriveLink(sem, sub) {
  playSound();
  
  const driveLink = structure[sem][sub];
  
  if (driveLink && driveLink.trim() !== "") {
    // Open Google Drive link in new tab
    window.open(driveLink, '_blank');
  } else {
    // Show message if no link available
    alert(`No Google Drive link available for ${sub} yet.\n\nPlease check back later or contact the administrator.`);
  }
}
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
    
    // Create semester sections with subjects that directly open Drive links
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