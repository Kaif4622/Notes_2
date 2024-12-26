const initialState = {count:0}

export const CounterReducer = (state=initialState, action) => {
    switch(action.type){
        case 'increament':
            return {count: state.count + 1}
        case 'decreament':
            return {count: state.count - 1}
        case 'reset':
            return {count : 0}
        default:
            return state
    }
}