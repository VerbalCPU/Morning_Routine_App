import * as firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCKabpUaJt5gHUdSDpfBcrOXJHcNNbWDzY",
    authDomain: "test1-b05d1.firebaseapp.com",
    databaseURL: "https://test1-b05d1.firebaseio.com",
    projectId: "test1-b05d1",
    storageBucket: "test1-b05d1.appspot.com",
    messagingSenderId: "434492807568"
  };


export default class Firebase {

  static init(){
    firebase.initializeApp(config);
  }
}
