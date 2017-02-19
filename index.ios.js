import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import StockButton from './StockButton.js';

export default class Stock extends Component {
  changeIndex(stockName, stockCode) {
    console.log(stockName, stockCode);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.stockName}>
            SET
          </Text>
          <Text style={styles.stockIndex}>
            9,999.99
          </Text>
          <Text style={styles.stockChange}>
            +115.23 (0.56%)
          </Text>
        </View>
        <View style={styles.footer}>
          <StockButton name='SET' code='INDEXBKK:SET' onPress={this.changeIndex} />
          <StockButton name='S&P' code='INDEXSP:.INX' onPress={this.changeIndex} />
          <StockButton name='NASDAQ' code='INDEXNASDAQ:.IXIC' onPress={this.changeIndex} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  stockName: {
    fontSize: 30
  },
  stockIndex: {
    fontSize: 80
  },
  stockChange: {
    fontSize: 40
  },
  footer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink'
  }
});

AppRegistry.registerComponent('Stock', () => Stock);
