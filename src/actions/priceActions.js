export const setPrice = price => {
    return {
        type: "SET_BASE_PRICE",
        payload: price
    }
}

export const increasePrice = value => {
    return {
        type: "INCREMENT",
        payload: value
    }
}

export const decreasePrice = value => {
    return {
        type: "DECREMENT",
        payload: value
    }
}