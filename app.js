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
  ListView
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
    fetch('https://api.meetup.com/react-native-cph/events?member_id=self&key=5704b84b803c7919505562105f1536').then(response => response.json()).then(
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
              <Text style={styles.title}>{rowData.name}</Text>
              <Text style={styles.venue}>{rowData.venue.address_1}</Text>
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
    marginTop:60,
    backgroundColor: '#F00'
  },
  cell: {
    backgroundColor:'#F5DCFF'
  },
  title: {
  },
  venue: {
  },
});

export default App;
