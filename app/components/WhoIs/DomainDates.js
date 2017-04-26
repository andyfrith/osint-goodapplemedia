import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import messages from './messages';

const Label = styled.div`
  color: ${props => props.theme.text.date.label.color};
`;

const Date = styled.div`
  color: white;
`;

const Wrapper = styled.div`

  background:${props => props.theme.bg.primaryAlt};
  height: 100px;
  width: 15%;
  padding: 10px; 
  textAlign: center;
  fontSize: 12px;
`;

function DomainDates(props) {
  return (
    <Wrapper>
      <Label>
        <FormattedMessage
          {...messages.created_on}
        />
      </Label>
      {/*<div>{ props.item.created_on }</div>*/}
      <Date>
        12/30/2014
      </Date>
      <Label>
        <FormattedMessage
          {...messages.expires_on}
        />
        {/*<div>{ props.item.expires_on }</div>*/}
      </Label>
      <Date>12/30/2014</Date>
    </Wrapper>
  );
}

DomainDates.propTypes = {
  item: React.PropTypes.any,
};

export default DomainDates;
