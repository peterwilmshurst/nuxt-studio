# Nuxt Studio Proof of Concept

A minimal proof of concept demonstrating [Nuxt Studio](https://nuxt.studio) integration with Nuxt 4, featuring a git-based CMS with live editing capabilities.

## Overview

This project showcases a modern content management setup using:
- **Nuxt 4.0** - The latest version of the Nuxt framework
- **Nuxt Studio** (Alpha) - Git-based CMS with visual editing at `/_studio`
- **Nuxt Content** - File-based content management with markdown support
- **TypeScript** - Full type safety across the application
- **SSR** - Server-side rendering enabled for optimal performance

## Key Features

✅ **Git-Based CMS** - Content stored in markdown files, versioned with Git  
✅ **Live Studio Editor** - Visual editing interface accessible at `/_studio`  
✅ **GitHub Integration** - Syncs content changes directly to GitHub repository  
✅ **Dynamic Routing** - Catch-all route handles all content pages  
✅ **SEO Ready** - Automatic meta tags from content frontmatter  
✅ **Netlify Deployment** - Pre-configured for easy hosting  

## Project Structure

```
nuxt-studio/
├── app/
│   ├── app.vue              # Root Vue component
│   └── pages/
│       └── [...slug].vue    # Catch-all route for content pages
├── content/
│   └── index.md             # Sample markdown content
├── content.config.ts        # Content collections configuration
├── nuxt.config.ts           # Nuxt configuration with Studio setup
└── netlify.toml             # Netlify deployment configuration
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm or your preferred package manager
- GitHub account (for Studio integration)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nuxt-studio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp env.example .env
```
Edit `.env` and add your GitHub OAuth credentials:
- `STUDIO_GITHUB_CLIENT_ID`
- `STUDIO_GITHUB_CLIENT_SECRET`

4. Start the development server:
```bash
npm run dev
```

5. Access the application:
   - Frontend: http://localhost:3000
   - Studio Editor: http://localhost:3000/_studio

## Configuration

### Studio Setup

The Studio is configured in `nuxt.config.ts`:

```typescript
studio: {
  route: '/_studio',
  repository: {
    provider: 'github',
    owner: 'peterwilmshurst',
    repo: 'nuxt-studio',
    branch: 'main'
  }
}
```

### Content Collections

Content is managed through `content.config.ts`, defining a page collection that sources all markdown files:

```typescript
collections: {
  content: defineCollection({
    type: 'page',
    source: '**/*.md',
  })
}
```

## How It Works

1. **Content Creation** - Markdown files in `/content` directory define pages
2. **Frontmatter** - YAML frontmatter provides metadata (title, description, etc.)
3. **Dynamic Routing** - The `[...slug].vue` page queries content based on URL path
4. **Rendering** - `ContentRenderer` component displays the markdown content
5. **Studio Editing** - Navigate to `/_studio` for visual content editing
6. **Git Sync** - Changes made in Studio sync back to your GitHub repository

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run generate` - Generate static site
- `npm run preview` - Preview production build
- `npm run typecheck` - Run TypeScript type checking

## Deployment

This project is configured for Netlify deployment. Push to your repository and connect it to Netlify - the `netlify.toml` configuration will handle the rest.

Alternatively, you can deploy to any Node.js hosting platform that supports Nuxt 4.

## Technology Stack

| Package | Version | Purpose |
|---------|---------|---------|
| Nuxt | 4.0.0 | Framework |
| Vue | 3.5.13 | UI Framework |
| @nuxt/content | 3.8.2 | Content Management |
| nuxt-studio | 1.0.0-alpha.1 | Studio CMS |
| better-sqlite3 | 12.4.1 | Local Database |
| TypeScript | 5.7.2 | Type Safety |

## Notes

- Nuxt Studio is currently in **alpha** - expect changes and updates
- GitHub OAuth setup is required for full Studio functionality
- Content changes made through Studio will create commits in your repository
- The proof of concept uses SSR - can be adapted for static generation with `npm run generate`

## Resources

- [Nuxt Documentation](https://nuxt.com/docs)
- [Nuxt Content Documentation](https://content.nuxt.com)
- [Nuxt Studio Documentation](https://nuxt.studio)
- [Vue 3 Documentation](https://vuejs.org)
