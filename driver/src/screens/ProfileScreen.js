import React from 'react'
import { Badge, Text } from '@rneui/base'
import { AntDesign } from '@expo/vector-icons'
import { EvilIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { StoreContext } from '../../App'
import { StyleSheet, View } from 'react-native'
import { Button } from '@rneui/themed'

const ProfileScreen = () => {

    const {state, dispatch} = React.useContext(StoreContext)

    const styles = StyleSheet.create({
        container: {
            flex: 1, 
            backgroundColor: "white", 
        },
        section1: {
            flex: 0.6,
            paddingHorizontal: 20 
        },
        section2: {
            flex: 0.4,
            paddingTop: 20, 
            paddingHorizontal: 20 
        },
        profileContainer: {
            flex: 0.6,
            marginTop: 11,
            alignItems: "center"
        },
        h2Style: {
            fontWeight: "normal"
        },
        featureContainer: {
            flex: 0.4,
            flexDirection: "row",
            justifyContent: 'space-between',
        },
        feature: {
            alignSelf: "center",
            paddingVertical: 20,
            paddingHorizontal: 30,
            backgroundColor: "whitesmoke",
            borderWidth: 1,
            borderColor: "transparent",
            borderRadius: 10
        },
        featureIcon: {
            alignSelf: "center"
        },
        otherFeature: {
            flex: 0.2,
            flexDirection: "row",
            alignItems: "center"
        },
        otherFeatureText: {
            fontWeight: "bold",
            fontSize: 17, 
            marginLeft: 30
        },
        badgeContainerStyle: {
            top: 4, 
            left: 20,
        },
        buttonContainerStyle: {
            paddingTop: 15
        },
        buttonTitleStyle: {
            fontSize: 17,
            color: "black"
        },
        buttonStyle: {
            borderColor: "black"
        }
    })

    return (
        <View style={styles.container}>
            <View style={styles.section1}>
                <View style={styles.profileContainer}>
                    <EvilIcons name="user" size={100} color="black" />
                    <Text h3 h3Style={styles.h2Style}>Raktim Banerjee</Text>
                    <Button 
                        title="Edit Profile"
                        color="black"
                        type="outline"
                        radius="lg"
                        size="lg"
                        containerStyle={styles.buttonContainerStyle}
                        titleStyle={styles.buttonTitleStyle}
                        buttonStyle={styles.buttonStyle}
                    />
                </View>
                <View style={styles.featureContainer}>
                    <View style={styles.feature}>
                        <Ionicons name="help-buoy" size={30} color="black" style={styles.featureIcon} />
                        <Text>Help</Text>
                    </View>
                    <View style={styles.feature}>
                        <AntDesign name="wallet" size={30} color="black" style={styles.featureIcon} /> 
                        <Text>Wallet</Text>
                    </View>
                    <View style={styles.feature}>
                        <AntDesign name="clockcircle" size={30} color="black" style={styles.featureIcon} />
                        <Text>Trips</Text>
                    </View>
                </View>
            </View>
            <View style={{flex: 0.01, backgroundColor: "whitesmoke"}}></View>
            <View style={styles.section2}>
                <View style={styles.otherFeature}>
                    <MaterialIcons name="message" size={17} color="black" />
                    <Text style={styles.otherFeatureText}>Messages</Text>
                    <Badge 
                        status="primary"
                        value="3"
                        containerStyle={styles.badgeContainerStyle}
                    />
                </View>
                <View style={styles.otherFeature}>
                    <Fontisto name="shopping-package" size={17} color="black" />
                    <Text style={styles.otherFeatureText}>Gifts</Text>
                </View>
                <View style={styles.otherFeature}>
                    <Ionicons name="settings-sharp" size={17} color="black" />
                    <Text style={styles.otherFeatureText}>Settings</Text>
                </View>
                <View style={styles.otherFeature}>
                    <Ionicons name="information-circle" size={17} color="black" />
                    <Text style={styles.otherFeatureText}>Legal</Text>
                </View>
            </View>
        </View>
    )
}

export default ProfileScreen