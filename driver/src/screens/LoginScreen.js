import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import { Input, Text, Button } from '@rneui/base'
import { StoreContext } from '../../App'
import { API_SERVER_URI } from "@env"
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

const LoginScreen = () => {
    const navigation = useNavigation()
    const [errorMessage, setErrorMessage] = React.useState(null)
    const [isLoading, setLoading] = React.useState(false)
    const [isRegistered, setIsRegistered] = React.useState(true)
    const [mobile, setMobile] = React.useState(null)
    const [pin, setPin] = React.useState(null)
    const { state, dispatch } = React.useContext(StoreContext)
    
    const submit = () => {
        setLoading(true)
        setErrorMessage(null)
        axios.post(`${API_SERVER_URI}/api/driver/login`, {phone: mobile, pin: pin})
        .then(res => {
            setLoading(false)
            if(res.status == 200) {
                dispatch({
                    type: "LOGIN",
                    payload: {
                        "user": res.data.driver,
                        "token": res.data.token
                    }
                })
            }
        })
        .catch(err => {
            if(err.response.status == 401) {
                setErrorMessage(err.response.data.message)
            }
            else {
                console.log("Error is ")
                console.log(err)
                setErrorMessage("Something went wrong!")
            } 
            setLoading(false)
        })
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
        errorMessage: {
            fontSize: 15,
            paddingHorizontal: 10,
            paddingVertical: 4,
            textAlign: "center",
            backgroundColor: "#DC4C64",
            color: "white",
            borderRadius: 10
        }
    })

    return (
        <View style={styles.container}>
            <Image source={require("../../assets/logo.png")} style={styles.logoStyle}/>

            <View style={styles.contentContainer}>
                { isRegistered ? (
                    <>
                    <Text h3 h3Style={styles.h3Style}>Welcome back!</Text>
                    {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
                    <Input
                        containerStyle={styles.inputContainer}
                        placeholder="Enter your phone number"
                        labelStyle={styles.inputLabelStyle}
                        onChangeText={value => setMobile(value)}
                    />

                    <Input
                        containerStyle={styles.inputContainer}
                        placeholder="PIN"
                        labelStyle={styles.inputLabelStyle}
                        onChangeText={value => setPin(value)}
                    />
                </>
                ) : (
                    <View style={{marginBottom: 40}}>
                        <View style={{flexDirection: "row", justifyContent: "center"}}> 
                            <AntDesign name="close" size={50} color="#F93154" />
                        </View>
                        <View style={{flexDirection: "row", justifyContent: "center"}}>
                            <Text style={{fontSize: 18, fontWeight: "bold", color: "#F93154"}}>
                                You are not registered
                            </Text>
                        </View>
                    </View>
                )
                }
                <Button 
                    loading={isLoading}
                    size="lg"
                    containerStyle={styles.buttonContainerStyle}
                    buttonStyle={styles.buttonStyle}
                    titleStyle={styles.buttonTitleStyle}
                    onPress={isRegistered ? submit : ()=>navigation.navigate("Register")} 
                >
                    {isRegistered ? "Go" : "Register "}
                    {!isRegistered && <AntDesign name="arrowright" size={20} color="white" />}
                </Button>

            </View>
        </View>
    )
}

export default LoginScreen