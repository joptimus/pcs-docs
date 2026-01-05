# UI/UX Modernization Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans or superpowers:subagent-driven-development to implement this plan task-by-task.

**Goal:** Modernize the PCS Employee Handbook UI with contemporary design patterns, enhanced visual hierarchy, improved typography, interactive components, and better information architecture.

**Architecture:** Phased approach building on Docusaurus's existing structure. Phase 1 updates global design tokens (colors, typography, spacing). Phase 2 redesigns the homepage with new sections and components. Phase 3 adds interactive documentation enhancements. All changes are backward-compatible with existing markdown content.

**Tech Stack:**
- Docusaurus 3.9.2 (static site generator)
- React 18.0.0 (components)
- CSS Modules (component styling)
- Infima framework (underlying theme system)
- TypeScript 5.5.2 (type safety)

---

## Phase 1: Design Foundation (Global Styling & Typography)

### Task 1: Update Global Color Palette & Variables

**Files:**
- Modify: `src/css/custom.css`

**Step 1: Add new color variables to custom.css**

Add these CSS custom properties after the existing color definitions:

```css
/* Enhanced Teal Palette */
:root {
  /* Primary Teal Gradient */
  --ifm-color-primary: #00A6AA;
  --ifm-color-primary-dark: #009295;
  --ifm-color-primary-darker: #008080;
  --ifm-color-primary-darkest: #006666;
  --ifm-color-primary-light: #33B4B6;
  --ifm-color-primary-lighter: #66C2C4;
  --ifm-color-primary-lightest: #99D1D2;

  /* Semantic Colors */
  --ifm-color-success: #10B981;
  --ifm-color-warning: #F59E0B;
  --ifm-color-danger: #EF4444;
  --ifm-color-info: #3B82F6;

  /* Enhanced Spacing */
  --ifm-spacing-unit: 8px;

  /* Shadows */
  --ifm-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --ifm-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --ifm-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --ifm-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);

  /* Transitions */
  --ifm-transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --ifm-transition-base: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  --ifm-transition-slow: 350ms cubic-bezier(0.4, 0, 0.2, 1);
}

[data-theme='dark'] {
  --ifm-color-primary: #25c2a0;
  --ifm-color-primary-dark: #20a08a;
  --ifm-color-primary-darker: #1a7f6f;
  --ifm-color-primary-darkest: #156b5e;
}
```

**Step 2: Verify the file saves correctly**

Check that the custom.css file contains the new variables at the end.

**Step 3: Update typography settings**

Add font family improvements to custom.css:

```css
:root {
  /* Modern Typography */
  --ifm-font-family-base: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  --ifm-font-family-monospace: 'Menlo', 'Monaco', 'Courier New', monospace;

  --ifm-font-size-base: 16px;
  --ifm-line-height-base: 1.6;

  --ifm-heading-font-weight: 600;
}
```

**Step 4: Build to verify no CSS errors**

Run: `npm run build`
Expected: Build succeeds with no CSS errors

**Step 5: Commit**

```bash
git add src/css/custom.css
git commit -m "feat: add modern color palette and typography system"
```

---

### Task 2: Update Button & Interactive Element Styles

**Files:**
- Modify: `src/css/custom.css`

**Step 1: Add button styling rules**

Add to custom.css:

```css
/* Button Enhancements */
.button {
  border-radius: 8px;
  font-weight: 500;
  transition: all var(--ifm-transition-base);
  box-shadow: var(--ifm-shadow-sm);
}

.button:hover {
  box-shadow: var(--ifm-shadow-lg);
  transform: translateY(-2px);
}

.button.button--primary {
  background: linear-gradient(135deg, var(--ifm-color-primary) 0%, var(--ifm-color-primary-light) 100%);
  border: none;
}

.button.button--primary:hover {
  background: linear-gradient(135deg, var(--ifm-color-primary-dark) 0%, var(--ifm-color-primary) 100%);
}

.button.button--secondary {
  border: 2px solid var(--ifm-color-primary);
  color: var(--ifm-color-primary);
  background: transparent;
}

.button.button--secondary:hover {
  background: var(--ifm-color-primary-lightest);
}

/* Link Hover Effects */
a {
  transition: color var(--ifm-transition-fast);
}

a:hover {
  text-decoration: underline;
}
```

