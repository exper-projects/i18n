import React from 'react';
import styles from './Home.module.scss';
import FeatureIcon from '../../assets/icons/feature-icon.svg';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Our Platform</h1>
      <div className={styles.content}>
        <div className={styles.card}>
          <FeatureIcon className={styles.icon} />
          <h2>Feature 1</h2>
          <p>Description of the first amazing feature of our platform.</p>
        </div>
        <div className={styles.card}>
          <FeatureIcon className={styles.icon} />
          <h2>Feature 2</h2>
          <p>Description of the second amazing feature of our platform.</p>
        </div>
        <div className={styles.card}>
          <FeatureIcon className={styles.icon} />
          <h2>Feature 3</h2>
          <p>Description of the third amazing feature of our platform.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
