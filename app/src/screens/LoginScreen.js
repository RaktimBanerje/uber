import React from 'react'
import SafeAreaView from 'react-native-safe-area-view'
import { StyleSheet, Image, View } from 'react-native'
import { Input, Text, Button } from '@rneui/base'

const LoginScreen = () => {
    const [errorMessage, setErrorMessage] = React.useState(null)
    const [mobile, setMobile] = React.useState(null)
    
    const submit = () => {
        console.log(mobile)
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
        },
        logoStyle: {
            alignSelf: "center",
        },
        contentContainer: {
            marginTop: 40,
            paddingHorizontal: 20
        },
        h3Style: {
            paddingHorizontal: 10,
            fontWeight: "normal",
        },
        inputContainer: {
            marginTop: 20,
        },
        inputLabelStyle: {
            color: "black",
            fontWeight: "normal"
        },
        inputErrorStyle: {
            color: "red"
        },
        buttonContainerStyle: {
            marginHorizontal: 10,
        },
        buttonStyle: {
            marginTop: 20,
            backgroundColor: "black",
            width: "100%",
            alignSelf: "center",
        },
    })

    return (
        <SafeAreaView style={styles.container}>
            <Image source={require("../../assets/logo.png")} style={styles.logoStyle}/>

            <View style={styles.contentContainer}>
                <Text h3 h3Style={styles.h3Style}>Get moving with Uber</Text>
                <Input
                    containerStyle={styles.inputContainer}
                    label="Enter your phone number (required)"
                    labelStyle={styles.inputLabelStyle}
                    errorMessage={errorMessage}
                    errorStyle={styles.inputErrorStyle}
                    onChangeText={value => setMobile(value)}
                />
                <Button 
                    title="Next" 
                    size="lg"
                    containerStyle={styles.buttonContainerStyle}
                    buttonStyle={styles.buttonStyle}
                    titleStyle={styles.buttonTitleStyle}
                    onPress={submit} 
                />
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen