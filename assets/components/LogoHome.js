import React from 'react'
import { Image, StyleSheet } from 'react-native'

const Logo = () => (
  <Image source={require('../R2.png')} style={styles.image} />
)

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 59,
    resizeMode: "contain",
  },
})

export default Logo