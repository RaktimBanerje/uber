import React from 'react'
import { StyleSheet, View } from 'react-native'
import { StoreContext } from '../../App'
import { Button, Input, Text } from '@rneui/base'
import { API_SERVER_URI } from "@env"
import axios from 'axios'

const AddVehicleScreen = () => {

    const [vehicleNumber, setVehicleNumber] = React.useState("")
    const [isLoading, setIsLoading] = React.useState(false)
    const [status, setStatus] = React.useState(null)
    const { state, dispatch } = React.useContext(StoreContext)

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
        }
    })

    const submit = async () => {
        axios.post(`${API_SERVER_URI}/api/vehicle`, {token: state.token, number: vehicleNumber})
        .then(response => {
            if(response.status === 200){
                console.log(response.data)
            }
        })      
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <View style={styles.container}>
            <Input 
                onChangeText = {value => setVehicleNumber(value)}
            />
            <Button 
                title="Add New Vehicle"
                onPress={submit}
            />
        </View>
    )
}

export default AddVehicleScreen