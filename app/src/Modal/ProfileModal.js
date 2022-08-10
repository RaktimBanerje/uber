import React from 'react'
import Modal from "react-native-modal"
import SafeAreaView from 'react-native-safe-area-view'
import { Badge, Text } from '@rneui/base'
import { AntDesign } from '@expo/vector-icons'
import { EvilIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { StoreContext } from '../../App'
import { StyleSheet, View } from 'react-native'

const ProfileModal = () => {

    const {state, dispatch} = React.useContext(StoreContext)

    const {isProfileModalOpen, numberOfMessages, user} = state
    
    const closeModal = () => {
        dispatch({
            type: "PROFILE_SCREEN_TOGGLE"
        })
    }

    const styles = StyleSheet.create({
        modalContainerStyle: {
            margin: 0
        },
        modalStyle: {
            flex: 1, 
            backgroundColor: "white", 
        },
        section1: {
            flex: 0.5,
            paddingTop: 20, 
            paddingHorizontal: 20 
        },
        section2: {
            flex: 0.4,
            paddingTop: 20, 
            paddingHorizontal: 20 
        },
        profileContainer: {
            flex: 0.4,
            marginTop: 26,
            flexDirection: "row",
            justifyContent: "space-between",
        },
        h2Style: {
            width: "60%", 
            fontWeight: "normal"
        },
        featureContainer: {
            flex: 0.6,
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
        }
    })

    return (
        <Modal
            isVisible={isProfileModalOpen}
            coverScreen={true}
            hasBackdrop={false}
            onBackButtonPress={closeModal}
            style={styles.modalContainerStyle}
        >
            <SafeAreaView style={styles.modalStyle}>
                <View style={styles.section1}>
                    <AntDesign name="close" size={26} color="black" onPress={closeModal} />
                    <View style={styles.profileContainer}>
                        <Text h2 h2Style={styles.h2Style}>{user.name}</Text>
                        <EvilIcons name="user" size={100} color="black" />
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
                            value={numberOfMessages}
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
            </SafeAreaView>
        </Modal>
    )
}

export default ProfileModal