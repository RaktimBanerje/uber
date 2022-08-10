import { Avatar, Button, Input, Text } from '@rneui/base'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'

const TripReadyScreen = ({route, navigation}) => {

    const tripOption = route.params

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#ffffff",
            paddingHorizontal: 20,
        }
    })

    const driver = {
        name: "Cathenna",
        totalTrips: "4,028"
    }

    return (
        <View style={styles.container}>
            <View style={{ flex: 0.2, flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingTop: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>{driver.name} is on their way</Text>
                <View style={{ backgroundColor: "black", justifyContent: "center", alignItems: "center", paddingVertical: 6, paddingHorizontal: 22 }}>
                    <Text h4 h4Style={{ color: "white" }}>6</Text>
                    <Text style={{ fontWeight: "bold", fontSize: 12, color: "white" }}>min</Text>
                </View>
            </View>
            <View style={{ flex: 0.4, flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                <View>
                    <Avatar size={125} source={tripOption.image} />
                    <Avatar
                        containerStyle={{
                            position: "absolute",
                            top: 40,
                            zIndex: 1
                        }}
                        source={require("../../../assets/driver.webp")}
                        rounded={true}
                        size="medium"
                    />
                    <View style={{flexDirection: "row", alignItems: "center", position: "absolute", top: 80, zIndex: 1, backgroundColor: "white", paddingHorizontal: 6, paddingVertical: 1, borderRadius: 50, borderWidth: 1, borderColor: 'grey' }}>
                        <Text style={{ fontSize: 17, paddingHorizontal: 4 }}>4.9</Text>
                        <AntDesign name="star" size={15} color="black" />
                    </View>
                </View>
                <View style={{justifyContent: "center"}}>
                    <Text h4 h4Style={{fontWeight: "normal"}}>WB07J5965</Text>
                    <Text style={{fontSize: 15, fontWeight: "bold"}}>White Hyundai Eon</Text>
                </View>
            </View>
            <View style={{ flex: 0.1, flexDirection: "row", justifyContent: "center" }}>
                <Text style={{textAlign: "center", fontSize: 17, fontWeight: "bold", color: "dodgerblue" }}>{driver.name}</Text>
                <Entypo name="dot-single" size={24} color="black" />
                <Text style={{fontSize: 17, fontWeight: "bold"}}>{driver.totalTrips} Trips</Text>
            </View>
            <View style={{ flex: 0.3, flexDirection: "row", justifyContent: "space-between" }}>
                <Input
                    containerStyle={{
                        alignSelf: "center",
                        width: "82%"
                    }}
                    inputContainerStyle={{
                        marginTop: 25,
                        backgroundColor: "#eeeeee",
                        borderWidth: 1,
                        borderColor: "#eeeeee",
                        borderRadius: 50
                    }}
                    inputStyle={{
                        color: "black",
                        fontSize: 15,
                        paddingHorizontal: 20,
                    }}
                    placeholder={`Message ${driver.name}`}
                    onPress={() => console.log("Press")}
                />
                <Button
                    containerStyle={{
                        alignSelf: "center"
                    }}
                    buttonStyle={{
                        borderRadius: 50
                    }}
                    size="lg"
                    color="#eeeeee"
                >
                    <MaterialIcons name="phone" size={24} color="black" />
                </Button>
            </View>
        </View>
    )
}

export default TripReadyScreen