const initState = {
        all: [ 
            { id: 0, header: "Template", date: "Date", info: "Info", backgroundColor: "#FF7F50", textColor: "#ffffff" },
            { id: 1, header: "Wedding Reception", date: "April 30th 2020", info: "Wear something you can eat all the food in and still feel GREAT! Hop on the big red bus to get from ceremony to reception", backgroundColor: "#de7493", textColor: "#ffffff" },
            { id: 2, header: "Garden Party", date: "21.1.21", info: "Come for croquet!", backgroundColor: "#ff2649", textColor: "#007369" },
            { id: 3, header: "The Big One", date: "New Years Eve 2038", info: "Witness the final countdown...", backgroundColor: "#000000", textColor: "#ffffff" } 
        ],
        current: { id: 0, header: "Template", date: "Date", info: "Info", backgroundColor: "#FF7F50", textColor: "#ffffff" }
}

const projectReducer = (state = initState, action) =>{
    switch(action.type){
        case "UPDATE_PROJECT":
            const index = state.all.indexOf(state.current)
            const updatedProject = { ...state.current, [action.payload.element]: action.payload.value }
            const updatedAll = [ ...state.all.slice(0, index), updatedProject, ...state.all.slice(index + 1)]
            return { all: updatedAll, current: updatedProject }
        case "LOAD_PROJECT":
            const selectedProject = state.all.find(p => p.id === action.payload)
            return { ...state, current: selectedProject }
        default:
            return state
    }
}

export default projectReducer