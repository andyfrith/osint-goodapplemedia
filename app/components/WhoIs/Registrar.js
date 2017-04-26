import React from 'react';
import styled from 'styled-components';

const ID = styled.span`
  color: white;
  font-size: 1.5em;
`;

const Value = styled.span`
  color: white;
`;

const Wrapper = styled.div`
  background:${props => props.theme.bg.primaryAlt};
  height: 100px;
  width: 35%;
  padding: 10px;
  fontSize: 12px;
`;

function Registrar(props) {
  return (
    <Wrapper>
      <ID>{props.item.registrar.id}</ID><br />
      <Value>{props.item.registrar.organization}</Value><br />
      <Value>{props.item.registrar.name}</Value><br />
      <Value>{props.item.registrar.url}</Value>
    </Wrapper>
  );
}

Registrar.propTypes = {
  item: React.PropTypes.any,
};

export default Registrar;