**Step 2: Build to verify styles apply**

Run: `npm run build`
Expected: Build succeeds

**Step 3: Test locally**

Run: `npm start`
Navigate to homepage and verify buttons have gradient backgrounds and hover animations.
Close dev server (Ctrl+C).

**Step 4: Commit**

```bash
git add src/css/custom.css
git commit -m "feat: add modern button styles with gradients and animations"
```

---

### Task 3: Add Card & Callout Component Base Styles

**Files:**
- Modify: `src/css/custom.css`

**Step 1: Add card styling**

Add to custom.css:

```css
/* Card Components */
.card {
  border: none;
  border-radius: 12px;
  box-shadow: var(--ifm-shadow-md);
  background: var(--ifm-color-background-secondary);
  transition: all var(--ifm-transition-base);
  padding: 1.5rem;
}

.card:hover {
  box-shadow: var(--ifm-shadow-lg);
  transform: translateY(-4px);
}

/* Callout/Alert Styles */
.alert {
  border-left: 4px solid;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
}

.alert--info {
  border-left-color: var(--ifm-color-info);
  background-color: rgba(59, 130, 246, 0.1);
  color: var(--ifm-color-info);
}

.alert--warning {
  border-left-color: var(--ifm-color-warning);
  background-color: rgba(245, 158, 11, 0.1);
  color: var(--ifm-color-warning);
}

.alert--danger {
  border-left-color: var(--ifm-color-danger);
  background-color: rgba(239, 68, 68, 0.1);
  color: var(--ifm-color-danger);
}

.alert--success {
  border-left-color: var(--ifm-color-success);
  background-color: rgba(16, 185, 129, 0.1);
  color: var(--ifm-color-success);
}
```

**Step 2: Build and verify**

Run: `npm run build`
Expected: Build succeeds

**Step 3: Commit**

```bash
git add src/css/custom.css
git commit -m "feat: add card and semantic alert styles"
```

---

## Phase 2: Homepage Redesign

### Task 4: Create Reusable Category Card Component

**Files:**
- Create: `src/components/CategoryCard/index.tsx`
- Create: `src/components/CategoryCard/styles.module.css`

**Step 1: Create CategoryCard component**

Create `src/components/CategoryCard/index.tsx`:

```typescript
import React from 'react';
import { useHistory } from '@docusaurus/router';
import styles from './styles.module.css';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: string;
  color: 'primary' | 'success' | 'warning' | 'danger' | 'info';
  href: string;
}

export default function CategoryCard({
  title,
  description,
  icon,
  color,
  href,
}: CategoryCardProps): JSX.Element {
  const history = useHistory();

  return (
    <div
      className={`${styles.card} ${styles[`card--${color}`]}`}
      onClick={() => history.push(href)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') history.push(href);
      }}
    >
      <div className={styles.iconWrapper}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.arrow}>→</div>
    </div>
  );
}
```

**Step 2: Create styles for CategoryCard**

Create `src/components/CategoryCard/styles.module.css`:

```css
.card {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 12px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  background: var(--ifm-color-background-secondary);
  border: 2px solid transparent;
  min-height: 200px;
  position: relative;
  overflow: hidden;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, currentColor, transparent);
  opacity: 0;
  transition: opacity var(--ifm-transition-base);
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.card:hover::before {
  opacity: 1;
}

.card--primary {
  color: var(--ifm-color-primary);
}

.card--success {
  color: var(--ifm-color-success);
}

.card--warning {
  color: var(--ifm-color-warning);
}

.card--danger {
  color: var(--ifm-color-danger);
}

.card--info {
  color: var(--ifm-color-info);
}

.iconWrapper {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 8px;
  background: rgba(0, 166, 170, 0.1);
}

.card--success .iconWrapper {
  background: rgba(16, 185, 129, 0.1);
}

.card--warning .iconWrapper {
  background: rgba(245, 158, 11, 0.1);
}

.card--danger .iconWrapper {
  background: rgba(239, 68, 68, 0.1);
}

.card--info .iconWrapper {
  background: rgba(59, 130, 246, 0.1);
}

.title {
  margin: 1rem 0 0.5rem 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--ifm-heading-color);
}

.description {
  flex: 1;
  margin: 0;
  color: var(--ifm-color-content);
  font-size: 0.95rem;
  line-height: 1.6;
}

.arrow {
  margin-top: 1rem;
  font-size: 1.5rem;
  opacity: 0;
  transform: translateX(-8px);
  transition: all var(--ifm-transition-base);
}

.card:hover .arrow {
  opacity: 1;
  transform: translateX(0);
}
```

