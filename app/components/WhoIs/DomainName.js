// import styled from 'styled-components';

// const DomainName = styled.h4`

// `;

// export default DomainName;


import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import messages from './messages';

const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: ${props => props.theme.text.title.color};
  margin: 0;
`;

const Links = styled.p`
  font-size: 0.5em;
  text-align: center;
  color: ${props => props.theme.text.value.color};
`;

const Wrapper = styled.div`
  background:${props => props.theme.bg.primary};
  height: 100px;
  width: 35%;
  padding: 10px; 
  textAlign: center;
`;

function DomainName(props) {
  return (
    <Wrapper>
      <Title>
        <FormattedMessage
          {...messages.domain}
          values={{
            domain: props.item.domain,
          }}
        />
      </Title>
      <Links>
        VIRUSTOTAL SITEADVISOR URLOID MXTOOLBOX IPVOID (DOMAIN) IPVOID (HOST) CYMON (DOMAIN) CYMON (HOST)
      </Links>
    </Wrapper>
  );
}

DomainName.propTypes = {
  item: React.PropTypes.any,
};

export default DomainName;
