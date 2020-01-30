const initState = {
    header: "Another Title",
    date: "Today!",
    info: "Store Info",
    backgroundColor: "#FF5430",
    textColor: "#ffffff"
}

const eventReducer = (state = initState, action) => {
    switch(action.type){
        case "UPDATE_TITLE":
            return { ...state, header: action.payload }
        default:
            return state
    }
}

export default eventReducer

