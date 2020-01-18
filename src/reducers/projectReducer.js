const initState = {
        all: [],
        current: { id: 0, header: "Template", date: "Date", info: "Info", backgroundColor: "#FF7F50", textColor: "#ffffff" }
}

const projectReducer = (state = initState, action) =>{
    switch(action.type){
        case "ADD_ALL_EVENTS":
            console.log(action.payload)
            return { ...state, all: action.payload }
        case "UPDATE_PROJECT":
            const updatedProject = { ...state.current, [action.payload.element]: action.payload.value }
            return { ...state, current: updatedProject }
        case "LOAD_PROJECT":
            const selectedProject = state.all.find(p => p.id === action.payload)
            return { ...state, current: selectedProject }
        case "ADD_NEW_PROJECT":
            return { all: [ ...state.all, action.payload ], current: action.payload }
        case "UPDATED_IN_DATABASE":
            const project = state.all.find(p => p.id === action.payload.id)
            const index = state.all.indexOf(project)
            const updatedAll = [ ...state.all.slice(0, index), action.payload, ...state.all.slice(index + 1)]
            return { ...state, all: updatedAll }
        default:
            return state
    }
}

export default projectReducer