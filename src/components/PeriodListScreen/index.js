import React, { Component } from 'react';
import {
  View,
  FlatList,
} from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Title,
  Right,
  Content,
  Icon,
  Fab,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import PeriodListItem from './PeriodListItem';
import { loadPeriods } from '../../data/periodStorage';

class PeriodList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      periods: [],
    };
  }

  componentDidMount() {
    loadPeriods().then((data) => {
      console.log(data);
      this.setState({ periods: data });
    });
  }

  headerComponent() {
    return (
      <Header>
        <Left />
        <Body>
          <Title>PeriodApp</Title>
        </Body>
        <Right />
      </Header>
    );
  }

  listComponent() {
    return (
      <Content>
        <FlatList
          data={this.state.periods}
          keyExtractor={(item, i) => `${i}`}
          renderItem={({ item }) => (
            <PeriodListItem item={item} />
          )}
        />
      </Content>
    );
  }

  fabComponent() {
    return (
      <View style={{ flex: 1 }}>
        <Fab
          onPress={() => {
            Actions.editPeriod();
          }}
          containerStyle={{ }}
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
        >
          <Icon name="add" />
        </Fab>
      </View>
    );
  }

  render() {
    return (
      <Container>
        { this.headerComponent() }
        { this.listComponent() }
        { this.fabComponent() }
      </Container>
    );
  }
}

export default PeriodList;
