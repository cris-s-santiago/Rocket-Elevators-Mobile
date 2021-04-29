import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

const TextGreen = (props) => <Text style={styles.textGreen} {...props} />

const styles = StyleSheet.create({
  textGreen: {
    color: 'green',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold'
  },
})

export default TextGreen