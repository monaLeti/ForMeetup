import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const styles = StyleSheet.create({

});

class Test extends Component {
  render() {
    return (
      <View style={{flex: 1,backgroundColor: '#F00'}}>
        <Text>Page two</Text>
      </View>
    )
  }
}

export default Test;
