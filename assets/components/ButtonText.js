import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

const ButtonText = (props) => <Text style={styles.appButtonText} {...props} />

const styles = StyleSheet.create({
    appButtonText: {
        fontSize: 14,
        color: "black",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
      },
})

export default ButtonText