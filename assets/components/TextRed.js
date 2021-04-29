import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

const TextRed = (props) => <Text style={styles.textRed} {...props} />

const styles = StyleSheet.create({
  textRed: {
    color: 'red',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold'
  },
})

export default TextRed