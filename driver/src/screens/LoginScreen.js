import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import { Input, Text, Button } from '@rneui/base'
import { StoreContext } from '../../App'
import { API_SERVER_URI } from "@env"
import axios from 'axios'

const LoginScreen = () => {
    const [errorMessage, setErrorMessage] = React.useState(null)
    const [mobile, setMobile] = React.useState(null)
    const [pin, setPin] = React.useState(null)
    const { state, dispatch } = React.useContext(StoreContext)
    

    const submit = () => {
        axios.post(`${API_SERVER_URI}/api/driver/auth`, {phone: mobile})
        .then(res => alert(res.data.token))
        .catch(err => console.log(err.response.status))
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
            marginBottom: 20
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
        <View style={styles.container}>
            <Image source={require("../../assets/logo.png")} style={styles.logoStyle}/>

            <View style={styles.contentContainer}>
                <Text h3 h3Style={styles.h3Style}>Welcome back!</Text>
                <Input
                    containerStyle={styles.inputContainer}
                    placeholder="Enter your phone number"
                    labelStyle={styles.inputLabelStyle}
                    errorMessage={errorMessage}
                    errorStyle={styles.inputErrorStyle}
                    onChangeText={value => setMobile(value)}
                />

                <Input
                    containerStyle={styles.inputContainer}
                    placeholder="PIN"
                    labelStyle={styles.inputLabelStyle}
                    errorMessage={errorMessage}
                    errorStyle={styles.inputErrorStyle}
                    onChangeText={value => setPin(value)}
                />

                <Button 
                    title="Go" 
                    size="lg"
                    containerStyle={styles.buttonContainerStyle}
                    buttonStyle={styles.buttonStyle}
                    titleStyle={styles.buttonTitleStyle}
                    onPress={submit} 
                />
            </View>
        </View>
    )
}

export default LoginScreen