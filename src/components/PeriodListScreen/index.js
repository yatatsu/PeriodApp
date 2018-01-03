import React, { Component } from 'react';
import {
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
import PeriodService from '../../data/periodService';

class PeriodList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      periods: [],
    };
  }

  componentDidMount() {
    PeriodService.addChangeListener(() => this.loadPeriods());
    this.loadPeriods();
  }

  componentWillUnmount() {
    PeriodService.removeListeners();
  }

  loadPeriods() {
    this.setState({ periods: PeriodService.findAll() });
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
          keyExtractor={(item, i) => `${item.id}`}
          renderItem={({ item }) => (
            <PeriodListItem item={item} />
          )}
        />
      </Content>
    );
  }

  fabComponent() {
    return (
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
