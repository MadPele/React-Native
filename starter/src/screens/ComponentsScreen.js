import React from 'react'
import {Text, StyleSheet, View} from 'react-native'

const ComponentsScreen = () => {
    const name = 'Andrzej'

    return (
        <View>
            <Text style={styles.textHeader}>Getting started with Reacr Native!</Text>
            <Text style={styles.textStyle}>My name is {name}.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    },
    textHeader: {
        fontSize: 45
    }
})

export default ComponentsScreen