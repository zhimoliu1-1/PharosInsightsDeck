import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, type Plugin } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const savePdfPlugin: Plugin = {
  name: 'save-pdf-endpoint',
  configureServer(server) {
    server.middlewares.use('/api/save-pdf', (req, res) => {
      if (req.method === 'POST') {
        const chunks: Buffer[] = [];
        req.on('data', (chunk: Buffer) => chunks.push(Buffer.from(chunk)));
        req.on('end', () => {
          try {
            const buffer = Buffer.concat(chunks);
            const outPath1 = path.resolve(__dirname, 'Pharos_Web3_AI_Deck.pdf');
            const outPath2 = path.resolve(__dirname, 'public/Pharos_Web3_AI_Deck.pdf');
            fs.writeFileSync(outPath1, buffer);
            fs.writeFileSync(outPath2, buffer);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: true, path: '/Pharos_Web3_AI_Deck.pdf' }));
          } catch (e: any) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: e?.message }));
          }
        });
      } else {
        res.writeHead(405);
        res.end();
      }
    });
  },
};

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), savePdfPlugin],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      cors: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
