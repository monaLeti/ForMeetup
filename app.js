/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableHighlight
} from 'react-native';

class App extends Component {
  constructor(){
    super()
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds,
    };
  }
  componentDidMount() {
    fetch('https://api.meetup.com/self/events?&sign=true&photo-host=public&key=5704b84b803c7919505562105f1536').then(response => response.json()).then(
      response => {
        console.log(response);

        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(response)
        })
      },
      error => {
        console.log('error', error);
      }
    )
  }

  render() {
    console.log("render", this.state.dataSource);

    return (
      <View style={styles.container}>
        <ListView style={styles.list}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => {
          return (
            <View style={styles.cell}>
              <View style={styles.eventInfo}>
                <Text style={styles.title}>{rowData.name}</Text>
                <Text style={styles.venue}>{rowData.venue.address_1}</Text>
              </View>
              <TouchableHighlight style={styles.arrowNextView}>
                <Image source={require('./resources/circle-next-arrow.png')}
                  style={{width: 25, height: 25}}/>
              </TouchableHighlight>
            </View>
          )
        }}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  list: {
    flex: 1,
    marginTop:60
  },
  cell: {
    flexDirection:'row',
    backgroundColor:'#F5F7FE',
    borderStyle:'solid',
    borderTopColor:'black',
    borderTopWidth: 1,
  },
  title: {
    padding:20,
    paddingBottom:0,
    color: '#585858'
  },
  eventInfo: {
    flex:5
  },
  arrowNextView: {
    flex:1,
    flexDirection:'row',
    alignItems:'center'
  },
  venue: {
    paddingLeft:20,
    paddingBottom:20,
    fontSize:12,
    color: '#848484'
  }
});

export default App;
