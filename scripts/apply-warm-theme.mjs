import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(__dirname, '..', 'src');

const replacements = [
	['from-[#0A0D14]/95', 'from-page/95'],
	['via-[#0A0D14]/55', 'via-page/55'],
	['from-[#0A0D14]/40', 'from-page/40'],
	['bg-[#0A0D14]/98', 'bg-page/98'],
	['bg-[#0A0D14]/95', 'bg-page/95'],
	['bg-[#0A0D14]/90', 'bg-page/90'],
	['bg-[#0A0D14]/70', 'bg-page/70'],
	['bg-[#0A0D14]/50', 'bg-page/50'],
	['bg-[#0A0D14]/40', 'bg-page/40'],
	['bg-[#0A0D14]', 'bg-page'],
	['bg-[#131722]/90', 'bg-card/90'],
	['bg-[#131722]/80', 'bg-card/80'],
	['bg-[#131722]/70', 'bg-card/70'],
	['bg-[#131722]/50', 'bg-card/50'],
	['bg-[#131722]', 'bg-card'],
	['border-[#1A2333]/80', 'border-border/80'],
	['border-[#1A2333]/70', 'border-border/70'],
	['border-[#1A2333]', 'border-border'],
	['border-[#222C3F]', 'border-border'],
	['divide-[#1A2333]', 'divide-border'],
	['hover:bg-[#1A2333]/60', 'hover:bg-surface/60'],
	['hover:bg-[#1A2333]/30', 'hover:bg-surface/30'],
	['hover:bg-[#1A2333]', 'hover:bg-surface'],
	['hover:border-[#888888]', 'hover:border-muted'],
	['text-[#CCCCCC]', 'text-body'],
	['text-[#888888]', 'text-muted'],
	['text-[#555555]', 'text-dim'],
	['text-[#666666]', 'text-dim'],
];

async function walk(dir) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) await walk(full);
		else if (entry.name.endsWith('.astro')) await patch(full);
	}
}

async function patch(filePath) {
	let content = await readFile(filePath, 'utf8');
	let changed = false;
	for (const [from, to] of replacements) {
		if (content.includes(from)) {
			content = content.split(from).join(to);
			changed = true;
		}
	}
	if (changed) {
		await writeFile(filePath, content, 'utf8');
		console.log('updated', path.relative(SRC, filePath));
	}
}

await walk(SRC);
