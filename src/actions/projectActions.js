export const updateProjectDetails = e => {
    return {
        type: "UPDATE_PROJECT",
        payload: { element: e.target.id, value: e.target.value }
    }
}

export const loadProject = id => {
    return {
        type: "LOAD_PROJECT",
        payload: parseInt(id)
    }
}

export const getAllProjects = () => {
    return dispatch => {
        fetch('http://localhost:3001/v1/events')
        .then(resp => resp.json())
        .then(projects => {
            dispatch({
                type: "ADD_ALL_PROJECTS",
                payload: projects
            })
        })
    } 
    
}

export const saveNewProjectToDB = project => {
    delete project.id
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(project),
        method: "POST",
        mode: "cors"
    }

    return dispatch => { 
        fetch('http://localhost:3001/v1/events', config)
            .then(resp => resp.json())
            .then(newProject => dispatch({ type: "ADD_NEW_PROJECT", payload: newProject }))
     }
}

// thunk 
// a function that has been returned by another function