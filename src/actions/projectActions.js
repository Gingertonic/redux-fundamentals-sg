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
        fetch(`http://localhost:3001/v1/events`)
            .then(resp => resp.json())
            .then(projects => dispatch({
                type: "ADD_ALL_PROJECTS",
                payload: projects
    
            }))
    } 
}

export const saveChangesToDB = project => {
    return dispatch => {
        fetch(`http://localhost:3001/v1/events/${project.id}`, {
            method: "PATCH",
            body: JSON.stringify(project),
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .then(resp => resp.json())
        .then(project => dispatch({
            type: "UPDATED_IN_DB",
            payload: project
        }))
    }
}