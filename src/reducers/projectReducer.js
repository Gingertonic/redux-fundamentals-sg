const initState = {
        header: "A Sunny Day",
        date: "Event Date",
        info: "Event Info",
        backgroundColor: "#FF5431",
        textColor: "#ffffff"
    }

const projectReducer = (state = initState, action) => {
    switch(action.type){
        case "UPDATE_PROJECT_ELEMENT":
            return {
                ...state,
                [action.payload.id]: action.payload.value
            }
        default:
            return state
    }
}

export default projectReducer


