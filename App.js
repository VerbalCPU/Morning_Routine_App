import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { Asset, Font } from 'expo';
import fire_setup from './Firebase';
import {Container,Item,Form,Label,Input,Content,Header,Button} from "native-base";


export default class App extends React.Component {

  constructor(props){
    super(props)

    this.state = ({
      email: '',
      password : ''
    });
  }

  signupUser = (email,password) => {

    try{
      if(this.state.password.length < 6){
        alert("Please enter at least 6 characters");
        return;
      }else if (this.state.email.length == 0){
        alert("Please insert an email")
      }
      fire_setup.auth().createUserWithEmailAndPassword(email,password);
    }
    catch(error){
      alert(error);
    }
  }

  loginUser = (email,password) => {

    try{
      fire_setup.auth().signInWithEmailAndPassword(email,password).then(function(user){
        console.log(user);
      });

    }
    catch(error){
      console.log(error);
    }
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
                onPress={()=> this.loginUser(this.state.email,this.state.password)}
              >
              <Text style={{color : 'white'}}> Login</Text>
              </Button>

              <Button style={{marginTop: 10}}
                full
                rounded
                primary
                onPress={()=> this.signupUser(this.state.email,this.state.password)}
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
