import React, { useState, useReducer } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import ColorCounter from '../components/ColorCounter';


const constants = {
    CHANGE_RED: 'CHANGE_RED',
    CHANGE_GREEN: 'CHANGE_GREEN',
    CHANGE_BLUE: 'CHANGE_BLUE',
}


const reducer = (state, action) => {
    switch (action.type) {
        case constants.CHANGE_RED:
            return (state.red + action.payload < 256 && state.red + action.payload >= 0)
                ? { ...state, red: state.red + action.payload }
                : state;
        case constants.CHANGE_GREEN:
            return (state.green + action.payload < 256 && state.green + action.payload >= 0)
                ? { ...state, green: state.green + action.payload }
                : state;
        case constants.CHANGE_BLUE:
            return (state.blue + action.payload < 256 && state.blue + action.payload >= 0)
                ? { ...state, blue: state.blue + action.payload }
                : state;
        default:
            return state;

    }
}

const SquareScreen = () => {

    // const [red, setRed] = useState(0);
    // const [green, setGreen] = useState(0);
    // const [blue, setBlue] = useState(0);

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    const { red, green, blue } = state;

    return (
        <View>
            <ColorCounter
                title={'RED'}
                incText={"Increase Red"}
                decText={'Decrease Red'}
                increment={() => { dispatch({ type: constants.CHANGE_RED, payload: 15 }) }}
                decrement={() => { dispatch({ type: constants.CHANGE_RED, payload: -15 }) }}
            />
            <ColorCounter
                title={'Green'}
                incText={"Increase Green"}
                decText={'Decrease Green'}
                increment={() => { dispatch({ type: constants.CHANGE_GREEN, payload: 15 }) }}
                decrement={() => { dispatch({ type: constants.CHANGE_GREEN, payload: -15 }) }}
            />
            <ColorCounter
                title={'BLUE'}
                incText={"Increase Blue"}
                decText={'Decrease Blue'}
                increment={() => { dispatch({ type: constants.CHANGE_BLUE, payload: 15 }) }}
                decrement={() => { dispatch({ type: constants.CHANGE_BLUE, payload: -15 }) }}
            />

            <View style={styles.container}>
                <View style={{ width: 100, height: 100, backgroundColor: `rgb(${red},${green},${blue})` }} />
                <Text> Red: {red}, Green: {green}, Blue: {blue} </Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderStyle: 'solid',

    }
})

export default SquareScreen;