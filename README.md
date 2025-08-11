# iOS-Styled Resume Website

A beautiful, responsive resume website built with React and Tailwind CSS, featuring an iPhone mockup with iOS design elements.

## Features

- 📱 **iPhone Mockup**: Realistic iPhone frame with status bar and notch
- 🌙 **Dark Mode**: iOS dark mode design with authentic colors and styling
- 🎨 **iOS Design Language**: Follows Apple's Human Interface Guidelines
- 📱 **Responsive**: Scales beautifully on desktop and mobile devices
- ⚡ **Smooth Interactions**: iOS-style tap animations and transitions
- 🎯 **SF Symbols**: Custom SVG icons matching iOS design

## Tech Stack

- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **PostCSS** - CSS processing

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   The app will automatically open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Or connect to GitHub:**
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Automatic deployments on every push!

### Option 2: Netlify

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

3. **Or drag & drop:**
   - Run `npm run build`
   - Drag the `dist` folder to [netlify.com](https://netlify.com)

### Option 3: GitHub Pages

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Add resume website"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository settings
   - Scroll to "Pages" section
   - Select "GitHub Actions" as source
   - The workflow will automatically deploy

### Option 4: Firebase Hosting

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize Firebase:**
   ```bash
   firebase login
   firebase init hosting
   ```

3. **Deploy:**
   ```bash
   npm run build
   firebase deploy
   ```

## Design Features

### iOS Design Elements
- **Status Bar**: Real-time clock, cellular, WiFi, and battery indicators
- **Navigation Bar**: iOS-style header with profile information
- **Grouped Lists**: Rounded corners with subtle separators
- **SF Symbols**: Custom SVG icons matching iOS design
- **Typography**: San Francisco font family
- **Colors**: Authentic iOS dark mode palette

### Interactive Elements
- Smooth scrolling with hidden scrollbars
- iOS-style tap animations
- Hover effects on interactive elements
- Responsive iPhone frame scaling

## Customization

The resume content is easily customizable in the `resume.jsx` file. The component structure includes:

- **Contact Information**: Phone, email, social links
- **Professional Summary**: Career overview
- **Skills**: Technical skills organized by category
- **Work Experience**: Detailed job history with achievements
- **Education**: Academic background

## Browser Support

- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers

## License

MIT License - feel free to use this template for your own resume!
