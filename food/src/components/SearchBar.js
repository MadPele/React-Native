import React from "react";
import {View, TextInput, StyleSheet} from "react-native";
import {Feather} from '@expo/vector-icons'

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return(
        <View style={styles.backgroundStyle}>
            <Feather name='search' style={styles.iconStyle} />
            <TextInput
                style={styles.inputStyle}
                placeholder='Search'
                value={term}
                onChangeText={newTerm => onTermChange(newTerm)}
                autoCapitalize='none'
                autoCorrect={false}
                onEndEditing={() => onTermSubmit()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: 'white',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 10
    },
    inputStyle: {
        fontSize: 18,
        flex: 1
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10
    }
})

export default SearchBar
