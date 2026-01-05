# Docusaurus & Node.js Upgrade Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Upgrade Docusaurus to latest version and update minimum Node.js requirement to reduce 36 vulnerabilities (9 high, 21 moderate, 6 low).

**Architecture:** Direct dependency upgrade approach. Docusaurus 3.5.2 → Latest (3.9.2+) fixes webpack-dev-server, Babel, and transitive dependencies. Node.js >=18 → >=20 follows LTS recommendations and supports latest tooling.

**Tech Stack:** Node.js, npm, Docusaurus 3.x

---

## Task 1: Update Docusaurus Dependencies

**Files:**
- Modify: `package.json`

**Step 1: Install latest Docusaurus packages**

Run: `npm install @docusaurus/core@latest @docusaurus/preset-classic@latest`

Expected: npm updates package.json and package-lock.json. Installation completes without errors.

**Step 2: Verify installation**

Run: `npm audit`

Expected: Vulnerability count drops significantly (from 36 to minimal or zero).

**Step 3: Verify package.json was updated**

Read: `package.json` lines 17-19 should show:
- `"@docusaurus/core": "^3.9.2"` (or newer)
- `"@docusaurus/preset-classic": "^3.9.2"` (or newer)

**Step 4: Commit**

```bash
cd "c:\Users\James\Dev\pcs-docs"
git add package.json package-lock.json
git commit -m "upgrade: bump Docusaurus to latest (3.9.2+) to reduce vulnerabilities"
```

---

## Task 2: Update Node.js Minimum Version

**Files:**
- Modify: `package.json:44-46` (engines field)

**Step 1: Read current engines config**

Read: `package.json` engines section (line 44-46)

Current should show: `"node": ">=18.0"`

**Step 2: Update Node.js minimum to 20.x (LTS)**

Edit `package.json` to change:

```json
"engines": {
  "node": ">=20.0"
}
```

**Step 3: Verify the change**

Read: `package.json:44-46` to confirm it now says `">=20.0"`

**Step 4: Commit**

```bash
cd "c:\Users\James\Dev\pcs-docs"
git add package.json
git commit -m "upgrade: update minimum Node.js to >=20.0 for better security and tooling support"
```

---

## Task 3: Test Build & Dev Server

**Files:**
- Test: Full project build and dev server startup

**Step 1: Clear Docusaurus cache**

Run: `npm run clear`

Expected: Cache cleared without errors.

**Step 2: Run build**

Run: `npm run build`

Expected: Build completes successfully. No broken link errors, no type errors.

**Step 3: Start dev server**

Run: `npm start` (run for 10 seconds then Ctrl+C to stop)

Expected: Dev server starts on http://localhost:3000 without errors. Hot reload works.

**Step 4: Run type check**

Run: `npm run typecheck`

Expected: No TypeScript errors.

**Step 5: Verify audit is clean**

Run: `npm audit`

Expected: Output shows 0 vulnerabilities OR only low-severity items that don't affect production. Document any remaining issues with justification if needed.

**Step 6: Commit**

```bash
cd "c:\Users\James\Dev\pcs-docs"
git add .
git commit -m "test: verify build and dev server work after upgrades"
```

---

## Expected Outcomes

- **Before:** 36 vulnerabilities (9 high, 21 moderate, 6 low)
- **After:** 0-2 vulnerabilities (high and moderate eliminated)
- **Node.js:** Minimum requirement updated to 20.x (current LTS)
- **Build:** All tests pass, dev server runs cleanly, no broken links
- **Breaking Changes:** None expected - Docusaurus 3.5.2 → 3.9.2 is minor version bump with backwards compatibility

---

## Rollback Plan

If build fails:
1. Run: `git revert HEAD~2 --no-edit` (revert last 2 commits)
2. Run: `npm install` (reinstall original deps)
3. Investigate specific error and create new plan

---
