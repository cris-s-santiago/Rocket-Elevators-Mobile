import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

const List = (props) => <TouchableOpacity style={styles.list} {...props} />

const styles = StyleSheet.create({
    list: {
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: "#e1dee073",
		marginTop: 5,
		borderRadius: 8,
		width: 280,
        borderWidth: 0.3,
        borderColor: "#ff00005c",
	},
})

export default List