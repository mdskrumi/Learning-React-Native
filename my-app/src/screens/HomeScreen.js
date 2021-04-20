import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {

  return (
    <View>
      <Text style={styles.text}>Allahu Akhbar</Text>
      <Button
        title={"Go To Component demo"}
        onPress={() => { navigation.navigate('Component') }}
      />
      <Button
        title={"Go To List demo"}
        onPress={() => { navigation.navigate('List') }}
      />
      <Button
        title={"Go To ImageScreen demo"}
        onPress={() => { navigation.navigate('ImageScreen') }}
      />


    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignSelf: "center",
    backgroundColor: 'green',
    color: 'white',
    borderRadius: 20,
    padding: 20,
    fontWeight: 'bold'
  }
});

export default HomeScreen;
