import React, { Component } from 'react';
import { Alert } from 'react-native';
import {
  Container,
  Header,
  Left,
  Icon,
  Body,
  Right,
  Title,
  Button,
  Content,
  Form,
  Item,
  Input,
  Label,
  Text,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import PeriodService from '../../data/periodService';

class PeriodEdit extends Component {
  constructor(props) {
    super(props);
    const exists = props.item;
    this.id = exists == null ? null : exists.id;
    this.state = {
      title: exists == null ? '' : exists.title,
      description: exists == null ? '' : exists.description,
      period: exists == null ? '' : exists.period,
    };
  }

  _savePeriod() {
    PeriodService.save({
      id: this.id,
      title: this.state.title,
      description: this.state.description,
      period: this.state.period,
    }).then(() => {
      Alert.alert(
        '',
        'saved!!',
        [
          { text: 'OK', onPress: () => Actions.pop() },
        ],
        { cancelable: false },
      );
    });
  }

  _confirmArchivePeriod() {
    if (this.id != null) {
      Alert.alert(
        'Confirmation',
        'Are you sure to archive item?',
        [
          { text: 'Cancel' },
          { text: 'Archive', onPress: () => this._archivePeriod() },
        ],
        { cancelable: false },
      );
    }
  }

  _archivePeriod() {
    PeriodService.archive(this.id).then(() => {
      Alert.alert(
        '',
        'archived!!',
        [
          { text: 'OK', onPress: () => Actions.pop() },
        ],
        { cancelable: false },
      );
    });
  }

  headerComponent() {
    return (
      <Header>
        <Left>
          <Button
            transparent
            onPress={() => {
              Actions.pop();
            }}
          >
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Edit period</Title>
        </Body>
        <Right />
      </Header>
    );
  }

  formComponent() {
    return (
      <Content>
        <Form>
          <Item stackedLabel>
            <Label>title</Label>
            <Input
              onChangeText={(text) => {
                this.setState({ title: text });
              }}
              value={this.state.title}
            />
          </Item>
          <Item stackedLabel>
            <Label>description</Label>
            <Input
              onChangeText={(text) => {
                this.setState({ description: text });
              }}
              value={this.state.description}
            />
          </Item>
          <Item stackedLabel last>
            <Label>period</Label>
            <Input
              onChangeText={(text) => {
                this.setState({ period: text });
              }}
              value={this.state.period}
            />
          </Item>
        </Form>
        <Button
          block
          style={{ margin: 16 }}
          onPress={() => this._savePeriod()}
          disabled={
            this.state.title.length === 0 ||
            this.state.description.length === 0 ||
            this.state.period.length === 0
          }
        >
          <Text>UPDATE</Text>
        </Button>
        <Button
          block
          danger
          style={{ marginHorizontal: 16 }}
          onPress={() => this._confirmArchivePeriod()}
          disabled={this.id == null}
        >
          <Text>ARCHIVE</Text>
        </Button>
      </Content>
    );
  }

  render() {
    return (
      <Container>
        { this.headerComponent() }
        { this.formComponent() }
      </Container>
    );
  }
}

export default PeriodEdit;
