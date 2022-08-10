import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import TripNavigationScreen from '../../screens/Trip/TripNavigationScreen'
import TripOptionScreen from '../../screens/Trip/TripOptionScreen'
import TripConfirmScreen from '../../screens/Trip/TripConfirmScreen'
import TripReadyScreen from '../../screens/Trip/TripReadyScreen'

const TripBookingNavigator = () => {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            {/* <Stack.Screen name="TripReady" component={TripReadyScreen} /> */}
            <Stack.Screen name="TripNavigation" component={TripNavigationScreen} />
            <Stack.Screen name="TripOption" component={TripOptionScreen} />
            <Stack.Screen name="TripConfirm" component={TripConfirmScreen} />
            <Stack.Screen name="TripReady" component={TripReadyScreen} />
        </Stack.Navigator>
    )
}

export default TripBookingNavigator
