import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import firebase from './Firebase'


export default class Login extends React.Component {

  render(){
    return(
      <Container>
      <Form>
      <Item>
      <Label>Email</Label>
      <Input
      autoCorrect = {false}
      autoCapitalize = "none"
      />

      </Item>
      </Form>
      </Container>
    )
  }



}
