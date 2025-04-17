import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ProductList() {
  return (
    <View style={styles.container}>
      <Text> Products </Text>
      <Link href="/products/1">Products 1</Link>
      <Link href="/products/2">Products 2</Link>
      <Link href="/products/3">Products 3</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#fff",
    padding: 20,
  },
});
