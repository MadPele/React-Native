import React, {useState} from "react";
import {Text, View, StyleSheet, TextInput} from "react-native";

const InputScreen = () => {

    const [password, setPassword] = useState('')

    return(
        <View>
            <Text>Enter password:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={(newValue) => setPassword(newValue)}
                secureTextEntry={true}
            />
            {password.length < 5
                ? <Text style={{color: 'red'}}>Password must have at least 5 characters</Text>
                : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
})

export default InputScreen
