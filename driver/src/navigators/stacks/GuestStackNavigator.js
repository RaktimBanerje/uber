import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import SplashScreen from '../../screens/SplashScreen'
import RegisterScreen from '../../screens/RegisterScreen'
import LoginScreen from '../../screens/LoginScreen'

const GuestStackNavigator = () => {

    const Stack = createStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default GuestStackNavigator
