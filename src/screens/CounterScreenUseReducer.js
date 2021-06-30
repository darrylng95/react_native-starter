import React, { useReducer } from "react";
import PropTypes from "prop-types";
import { View, Button, Text } from "react-native";

const CounterScreenUseReducer = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "increase":
        return { ...state, count: state.count + action.payload };
      case "decrease":
        return { ...state, count: state.count + action.payload };
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const { count } = state;
  return (
    <View>
      <Button
        title="Increase"
        onPress={() =>
          dispatch({
            type: "increase",
            payload: 1,
          })
        }
      />
      <Button
        title="Decrease"
        onPress={() =>
          dispatch({
            type: "decrease",
            payload: -1,
          })
        }
      />
      <Text>Counter value: {count}</Text>
    </View>
  );
};

CounterScreenUseReducer.propTypes = {};

export default CounterScreenUseReducer;
