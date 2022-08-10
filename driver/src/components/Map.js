import React from 'react'
import MapView from 'react-native-maps'
import { Dimensions } from 'react-native'
import { StoreContext } from '../../App'

const Map = () => {

    const { width, height } = Dimensions.get('window')
    const ASPECT_RATIO = width / height
    const LATITUDE_DELTA = 0.0922
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO
    
    const { state } = React.useContext(StoreContext)
    const origin = undefined
    const { initialRegion } = state
    const mapRef = React.useRef(null)

    return (
        <MapView
            ref={mapRef}
            provider="google"
            style={{
                flex: 1,
            }}
            region={{
                latitude: origin?.coords.latitude || initialRegion.latitude,
                longitude: origin?.coords.longitude || initialRegion.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            }}
            showsMyLocationButton
            showsUserLocation
        >
        </MapView>
    )
}

export default Map