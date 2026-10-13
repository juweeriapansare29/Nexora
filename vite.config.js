
import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { readdirSync } from 'node:fs';

const root = process.cwd();

const htmlFiles = readdirSync(root)
  .filter((file) => file.endsWith('.html'))
  .map((file) => [
    file.replace(/\.html$/, ''),
    resolve(root, file),
  ]);

export default defineConfig({
  publicDir: 'public',
  build: {
    copyPublicDir: true,
    rollupOptions: {
      input: Object.fromEntries([
        ['index', resolve(root, 'index.html')],
        ...htmlFiles,
      ]),
    },
  },
});
