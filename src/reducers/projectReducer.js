const initState = {
        header: "Event Name",
        date: "Date",
        info: "Info",
        backgroundColor: "#FF7F50",
        textColor: "#ffffff"
}

const projectReducer = (state = initState, action) =>{
    switch(action.type){
        case "UPDATE_PROJECT":
            return { ...state, [action.payload.element]: action.payload.value}
        case "UPDATE_TITLE":
            return { ...state, title: action.payload }
        default:
            return state
    }
}

export default projectReducer