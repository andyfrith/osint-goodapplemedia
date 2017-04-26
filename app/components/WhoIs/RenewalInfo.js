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

  background:${props => props.theme.bg.primary};
  height: 100px;
  width: 15%;
  padding: 10px; 
  textAlign: center;
  fontSize: 12px;
`;

function RenewalInfo(props) {
  return (
    <Wrapper>
      <Label>
        <FormattedMessage
          {...messages.renew_in}
        />
      </Label>
      <Date>{ props.item.renew_in }</Date>
    </Wrapper>
  );
}

RenewalInfo.propTypes = {
  item: React.PropTypes.any,
};

export default RenewalInfo;
