import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  NavigationExperimental,
  TouchableOpacity
} from 'react-native';

const {
  CardStack,
  StateUtils,
} = NavigationExperimental;

import App from './app';
import Test from './test';

const styles = StyleSheet.create({
  backButton: {
    width: 50,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class Navigator extends Component {
  constructor() {
    super();

    this.state = {
      navigationState: {
        index: 0,
        routes: [{key: 'list', title: 'List'}],
      }
    }

    this.renderScene = this.renderScene.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
    this.renderLeftComponent = this.renderLeftComponent.bind(this);
    this.handleOnPush = this.handleOnPush.bind(this);
    this.handleOnPop = this.handleOnPop.bind(this);
  }

  render() {
    return (
      <CardStack
        direction="horizontal"
        onNavigate={() => {}}
        onNavigateBack={() => {}}
        renderScene={this.renderScene}
        renderHeader={this.renderHeader}
        navigationState={this.state.navigationState} />
    );
  }

  handleOnPush(route) {
    this.setState({
      navigationState: StateUtils.push(this.state.navigationState, route)
    });
  }

  handleOnPop() {
    this.setState({
      navigationState: StateUtils.pop(this.state.navigationState)
    });
  }

  renderLeftComponent() {
    if (this.state.navigationState.index === 0) {
      // return null;
    }

    return (
      <TouchableOpacity onPress={this.handleOnPop}>
        <View style={styles.backButton}>
          <Text>Back</Text>
        </View>
      </TouchableOpacity>
    );
  }

  renderScene(sceneProps) {
    const navigateProps = {
      push: this.handleOnPush,
      pop: this.handleOnPop,
    };

    switch (sceneProps.scene.route.key) {
      case 'info':
        return <Test {...navigateProps} />;

      case 'list':
      default:
        return <App {...navigateProps} />;
    }
  }

  renderHeader(sceneProps) {
    return (
      <NavigationExperimental.Header {...sceneProps} renderLeftComponent={this.renderLeftComponent} />
    );
  }
}

export default Navigator;
