import React,{Component} from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { Asset, Font } from 'expo';
import {Container,Item,Form,Label,Input,Content,Header,Button} from "native-base";
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

import Home from '.screens/Home';
import loginUser from './controllers/Login'
import signupUser from './controllers/Signup'

export default class LoginScreen extends React.Component {

  constructor(props){
    super(props);

    this.state = ({
      email: '',
      password : ''
    });
  }

  render() {
    return (

      <Container style = {styles.container}>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
              <Input
              autoCorrect={false}
              autoCapitalize='none'
              onChangeText={(email) => this.setState({email})}
              />
           </Item>

          <Item floatingLabel>
            <Label>Password</Label>
              <Input
              autoCorrect={false}
              autoCapitalize='none'
              secureTextEntry={true}
              onChangeText={(password) => this.setState({password})}
              />
              </Item>

              <Button style={{marginTop: 10}}
                full
                rounded
                success
                onPress={()=> loginUser(this.state.email,this.state.password)}
              >
              <Text style={{color : 'white'}}> Login</Text>
              </Button>

              <Button style={{marginTop: 10}}
                full
                rounded
                primary
                onPress={()=> signupUser(this.state.email,this.state.password)}
              >
              <Text style={{color : 'white'}}> Sign Up</Text>
              </Button>
          </Form>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding : 10
  }
});
