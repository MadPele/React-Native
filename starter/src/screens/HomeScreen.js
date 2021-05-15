import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Hello World</Text>
      <Button
        title="Go to Components"
        onPress={() => navigation.navigate('Components')}
      />
      <Button
        title="Go to List"
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title="Go to Image"
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title="Go to Counter"
        onPress={() => navigation.navigate('Counter')}
      />
        <Button
            title="Go to Color"
            onPress={() => navigation.navigate('Color')}
        />
        <Button
            title="Go to Square"
            onPress={() => navigation.navigate('Square')}
        />
        <Button
            title="Go to Input"
            onPress={() => navigation.navigate('Input')}
        />
        <Button
            title="Go to Box"
            onPress={() => navigation.navigate('Box')}
        />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  }
});

export default HomeScreen;
