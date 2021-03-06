import React, { useState } from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = (props) => {
  const [name, setName] = useState("");

  return (
    <View>
      <Text>Enter Name:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      <Text>My name is {name}</Text>
      {name.length < 5 ? (
        <Text>Name should be longer than 5 characters</Text>
      ) : null}
    </View>
  );
};

TextScreen.propTypes = {};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
