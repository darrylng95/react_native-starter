import React, { useReducer } from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENET = 15;
const ColorSquareScreen = (props) => {
    const reducer = (state, action) => {
        // console.log(action)
        // state === {red:number, green:number, blue:number}
        // action === {colorToChange: 'red' || 'green' || 'blue' amount: 15 || -15}
        //dispatch will call the reducer and pass in the action 
        switch(action.colorToChange){
            case 'red':
                return {...state, red: state.red + action.amount}
            case 'green':
                return {...state, green: state.green + action.amount}
            case 'blue':
                return {...state, blue: state.blue + action.amount}
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer,{red:0, green:0, blue:0});

    const {red,green,blue} = state;

  return (
    <View>
      <ColorCounter
        onIncrease={() => dispatch({colorToChange:'red', amount: COLOR_INCREMENET})}
        onDecrease={() => dispatch({colorToChange:'red', amount:-1 * COLOR_INCREMENET})}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => dispatch({colorToChange:'blue', amount: COLOR_INCREMENET})}
        onDecrease={() => dispatch({colorToChange:'blue', amount: -1 * COLOR_INCREMENET})}
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => dispatch({colorToChange:'green', amount: COLOR_INCREMENET})}
        onDecrease={() => dispatch({colorToChange:'green', amount: -1 * COLOR_INCREMENET})}
        color="Green"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

ColorSquareScreen.propTypes = {};

const styles = StyleSheet.create({});

export default ColorSquareScreen;
