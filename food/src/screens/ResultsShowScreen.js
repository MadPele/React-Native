import React, {useState, useEffect} from "react";
import {View, Image, Text, StyleSheet, FlatList} from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({navigation}) => {

    const id = navigation.getParam('id')
    const [result, setResult] = useState(null)

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }

    useEffect(() => {
        getResult(id)
    },[])

    if (!result) {
        return null
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {
                    return <Image source={{uri: item}} style={styles.photo} />
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    photo: {
        width: 300,
        height: 200,
        marginTop: 10,
        borderRadius: 5
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10
    },
    container: {
        marginLeft: 10
    }
})

export default ResultsShowScreen
