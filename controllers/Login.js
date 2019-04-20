import fire_setup from './Firebase';
import React,{Component} from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { Asset, Font } from 'expo';
import {Container,Item,Form,Label,Input,Content,Header,Button} from "native-base";
import { createAppContainer, createStackNavigator, StackActions, NavigationActions,StackNavigator } from 'react-navigation';

const loginUser = (email, password) => {

  try {

    fire_setup.auth().signInWithEmailAndPassword(email, password)
      .then(res => {
        alert(res.user.email);
      });
      this.props.navigation.navigate('./screens/Home');

  } catch (error) {
    console.log(error);
  }
}

export default loginUser;
