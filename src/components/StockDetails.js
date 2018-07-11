import React, { Component } from 'react';
import { Modal, Text, View } from 'react-native';
import { CardSection, Button } from './common';

export default class StockDetail extends Component {

  renderDetails() {
    if (this.props.selectedStock) {
      return (
        <Text>{this.props.selectedStock.SYMBOL}</Text>
      )
    }
  }

  render() {
    return (
      <Modal
        animationType='slide'
        transparent
        visible={this.props.selectedStock ? true : false }
        onRequestClose={() => {}}
        >
        <View style={{ marginTop: 100, marginLeft: 'auto', marginRight:'auto', height: 100, width: 100, padding: 10 }}>
          {this.renderDetails()}
          <Button
            onPress={() => {
              this.props.deleteSelected()
              this.setState({ modalVisible: false })
            }}
            >
            Close
          </Button>
        </View>
      </Modal>
    );
  }
}
