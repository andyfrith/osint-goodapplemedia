import React, { PropTypes } from 'react';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import ContactListItem from 'containers/ContactListItem';
import styled from 'styled-components';

const StyledList = styled(List)`
  height: 20px;
`;

function ContactsList({ loading, error, contacts, style }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (contacts !== false) {
    // return <List items={contacts} component={ContactListItem} />;
    return <div style={style}><List items={contacts} component={ContactListItem} /></div>;
  }

  return null;
}

ContactsList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  contacts: PropTypes.any,
  style: PropTypes.object,
};

export default ContactsList;
