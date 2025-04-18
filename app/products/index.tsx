import { Link } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function ProductList() {
  return (
    <View style={styles.container}>
      <Text> Products </Text>
      <Link href="/products/1" asChild>
        <Button title="Products 1" />
      </Link>
      <Link href="/products/22" asChild>
        <Button title="Products 2" />
      </Link>
      <Link href="/products/33" asChild>
        <Button title="Products 3" />
      </Link>
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
