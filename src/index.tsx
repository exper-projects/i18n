import React from 'react';

import { createRoot } from 'react-dom/client';
import './styles.scss';
import { IntlProvider } from 'react-intl';

import enJson from '../src/languages/en.json';
import viJson from '../src/languages/vi.json';

import App from './App';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container);

const messages = {
  en: enJson,
  vi: viJson,
};

const locale = 'vi';

root.render(
  <React.StrictMode>
    <IntlProvider key={locale} locale={locale} messages={messages[locale]}>
      <App />
    </IntlProvider>
  </React.StrictMode>
);
