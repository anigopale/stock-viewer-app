import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Input, CardSection } from './common';

export default class Search extends Component {
  state = { term: '' };

  handleChangeText = (term) => {
    this.setState({ term });
    // pass props if term.length >= 3
    if (term.length >= 3) {
      this.props.getSearchTerm(term);
    } else {
      this.props.getSearchTerm('');
    }
  }

  render() {
    return (
      <View>
        <CardSection>
          <Input
            label='search for stocks'
            value={this.state.term}
            onChangeText={this.handleChangeText}
            />
        </CardSection>
      </View>
    )
  }
}
