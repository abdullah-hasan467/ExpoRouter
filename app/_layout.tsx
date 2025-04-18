import { Slot } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View,SafeAreaView } from "react-native";

export default function RootLayout() {


  return <SafeAreaView style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.text}> My Expo Header</Text>
    </View>
    <Slot />
    <View style={styles.footer}>
      <Text style={styles.text} > My Expo Footer</Text>
    </View>
  </SafeAreaView>;
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    backgroundColor: "#fff",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  footer:{
    backgroundColor: "#fff",
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  text:{
    fontSize: 20,
    color: "#333", 
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontWeight: "bold",
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
    
  }
)
