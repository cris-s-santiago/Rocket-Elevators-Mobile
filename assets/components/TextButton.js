import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

const TextButton = (props) => <Text style={styles.textButton} {...props} />

const styles = StyleSheet.create({
    textButton: {
		marginVertical: 15,
		fontSize: 15,
		color: "#000000",
		textAlign: "center",
	},
})

export default TextButton