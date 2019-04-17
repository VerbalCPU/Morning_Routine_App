constructor(props){
  super(props);
  this.state = {
    text: '',
    fontLoaded : false
  }
}

async componentDidMount() {
  await Font.loadAsync({
    'Muli' : require('./assets/fonts/Muli.ttf'),
    'comic': require('./assets/fonts/comic.ttf')
  }).then(() => {
    this.setState({ fontLoaded: true });
  })
}

      <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />

      <Text style={{padding: 10, fontSize: 42}}>
        {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
      </Text>



      const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          // alignItems: 'center',
          justifyContent: 'center',
          padding : 10
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
          top: 150,

          alignItems: 'center',
          justifyContent: 'center',
          color: "#8C8C8C",
          fontSize: 24,
          fontFamily: "Muli",
          fontStyle : "normal"

        }
      });
