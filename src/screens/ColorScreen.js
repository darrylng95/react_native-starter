import React, { useState } from "react";
import PropTypes from "prop-types";
import { View, Button, StyleSheet, FlatList } from "react-native";

const ColorScreen = (props) => {
  const [colors, setColors] = useState([]);
  return (
    <View>
      <Button 
        title="Add a color"
        onPress = {()=>{
            // using the spread operator '...' to avoid directly modifying the array
            // take a copy of everything in colors array to the new array created
            // add the generated color to the new array
            setColors([...colors,randomRgb()])
        }}
      />
      
      <FlatList
        keyExtractor = {(item)=>item}
        data = {colors}
        renderItem={({item})=>{
            return <View style={{ height: 100, width: 100, backgroundColor: item }} />
        }}
      />
    </View>
  );
};

ColorScreen.propTypes = {};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
