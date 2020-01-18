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