import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", firstName: "Wayne", age: "21" },
    { name: "Friend #2", firstName: "Darren", age: "22" },
    { name: "Friend #3", firstName: "David" , age: "23"},
    { name: "Friend #4", firstName: "Max" , age: "28"},
    { name: "Friend #5", firstName: "Lewis", age: "19" },
  ];
  return (
    <View>
      <FlatList
        keyExtractor = {(friends) => friends.name }
        data={friends}
        renderItem={({ item }) => {
          return (
            <Text style={styles.textStyle}>
              hi {item.name}, {item.firstName}, -Age{item.age}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    textStyle:{
        marginVertical: 50
    },
})

export default ListScreen;
