/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import ListItem from 'components/ListItem';
import Wrapper from './Wrapper';

export default class ContactListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const item = this.props.item;

    // Put together the content of the repository
    const content = (
      <Wrapper>
        { item.name }
      </Wrapper>
    );

    // Render the content into a list item
    return (
      <ListItem key={`contact-list-item-${item.name}`} item={content} />
    );
  }
}

ContactListItem.propTypes = {
  item: React.PropTypes.object,
};
