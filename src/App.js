import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Card } from './components/common';
import Search from './components/Search';

export default class App extends Component {
  render() {
    return (
      <View>
        <Header headerText="Stock App" />
        <Card>
          <Search />
        </Card>
      </View>
    )
  }
}
