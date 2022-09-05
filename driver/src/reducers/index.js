import { Coords } from '../class/Coords'
import AsyncStorage from "@react-native-async-storage/async-storage"

export const initialState = {
    initialRegion: new Coords(51.5078788, -0.08773210000000001),
    isAvailable: false,
    isLogin: false,
    user: null,
    token: null
}

export const reducer = (state, action) => {
    switch(action.type) {
        case "LOGIN": {
            AsyncStorage.multiSet([
                ["user", action.payload.user], 
                ["token", action.payload.token]
            ])
            return {...state, 
                isLogin: true, 
                token: action.payload.token, 
                user: action.payload.driver
            }
        }
        case "LOGOUT": {
            AsyncStorage.multiRemove(["user", "token"])
            return {...state, 
                isLogin: false, 
                token: null, 
                user: null
            }
        }
        case "AVAILABILITY_TOGGLE": {
            return {...state, isAvailable: !state.isAvailable}
        }
        default: {
            return state
        }
    }_
}