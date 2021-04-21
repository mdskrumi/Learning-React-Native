import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ColorCounter = ({ title, incText, decText, increment, decrement }) => {
    return (
        <View>
            <Text style={styles.testStyle}>{title}</Text>
            <Button
                title={incText}
                onPress={increment}
            />
            <Button
                title={decText}
                onPress={decrement}
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