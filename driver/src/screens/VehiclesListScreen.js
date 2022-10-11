import { Avatar, Button, Text } from '@rneui/base'
import axios from 'axios'
import React from 'react'
import { API_SERVER_URI } from "@env"
import { StoreContext } from '../../App'
import { View, FlatList, TouchableOpacity } from 'react-native'

const SingleVehicle = ({item}) => {
    return (
        <TouchableOpacity activeOpacity={1}>
            <View style={{flexDirection: "row", backgroundColor: "white", marginHorizontal: 8, marginTop: 8, marginBottom: 4}}>
                <Avatar size={88} />
                <View style={{flex: 1, alignItems: "center"}}>
                    <Text h4 style={{color: "grey"}}>{item.number}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const VehiclesListScreen = () => {

    const { state, dispatch } = React.useContext(StoreContext)
    const [vehicles, setVehicles] = React.useState([])
    const [isLoading, setLoading] = React.useState(false)

    React.useEffect(() => {
        axios.post(`${API_SERVER_URI}/api/vehicle`, {token: state.token})
        .then(response => {
            if(response.status == 200) {
                setVehicles(response.data.vehicles)
            }
            setLoading(false)   
        })
        .catch(err => {
            console.log(err)
            setLoading(false)   
        })
    }, [])
  
    return (
      <View style={{flex: 1}}>
        <View>
            <FlatList 
                data={vehicles}
                renderItem={SingleVehicle}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            />
        </View>
      </View>
    )
}

export default VehiclesListScreen