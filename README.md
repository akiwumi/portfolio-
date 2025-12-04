# Portfolio Website

A modern, responsive portfolio website built with React and Vite.

## 🚀 Features

- Modern React architecture with Vite
- Responsive design
- Fast build times
- Optimized for production

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 🏗️ Build

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 🔄 Workflow

This project uses GitHub Actions for CI/CD:

- **CI Workflow**: Runs on every pull request and push to `main`
  - Installs dependencies
  - Runs linting (if configured)
  - Builds the project
  - Verifies build output

- **Deploy Preview**: Creates preview comments on pull requests

### Creating a Pull Request

1. Create a feature branch: `git checkout -b feature/your-feature-name`
2. Make your changes
3. Commit and push: `git push -u origin feature/your-feature-name`
4. Create a PR on GitHub - the template will guide you

See [CONTRIBUTING.md](.github/CONTRIBUTING.md) for detailed guidelines.

## 📁 Project Structure

```
portfolio2/
├── public/          # Static assets (images, etc.)
├── src/
│   ├── App.jsx      # Main application component
│   ├── main.jsx     # Application entry point
│   └── styles.css   # Global styles
├── .github/         # GitHub workflows and templates
└── package.json     # Dependencies and scripts
```

## 🚢 Deployment

This project is configured for deployment on Netlify. The build output is in the `dist/` directory.

## 📝 License

Private project - All rights reserved

