import React, { Component } from 'react';
import {
  ListItem,
  Text,
  Left,
  Body,
  Right,
  Icon,
} from 'native-base';
import { Actions } from 'react-native-router-flux';

class PeriodListItem extends Component {
  render() {
    const {
      id,
      title,
      description,
      period,
    } = this.props.item;
    return (
      <ListItem
        icon
        transparent
        onPress={() => {
            Actions.editPeriod({ item: this.props.item });
        }}
      >
        <Left />
        <Body>
          <Text>{ title }</Text>
          <Text>{ description }</Text>
        </Body>
        <Right>
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>
    );
  }
}

export default PeriodListItem;
