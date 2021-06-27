import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, View, StyleSheet, Text } from "react-native";

const CounterScreen = (props) => {
  // useState take in an variable and a function that set the variable. (0) -> Setting the default value of the variable
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          //Dont do this!
          //counter++;
          setCounter(counter + 1)
        }}
      />
      <Button title="Decrease" onPress={() => {
          setCounter(counter - 1)
      }} />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

CounterScreen.propTypes = {};

const styles = StyleSheet.create({});

export default CounterScreen;
