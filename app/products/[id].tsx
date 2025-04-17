import { StyleSheet, Text, View } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'

export default function ProductDetails() {
    const {id} = useLocalSearchParams();
  return (
    <View style= {styles.container}>
      <Text>Product Details with ID: {id} </Text>
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