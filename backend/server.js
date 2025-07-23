const express = require('express');
const path = require('path');
const fs = require('fs');
const cheerio = require('cheerio');

const app = express();
const PORT = process.env.PORT || 3000;

// Read the index.html file once at startup (assumes it's in a Vite build folder)
const indexHtml = fs.readFileSync(path.join(__dirname, '../frontend/dist/index.html'), 'utf-8');

// Serve static files, but disable automatic serving of index.html
app.use(express.static(path.join(__dirname, '../frontend/dist'), { index: false }));

// Define meta tags for different routes in a configuration object
const routeMetaTags = {
  '/': {
    title: "UnboxKloud",
    description: 'Get Hired as Dev Ops & Cloud Engineer by doing step-by-step Basic to Expert Projects',
    keywords: 'UnboxKloud, DevOps, Cloud, Engineer, Basic, Advance, Expert, Projects'
  },
  '/basic': {
    title: "UnboxKloud - Basic Projects",
    description: 'WELCOME TO BASIC PROJECTS CLOUD & DEVOPS GET YOUR HANDS DIRTY',
    keywords: 'basic, DevOps, Cloud, Engineer, Basic, Advance, Expert, Projects'
  },
  '/advance': {
    title: "UnboxKloud - Advance Projects",
    description: 'WELCOME TO ADVANCE PROJECTS CLOUD & DEVOPS GET YOUR HANDS DIRTY',
    keywords: 'advance, DevOps, Cloud, Engineer, Basic, Advance, Expert, Projects'
  },
  '/expert': {
    title: "UnboxKloud - Expert Projects",
    description: 'WELCOME TO Expert PROJECTS CLOUD & DEVOPS GET YOUR HANDS DIRTY',
    keywords: 'expert, DevOps, Cloud, Engineer, Basic, Advance, Expert, Projects'
  },
  '/our-policy': {
    title: "UnboxKloud - Our Policy",
    description: 'By accessing and using UnboxKloud, you agree to comply with these policies.',
    keywords: 'Policy, DevOps, Cloud, Engineer, Basic, Advance, Expert, Projects'
  },
  '/refund-policy': {
    title: "UnboxKloud - Refund Policy",
    description: 'We offer a 7-day money-back guarantee under the following conditions',
    keywords: 'Refund Policy, DevOps, Cloud, Engineer, Basic, Advance, Expert, Projects'
  },
  '/terms-and-conditions': {
    title: "UnboxKloud - Terms and Conditions",
    description: 'Welcome to UnboxKloud. By accessing and using our website and services, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our platform.',
    keywords: 'Terms and Conditions, DevOps, Cloud, Engineer, Basic, Advance, Expert, Projects'
  },
  '/refer-and-earn': {
    title: "UnboxKloud - Refer and Earn",
    description: 'Invite your friends to UnboxKloud and earn rewards when they enroll in a course!',
    keywords: 'Refer and Earn, DevOps, Cloud, Engineer, Basic, Advance, Expert, Projects'
  },
  // Add more routes and meta tags here as needed
};

// Handle all routes and inject meta tags dynamically
app.get('*', (req, res) => {
  const $ = cheerio.load(indexHtml); // Load the HTML template
  const metaTags = routeMetaTags[req.path]; // Get meta tags for the requested path

  if (metaTags) {
    // Append meta tags to the <head> section if the route exists in the config
    $('head').append(`
      <title>${metaTags.title}</title>
      <meta name="description" content="${metaTags.description}">
      <meta name="keywords" content="${metaTags.keywords}">
    `);
  }

  res.send($.html()); // Send the modified HTML to the client
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});