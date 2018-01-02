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

class PeriodEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      period: '',
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
          <Title>New period</Title>
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
            Alert.alert(
              this.state.title,
              this.state.description,
              [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
              ],
              { cancelable: false },
            );
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