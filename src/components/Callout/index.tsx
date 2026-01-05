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
