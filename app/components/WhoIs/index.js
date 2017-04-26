import React from 'react';
//import { FormattedMessage } from 'react-intl';
import styled, { ThemeProvider } from 'styled-components';
//import ContactsList from 'components/ContactsList';
import FlexContainer from './FlexContainer';
import DomainName from './DomainName';
import DomainASN from './DomainASN';
import DomainDates from './DomainDates';
import HostASN from './HostASN';
import Registrar from './Registrar';
import RenewalInfo from './RenewalInfo';
//import messages from './messages';
import data from './whois.json';


function WhoIs() {
  const colors = {
    red: 'rgba(255,0,0,0.2)',
    blue: 'rgba(0,179,255,0.26)',
    green: 'green',
  };

  const theme = {
    bg: {
      primary: 'rgba(203, 232, 245, 0.26)',
      primaryAlt: 'rgba(222, 205, 205, 0.2)',
    },
    text: {
      title: {
        color: 'antiquewhite',
      },
      label: {
        color: 'antiquewhite',
      },
      value: {
        color: 'white',
      },
      date: {
        label: {
          color: 'antiquewhite',
        },
      },
    },
  };

  const kryioTheme = {
    bg: {
      primary: colors.blue,
      primaryAlt: colors.red,
    },
    text: {
      title: {
        color: 'lightskyblue',
      },
      label: {
        color: 'white',
      },
      value: {
        color: 'white',
      },
      date: {
        label: {
          color: 'palevioletred',
        },
      },
    },
  };

  // const contactsListProps = {
  //   loading: false,
  //   error: false,
  //   contacts: [{ name: 'aaa' }, { name: 'bbb' }, { name: 'ccc' }, { name: 'ddd' }, { name: 'eee' }, { name: 'fff' }, { name: 'ggg' }],
  //   style: { background: 'rgba(255,0,0,0.2)', height: '100px', width: '35%', padding: '10px' },
  // };

  const Wrapper = styled.div`
    // background: ${theme.primary};
  `;

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <FlexContainer>
          <DomainName item={{ domain: data.domain }} />
          <DomainDates item={{ created_on: data.created_on, expires_on: data.expires_on }} />
          <RenewalInfo item={{ renew_in: '113 days' }} />
          <Registrar item={{ registrar: data.registrar }} />
        </FlexContainer>
        <FlexContainer>
          <DomainASN item={{ asn: 'AS31815', ip: '72.47.228.88', name: 'MEDIATEMPLE-105 Culver City US' }} />
          <HostASN item={{ asn: 'AS31815', ip: '72.47.228.88', name: 'MEDIATEMPLE-105 Culver City US' }} />
        </FlexContainer>
        <FlexContainer>
          {/*<ContactsList {...contactsListProps} />*/}
          <div style={{ background: theme.bg.primaryAlt, height: '100px', width: '35%', padding: '10px' }}></div>
          <div style={{ background: theme.bg.primary, height: '100px', width: '30%', padding: '10px' }}></div>
          <div style={{ background: theme.bg.primaryAlt, height: '100px', width: '35%', padding: '10px' }}></div>
        </FlexContainer>
        <FlexContainer>
          <div style={{ background: theme.bg.primaryAlt, height: '100px', width: '35%', padding: '10px' }}></div>
          <div style={{ background: theme.bg.primary, height: '100px', width: '30%', padding: '10px' }}></div>
          <div style={{ background: theme.bg.primaryAlt, height: '100px', width: '35%', padding: '10px' }}></div>
        </FlexContainer>
        {/*<section>
          <DomainName>
            <FormattedMessage
              {...messages.domain}
              values={{
                domain: data.domain,
              }}
            />
          </DomainName>
          <FormattedMessage
            {...messages.domain_id}
            values={{
              domain_id: data.domain_id,
            }}
          />
          <br />
          <FormattedMessage
            {...messages.status}
            values={{
              status: data.status,
            }}
          />
          <br />
          <FormattedMessage
            {...messages.available}
            values={{
              available: data['available?'],
            }}
          />
          <br />
          <FormattedMessage
            {...messages.registered}
            values={{
              registered: data['registered?'],
            }}
          />
          <br />
          <FormattedMessage
            {...messages.created_on}
            values={{
              created_on: data.created_on,
            }}
          />
          <br />
          <FormattedMessage
            {...messages.updated_on}
            values={{
              updated_on: data.updated_on,
            }}
          />
          <br />
          <FormattedMessage
            {...messages.expires_on}
            values={{
              expires_on: data.expires_on,
            }}
          />
          <br />
          <FormattedMessage
            {...messages.registrar_id}
            values={{
              id: data.registrar.id,
            }}
          />
          <br />
          <FormattedMessage
            {...messages.registrar_name}
            values={{
              name: data.registrar.name,
            }}
          />
          <br />
          <FormattedMessage
            {...messages.registrar_organization}
            values={{
              organization: data.registrar.organization,
            }}
          />
          <br />
          <FormattedMessage
            {...messages.registrar_url}
            values={{
              url: data.registrar.url,
            }}
          />
        </section>*/}
      </Wrapper>
    </ThemeProvider>
  );
}

export default WhoIs;
