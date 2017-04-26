import React from 'react';
import styled from 'styled-components';

const IP = styled.span`
  color: white;
  font-size: 1.5em;
`;

const Label = styled.span`
  color: ${props => props.theme.text.label.color};
  padding-right: 5px;
`;

const ASN = styled.span`
  color: ${props => props.theme.text.value.color};
`;

const Value = styled.span`
  color: white;
`;

const Wrapper = styled.div`
  background:${props => props.theme.bg.primaryAlt};
  font-size: 12px;
  height: 100px;
  width: 50%;
  padding: 10px; 
  textAlign: center;
`;

function HostASN(props) {
  return (
    <Wrapper>
      <Label>Host ASN:</Label><ASN>{props.item.asn}</ASN><br />
      <IP>{props.item.ip}</IP><br />
      <Value>{props.item.name}</Value>
    </Wrapper>
  );
}

HostASN.propTypes = {
  item: React.PropTypes.any,
};

export default HostASN;
