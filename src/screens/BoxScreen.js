import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Text } from "react-native";

const BoxScreen = (props) => {
  return (
    <View style = {styles.parentStyle}>
        <View style = {styles.viewOneStyle}/>
        <View style = {styles.viewTwoStyle}/>
        <View style = {styles.viewThreeStyle}/>
    </View>
  );
};

BoxScreen.propTypes = {};

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    flexDirection:'row',
    justifyContent: 'space-between'
  },
  viewOneStyle: {
    height:50,
    width: 50,
    backgroundColor:'red',
    alignSelf: 'flex-start'
  },
  viewTwoStyle: {
    height:50,
    width: 50,
    backgroundColor:'green',
    marginTop: 50

  },
  viewThreeStyle: {
    height:50,
    width: 50,
    backgroundColor:'purple',
  },
});

export default BoxScreen;
