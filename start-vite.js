#!/usr/bin/env node

import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Run Vite directly from node_modules
const viteProcess = spawn('node', [
  path.join(__dirname, 'node_modules', 'vite', 'bin', 'vite.js'),
  '--port', '5000',
  '--host', '0.0.0.0',
  '--root', './client'
], {
  stdio: 'inherit',
  shell: true
});

viteProcess.on('error', (err) => {
  console.error('Failed to start Vite:', err);
  process.exit(1);
});

// Handle SIGTERM and SIGINT (kill and Ctrl+C)
process.on('SIGTERM', () => {
  console.log('Received SIGTERM, shutting down...');
  viteProcess.kill('SIGTERM');
});

process.on('SIGINT', () => {
  console.log('Received SIGINT, shutting down...');
  viteProcess.kill('SIGINT');
});