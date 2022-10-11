import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import AddVehicleScreen from '../../screens/AddVehicleScreen'
import VehiclesListScreen from '../../screens/VehiclesListScreen'

const VehicleStackNavigator = () => {
    
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}> 
            <Stack.Screen name="VehiclesListScreen" component={VehiclesListScreen} />
            <Stack.Screen name="AddVehicle" component={AddVehicleScreen} />   
        </Stack.Navigator>
    )
}

export default VehicleStackNavigator