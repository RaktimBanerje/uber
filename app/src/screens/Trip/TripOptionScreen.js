import React from 'react'
import { StyleSheet, FlatList, TouchableOpacity, View } from 'react-native'
import { Text } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'
import { Avatar } from '@rneui/themed'
import { Ionicons } from '@expo/vector-icons'
import { StoreContext } from '../../../App'
import { tripOptions } from '../../data/tripOptions'

const TripOptionScreen = () => {

    const styles = StyleSheet.create({
        container: {
            flex: 1, 
            backgroundColor: "white", 
            paddingHorizontal: 10
        },
        headerContainer: {
            flex: 0.1, 
            flexDirection: "row", 
            alignItems: "center", 
            paddingVertical: 4, 
            borderBottomWidth: 0.4, 
            borderBottomStyle: "solid", 
            borderBottomColor: "grey"
        },
        headerText: {
            fontSize: 17, 
            fontWeight: "500", 
            paddingHorizontal: 50
        },
        listContainer: {
            flex: 1, 
            paddingVertical: 10
        },
        optionContainer: {
            flex: 1, 
            flexDirection: "row"
        },
        selectedOptionStyle: {
            borderWidth: 1, 
            borderStyle: "solid", 
            borderRadius: 10, 
            borderColor: "grey"
        },
        optionInformationContainer: {
            paddingTop: 20
        },
        optionHeading1Style: {
            fontSize: 20, 
            fontWeight: "500"
        },
        optionHeading2Style: {
            fontSize: 14, 
            fontWeight: "normal"
        },
        optionPriceContainer: {
            paddingTop: 16, 
            paddingHorizontal: 4
        },
        optionPriceStyle: {
            fontSize: 20, 
            fontWeight: "bold"
        },
        itemSeparatorStyle: {
            height: 10
        }
    })

    const navigation = useNavigation()
    const {state} = React.useContext(StoreContext)
    const {selectedTrip} = state
    const [selectedTripOption, setTripOption] = React.useState(null)

    const onTripOptionSelect = (item) => {
        setTripOption(item)
        navigation.navigate("TripConfirm", item)
    }

    const TripOption = ({item}) => {
        return(
            <TouchableOpacity style={[styles.optionContainer, item.id === selectedTripOption?.id && styles.selectedOptionStyle]} 
                activeOpacity={1}
                key={item.id}
                onPress={() => onTripOptionSelect(item)}
            >
                <Avatar size={88} source={item.image} />
                <View style={styles.optionInformationContainer}>
                    <Text style={styles.optionHeading1Style}>{item.name}</Text>
                    <Text style={styles.optionHeading2Style}>{item.description}</Text>
                </View>
                <View style={styles.optionPriceContainer}>
                    <Text style={styles.optionPriceStyle}>{item.price}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const ItemSeparatorComponent = () => {
        return (
            <View style={styles.itemSeparatorStyle}></View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Ionicons name="arrow-back" size={24} color="black" onPress={() => navigation.navigate("TripNavigation")} />
                {
                    selectedTrip.distance && 
                    selectedTrip.duration && 
                    <Text style={styles.headerText}>Travel {selectedTrip.distance} km - {selectedTrip.duration} h</Text>
                }
            </View>
            <View style={styles.listContainer}>
                <FlatList 
                    data={tripOptions}
                    renderItem={TripOption}
                    ItemSeparatorComponent={ItemSeparatorComponent}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

export default TripOptionScreen