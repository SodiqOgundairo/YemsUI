# NPM Package Publishing Checklist for @yems-ui/core

## Current Status: ✅ ~70% Complete

---

## ✅ Already Done

- [x] TypeScript configuration (strict mode enabled)
- [x] tsup build configuration with CJS & ESM formats
- [x] Proper package.json structure with exports
- [x] Peer dependencies declared
- [x] All components properly exported from index.ts
- [x] Good README with features and installation
- [x] Contributing guidelines
- [x] Git repository configured

---

## 📋 Critical Tasks (Must Complete Before Publishing)

### 1. **Register on NPM Registry**

- [ ] Create NPM account at https://www.npmjs.com/signup
- [ ] Verify email
- [ ] Set up 2FA for security
- [ ] Note: `@yems-ui/core` is a scoped package and requires npm org setup

### 2. **Update Package Name Strategy** ⚠️

- **Current**: `@yems-ui/core` (scoped package)
- **Goal**: `npm install yems-ui` to work
- **Options**:
  - **Option A (Recommended)**: Change package name to `yems-ui` in package.json
  - **Option B**: Keep `@yems-ui/core`, users install with `npm install @yems-ui/core`
  - **Option C**: Create monorepo with multiple packages

### 3. **Update package.json**

- [ ] Set correct homepage, bugs, and repository URLs
- [ ] Add publishConfig for scoped packages
- [ ] Ensure keywords are SEO-friendly
- [ ] Add main entry point verification

### 4. **Create .npmignore File**

- [ ] Prevent unnecessary files from being published
- [ ] Exclude: playground/, .github/, src/, tsconfig.json, etc.

### 5. **Prepare for Multi-Framework Support**

- [ ] Verify components work with vanilla React
- [ ] Document framework integration (Next.js, Vite, Remix, etc.)
- [ ] Test with different build setups

### 6. **Mobile/Framework Compatibility**

- [ ] Verify React Native compatibility (or clarify limitations)
- [ ] Test in multiple environments

### 7. **Build & Publish**

- [ ] Run `npm run build` to generate dist/
- [ ] Test locally with `npm link` or verdaccio
- [ ] Run `npm publish` (use `--dry-run` first)

---

## 📦 Optional but Recommended

- [ ] Add GitHub Actions CI/CD for automated testing
- [ ] Set up automated version bumping (semantic-release)
- [ ] Add CHANGELOG.md for version history
- [ ] Add LICENSE file (already MIT)
- [ ] Add SECURITY.md for security policies
- [ ] Add badges to README (build status, npm version, etc.)
- [ ] Set up automated npm package size monitoring
- [ ] Create storybook/documentation site
- [ ] Add unit tests before publishing

---

## 🔍 Current Issues to Fix

1. **Package Name Ambiguity**: Decide on `yems-ui` vs `@yems-ui/core`
2. **Installation Instructions**: Update README with final npm install command
3. **Missing .npmignore**: Reduce bundle size by ignoring dev files
4. **ESLint Config**: Currently missing (but not critical)
5. **Git tags**: No version tags for tracking releases

---

## 🚀 Publishing Commands (When Ready)

```bash
# Test build locally
npm run build

# Dry run (see what would be published)
npm publish --dry-run

# Actual publish
npm publish

# For scoped packages
npm publish --access=public  # Make it publicly accessible
```

---

## 📖 Post-Publishing

- [ ] Add npm badge to README
- [ ] Announce on social media
- [ ] Set up documentation site (GitHub Pages or Vercel)
- [ ] Create migration guide for future versions
- [ ] Monitor for issues and support requests
