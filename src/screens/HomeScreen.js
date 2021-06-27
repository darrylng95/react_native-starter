import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Image
        style={(styles.center, styles.logo)}
        source={require("../../assets/Logo.png")}
      />
      <Text style={styles.text}>Welcome to GCC</Text>
      <Button
        title="Go to Components Demos"
        onPress={() => props.navigation.navigate("Components")}
      />
      <Button
        title="Go to List Demo"
        onPress={() => props.navigation.navigate("ListScreen")}
      />
      <Button
        title="Go to Image Screen"
        onPress={() => props.navigation.navigate("ImageScreen")}
      />
      <Button
        title="Go to Counter Screen"
        onPress={() => props.navigation.navigate("CounterScreen")}
      />
      <Button
        title="Go to Color Screen"
        onPress={() => props.navigation.navigate("ColorScreen")}
      />
      <Button
        title="Go to Color Quare Screen"
        onPress={() => props.navigation.navigate("ColorSquareScreen")}
      />
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
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
  },
});

export default HomeScreen;
