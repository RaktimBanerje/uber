import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from '@rneui/themed'

const AddCarScreen = () => {


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
        }
    })

    return (
        <View style={styles.container}>
            <Text>Add Car Screen</Text>
        </View>
    )
}

export default AddCarScreen