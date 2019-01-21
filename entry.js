/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import { WeTouchable } from './library'
import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'

export default class example extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <View style={styles.container}>
        <WeTouchable
          pressMode={'mask'}
          onPress={() => {}}>
          <Text> WeTouchable Mask </Text>
        </WeTouchable>

        <WeTouchable
          activeColor={'red'}
          pressMode={WeTouchable.PressMode.highlight}
          onPress={() => {}}>
          <Text> WeTouchable highlight </Text>
        </WeTouchable>

        <WeTouchable
          pressMode={WeTouchable.PressMode.opacity}
          onPress={() => {}}>
          <Text> WeTouchable opacity </Text>
        </WeTouchable>

        <WeTouchable
          activeColor={'red'}
          pressMode={WeTouchable.PressMode.none}
          onPress={() => {}}>
          <Text> WeTouchable none </Text>
        </WeTouchable>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#efefef',
    flexDirection: 'column'
  }
})

AppRegistry.registerComponent('example', () => example)
