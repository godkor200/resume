const puppeteer = require('puppeteer');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { PDFDocument } = require('pdf-lib');

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

  // puppeteer 번들 크롬 대신 환경변수로 지정한 브라우저를 쓸 수 있게 한다.
  // 번들 다운로드가 중간에 끊겨도 시스템에 설치된 크롬으로 PDF를 뽑을 수 있다.
  //   PUPPETEER_EXECUTABLE_PATH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" npm run pdf
  const browser = await puppeteer.launch({
    headless: 'new',
    ...(process.env.PUPPETEER_EXECUTABLE_PATH
      ? { executablePath: process.env.PUPPETEER_EXECUTABLE_PATH }
      : {}),
  });
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

  // 경력기술서 (career-description)
  console.log('📄 경력기술서 생성 중...');
  await page.goto(`http://localhost:${PORT}${BASE_PATH}/career-description/`, {
    waitUntil: 'networkidle2',
    timeout: 30000,
  });
  await page.pdf({ ...pdfOptions, path: path.join(__dirname, '경력기술서_유병국.pdf') });
  console.log('✅ 경력기술서_유병국.pdf 생성 완료');

  // 포트폴리오 (portfolio)
  console.log('📄 포트폴리오 생성 중...');
  await page.goto(`http://localhost:${PORT}${BASE_PATH}/portfolio/`, {
    waitUntil: 'networkidle2',
    timeout: 30000,
  });
  await page.pdf({ ...pdfOptions, path: path.join(__dirname, '포트폴리오_유병국.pdf') });
  console.log('✅ 포트폴리오_유병국.pdf 생성 완료');

  // 리멤버 프로필 (remember)
  console.log('📄 리멤버 프로필 생성 중...');
  await page.goto(`http://localhost:${PORT}${BASE_PATH}/remember/`, {
    waitUntil: 'networkidle2',
    timeout: 30000,
  });
  await page.pdf({ ...pdfOptions, path: path.join(__dirname, '리멤버프로필_유병국.pdf') });
  console.log('✅ 리멤버프로필_유병국.pdf 생성 완료');

  // 통합본 (all) — 헤더/푸터 중복 없이 이력서+포트폴리오+경력기술서 단일 렌더링
  console.log('📄 통합본(이력서+포트폴리오+경력기술서) 생성 중...');
  await page.goto(`http://localhost:${PORT}${BASE_PATH}/all/`, {
    waitUntil: 'networkidle2',
    timeout: 30000,
  });
  await page.pdf({ ...pdfOptions, path: path.join(__dirname, '이력서+포트폴리오+경력기술서_유병국.pdf') });
  console.log('✅ 이력서+포트폴리오+경력기술서_유병국.pdf 생성 완료');

  await browser.close();
  server.close();

  // 병합본 생성 (단순 이어붙이기 — 별도 제출용)
  const merges = [
    {
      output: '이력서+경력기술서_유병국.pdf',
      parts: ['이력서_유병국.pdf', '경력기술서_유병국.pdf'],
    },
  ];

  for (const { output, parts } of merges) {
    console.log(`📄 ${output} 병합 중...`);
    const merged = await PDFDocument.create();
    for (const f of parts) {
      const src = await PDFDocument.load(fs.readFileSync(path.join(__dirname, f)));
      const pages = await merged.copyPages(src, src.getPageIndices());
      pages.forEach((p) => merged.addPage(p));
    }
    fs.writeFileSync(path.join(__dirname, output), await merged.save());
    console.log(`✅ ${output} 병합 완료`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
