import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const CoinItem = ({ coin }) => {

  return (
    <View style={styles.containerItem}>

      <View style={styles.coinName}>
        <Image style={styles.image} source={{ uri: coin.image }} />

        <View style={styles.containerNames}>
          <Text style={styles.text}>{coin.name}</Text>
          <Text style={styles.textSymbol} >{coin.symbol}</Text>
        </View>
      </View>

      <View>
        <Text style={styles.textPrice}>$ {coin.current_price} </Text>
        <Text
          style={[
            styles.pricePercentage,
            coin.price_change_percentage_24h > 0 ? styles.priceUp : styles.priceDown
          ]}
        >
          {coin.price_change_percentage_24h}
        </Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: '#121212',
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerNames: {
    marginLeft: 10,
  },
  coinName: {
    flexDirection: 'row',
  },
  image: {
    width: 30,
    height: 30
  },
  text: {
    color: '#f8f9fa'
  },
  textSymbol: {
    color: '#434343',
    textTransform: 'uppercase',
  },
  pricePercentage: {
    textAlign: 'right'
  },
  textPrice: {
    color: '#f8f9fa',
    textAlign: 'right'
  },
  priceUp: {
    color: '#45ff42',
  },
  priceDown: {
    color: '#ff4242',
  }
})

export default CoinItem
