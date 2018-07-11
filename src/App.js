import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Card } from './components/common';
import axios from 'axios';
import Search from './components/Search';
import StockList from './components/StockList';

export default class App extends Component {

  state = { term: '', stocks: [] };

  fetchData = (term) => {
    const url = `https://stock-assignment-api.herokuapp.com/stockData?SYMBOL_like=${term}`;

    // fetch data and store in app state
    axios.get(url)
    .then(response => {
      this.setState({ stocks: response.data });
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Stock App" />
        <Card>
          <Search getSearchTerm={this.fetchData} />
          <StockList stocks={this.state.stocks} />
        </Card>
      </View>
    );
  }
}
