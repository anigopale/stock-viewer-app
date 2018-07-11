import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { CardSection } from './common';

const StockListItem = (props) => {
  let { stock } = props;

  return (
    <TouchableOpacity onPress={() => props.getSelectedStock(stock)}>
      <CardSection>
        <Text>{stock.SYMBOL}</Text>
      </CardSection>
    </TouchableOpacity>
  );
}

export default StockListItem;
