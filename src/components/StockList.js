import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { CardSection } from './common';

export default class StockList extends Component {

  renderStockList() {
    return this.props.stocks.map(stock => {
      return (
        <CardSection>
          <Text>{stock.SYMBOL}</Text>
        </CardSection>
      );
    });
  }

  render() {
    return (
      <View>
        {this.renderStockList()}
      </View>
    );
  }
}

const styles = {
  stockItemStyle: {
    width: 100,
    flex: 1
  }
}
