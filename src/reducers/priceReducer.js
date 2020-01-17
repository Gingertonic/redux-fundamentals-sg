const priceReducer = (state = 250, action) => {
    switch(action.type){
        case "SET_BASE_PRICE":
            return action.payload
        case "INCREMENT":
            return state + action.payload
        case "DECREMENT":
            return state - action.payload
        default:
            return state
    }
}

export default priceReducer