import {data as menus} from '../../data/data'
const active = {title: menus.title, id: menus.id}

export const initialStateMenu = {
    active: active,
    previous: [],
    // Need to store previous state to re-establish `initial` value for `motion`
    // after it re-renders due to prop changes
    previousState: {
        active: active,
        previous: []
    }
}

export const reducerMenu = (state, action) => {
    switch (action.type) {
        case 'forward': {
            const previous = [...state.previous, state.active]
            const previousState = {...state}
            delete previousState.previousState
            return {
                active: action.payload,
                previous,
                previousState: previousState
            }
        }
        case 'back': {
            const active = [...state.previous][state.previous.length - 1]
            const previous = [...state.previous]
            previous.pop()
            const previousState = {...state}
            delete previousState.previousState
            return {
                active,
                previous,
                previousState: previousState
            }
        }
        default:
            throw new Error()
    }
}