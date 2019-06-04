/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import AlarmList from './List';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <AlarmList />;
  }
}
