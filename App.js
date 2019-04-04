import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Asset, Font } from 'expo';
// import { Button } from './Login_Button'

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      fontLoaded : false
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Muli' : require('./assets/fonts/Muli.ttf'),
      'comic': require('./assets/comic.ttf')
    }).then(() => {
      this.setState({ fontLoaded: true });
    })
  }

  render() {
    return (

      <View style={styles.container}>
      {this.state.fontLoaded==true ? (
        <Text style={styles.welcome}>Welcome</Text>
      ) : <Text>Loading...</Text>}
      {this.state.fontLoaded==true ? (
        <Text style={styles.get_ready}>You ready to get started with your morning routine</Text>
      ) : <Text>Loading...</Text>}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    position : 'absolute',
    width: 155,
    height: 44,
    top: 62,
    alignItems: 'center',
    fontSize: 30,
    color: "#8C8C8C",
    fontFamily: "Muli",
    fontStyle : "normal"
  },
  get_ready: {
    position : 'absolute',
    width: 312,
    height: 68,
    top: 136,

    alignItems: 'center',
    color: "#8C8C8C",
    fontSize: 24,
    fontFamily: "Muli",
    fontStyle : "normal"

  }
});
