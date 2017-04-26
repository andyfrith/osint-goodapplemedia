import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Wrapper>
      <section>
        <FormattedMessage {...messages.copyrightMessage} />
      </section>
      <section>
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author: <A href="http://andyfrith.com">Andy Frith</A>,
            company: <A href="http://goodapplemedia.com">Good Apple Media</A>,
          }}
        />
      </section>
    </Wrapper>
  );
}

export default Footer;
