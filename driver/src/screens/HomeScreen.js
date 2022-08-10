import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StoreContext } from '../../App'
import { Dimensions } from 'react-native'
import { Text } from '@rneui/themed'
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import GoButton from '../components/GoButton'
import Map from '../components/Map'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const { height } = Dimensions.get('window')
    const { state, dispatch } = React.useContext(StoreContext)
    const { isAvailable } = state
    const navigation = useNavigation()
    const sheetRef = React.useRef(null)

    return (
        <>
            <View style={styles.container}>
                <View style={styles.mapContainer}>
                    <Map />
                    <GoButton />
                </View>
                <BottomSheet
                    ref={sheetRef}
                    initialSnap={2}
                    snapPoints={["95%", "50%", height-((height*90)/100)]}
                    borderRadius={20}
                    renderContent={() => (
                        <View
                            style={{
                                height: "100%",
                                backgroundColor: "whitesmoke",
                                padding: 16
                            }}
                        >
                        <Text>{isAvailable ? "Finding Trips" : "You are offline"}</Text>
                        </View>
                    )}
                />
            </View>
            <View 
                style={{
                    position: "absolute",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingHorizontal: 20,
                    top: 10,
                    left: 0,
                    width: "100%",
                    zIndex: 1
                }}
            >
                <TouchableOpacity activeOpacity={1} style={{backgroundColor: "white", padding: 4, borderRadius: 50}} onPress={()=> navigation.toggleDrawer()}>
                    <Ionicons name="menu" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} style={{backgroundColor: "black", padding: 4, borderRadius: 50}}>
                    <View style={{height: 50, width: 100}}>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} style={{backgroundColor: "white", padding: 4, borderRadius: 50}}>
                    <Ionicons name="search" size={30} color="black" />
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    mapContainer: {
        flex: 1
    },
    otherContainer: {
        flex: 0.2
    }
})

export default HomeScreen