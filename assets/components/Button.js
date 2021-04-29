import React from 'react'
import { StyleSheet } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'
import { theme } from '../themes/theme'

const Button = ({ mode, style, ...props }) => (
  <PaperButton
    style={[
      styles.button,
      mode === 'outlined' && { backgroundColor: theme.colors.surface },
      style,
    ]}
    labelStyle={styles.text}
    mode={mode}
    {...props}
  />
)

const styles = StyleSheet.create({
  button: {
   backgroundColor: "#01579b",
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 2,
        paddingBottom: 2,
        borderRadius: 100,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
})

export default Button
