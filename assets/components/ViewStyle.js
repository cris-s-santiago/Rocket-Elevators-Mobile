import React from 'react'
import { StyleSheet, View } from 'react-native'

const ViewStyle = (props) => <View style={styles.viewStyle} {...props} />

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        marginTop: 5,
        alignItems: "center",
    },
})

export default ViewStyle