import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const ImageDetails = ({ title, imageSource }) => {
    return (
        <View style={styles.container}>
            <Image source={imageSource} />
            <Text>Image Title: {title} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderStyle: 'solid',

    }
})

export default ImageDetails;