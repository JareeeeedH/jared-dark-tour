/**
 * Resize & recompress images under public/ (in place).
 * Run: npm run compress-images
 */
import { readdir, rename, stat, unlink } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, '..', 'public');

const HERO_FILES = new Set([
	'banner.png',
	'hcmCity.png',
	'DaCity.png',
	'home-card-da-nang.png',
	'home-card-hcm.png',
]);

const MAX_WIDTH = {
	hero: 1920,
	location: 1280,
	default: 1400,
};

async function* walkFiles(dir) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		const fullPath = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			yield* walkFiles(fullPath);
		} else if (/\.(png|jpe?g)$/i.test(entry.name)) {
			yield fullPath;
		}
	}
}

function maxWidthFor(filePath) {
	const base = path.basename(filePath);
	if (HERO_FILES.has(base)) return MAX_WIDTH.hero;
	if (filePath.includes(`${path.sep}hcm_location${path.sep}`) || filePath.includes(`${path.sep}da_location${path.sep}`)) {
		return MAX_WIDTH.location;
	}
	return MAX_WIDTH.default;
}

async function compressFile(filePath) {
	const before = (await stat(filePath)).size;
	const maxWidth = maxWidthFor(filePath);
	const tmpPath = `${filePath}.tmp`;

	let pipeline = sharp(filePath).rotate();
	const meta = await pipeline.metadata();
	if (meta.width && meta.width > maxWidth) {
		pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
	}

	if (/\.jpe?g$/i.test(filePath)) {
		await pipeline.jpeg({ quality: 82, mozjpeg: true }).toFile(tmpPath);
	} else {
		await pipeline.png({ compressionLevel: 9, effort: 10 }).toFile(tmpPath);
	}

	await unlink(filePath);
	await rename(tmpPath, filePath);

	const after = (await stat(filePath)).size;
	const rel = path.relative(PUBLIC_DIR, filePath);
	const pct = before > 0 ? Math.round((1 - after / before) * 100) : 0;
	console.log(
		`${rel}: ${(before / 1024 / 1024).toFixed(2)} MB → ${(after / 1024 / 1024).toFixed(2)} MB (${pct}% smaller)`,
	);
}

let totalBefore = 0;
let totalAfter = 0;

for await (const filePath of walkFiles(PUBLIC_DIR)) {
	const before = (await stat(filePath)).size;
	await compressFile(filePath);
	const after = (await stat(filePath)).size;
	totalBefore += before;
	totalAfter += after;
}

console.log(
	`\nTotal: ${(totalBefore / 1024 / 1024).toFixed(2)} MB → ${(totalAfter / 1024 / 1024).toFixed(2)} MB`,
);
