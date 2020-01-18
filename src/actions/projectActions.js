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

export const fetchProjects = () => {
    return (dispatch) => {
        fetch(`http://localhost:3001/v1/events`)
            .then(resp => resp.json())
            .then(events => dispatch({ type: "ADD_ALL_EVENTS", payload: events}))
    }
}

export const saveCurrentProjectUpdates = project => {
    return (dispatch) => {
        console.log(JSON.stringify(project))
        fetch(`http://localhost:3001/v1/events/${project.id}`, {
                method: "PATCH",
                mode: "cors",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(project),
            })
            .then(resp => resp.json())
            .then(project => dispatch({ type: "UPDATED_IN_DATABASE", payload: project }))
    }
}

export const saveNewProject = project => {
    delete project.id
    console.log(JSON.stringify(project))
    return (dispatch) => {
        fetch(`http://localhost:3001/v1/events`, {
                method: "POST",
                mode: "cors",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(project)
            })
            .then(resp => resp.json())
            .then(newProject => dispatch({ type: "ADD_NEW_PROJECT", payload: newProject}))
    }
}
