import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function passwordForget() {
  return (
    <View style={styles.container}>
      <Text>password-forget</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',   
    }
})