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
