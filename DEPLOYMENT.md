# Deployment Guide for RiboInsightHub

This guide will help you deploy RiboInsightHub to GitHub Pages.

## Prerequisites

1. Node.js (v18 or later)
2. Git
3. GitHub account
4. A GitHub repository for your project

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. View the site at `http://localhost:3000`

## Building for Production

1. Create a production build:
   ```bash
   npm run build
   ```

2. Test the production build locally:
   ```bash
   npm install -g serve
   serve out
   ```

## Deploying to GitHub Pages

### First-time Setup

1. Create a new GitHub repository (if you haven't already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/RiboInsightHub.git
   git push -u origin main
   ```

2. Configure GitHub Pages:
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Set source to "GitHub Actions"

### Automated Deployment

The repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the main branch.

1. Push your changes:
   ```bash
   git add .
   git commit -m "Update site content"
   git push origin main
   ```

2. The GitHub Action will:
   - Build the site
   - Deploy to the gh-pages branch
   - Make it available at `https://yourusername.github.io/RiboInsightHub`

### Manual Deployment

If you prefer to deploy manually:

1. Build and export the site:
   ```bash
   npm run export
   ```

2. Deploy to gh-pages branch:
   ```bash
   npm run deploy
   ```

## Environment Variables

The following environment variables can be configured:

- `NEXT_PUBLIC_BASE_PATH`: Set to `/RiboInsightHub` for GitHub Pages deployment
- Add any additional environment variables in `.env.local` for local development

## Troubleshooting

1. **404 errors on refresh**: Add a custom 404.html page and ensure all links use relative paths

2. **Assets not loading**: Check that all asset paths include the base path (`/RiboInsightHub/`)

3. **Build failures**: Ensure all dependencies are installed and the Node.js version is correct

## Adding New Content

1. **Adding new tools**:
   - Add tool data to `public/data/tools.json`
   - Add comparison data to `public/data/comparisons.json`

2. **Adding track hubs**:
   - Create new hub files in `public/hubs/[tool_id]_[sample_id]/`
   - Include hub.txt, genomes.txt, and trackDb.txt

## Monitoring

After deployment, verify:
1. The site is accessible at your GitHub Pages URL
2. All pages load correctly
3. Data is being loaded properly
4. Track hub links work in UCSC Genome Browser 