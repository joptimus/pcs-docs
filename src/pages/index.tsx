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
              onClick={() => history.push('/docs/intro')}
            >
              <span>📚</span> Get Started
            </button>
            <button
              className={styles.ctaSecondary}
              onClick={() => history.push('/docs/intro')}
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
              href="/docs/personal-safety/"
            />
            <CategoryCard
              title="Environmental"
              description="Pollution control, sewage management, and compliance"
              icon="🌿"
              color="success"
              href="/docs/environmental/"
            />
            <CategoryCard
              title="Services"
              description="Captain services, boat handling, and operational checklists"
              icon="⚓"
              color="primary"
              href="/docs/services/"
            />
            <CategoryCard
              title="Uniforms & Gear"
              description="Required attire and equipment specifications"
              icon="👔"
              color="info"
              href="/docs/uniforms/"
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
