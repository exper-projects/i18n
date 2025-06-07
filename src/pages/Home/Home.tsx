import React from 'react';

import FeatureIcon from '../../assets/icons/feature-icon.svg';

import styles from './Home.module.scss';

import { useIntlMessages } from '@/hooks/useIntlMessages';
import messages from './Home.messages';

const Home: React.FC = () => {
  const intlMessages = useIntlMessages(messages);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{intlMessages.welcomeToOurPlatform}</h1>
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
