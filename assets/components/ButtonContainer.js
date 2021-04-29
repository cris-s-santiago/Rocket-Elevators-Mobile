import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

const ButtonContainer = (props) => <TouchableOpacity style={styles.appButtonContainer} {...props} />

const styles = StyleSheet.create({
    appButtonContainer: {
		elevation: 8,
		backgroundColor: "rgb(182, 182, 182)",
		borderRadius: 10,
		paddingVertical: 10,
		paddingHorizontal: 12,
		margin:80,
		width: 280,
		height: 40,
		borderWidth: 1,
	  },
})

export default ButtonContainer