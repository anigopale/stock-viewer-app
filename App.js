import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Card, Spinner, CardSection } from './src/components/common';
import axios from 'axios';
import Search from './src/components/Search';
import StockList from './src/components/StockList';
import StockDetails from './src/components/StockDetails';

export default class App extends Component {

  state = { term: '', stocks: [], loading: true, selectedStock: null };

  componentWillMount() {
    // fetch all data before mount
    this.fetchData();
  }

  fetchData = (term = '') => {
    const url = `https://stock-assignment-api.herokuapp.com/stockData`;
    let filter = '';
    // if term exists, filter data
    if (term.length >= 3) {
      filter = `?SYMBOL_like=${term}`;
    }

    // fetch data if filter exists or if search bar is empty
    if (filter || !term) {
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
      <StockList
        stocks={this.state.stocks}
        getSelectedStock={selectedStock => this.setState({ selectedStock })}
        />
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Stock App" />
        <StockDetails
          selectedStock={this.state.selectedStock}
          deleteSelected={() => this.setState({ selectedStock: null })}
          />
        <Card>
          <Search getSearchTerm={this.fetchData} />
        </Card>
        <Card>
          {this.renderStockList()}
        </Card>
      </View>
    );
  }
}
