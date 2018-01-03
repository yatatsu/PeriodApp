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
          onPress={() => {
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
                  {
                    text: 'OK',
                    onPress: () => {
                      Actions.pop();
                      console.log('OK Pressed');
                    },
                  },
                ],
                { cancelable: false },
              );
            });
          }}
        >
          <Text>UPDATE</Text>
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
