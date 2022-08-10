import React from 'react'
import SafeAreaView from 'react-native-safe-area-view'
import { StyleSheet, Image, View, TouchableOpacity, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Text, Button, Badge } from '@rneui/base'
import { Ionicons } from '@expo/vector-icons'
import { EvilIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { StoreContext } from '../../App'

const HomeScreen = () => {

    const navigation = useNavigation()

    const {state, dispatch} = React.useContext(StoreContext)
    const { numberOfMessages } = state

    const services = [
        {
            id: 1,
            title: "Get a Trip",
            image: require("../../assets/cars/UberGo.png"),
            screen: "Trip"
        },
        {
            id: 2,
            title: "Order food",
            image: require("../../assets/foods/bread.png"),
            screen: "Eat"
        },
    ]
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            marginHorizontal: 10,
        },
        profileIconContainer: {
            flex: 0.1,
            justifyContent: "flex-end",
            alignItems: "flex-end",
            marginHorizontal: 10
        },  
        textContainer: {
            marginHorizontal: 6,
            flex: 0.1
        },
        serviceContainer: {
            // flex: 0.4,
            flex: 0.4, 
            flexDirection: "row", 
            justifyContent: 'space-around'
        },
        buttonContainerStyle: {
            flex: 0.1,
        },
        box: {
            width: 165,
            backgroundColor: "whitesmoke",
            borderRadius: 10,
            borderStyle: "solid",
            borderWidth: 1, 
            borderColor: "#b5b5b5",
            height: 200,
        },
        boxImage: {
            height: 88, 
            width: "100%"
        },
        boxContent: {
            flex: 1,
            justifyContent: 'space-evenly',
            marginHorizontal: 26
        },
        badgeContainerStyle: {
            position: "absolute",
            bottom: 17, 
            right: 26,
        },
        textInputContainer: {
            flex: 0.4,
            marginHorizontal: 22,
            paddingBottom: 0
        },
        textInput: {
            backgroundColor: "#DDDDDDDF",
            borderRadius: 0,
            fontSize: 18
        }
    })

    const Service = ({item}) => {

        const pressHandler = () => {
            navigation.navigate(item.screen)
        }

        return (
            <TouchableOpacity style={styles.box} activeOpacity={0.5} key={item.id} onPress={pressHandler}>
                <Image source={item.image} style={styles.boxImage} />
                <View style={styles.boxContent}>
                    <Text h4>{item.title}</Text>
                    <Ionicons name="arrow-forward-circle" size={40} color="black" />
                </View>
            </TouchableOpacity>
        )
    }
    
    const ItemSeparatorComponent = () => {
        return (
            <View style={{width: 10}}></View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            
            <View style={styles.profileIconContainer}> 
                {
                    numberOfMessages > 0 && 
                    <Badge 
                        status="primary"
                        value={numberOfMessages}
                        containerStyle={styles.badgeContainerStyle}
                    />
                }                       
                <EvilIcons name="user" size={40} color="black" onPress={() => dispatch({type: "PROFILE_SCREEN_TOGGLE"})} />
            </View>
           
            <View style={styles.textContainer}>
                <Text h1>Uber</Text>
            </View>
           
            <View style={styles.serviceContainer}> 
                <FlatList 
                    data={services}
                    renderItem={Service}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={ItemSeparatorComponent}
                    horizontal
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            <TouchableOpacity 
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: "#DDDDDDDF",
                    borderRadius: 50,
                    height: 55,
                    backgroundColor: "#DDDDDDDF",
                    justifyContent: "space-between",
                    paddingHorizontal: 20,
                }}
                activeOpacity={1}
                onPress={() => navigation.navigate("Trip")}
            >
                <View style={{
                    borderRightWidth: 1, 
                    borderRightStyle: "solid", 
                    borderRightColor: "grey",
                    paddingRight: 20
                }}>
                    <Text style={{color: "grey", fontSize: 16, fontWeight: "bold"}}>Enter pick-up point</Text>
                </View>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => dispatch({type: "SCHEDULE_MODAL_TOGGLE"})}
                >
                    <View style={{
                        flexDirection: "row",
                        backgroundColor: "white",
                        borderWidth: 1,
                        borderStyle: "solid",
                        borderRadius: 50,
                        borderColor: "transparent",
                        paddingHorizontal: 13,
                        paddingVertical: 6
                    }}>
                        <AntDesign name="clockcircle" size={20} color="black"/>
                        <Text style={{paddingHorizontal: 6}}>Now</Text>
                        <AntDesign name="caretdown" size={12} color="black" style={{alignSelf: "center"}} />
                    </View>
                </TouchableOpacity>
            </TouchableOpacity>
            
        </SafeAreaView>
    )
}



export default HomeScreen