import React from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { Button } from '@rneui/base';
import { Ionicons } from "@expo/vector-icons";
import { StoreContext } from '../../../App';

import HomeScreen from '../../screens/HomeScreen'
import ProfileScreen from '../../screens/ProfileScreen';
import AddCarScreen from '../../screens/AddCarScreen';

const DrawerContent = (props) => {

    const {state, dispatch} = React.useContext(StoreContext)

    return (
            <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: "#FFF", flex: 1}}>
                <DrawerItemList {...props} />  
                <View style={{padding: 10, borderTopWidth: 1, borderTopColor: "#CCC"}}>
                    <Button
                        title="Log Out"
                        color="black" 
                        onPress={() => dispatch({type: "LOGOUT"})}
                    />
                </View>  
            </DrawerContentScrollView>
    )
}

const AppDrawerNavigator = () => {
    
    const Drawer = createDrawerNavigator()

    const {state, dispatch} = React.useContext(StoreContext)
    
    return (
        <NavigationContainer>
            <Drawer.Navigator 
                drawerContent={(props) => <DrawerContent {...props} />}
                initialRouteName={"Home"} 
                screenOptions={{
                    headerStatusBarHeight: 10
                }}
            >
                <Drawer.Screen 
                    name="Home" 
                    component={HomeScreen} 
                    options={{
                        drawerIcon: ({color}) => <Ionicons name="home-outline" size={22} color={color} />,
                        headerShown: false
                    }}
                />
                <Drawer.Screen 
                    name="AddDevice" 
                    component={AddCarScreen}
                    options={{
                        title: "Add New Device",
                        drawerLabel: "Add New Device",
                        drawerIcon: ({color}) => <Ionicons name="car-outline" size={22} color={color} />
                    }} 
                />
                <Drawer.Screen 
                    name="Contact" 
                    component={HomeScreen} 
                    options={{
                        drawerIcon: ({color}) => <Ionicons name="call-outline" size={22} color={color} />
                    }}
                />
                <Drawer.Screen 
                    name="Profile" 
                    component={ProfileScreen} 
                    options={{
                        title: "My Profile",
                        drawerLabel: "Profile",
                        drawerIcon: ({color}) => <Ionicons name="man-outline" size={22} color={color} />
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default AppDrawerNavigator