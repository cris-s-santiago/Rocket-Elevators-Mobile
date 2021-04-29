import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

const TextStatus = (props) => <Text style={styles.text} {...props} />

const styles = StyleSheet.create({
    text: {
        color: '#101010',
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold'
    },
})

export default TextStatus