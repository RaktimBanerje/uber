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
    initialRegion: new Coords(51.5078788, -0.08773210000000001),
    isAvailable: false,
    isLogin: false,
    user: null,
    token: null
}

export const reducer = (state, action) => {
    switch(action.type) {
        case "LOGIN": {
            return {...state, isLogin: true, token: action.payload.token, user: action.payload.user}
        }
        case "LOGOUT": {
            return {...state, isLogin: false, token: null, user: null}
        }
        case "AVAILABILITY_TOGGLE": {
            return {...state, isAvailable: !state.isAvailable}
        }
        default: {
            return state
        }
    }_
}