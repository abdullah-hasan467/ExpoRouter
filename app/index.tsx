import { Link } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Hoome Page</Text>
      <Link href="/Profile/Profile" asChild>
        <Button style={styles.button} title="Go to Profile" />
      </Link>
      <Link href="/about" asChild>
        <Button title="Go to About" />
      </Link>
      <Link href="/products/index" asChild>
        <Button title="Go to Products" />
        </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "#333",
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: "#fff",
    margin: 10,
  },
});

export default Index;
