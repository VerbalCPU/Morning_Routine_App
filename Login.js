import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';



export default class Log_in extends React.Component {

  render(){
    return(
      <Container>
      <Form>
      <Item floatingLabel>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
