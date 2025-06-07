import { useRef } from 'react';
import { IntlShape, MessageDescriptor, useIntl } from 'react-intl';

const generateMessages = (
  intl: IntlShape,
  messageKeys: string[],
  params: Record<string, Record<string, string>>
) =>
  messageKeys.reduce(
    (acc, id) => {
      const keyChunks = id.split('_');
      const messageKey = keyChunks[keyChunks.length - 1];
      acc[messageKey] = intl.formatMessage({ id }, params[messageKey] || {});

      return acc;
    },
    {} as Record<string, string>
  );

export const useIntlMessages = (
  pureMessages: Record<string, MessageDescriptor>,
  params?: Record<string, Record<string, string>>
) => {
  const intl = useIntl();
  const messageKeys = Object.values(pureMessages).map(key => key.id as string);
  const messageRef = useRef(generateMessages(intl, messageKeys, params || {}));
  return messageRef.current;
};
