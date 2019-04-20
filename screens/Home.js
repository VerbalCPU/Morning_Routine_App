import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { Asset, Font } from 'expo';


export default class Home extends React.Component{

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.firstrow}></View>
      <View style={styles.secondrow}></View>
      <View style={styles.thirdrow}></View>
      <View style={styles.fourthrow}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2041',
  },

  firstrow: {
    flex: 1,
    backgroundColor: "#ffc857"
  },

  secondrow: {
    flex: 1,
    backgroundColor: "#4b3f72"
  },

  thirdrow: {
    flex: 1,
    backgroundColor: "#119da4"
  },

  fourthrow: {
    flex: 1,
    backgroundColor: "#19647e"
  }

});
