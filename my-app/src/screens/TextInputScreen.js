import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const TextInputScreen = () => {

    const [name, setName] = useState('');

    return (
        <View>
            <Text>Enter Your Name:{name} </Text>
            <TextInput style={styles.textInput}
                autoCorrect="false"
                autoCapitalize="none"
                value={name}
                onChangeText={(val) => setName(val)}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        margin: 20,
        borderWidth: 2,
        borderColor: 'blue'

    }
});

export default TextInputScreen;