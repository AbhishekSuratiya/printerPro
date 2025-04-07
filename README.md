# Ayaan Print Industries Website

This is a modern, responsive website for Ayaan Print Industries built with React, TypeScript, and Vite.

## Features

- Responsive design for all device sizes
- Interactive UI components with animations
- Portfolio showcase with lightbox
- Client/brand showcase
- Contact form

## Serverless Deployment

This project has been configured for serverless deployment on Vercel. The backend Express server has been removed to create a purely static site.

## Using Serverless Scripts

To run the site in development mode without the Express server:
```
node serverless-start.js
```

To build the site for production:
```
node serverless-build.js
```

To prepare for Vercel deployment:
```
node deploy.js
```

## Contact Form

The contact form is currently set up to simulate form submission. In a production environment, you would connect it to a form submission service like Formspree or a serverless function.
