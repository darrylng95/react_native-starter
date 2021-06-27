import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
const name = "Zi Liang"
const JSXExcerise = () => {
    return (
     <View>
         <Text style={styles.headerFont}>Getting started with React Native!</Text>
         <Text style={styles.bodyFont}>My name is {name}</Text>
     </View>
    );
};

const styles = StyleSheet.create({
    headerFont:{
        fontSize:45
    },
    bodyFont:{
        fontSize:20
    }
})


export default JSXExcerise;