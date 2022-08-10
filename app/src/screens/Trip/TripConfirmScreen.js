import { Button, Text } from '@rneui/base'
import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { StoreContext } from '../../../App'
import { format } from 'date-fns'

const TripConfirmScreen = ({route, navigation}) => {

  const {state, dispatch} = React.useContext(StoreContext)
  const {currentDateTime} = state

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 15,
      backgroundColor: "white"
    }
  })

  const tripOption = route.params

  return (
    <View style={styles.container}>
        <View style={{alignItems: "center"}}>
          <Image 
            source={tripOption.image}
            style={{
              height: 120,
              width: 170
            }}
          />
        </View>
        <View style={{flex: 0.5, flexDirection: "row", justifyContent: "space-between"}}>
            <View> 
                <Text h3>{tripOption.name}</Text>
                <Text style={{fontSize: 17,fontWeight: "normal"}}>{format(currentDateTime, "p")} drop-off</Text>
                <Text style={{fontSize: 15, fontWeight: "normal"}}>{tripOption.description}</Text>
            </View>
            <View>
              <Text h3>{tripOption.price}</Text>
            </View>
        </View>
        <TouchableOpacity activeOpacity={1} style={{flex: 0.25, flexDirection: "row", justifyContent: "space-between"}}>
          <Ionicons name="card" size={30} color="grey" />
          <MaterialIcons name="arrow-right" size={24} color="black" style={{marginTop: 8}} />
        </TouchableOpacity>
        <View style={{flex: 0.25, flexDirection: "row", justifyContent: "space-between"}}>
            <View style={{width: "78%"}}>
              <Button
                title={`Confirm ${tripOption.name}`}
                size="lg"
                color="black"
                titleStyle={{fontSize: 20}}
                onPress={()=> navigation.navigate("TripReady", tripOption)}
              />
            </View>
            <View style={{width: "20%"}}>
              <Button
                  size="lg"
                  color="#eeeeee"
                  onPress={() => dispatch({type: "SCHEDULE_MODAL_TOGGLE"})}
                >
                  <MaterialIcons name="schedule-send" size={24} color="black" />
                </Button>
            </View>
        </View>
    </View>
  )
}

export default TripConfirmScreen