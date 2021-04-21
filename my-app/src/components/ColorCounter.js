import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ColorCounter = ({ title, incText, decText, value, setValue }) => {
    return (
        <View>
            <Text style={styles.testStyle}>{title}</Text>
            <Button
                title={incText}
                onPress={() => { if (value + 1 < 257) setValue(value + 1) }}
            />
            <Button
                title={decText}
                onPress={() => { if (value - 1 >= 0) setValue(value - 1) }}
            />
        </View >
    )
}

const styles = StyleSheet.create({
    testStyle: {
        textAlign: 'center'
    }
});

export default ColorCounter;