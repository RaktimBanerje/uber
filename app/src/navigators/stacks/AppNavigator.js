import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import HomeScreen from '../../screens/HomeScreen'
import TripScreen from '../../screens/Trip/TripScreen'

const AppNavigator = () => {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Trip" component={TripScreen} />
        </Stack.Navigator>
    )
}

export default AppNavigator
