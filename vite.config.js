import { cpSync, existsSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

function copyStaticStoreFiles() {
  return {
    name: 'copy-static-store-files',
    closeBundle() {
      const outDir = resolve('dist');
      mkdirSync(outDir, { recursive: true });

      if (existsSync('assets')) {
        cpSync('assets', resolve(outDir, 'assets'), { recursive: true });
      }

      for (const page of ['admin.html', 'product.html']) {
        if (existsSync(page)) {
          cpSync(page, resolve(outDir, page));
        }
      }
    }
  };
}

export default defineConfig({
  plugins: [copyStaticStoreFiles()],
  server: { host: '0.0.0.0', allowedHosts: true },
  preview: { host: '0.0.0.0', allowedHosts: true }
});
