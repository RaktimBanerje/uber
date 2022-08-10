import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal'
import { Button, Text } from '@rneui/base'
import { StoreContext } from '../../App'
import { addMinutes, format } from 'date-fns'
import DateTimePicker from '@react-native-community/datetimepicker'

const ScheduleModal = () => {

    const {state, dispatch} = React.useContext(StoreContext)
    const [tripSchedule, setTripSchedule] = React.useState(state.currentDateTime)
    const [mode, setMode] = React.useState("date")
    const [display, setDisplay] = React.useState(false)

    const showDatePicker = () => {
        setMode("date")
        setDisplay(true)
    }

    const showTimePicker = () => {
        setMode("time")
        setDisplay(true)
    }

    const onSchduleChange = (event, selectedDate) => {
        setTripSchedule(selectedDate)
        setDisplay(false)
    }

    const closeModal = () => {
        setDisplay(false)
        dispatch({type: "SCHEDULE_MODAL_TOGGLE"})
    }

    const styles = StyleSheet.create({
        modalStyle: {
            justifyContent: 'flex-end',
            margin: 0,
        },
        textWrapper: {
            borderWidth: 1, 
            borderStyle: "solid", 
            borderColor: "whitesmoke"
        },
        textStyle: {
            fontWeight: 'normal',
            textAlign: "center",
            marginVertical: 20,
        }
    })

    return (
        <>
            <Modal
                isVisible={state.isSceduleModalOpen}
                swipeDirection={"down"}
                swipeThreshold={50}
                onSwipeComplete={closeModal}
                onBackdropPress={closeModal}
                onBackButtonPress={closeModal}
                style={styles.modalStyle}
            >
                <View style={{flex: 0.5, backgroundColor: "white"}}>
                    <View style={styles.textWrapper}>
                        <Text h3 h3Style={styles.textStyle}>Schedule a trip</Text>
                    </View>

                    <TouchableOpacity activeOpacity={1} style={styles.textWrapper} onPress={showDatePicker}>
                        <Text h4 h4Style={styles.textStyle}>
                            {format(tripSchedule, "iii, dd MMM")}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={1} style={styles.textWrapper} onPress={showTimePicker}>
                        <Text h4 h4Style={styles.textStyle}>
                            {format(tripSchedule, "p")} - {format(addMinutes(tripSchedule, 10), "p")}
                        </Text>
                    </TouchableOpacity>
                    
                    <Button
                        containerStyle={{
                            paddingVertical: 13,
                            paddingHorizontal: 20,
                        }}
                        title="Set pick-up time"
                        size="lg"
                        color="black"
                    />
                </View>
            </Modal>
            {
                display &&
                <DateTimePicker 
                    mode={mode}
                    value={tripSchedule}
                    minimumDate={state.currentDateTime}
                    onChange={onSchduleChange}
                />
            }

        </>

  )
}

export default ScheduleModal