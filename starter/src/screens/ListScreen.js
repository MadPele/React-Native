import React from 'react'
import {Text, StyleSheet, FlatList} from 'react-native'

const ListScreen = () => {
    const friends = [
        {name: 'Friend #1', age: 21},
        {name: 'Friend #2', age: 33},
        {name: 'Friend #3', age: 12},
        {name: 'Friend #4', age: 56},
        {name: 'Friend #5', age: 45},
        {name: 'Friend #6', age: 22},
        {name: 'Friend #7', age: 51},
        {name: 'Friend #8', age: 41},
        {name: 'Friend #9', age: 23}
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
