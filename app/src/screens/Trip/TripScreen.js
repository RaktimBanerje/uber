import React from 'react'
import SafeAreaView from 'react-native-safe-area-view'
import { StyleSheet, View } from 'react-native'
import Map from '../../components/Map'
import TripBookingNavigator from '../../navigators/stacks/TripBookingNavigator'
import { StoreContext } from '../../../App'

const TripScreen = () => {

    const {state, dispatch} = React.useContext(StoreContext)

    React.useEffect(() => {
        if(!state.selectedTrip){
            dispatch({type: "NEW_TRIP_CREATED"})
        }
    }, [])

    const {initialRegion, selectedTrip} = state

    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        mapContainer: {
            flex: 0.5,
        },
        formContainer: {
            flex: 0.5, 
        }
    })

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mapContainer}>
                {selectedTrip && <Map initialRegion={initialRegion} trip={selectedTrip} />}
            </View>
            <View style={styles.formContainer}>
                <TripBookingNavigator />
            </View>
        </SafeAreaView>
    )
}

export default TripScreen