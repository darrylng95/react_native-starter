import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ComponentsScreen = () => {
  return (
    <View style={styles.center}>
      <Text style={styles.textStyle}>This is a ComponentsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  stretch: {
    width: 200,
    height: 300,
    resizeMode: "stretch",
  },
  center:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 350,
    height: 300,
  }
});

export default ComponentsScreen;
