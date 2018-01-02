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

class PeriodList extends Component {
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
          data={[
            { title: 'a', period: '2017-12-30' },
            { title: 'b', period: '2018-01-02' },
            { title: 'c', period: '2018-02-11' },
          ]}
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
