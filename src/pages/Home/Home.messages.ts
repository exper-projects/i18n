import { defineMessages } from 'react-intl';

import { commonMessages } from '@/languages/global/common.messages';

const homeMessages = defineMessages({
  welcomeToOurPlatform: {
    defaultMessage: 'Welcome to our platform',
  },
});

export default {
  ...commonMessages,
  ...homeMessages,
};
