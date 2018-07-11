import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Card, Spinner, CardSection } from './components/common';
import axios from 'axios';
import Search from './components/Search';
import StockList from './components/StockList';

export default class App extends Component {

  state = { term: '', stocks: [], loading: true };

  componentWillMount() {
    this.fetchData();
  }

  fetchData = (term) => {
    const url = `https://stock-assignment-api.herokuapp.com/stockData`;
    let filter = '';
    // if term exists, filter results
    if (term) {
      filter = `?SYMBOL_like=${term}`;
    }

    // before fetching toggle loading flag
    this.setState({ stocks: [], loading: true });

    // fetch data and store in app state
    axios.get(`${url}${filter}`)
    .then(response => {
      this.setState({ stocks: response.data, loading: false });
    })
    .catch(error => {
      console.log(error);
      this.setState({ stocks: [], loading: true });
    });
  }

  renderStockList() {
    // loading flat is true, render spinner
    if (this.state.loading) {
      return (
        <CardSection>
          <Spinner />
        </CardSection>
      );
    }

    return (
      <StockList stocks={this.state.stocks} />
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Stock App" />
        <Card>
          <Search getSearchTerm={this.fetchData} />
          {this.renderStockList()}
        </Card>
      </View>
    );
  }
}
