import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
  description: {
    fontSize:10
  },
  groupOfButton: {
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText:{
    color: 'black'
  }
});

class Test extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Text>{this.props.event.name}</Text>
        <Text style={styles.description}>{this.props.event.description}</Text>
        <View style={styles.groupOfButton}>
          <TouchableOpacity onPress={() => { this.props.push({key: 'pagetwo'})}}>
            <View style={{width: 50, height: 50, backgroundColor: '#F0F'}}>
              <Text styel={styles.buttonText}>Going</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { this.props.push({key: 'pagetwo'})}}>
            <View style={{width: 50, height: 50, backgroundColor: '#F0F'}}>
              <Text styel={styles.buttonText}>Not Going</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default Test;
