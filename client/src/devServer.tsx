// This file is used only during development to serve the React app without the Express server
// It directly runs Vite's development server

import { createServer } from 'http';
import { createServer as createViteServer } from 'vite';
import path from 'path';

async function startDevServer() {
  try {
    const vite = await createViteServer({
      root: path.resolve(process.cwd(), 'client'),
      server: {
        port: 5000,
        host: '0.0.0.0',
        strictPort: true
      },
      clearScreen: false,
    });

    const server = createServer((req, res) => {
      vite.middlewares(req, res, () => {
        res.statusCode = 404;
        res.end('Not found');
      });
    });

    await new Promise((resolve) => {
      server.listen(5000, '0.0.0.0', () => {
        console.log('Dev server running at http://localhost:5000');
        resolve(null);
      });
    });

  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

startDevServer();