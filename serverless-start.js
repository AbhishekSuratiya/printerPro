#!/usr/bin/env node

// This script starts the Vite development server directly
// without using the Express server, making the app serverless
// This is useful for development on platforms like Vercel

import { spawn } from 'child_process';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log('Starting Vite development server in serverless mode...');

// Start Vite dev server
const viteProcess = spawn('npx', [
  'vite',
  '--port', '5000',
  '--host'
], {
  stdio: 'inherit',
  cwd: './client', // Set the working directory to client folder
  env: {
    ...process.env,
    FORCE_COLOR: 'true' // Enable colorized output
  }
});

viteProcess.on('error', (err) => {
  console.error('Failed to start Vite development server:', err);
  process.exit(1);
});

viteProcess.on('exit', (code) => {
  if (code !== 0) {
    console.error(`Vite development server exited with code ${code}`);
    process.exit(code);
  }
});