import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Input, Text, Button } from '@rneui/base'
import { StyleSheet, View } from 'react-native'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    topHalf: {
        flex: 0.5
    },
    secondHalf: {
        flex: 0.5,
        alignItems: "center"
    },
    inputContainerStyle: {
        width: 80,
    }
})

const Verification = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.topHalf}>

        </View>

        <View style={styles.secondHalf}>
            <Text h3>Please enter the 4 digit code sent to</Text>
            <View style={{flexDirection: "row"}}>
                <Input 
                    containerStyle={styles.inputContainerStyle}
                />
                <Input 
                    containerStyle={styles.inputContainerStyle}
                />
                <Input 
                    containerStyle={styles.inputContainerStyle}
                />
                <Input 
                    containerStyle={styles.inputContainerStyle}
                />
            </View>
        </View>
    </SafeAreaView>
  )
}
export default Verification