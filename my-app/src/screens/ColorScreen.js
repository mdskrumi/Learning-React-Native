import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet, Button } from 'react-native';

const ColorScreen = () => {

    const [colors, setColors] = useState('');
    console.log(colors);

    const generateRandomColor = () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        return `#${randomColor}`;
    }

    return (
        <View>
            <Button
                title={"Add Color"}
                onPress={() => { setColors([...colors, generateRandomColor()]) }}
            />
            <FlatList data={colors} keyExtractor={(c) => c} renderItem={({ item }) => <View style={{ width: 100, height: 100, backgroundColor: item }} />} />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default ColorScreen;
