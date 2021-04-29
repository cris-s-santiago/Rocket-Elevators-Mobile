import React from 'react'
import { Image, StyleSheet } from 'react-native'

const Logo = () => (
  <Image source={require('../R2.png')} style={styles.image} />
)

const styles = StyleSheet.create({
  image: {
    width: 305,
    height: 159,
    resizeMode: "contain",
  },
})

export default Logo
