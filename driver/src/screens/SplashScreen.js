import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import { Text, Button } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {

    const navigation = useNavigation()

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
        },
        logoStyle: {
            alignSelf: "center",
        },
        textContainer: {
            flexDirection: "row", 
            justifyContent: "center"
        },
        h3Style: {
            marginTop: 40,
            fontWeight: "normal",
            marginBottom: 20,
        },
        buttonStyle: {
            marginTop: 20,
            backgroundColor: "black",
            width: "79%",
            alignSelf:'center'
        },
    })

    return (
        <View style={styles.container}>
            <Image source={require("../../assets/logo.png")} style={styles.logoStyle}/>

            <View style={styles.textContainer}>
                <Text h3 h3Style={styles.h3Style}>Earn money with Uber</Text> 
            </View>  

            <View style={{flexDirection: "row"}}>
                <Button 
                    title="Register" 
                    size="lg"
                    buttonStyle={styles.buttonStyle}
                    onPress={() => navigation.navigate("Register")}
                />

                <Button 
                    title="Login" 
                    size="lg"
                    buttonStyle={styles.buttonStyle}
                    onPress={() => navigation.navigate("Login")}
                />
            </View>
        </View>
    )
}

export default SplashScreen