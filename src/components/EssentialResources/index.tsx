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
