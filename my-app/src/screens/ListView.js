import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

const ListView = () => {

    const listData = [
        { name: 'Name 1', age: 20 },
        { name: 'Name 2', age: 20 },
        { name: 'Name 3', age: 20 },
        { name: 'Name 4', age: 20 },
        { name: 'Name 5', age: 20 },
        { name: 'Name 6', age: 20 },
        { name: 'Name 7', age: 20 },
        { name: 'Name 8', age: 20 },
        { name: 'Name 9', age: 20 },
        { name: 'Name 10', age: 20 },
        { name: 'Name 11', age: 20 },
        { name: 'Name 12', age: 20 },
        { name: 'Name 13', age: 20 },
        { name: 'Name 145', age: 20 },
    ]


    return (
        <FlatList
            style={style.listStyle}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={listData}
            keyExtractor={(data) => data.name}
            renderItem={({ item, index }) => {
                return (
                    <Text style={style.listItemStyle}>({index + 1}) Name: {item.name}, age: {item.age} </Text>
                )
            }}
        />
    )
}

const style = StyleSheet.create({
    listStyle: {
        padding: 40,
        backgroundColor: 'lightgreen',
        alignSelf: 'center'
    },
    listItemStyle: {
        padding: 20,
        alignSelf: 'center',
        backgroundColor: 'lightblue',
    },
});

export default ListView;