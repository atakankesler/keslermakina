import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assets = [
    { url: 'https://keslermakina.com/images/KMlogo236x60.jpg', path: 'public/images/logo.jpg' },
    { url: 'https://keslermakina.com/images/templatemo_header.jpg', path: 'public/images/hero-bg.jpg' },
    { url: 'https://keslermakina.com/images/templatemo_footer.jpg', path: 'public/images/footer-bg.jpg' },
    { url: 'https://keslermakina.com/images/kurehalogo.jpg', path: 'public/images/partners/kureha.jpg' },
    { url: 'https://keslermakina.com/images/hoku2logo.png', path: 'public/images/partners/hokushin.png' },
    { url: 'https://keslermakina.com/images/brooklogo2.jpg', path: 'public/images/partners/brooksbank.jpg' },
    { url: 'https://keslermakina.com/images/UCClogo.jpg', path: 'public/images/partners/ucc.jpg' },
    { url: 'https://keslermakina.com/images/slider/image_00.jpg', path: 'public/images/slider/01.jpg' },
    { url: 'https://keslermakina.com/images/slider/image_01.jpg', path: 'public/images/slider/02.jpg' },
    { url: 'https://keslermakina.com/images/slider/image_02.jpg', path: 'public/images/slider/03.jpg' },
    { url: 'https://keslermakina.com/images/slider/image_03.jpg', path: 'public/images/slider/04.jpg' },
    { url: 'https://keslermakina.com/images/slider/image_04.jpg', path: 'public/images/slider/05.jpg' },
    { url: 'https://keslermakina.com/images/slider/image_05.jpg', path: 'public/images/slider/06.jpg' },
    { url: 'https://keslermakina.com/images/slider/image_06.jpg', path: 'public/images/slider/07.jpg' },
    { url: 'https://keslermakina.com/images/slider/image_07.jpg', path: 'public/images/slider/08.jpg' },
    { url: 'https://keslermakina.com/images/slider/image_08.jpg', path: 'public/images/slider/09.jpg' },
];

const download = (url, dest) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log(`Downloaded ${url} to ${dest}`);
        });
    }).on('error', (err) => {
        fs.unlink(dest);
        console.error(`Error downloading ${url}: ${err.message}`);
    });
};

const ensureDir = (dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
};

const rootDir = path.resolve(__dirname, '..');

assets.forEach(asset => {
    const dest = path.join(rootDir, asset.path);
    ensureDir(path.dirname(dest));
    download(asset.url, dest);
});
