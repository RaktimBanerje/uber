import React from 'react'
import { StyleSheet, View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAP_API_KEY } from "@env"
import { Coords } from '../../class/Coords'
import { Location } from '../../class/Location'
import { StoreContext } from '../../../App'
import { useNavigation } from '@react-navigation/native'

const TripNavigationScreen = () => {

    const navigation = useNavigation()

    const {state, dispatch} = React.useContext(StoreContext)
    const {selectedTrip} = state

    const inputStyles = StyleSheet.create({
        container: {
            paddingTop: 20,
            flex: 0
        },
        textInputContainer: {
            marginHorizontal: 22,
            paddingBottom: 0
        },
        textInput: {
            backgroundColor: "#DDDDDDDF",
            borderRadius: 0,
            fontSize: 18
        }
    })

    return (
        <View>
            <GooglePlacesAutocomplete 
                placeholder="Enter pick-up point"
                nearbyPlacesAPI='GooglePlacesSearch'
                fetchDetails={true}
                returnKeyType="search"
                enablePoweredByContainer={false}
                isRowScrollable={true}
                query={{
                    key: GOOGLE_MAP_API_KEY,
                    language: 'en',
                }}
                debounce={400}
                styles={inputStyles}
                onPress={(data, details = null) => {
                    dispatch({
                        type: "SET_ORIGIN",
                        payload: new Location(
                            data.description,
                            new Coords (
                                details.geometry.location.lat, 
                                details.geometry.location.lng
                            )
                        )
                    })

                    selectedTrip.destination.description && navigation.navigate("TripOption")
                }}
            />

            <GooglePlacesAutocomplete 
                placeholder="Where to?"
                nearbyPlacesAPI='GooglePlacesSearch'
                fetchDetails={true}
                returnKeyType="search"
                enablePoweredByContainer={false}
                isRowScrollable={true}
                query={{
                    key: GOOGLE_MAP_API_KEY,
                    language: 'en',
                    }}
                debounce={400}
                styles={inputStyles}
                onPress={(data, details = null) => {
                    dispatch({
                        type: "SET_DESTINATION",
                        payload: new Location(
                            data.description,
                            new Coords (
                                details.geometry.location.lat, 
                                details.geometry.location.lng
                            )
                        )
                    })

                    selectedTrip.origin.description && navigation.navigate("TripOption")
                }}
            />
        </View>
    )
}

export default TripNavigationScreen