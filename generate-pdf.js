const puppeteer = require('puppeteer');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const OUT_DIR = path.join(__dirname, 'out');
const BASE_PATH = '/resume';
const PORT = 4321;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
};

function createServer() {
  return http.createServer((req, res) => {
    let urlPath = req.url.split('?')[0];

    // /resume/* → out/*
    if (urlPath.startsWith(BASE_PATH)) {
      urlPath = urlPath.slice(BASE_PATH.length) || '/';
    }

    let filePath = path.join(OUT_DIR, urlPath);

    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }

    if (!fs.existsSync(filePath)) {
      res.writeHead(404);
      res.end('Not found: ' + urlPath);
      return;
    }

    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  });
}

async function waitForServer(url, timeout = 10000) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    const ok = await new Promise((resolve) => {
      http.get(url, () => resolve(true)).on('error', () => resolve(false));
    });
    if (ok) return;
    await new Promise((r) => setTimeout(r, 150));
  }
  throw new Error('Server not ready');
}

async function main() {
  console.log('📦 Building Next.js...');
  execSync('npx next build', { cwd: __dirname, stdio: 'inherit' });

  const server = createServer();
  server.listen(PORT);
  await waitForServer(`http://localhost:${PORT}${BASE_PATH}/career/`);
  console.log(`🚀 Server ready at http://localhost:${PORT}`);

  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });

  const pdfOptions = {
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: false,
    margin: { top: '12mm', right: '15mm', bottom: '12mm', left: '15mm' },
  };

  // 이력서 (career)
  console.log('📄 이력서 생성 중...');
  await page.goto(`http://localhost:${PORT}${BASE_PATH}/career/`, {
    waitUntil: 'networkidle2',
    timeout: 30000,
  });
  await page.pdf({ ...pdfOptions, path: path.join(__dirname, '이력서_유병국.pdf') });
  console.log('✅ 이력서_유병국.pdf 생성 완료');

  // 포트폴리오 (portfolio)
  console.log('📄 포트폴리오 생성 중...');
  await page.goto(`http://localhost:${PORT}${BASE_PATH}/portfolio/`, {
    waitUntil: 'networkidle2',
    timeout: 30000,
  });
  await page.pdf({ ...pdfOptions, path: path.join(__dirname, '포트폴리오_유병국.pdf') });
  console.log('✅ 포트폴리오_유병국.pdf 생성 완료');

  await browser.close();
  server.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
