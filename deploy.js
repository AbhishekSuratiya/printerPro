#!/usr/bin/env node

// This script helps prepare the project for deployment to Vercel
// It creates the necessary files and configuration

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Create a vercel.json configuration file
const vercelConfig = {
  "version": 2,
  "builds": [
    {
      "src": "dist/**",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/dist/$1"
    },
    {
      "handle": "filesystem"
    },
    {
      "src": "/.*",
      "dest": "/dist/index.html"
    }
  ]
};

// Write the configuration to vercel.json
fs.writeFileSync(
  path.join(__dirname, 'vercel.json'),
  JSON.stringify(vercelConfig, null, 2),
  'utf8'
);

console.log('Created vercel.json configuration file');

// Instructions for deployment
console.log('\nDeployment Instructions:');
console.log('1. Build the project with: node serverless-build.js');
console.log('2. Deploy to Vercel with: vercel --prod');
console.log('\nNote: Make sure you have the Vercel CLI installed (npm i -g vercel)');