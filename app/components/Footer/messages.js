/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  copyrightMessage: {
    id: 'boilerplate.components.Footer.copyright.message',
    defaultMessage: '©2017 GOOD APPLE MEDIA, LLC.',
  },
  licenseMessage: {
    id: 'boilerplate.components.Footer.license.message',
    defaultMessage: 'This project is licensed under the MIT license.',
  },
  authorMessage: {
    id: 'boilerplate.components.Footer.author.message',
    defaultMessage: `
      Created by {author} and maintained by {company}.
    `,
  },
});
