import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'

const ListScreen = () => {
    const friends = [
        {name: 'Firend #1', age: 21},
        {name: 'Firend #2', age: 33},
        {name: 'Firend #3', age: 12},
        {name: 'Firend #4', age: 56},
        {name: 'Firend #5', age: 45},
        {name: 'Firend #6', age: 22},
        {name: 'Firend #7', age: 51},
        {name: 'Firend #8', age: 41},
        {name: 'Firend #9', age: 23}
    ]
    return (
        <FlatList
            keyExtractor={friend => friend.name}
            data={friends}
            renderItem={({item}) => {
                return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
            }}
        />
    )
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 10
    }
})

export default ListScreen