import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import StockListItem from './StockListItem';

export default class StockList extends Component {

  renderStockList() {
    return this.props.stocks.map(stock => {
      return (
        <StockListItem stock={stock} />
      );
    });
  }

  render() {
    return (
      <ScrollView>
        {this.renderStockList()}
      </ScrollView>
    );
  }
}
