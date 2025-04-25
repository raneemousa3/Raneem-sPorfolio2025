# Portfolio Website

A modern portfolio website built with Next.js, TypeScript, and CSS Modules.

## Features

- Responsive design that works on all devices
- Dynamic hero section with background removal for profile photos
- Smooth scrolling navigation
- Projects showcase
- Contact form
- Starry background animation

## Getting Started

### Prerequisites

- Node.js 14.x or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables
Create a `.env.local` file in the root directory with the following content:
```
NEXT_PUBLIC_REMOVE_BG_API_KEY=your-api-key-here
```

### Setting up the remove.bg API Key

The CutoutHero component uses the remove.bg API to automatically remove backgrounds from uploaded images. To enable this feature:

1. Sign up for a remove.bg account at [https://www.remove.bg/api](https://www.remove.bg/api)
2. Get your API key from your account dashboard
3. Replace `your-api-key-here` in the `.env.local` file with your actual API key

If you don't set up the API key, the component will fall back to displaying images without background removal.

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### Changing the Profile Photo

1. Place your profile photo in the `public/images` directory
2. Update the `imageUrl` state in `src/components/CutoutHero.tsx` to point to your image
3. Alternatively, use the "Change Photo" button that appears when hovering over the image

### Modifying the Content

Edit the text content in the following files:
- `src/components/CutoutHero.tsx` - Hero section content
- `src/components/ProjectsSection.tsx` - Projects section content
- `src/app/page.tsx` - Main page layout and content

## Deployment

This project can be deployed on Vercel or any other platform that supports Next.js applications.

```bash
npm run build
# or
yarn build
```

## License

This project is licensed under the MIT License - see the LICENSE file for details. # Raneem-sPorfolio2025
