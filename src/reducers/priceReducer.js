const priceReducer = (state = 250, action) => {
    switch(action.type){
        case "SET_BASE_PRICE":
            return action.payload
        case "INCREMENT":
            const newHigherPrice = state + action.payload > 500 ? 500  : state + action.payload 
            return newHigherPrice
        case "DECREMENT":
            const newLowerPrice = state - action.payload < 200 ? 200  : state - action.payload 
            return newLowerPrice
        default:
            return state
    }
}

export default priceReducer