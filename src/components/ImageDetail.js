import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Text, Image } from "react-native";

const ImageDetail = (props) => {
  return (
    <View>
      <Image source={props.imageSource} />
      <Text> {"\n"}Image Detail: {props.title}</Text>
      <Text>Image Score: {props.imageScore} {"\n"}</Text>
    </View>
  );
};

ImageDetail.propTypes = {};

const styles = StyleSheet.create({});

export default ImageDetail;
