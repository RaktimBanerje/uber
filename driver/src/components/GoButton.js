import { Button } from '@rneui/themed'
import React from 'react'
import { Dimensions } from 'react-native'
import { StoreContext } from '../../App'

const GoButton = () => {
    const { height, width } = Dimensions.get('window')
    const size = 90
    const { state, dispatch } = React.useContext(StoreContext)

    const handleOnPress = () => {
        dispatch({type: "AVAILABILITY_TOGGLE"})        
    }

    return (
        <Button 
            title="GO"
            containerStyle={{
                position: "absolute",
                bottom: (height*12)/100 ,
                left: (width/2)-(size/2)
            }}
            buttonStyle={{
                height: size,
                width: size,
                borderRadius: 50,
                borderColor: "white",
                borderWidth: 4,
                backgroundColor: "dodgerblue"
            }}
            titleStyle={{
                fontSize: 26
            }}
            onPress={handleOnPress}
        />
    )
}

export default GoButton