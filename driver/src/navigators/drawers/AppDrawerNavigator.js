import React from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import HomeScreen from '../../screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import { ImageBackground, View } from 'react-native';
import { Avatar, Button } from '@rneui/base';
import { Ionicons } from "@expo/vector-icons";

const DrawerContent = (props) => {
    return (
            <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: "#FFF", flex: 1}}>
                <DrawerItemList {...props} />  
                <View style={{padding: 10, borderTopWidth: 1, borderTopColor: "#CCC"}}>
                    <Button
                        title="Log Out"
                        color="black" 
                        onPress={() => handleLogout()}
                    />
                </View>  
            </DrawerContentScrollView>
    )
}

const AppDrawerNavigator = () => {
    
    const Drawer = createDrawerNavigator()
    
    return (
        <NavigationContainer>
            <Drawer.Navigator 
                drawerContent={(props) => <DrawerContent {...props} />}
                initialRouteName="Home" 
                screenOptions={{
                    headerShown: false
                }}
            >
                <Drawer.Screen 
                    name="Home" 
                    component={HomeScreen} 
                    options={{
                        drawerIcon: ({color}) => <Ionicons name="home-outline" size={22} color={color} />
                    }}
                />
                <Drawer.Screen 
                    name="Add new device" 
                    component={HomeScreen}
                    options={{
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
                    component={HomeScreen} 
                    options={{
                        drawerIcon: ({color}) => <Ionicons name="man-outline" size={22} color={color} />
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default AppDrawerNavigator