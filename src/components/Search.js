import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Input, CardSection } from './common';

export default class Search extends Component {
  state = { term: '' };
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label='search for stocks'
            value={this.state.term}
            onChangeText={(term) => {this.setState({ term })}}
            />
        </CardSection>
      </View>
    )
  }
}
