import fs from 'fs';

// Files to process
const filesToProcess = [
  './components/Footer.tsx',
  './components/Navbar.tsx',
  './pages/About.tsx',
  './pages/Home.tsx',
  './pages/Services.tsx'
];

filesToProcess.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add import if getAssetPath is used but not imported
    if (content.includes('getAssetPath') && !content.includes('import { getAssetPath }')) {
      const importLine = "import { getAssetPath } from '../utils/paths';\n";
      if (content.includes('import React')) {
        content = content.replace(/(import React[^;]+;\n)/, `$1${importLine}`);
      } else {
        content = importLine + content;
      }
      
      fs.writeFileSync(filePath, content);
      console.log(`Added getAssetPath import to ${filePath}`);
    } else {
      console.log(`${filePath} already has import or doesn't use getAssetPath`);
    }
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log('Import fixes completed!');