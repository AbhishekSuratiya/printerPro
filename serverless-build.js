#!/usr/bin/env node

// This script will build the Vite application without the Express server
// This makes the application serverless and suitable for Vercel deployment

import { spawn } from 'child_process';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log('Starting serverless build process...');

// Build only the Vite frontend
const viteProcess = spawn('npx', [
  'vite',
  'build',
  '--outDir', '../dist'
], {
  stdio: 'inherit',
  cwd: './client', // Set the working directory to client folder
  env: {
    ...process.env,
    FORCE_COLOR: 'true' // Enable colorized output
  }
});

viteProcess.on('error', (err) => {
  console.error('Failed to build Vite application:', err);
  process.exit(1);
});

viteProcess.on('exit', (code) => {
  if (code === 0) {
    console.log('Serverless build completed successfully');
  } else {
    console.error(`Build failed with code ${code}`);
    process.exit(code);
  }
});