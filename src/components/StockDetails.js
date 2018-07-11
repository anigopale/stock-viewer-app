import React, { Component } from 'react';
import { Modal, Text, View } from 'react-native';
import { CardSection, Button } from './common';

export default class StockDetail extends Component {

  render() {
    // let { SYMBOL } = this.props.selectedStock;
    return (
      <Modal
        animationType='slide'
        transparent
        visible={this.props.selectedStock ? true : false }
        onRequestClose={() => {}}
        >
        <CardSection>
          <Text>symbol</Text>
          <Button
            onPress={() => {
              this.props.deleteSelected()
              this.setState({ modalVisible: false })
            }}
            >
            Close
          </Button>
        </CardSection>
      </Modal>
    );
  }
}
