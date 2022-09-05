import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import { Input, Text, Button } from '@rneui/base'
import { StoreContext } from '../../App'
import { API_SERVER_URI } from "@env"
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { AntDesign } from '@expo/vector-icons'; 

const RegisterScreen = () => {
    const navigation = useNavigation()
    const [errorMessage, setErrorMessage] = React.useState(null)
    const [mobile, setMobile] = React.useState(null)
    const [pin, setPin] = React.useState(null)
    const [isLoading, setLoading] = React.useState(false)
    const [isRegistered, setIsRegistered] = React.useState(false)
    const [isAlreadyRegistered, setIsAlreadyRegistered] = React.useState(false)
    const { state, dispatch } = React.useContext(StoreContext)

    const submit = () => {
        setLoading(true)
        axios.post(`${API_SERVER_URI}/api/driver/register`, {phone: mobile , pin: pin})
        .then(res => {
            setLoading(false)
            if(res.data.registered) {   
                setIsAlreadyRegistered(true)
            }
            else {
                setIsRegistered(true)
                dispatch({
                    type: "LOGIN",
                    payload: {
                        "user": res.data.driver,
                        "token": res.data.token
                    }
                })
            }
        })
        .catch(err => console.log(err))
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
            width: "100%",
            alignSelf: "center",
        },
    })

    return (
        <View style={styles.container}>
            <Image source={require("../../assets/logo.png")} style={styles.logoStyle}/>

            <View style={styles.contentContainer}>        
                { isRegistered || isAlreadyRegistered ? (
                    <View style={{marginBottom: 40}}>
                        <View style={{flexDirection: "row", justifyContent: "center"}}> 
                            <AntDesign name="check" size={50} color="#00C851" />
                        </View>
                        <View style={{flexDirection: "row", justifyContent: "center"}}>
                            <Text style={{fontSize: 18, fontWeight: "bold", color: "#00C851"}}>
                                { isRegistered && "You are registered" }
                                { isAlreadyRegistered && "You are already registered" }
                            </Text>
                        </View>
                    </View>
                ) : (
                    <View>
                        <Text h3 h3Style={styles.h3Style}>Register</Text>
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
                    </View>
                ) }

                <Button 
                    loading={isLoading}
                    color="black"
                    title="Submit" 
                    size="lg"
                    containerStyle={styles.buttonContainerStyle}
                    buttonStyle={styles.buttonStyle}
                    titleStyle={styles.buttonTitleStyle}
                    onPress={isRegistered || isAlreadyRegistered ? ()=>navigation.navigate("Login") : submit} 
                >
                    {isRegistered || isAlreadyRegistered ? "Login  " : "Register"}
                    {(isRegistered || isAlreadyRegistered) && <AntDesign name="arrowright" size={20} color="white" />}
                </Button>
            </View>
        </View>
    )
}

export default RegisterScreen