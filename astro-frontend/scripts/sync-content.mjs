/**
 * Content Sync Script
 * 
 * Copies JSON content files from the Lovable project (public/api/pages/)
 * to the Astro frontend (src/content/).
 * 
 * Usage: node scripts/sync-content.mjs
 * 
 * This script assumes the Lovable project repo is available as a sibling
 * directory or via a configurable path.
 */

import { copyFileSync, mkdirSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const LOVABLE_REPO = process.env.LOVABLE_REPO_PATH || join(__dirname, '../../');
const SOURCE = join(LOVABLE_REPO, 'public/api/pages');
const DEST = join(__dirname, '../src/content/pages');

function copyDir(src, dest) {
  mkdirSync(dest, { recursive: true });
  for (const entry of readdirSync(src)) {
    const srcPath = join(src, entry);
    const destPath = join(dest, entry);
    if (statSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
      console.log(`✓ ${entry}`);
    }
  }
}

console.log(`Syncing content from: ${SOURCE}`);
console.log(`To: ${DEST}\n`);

try {
  copyDir(SOURCE, DEST);
  console.log('\n✅ Content sync complete!');
} catch (err) {
  console.error('❌ Sync failed:', err.message);
  process.exit(1);
}
