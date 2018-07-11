import React from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

const StockListItem = ({ stock }) => {
  return (
    <CardSection>
      <Text>{stock.SYMBOL}</Text>
    </CardSection>
  );
}

export default StockListItem;
