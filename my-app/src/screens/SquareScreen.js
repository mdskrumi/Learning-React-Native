import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import ColorCounter from '../components/ColorCounter';


const SquareScreen = () => {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);


    return (
        <View>
            <ColorCounter
                title={'RED'}
                incText={"Increase Red"}
                decText={'Decrease Red'}
                value={red}
                setValue={setRed}
            />
            <ColorCounter
                title={'Green'}
                incText={"Increase Green"}
                decText={'Decrease Green'}
                value={green}
                setValue={setGreen}
            />
            <ColorCounter
                title={'BLUE'}
                incText={"Increase Blue"}
                decText={'Decrease Blue'}
                value={blue}
                setValue={setBlue}
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