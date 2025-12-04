# Contributing to Portfolio

Thank you for your interest in contributing! This document provides guidelines for contributing to this project.

## Development Workflow

### 1. Create a Feature Branch
Always create a new branch from `main` for your changes:

```bash
git checkout main
git pull origin main
git checkout -b feature/your-feature-name
```

### 2. Make Your Changes
- Write clean, readable code
- Follow the existing code style
- Test your changes locally

### 3. Commit Your Changes
Use clear, descriptive commit messages:

```bash
git add .
git commit -m "Add: description of your changes"
```

### 4. Push and Create Pull Request
```bash
git push -u origin feature/your-feature-name
```

Then create a pull request on GitHub from your branch to `main`.

## Pull Request Process

1. **Fill out the PR template** - Provide all requested information
2. **Ensure CI passes** - All checks must pass before merging
3. **Request review** - Tag relevant reviewers if needed
4. **Address feedback** - Make requested changes and update the PR

## Code Style

- Use meaningful variable and function names
- Keep components focused and reusable
- Follow React best practices
- Maintain consistent formatting

## Testing

Before submitting a PR:
- [ ] Run `npm run build` to ensure the project builds successfully
- [ ] Test your changes in the browser
- [ ] Check for console errors
- [ ] Verify responsive design on different screen sizes

## Questions?

Feel free to open an issue if you have questions or need clarification.

