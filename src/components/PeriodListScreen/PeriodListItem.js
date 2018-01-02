import React, { Component } from 'react';
import {
  ListItem,
  Text,
} from 'native-base';

class PeriodListItem extends Component {
  render() {
    const {
      title,
      period,
    } = this.props.item;
    return (
      <ListItem>
        <Text>{ title }</Text>
        <Text>{ period }</Text>
      </ListItem>
    );
  }
}

export default PeriodListItem;
