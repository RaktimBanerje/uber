import React from 'react'
import { Coords } from '../class/Coords'
import { Location } from '../class/Location'
import { Trip } from '../class/Trip'

const user = {
    name: "Raktim Banerjee"
}

class User {
    constructor(name) {
        this.name = name
    }
}

const initialUser = new User("Raktim Banerjee")

export const initialState = {
    user: initialUser,
    trips: [],
    initialRegion: new Coords(51.5078788, -0.08773210000000001),
    selectedTrip: undefined,
    currentDateTime: new Date(),
    isProfileModalOpen: false,
    isSceduleModalOpen: false,
    numberOfMessages: null
}

export const reducer = (state, action) => {
    switch(action.type) {
        case "NEW_TRIP_CREATED": {
            return {
                ...state,
                selectedTrip: new Trip(
                    new Location(undefined, new Coords(undefined, undefined)),
                    new Location(undefined, new Coords(undefined, undefined)),
                    undefined,
                    undefined,
                    new Date()
                )
            }
        }
        case "SET_ORIGIN": {
            return {
                ...state,
                selectedTrip: {
                    ...state.selectedTrip,
                    origin: action.payload
                } 
            }
        }
        case "SET_DESTINATION": {
            return {
                ...state,
                selectedTrip: {
                    ...state.selectedTrip,
                    destination: action.payload
                } 
            }
        }
        case "SET_TRAVEL_DISTANCE_DURATION": {
            return {
                ...state,
                selectedTrip: {
                    ...state.selectedTrip,
                    distance: action.payload.distance,
                    duration: action.payload.duration
                }
            }
        }
        case "PROFILE_SCREEN_TOGGLE": {
            return {
                ...state,
                isProfileModalOpen: !state.isProfileModalOpen
            }
        }
        case "SCHEDULE_MODAL_TOGGLE": {
            return {
                ...state,
                isSceduleModalOpen: !state.isSceduleModalOpen
            }
        }
        default: {
            return state
        }
    }
}
