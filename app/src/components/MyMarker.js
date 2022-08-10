import React from 'react'
import { isEqual } from 'lodash'
import { Marker } from 'react-native-maps'

const MyMarker = ({place, identifier}) => {
    return (
        <Marker
            coordinate={{
                latitude: place.coords.latitude,
                longitude: place.coords.longitude,
            }}
            title={identifier}
            description={place.description}
            identifier={identifier}
            pinColor="black"
        />
    )
}

export default MyMarker