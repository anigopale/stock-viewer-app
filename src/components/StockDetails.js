import React, { Component } from 'react';
import { Modal, Text, View } from 'react-native';
import { CardSection, Button } from './common';

export default class StockDetail extends Component {

  renderDetails() {
    if (this.props.selectedStock) {
      let { SYMBOL, OPEN, HIGH, LOW, CLOSE, ISIN } = this.props.selectedStock;
      return (
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 28 }}>{SYMBOL}</Text>
          <Text>Open: {OPEN}</Text>
          <Text>High:{HIGH}</Text>
          <Text>Low:{LOW}</Text>
          <Text>Close:{CLOSE}</Text>
          <Text>ISIN:{ISIN}</Text>
        </View>
      )
    }
  }

  render() {
    let { cardSectionStyle, containerStyle, textStyle } = styles;

    return (
      <Modal
        animationType='slide'
        transparent
        visible={this.props.selectedStock ? true : false }
        onRequestClose={() => {}}
        >
        <View style={containerStyle}>
          <CardSection style={textStyle}>
            {this.renderDetails()}
          </CardSection>
          <CardSection style={cardSectionStyle}>
            <Button
              onPress={() => {
                this.props.deleteSelected()
                this.setState({ modalVisible: false })
              }}
              >
              Close
            </Button>
          </CardSection>
        </View>
      </Modal>
    );
  }
}

const styles = {
  cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
}