**Step 3: Verify component exports**

Check that both files exist and have correct syntax.

**Step 4: Commit**

```bash
git add src/components/CategoryCard/
git commit -m "feat: create CategoryCard reusable component"
```

---

### Task 5: Create Essential Resources Component

**Files:**
- Create: `src/components/EssentialResources/index.tsx`
- Create: `src/components/EssentialResources/styles.module.css`

**Step 1: Create EssentialResources component**

Create `src/components/EssentialResources/index.tsx`:

```typescript
import React from 'react';
import { useHistory } from '@docusaurus/router';
import styles from './styles.module.css';

interface ResourceItem {
  title: string;
  description: string;
  emoji: string;
  href: string;
}

const resources: ResourceItem[] = [
  {
    title: 'Man Overboard Procedures',
    description: 'Critical safety procedures for man overboard situations',
    emoji: '🚨',
    href: '/docs/man-overboard',
  },
  {
    title: 'Safety Checklists',
    description: 'Daily and operational safety checklists for all crew',
    emoji: '✅',
    href: '/docs/services/boat-handling-training',
  },
  {
    title: 'Emergency Contacts',
    description: 'Quick access to emergency numbers and protocols',
    emoji: '📞',
    href: '/docs/company',
  },
];

export default function EssentialResources(): JSX.Element {
  const history = useHistory();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Essential Resources</h2>
        <p className={styles.subtitle}>Quick access to critical information</p>
        <div className={styles.grid}>
          {resources.map((resource, idx) => (
            <div
              key={idx}
              className={styles.resourceBox}
              onClick={() => history.push(resource.href)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') history.push(resource.href);
              }}
            >
              <div className={styles.emoji}>{resource.emoji}</div>
              <h3 className={styles.resourceTitle}>{resource.title}</h3>
              <p className={styles.resourceDesc}>{resource.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Create styles for EssentialResources**

Create `src/components/EssentialResources/styles.module.css`:

```css
.section {
  padding: 4rem 2rem;
  background: linear-gradient(135deg, rgba(0, 166, 170, 0.05) 0%, rgba(37, 194, 160, 0.05) 100%);
  border-top: 1px solid var(--ifm-color-emphasis-300);
  border-bottom: 1px solid var(--ifm-color-emphasis-300);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.title {
  margin: 0 0 0.5rem 0;
  font-size: 2rem;
  font-weight: 700;
  color: var(--ifm-heading-color);
  text-align: center;
}

.subtitle {
  margin: 0 0 2rem 0;
  font-size: 1.1rem;
  color: var(--ifm-color-content);
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.resourceBox {
  padding: 2rem;
  border-radius: 12px;
  background: var(--ifm-color-background-secondary);
  box-shadow: var(--ifm-shadow-md);
  cursor: pointer;
  transition: all var(--ifm-transition-base);
  border: 1px solid var(--ifm-color-emphasis-200);
  display: flex;
  flex-direction: column;
}

.resourceBox:hover {
  transform: translateY(-6px);
  box-shadow: var(--ifm-shadow-lg);
  border-color: var(--ifm-color-primary);
}

.emoji {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.resourceTitle {
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--ifm-heading-color);
}

.resourceDesc {
  margin: 0;
  font-size: 0.95rem;
  color: var(--ifm-color-content);
  line-height: 1.5;
  flex: 1;
}

@media (max-width: 768px) {
  .section {
    padding: 2rem 1rem;
  }

  .title {
    font-size: 1.5rem;
  }

  .grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
```

**Step 3: Verify component**

Check files exist with correct syntax.

**Step 4: Commit**

```bash
git add src/components/EssentialResources/
git commit -m "feat: create EssentialResources component"
```

---

### Task 6: Redesign Homepage (index.tsx)

**Files:**
- Modify: `src/pages/index.tsx`

**Step 1: Replace homepage with new design**

Replace entire `src/pages/index.tsx` with:

```typescript
import React from 'react';
import Layout from '@theme/Layout';
import { useHistory } from '@docusaurus/router';
import CategoryCard from '../components/CategoryCard';
import EssentialResources from '../components/EssentialResources';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  const history = useHistory();

  return (
    <Layout
      title="Welcome"
      description="Pro Captain Staffing Employee Handbook - Training, Safety & Operations"
    >
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Pro Captain Staffing</h1>
          <p className={styles.heroSubtitle}>
            Let us provide a safe and enjoyable day on the water
          </p>
          <p className={styles.heroDescription}>
            Your comprehensive employee handbook for training, safety protocols,
            and operational excellence.
          </p>
          <div className={styles.heroCtas}>
            <button
              className={styles.ctaPrimary}
              onClick={() => history.push('/docs')}
            >
              <span>📚</span> Get Started
            </button>
            <button
              className={styles.ctaSecondary}
              onClick={() => history.push('/docs')}
            >
              Browse Handbook
            </button>
          </div>
        </div>
        <div className={styles.heroIllustration}>
          <div className={styles.illustrationPlaceholder}>🚤</div>
        </div>
      </section>

      {/* Quick Navigation Section */}
      <section className={styles.categories}>
        <div className={styles.categoriesContainer}>
          <h2 className={styles.categoriesTitle}>Documentation Categories</h2>
          <div className={styles.cardsGrid}>
            <CategoryCard
              title="Personal Safety"
              description="Fire, weather, emergency procedures, and safety protocols"
              icon="🛡️"
              color="danger"
              href="/docs/personal-safety"
            />
            <CategoryCard
              title="Environmental"
              description="Pollution control, sewage management, and compliance"
              icon="🌿"
              color="success"
              href="/docs/environmental"
            />
            <CategoryCard
              title="Services"
              description="Captain services, boat handling, and operational checklists"
              icon="⚓"
              color="primary"
              href="/docs/services"
            />
            <CategoryCard
              title="Uniforms & Gear"
              description="Required attire and equipment specifications"
              icon="👔"
              color="info"
              href="/docs/uniforms"
            />
            <CategoryCard
              title="Company"
              description="About us, commitment, and contact information"
              icon="🏢"
              color="warning"
              href="/docs/company"
            />
            <CategoryCard
              title="Compliance"
              description="Regulations, qualifications, and certifications"
              icon="📋"
              color="primary"
              href="/docs/human-factors"
            />
          </div>
        </div>
      </section>

      {/* Essential Resources */}
      <EssentialResources />

      {/* For New Employees */}
      <section className={styles.onboarding}>
        <div className={styles.onboardingContainer}>
          <h2 className={styles.onboardingTitle}>New Employee Onboarding</h2>
          <p className={styles.onboardingSubtitle}>
            Follow this recommended reading order
          </p>
          <div className={styles.stepsGrid}>
            {[
              {
                num: 1,
                title: 'Welcome & Company',
                desc: 'Learn about Pro Captain Staffing and our mission',
              },
              {
                num: 2,
                title: 'Safety Essentials',
                desc: 'Understand critical safety protocols and procedures',
              },
              {
                num: 3,
                title: 'Boat Operations',
                desc: 'Master boat handling, services, and operational checklists',
              },
              {
                num: 4,
                title: 'Uniforms & Standards',
                desc: 'Know dress code and equipment requirements',
              },
            ].map((step) => (
              <div key={step.num} className={styles.step}>
                <div className={styles.stepNumber}>{step.num}</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
```

**Step 2: Create homepage styles**

Create/replace `src/pages/index.module.css`:

```css
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, var(--ifm-color-primary) 0%, var(--ifm-color-primary-light) 100%);
  color: white;
}

.heroContent {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.heroTitle {
  font-size: 3.5rem;
  font-weight: 800;
  margin: 0;
  line-height: 1.2;
}

.heroSubtitle {
  font-size: 1.5rem;
  margin: 0;
  opacity: 0.95;
  font-weight: 500;
}

.heroDescription {
  font-size: 1.1rem;
  margin: 1rem 0 0 0;
  opacity: 0.9;
  line-height: 1.6;
}

.heroCtas {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.ctaPrimary,
.ctaSecondary {
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all var(--ifm-transition-base);
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.ctaPrimary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid white;
}

.ctaPrimary:hover {
  background: white;
  color: var(--ifm-color-primary);
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.ctaSecondary {
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.5);
}

.ctaSecondary:hover {
  border-color: white;
  background: rgba(255, 255, 255, 0.1);
}

.heroIllustration {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
}

.illustrationPlaceholder {
  font-size: 200px;
  opacity: 0.3;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.categories {
  padding: 4rem 2rem;
  background: var(--ifm-color-background);
}

.categoriesContainer {
  max-width: 1200px;
  margin: 0 auto;
}

.categoriesTitle {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin: 0 0 1rem 0;
  color: var(--ifm-heading-color);
}

.cardsGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.onboarding {
  padding: 4rem 2rem;
  background: linear-gradient(135deg, rgba(0, 166, 170, 0.05) 0%, rgba(37, 194, 160, 0.05) 100%);
}

.onboardingContainer {
  max-width: 1200px;
  margin: 0 auto;
}

.onboardingTitle {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin: 0 0 0.5rem 0;
  color: var(--ifm-heading-color);
}

.onboardingSubtitle {
  text-align: center;
  color: var(--ifm-color-content);
  margin: 0 0 2rem 0;
  font-size: 1.1rem;
}

.stepsGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.step {
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
  background: var(--ifm-color-background-secondary);
  border-radius: 12px;
  border: 2px solid var(--ifm-color-emphasis-200);
  transition: all var(--ifm-transition-base);
}

.step:hover {
  border-color: var(--ifm-color-primary);
  box-shadow: var(--ifm-shadow-lg);
}

.stepNumber {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--ifm-color-primary), var(--ifm-color-primary-light));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
}

.stepContent {
  display: flex;
  flex-direction: column;
}

.stepTitle {
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--ifm-heading-color);
}

.stepDesc {
  margin: 0;
  color: var(--ifm-color-content);
  line-height: 1.5;
}

@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr;
    padding: 3rem 1rem;
  }

  .heroTitle {
    font-size: 2rem;
  }

  .heroSubtitle {
    font-size: 1.1rem;
  }

  .heroCtas {
    flex-direction: column;
  }

  .ctaPrimary,
  .ctaSecondary {
    width: 100%;
    justify-content: center;
  }

  .heroIllustration {
    display: none;
  }

  .categoriesTitle,
  .onboardingTitle {
    font-size: 1.75rem;
  }

  .cardsGrid,
  .stepsGrid {
    grid-template-columns: 1fr;
  }
}
```

**Step 3: Verify homepage builds**

Run: `npm run build`
Expected: Build succeeds

**Step 4: Test homepage locally**

Run: `npm start`
Navigate to http://localhost:3000 and verify:
- Hero section displays with gradient background
- Category cards are visible and clickable
- Essential Resources section shows
- Onboarding steps display correctly
- Responsive on mobile (resize browser)

Close dev server.

**Step 5: Commit**

```bash
git add src/pages/index.tsx src/pages/index.module.css
git commit -m "feat: redesign homepage with modern layout and components"
```

---

## Phase 3: Documentation Enhancements

### Task 7: Create Custom Callout Components

**Files:**
- Create: `src/components/Callout/index.tsx`
- Create: `src/components/Callout/styles.module.css`

**Step 1: Create Callout component**

Create `src/components/Callout/index.tsx`:

```typescript
import React, { ReactNode } from 'react';
import styles from './styles.module.css';

type CalloutType = 'info' | 'warning' | 'danger' | 'success';

interface CalloutProps {
  type: CalloutType;
  title: string;
  children: ReactNode;
}

const icons: Record<CalloutType, string> = {
  info: 'ℹ️',
  warning: '⚠️',
  danger: '🚨',
  success: '✅',
};

export default function Callout({ type, title, children }: CalloutProps): JSX.Element {
  return (
    <div className={`${styles.callout} ${styles[`callout--${type}`]}`}>
      <div className={styles.header}>
        <span className={styles.icon}>{icons[type]}</span>
        <h4 className={styles.title}>{title}</h4>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
```

**Step 2: Create Callout styles**

Create `src/components/Callout/styles.module.css`:

```css
.callout {
  margin: 1.5rem 0;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid;
}

.callout--info {
  background-color: rgba(59, 130, 246, 0.1);
  border-left-color: var(--ifm-color-info);
  color: var(--ifm-color-info);
}

.callout--warning {
  background-color: rgba(245, 158, 11, 0.1);
  border-left-color: var(--ifm-color-warning);
  color: var(--ifm-color-warning);
}

.callout--danger {
  background-color: rgba(239, 68, 68, 0.1);
  border-left-color: var(--ifm-color-danger);
  color: var(--ifm-color-danger);
}

.callout--success {
  background-color: rgba(16, 185, 129, 0.1);
  border-left-color: var(--ifm-color-success);
  color: var(--ifm-color-success);
}

.header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.title {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: var(--ifm-heading-color);
}

.content {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--ifm-color-content);
}

.content p {
  margin: 0;
}
```

**Step 3: Export component for use in docs**

Update or create `src/components/index.ts`:

```typescript
export { default as Callout } from './Callout';
export { default as CategoryCard } from './CategoryCard';
export { default as EssentialResources } from './EssentialResources';
```

**Step 4: Verify component**

Check files exist and have correct syntax.

**Step 5: Commit**

```bash
git add src/components/Callout/ src/components/index.ts
git commit -m "feat: create reusable Callout component for alerts and highlights"
```

---

### Task 8: Update Documentation Page Styling

**Files:**
- Modify: `src/css/custom.css`

**Step 1: Add documentation-specific styles**

Add to `src/css/custom.css`:

```css
/* Documentation Page Enhancements */
.markdown {
  line-height: 1.8;
}

.markdown h2 {
  margin-top: 2rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid var(--ifm-color-primary-lighter);
  padding-bottom: 0.5rem;
}

.markdown h3 {
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  color: var(--ifm-color-primary);
}

.markdown code {
  background: var(--ifm-color-emphasis-100);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.9em;
  font-weight: 500;
  color: var(--ifm-color-danger);
}

.markdown pre {
  background: var(--ifm-color-emphasis-100);
  border-radius: 8px;
  padding: 1rem;
  overflow-x: auto;
  box-shadow: var(--ifm-shadow-md);
}

.markdown ol,
.markdown ul {
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.markdown li {
  margin-bottom: 0.5rem;
}

.markdown blockquote {
  background: var(--ifm-color-primary-lightest);
  border-left: 4px solid var(--ifm-color-primary);
  padding: 1rem;
  margin-left: 0;
  margin-right: 0;
  border-radius: 4px;
}

.markdown img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: var(--ifm-shadow-lg);
  margin: 1rem 0;
}

/* Sidebar Enhancements */
.sidebar {
  background: var(--ifm-color-background-secondary);
}

.sidebar__item {
  border-radius: 6px;
  margin-bottom: 0.25rem;
}

.sidebar__item--active {
  background: linear-gradient(90deg, var(--ifm-color-primary-lighter), transparent);
  border-left: 3px solid var(--ifm-color-primary);
  padding-left: calc(var(--ifm-spacing-horizontal) - 3px);
}

/* Breadcrumb Enhancement */
.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  background: var(--ifm-color-background-secondary);
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border-left: 3px solid var(--ifm-color-primary);
}

.breadcrumbs__item::after {
  content: '→';
  margin-left: 0.5rem;
}

.breadcrumbs__item:last-child::after {
  content: '';
  margin-left: 0;
}

/* Table Styling */
.markdown table {
  border-collapse: collapse;
  width: 100%;
  margin: 1.5rem 0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--ifm-shadow-md);
}

.markdown table th {
  background: linear-gradient(135deg, var(--ifm-color-primary), var(--ifm-color-primary-light));
  color: white;
  padding: 1rem;
  font-weight: 600;
  text-align: left;
}

.markdown table td {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--ifm-color-emphasis-200);
}

.markdown table tr:hover {
  background: var(--ifm-color-primary-lightest);
}
```

**Step 2: Build and verify**

Run: `npm run build`
Expected: Build succeeds

**Step 3: Commit**

```bash
git add src/css/custom.css
git commit -m "feat: enhance documentation styling with modern typography and spacing"
```

---

### Task 9: Add Sticky Table of Contents to Docs

**Files:**
- Modify: `docusaurus.config.ts`

**Step 1: Update Docusaurus config for TOC**

Open `docusaurus.config.ts` and find the `docusaurus` preset config. Ensure the `docs` plugin is configured with:

```typescript
docs: {
  // ... existing config ...
  editUrl: 'https://github.com/your-repo/pcs-docs/tree/main',
  showLastUpdateAuthor: false,
  showLastUpdateTime: false,
  sidebarPath: require.resolve('./sidebars.ts'),
},
```

Then update the theme config to include:

```typescript
theme: {
  customCss: require.resolve('./src/css/custom.css'),
  docs: {
    sidebar: {
      hideable: true,
      autoCollapseCategories: true,
    },
    versionBanner: {
      baseUrl: '/',
      banner: '',
    },
  },
  tableOfContents: {
    minHeadingLevel: 2,
    maxHeadingLevel: 4,
  },
},
```

**Step 2: Verify config syntax**

Check that the file is valid TypeScript/JSON.

**Step 3: Build and test**

Run: `npm run build`
Expected: Build succeeds

Test locally:
Run: `npm start`
Navigate to a documentation page and verify the table of contents appears on the right side (desktop) and collapses on mobile.

Close dev server.

**Step 4: Commit**

```bash
git add docusaurus.config.ts
git commit -m "feat: enable sticky table of contents for documentation pages"
```

---

## Phase 4: Final Polish & Testing

### Task 10: Test Responsive Design & Accessibility

**Files:**
- No code changes; testing only

**Step 1: Test responsive breakpoints**

Run: `npm start`

Test at these breakpoints:
- Desktop (1200px+): All sections visible
- Tablet (768px-1199px): Cards 2 per row
- Mobile (< 768px): Cards full width, single column

Verify:
- Navigation collapses on mobile
- Hero section is readable on all sizes
- Cards don't overflow
- Text remains readable

**Step 2: Test accessibility**

Use keyboard navigation:
- Tab through all interactive elements (buttons, links)
- Verify all buttons are focusable
- Verify focus indicators are visible
- Verify color contrast is sufficient

Check in browser DevTools or a11y checking tool.

**Step 3: Test dark mode**

Toggle dark mode in UI and verify:
- All colors remain readable
- Gradient backgrounds still visible
- No broken styles

**Step 4: Verify build & serve**

Run: `npm run build`
Run: `npm run serve`
Test that the production build renders correctly.

Close dev server.

**Step 5: Document results**

No commit needed; testing only.

---

### Task 11: Final Build, Verification & Merge

**Files:**
- No code changes; integration only

**Step 1: Run full build**

Run: `npm run build`
Expected: Build succeeds with no errors

**Step 2: Verify no broken links**

Check build output for any broken link warnings. Docusaurus will fail the build if internal links are broken (`onBrokenLinks: 'throw'`). If any exist, fix them.

**Step 3: Verify TypeScript**

Run: `npm run typecheck`
Expected: No type errors

**Step 4: Final git status**

Run: `git status`
Expected: Only expected files modified/created

**Step 5: View all commits**

Run: `git log --oneline -n 15`
Verify commits are logical and well-formatted.

**Step 6: Ready for merge**

All tasks complete. The feature branch `feature/ui-modernization` is ready to merge into `main`.

---

## Summary

**Total Tasks:** 11
**Phases:** 4 (Design Foundation → Homepage → Documentation → Polish)
**Estimated Commits:** 9 feature commits + 1 .gitignore commit

**Next Steps After Implementation:**
1. Merge branch to main: `git checkout main && git merge feature/ui-modernization`
2. Delete worktree: `git worktree remove .worktrees/ui-modernization`
3. Deploy to Netlify (automatic on main push)
