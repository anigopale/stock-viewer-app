import React, { Component } from 'react';
import { ListView, ScrollView } from 'react-native';
import StockListItem from './StockListItem';

export default class StockList extends Component {

  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });
    this.dataSource = ds.cloneWithRows(this.props.stocks);
  }

  renderRow = (stock) => {
    return (
      <StockListItem
        stock={stock}
        getSelectedStock={stock => this.props.getSelectedStock(stock)}
        />
    );
  }

  render() {
    return (
      <ScrollView>
        <ListView
          dataSource={this.dataSource}
          renderRow={this.renderRow}
          />
      </ScrollView>
    );
  }
}
