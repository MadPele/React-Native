import React from "react";
import {Text, View, StyleSheet} from "react-native";

const BoxScreen = () => {
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child #1</Text>
            <Text style={styles.textTwoStyle}>Child #2</Text>
            <Text style={styles.textThreeStyle}>Child #3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 300
    },
    textOneStyle: {
        borderWidth: 2,
        borderColor: 'red',
        height: 30
    },
    textTwoStyle: {
        borderWidth: 2,
        borderColor: 'red',
        marginTop: 30,
        height: 30
    },
    textThreeStyle: {
        borderWidth: 2,
        borderColor: 'red',
        height: 30
    }
})

export default BoxScreen
