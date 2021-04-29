import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

const HeaderText = (props) => <Text style={styles.headerText} {...props} />

const styles = StyleSheet.create({
    headerText: {
		fontSize: 14,
		color: "#000000",
		fontWeight: "bold",
		marginBottom: 20,
		alignItems: "center",
	},
})

export default HeaderText
