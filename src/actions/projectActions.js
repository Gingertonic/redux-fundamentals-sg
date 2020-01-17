export const updateProjectDetails = e => {
    return {
        type: "UPDATE_PROJECT",
        payload: { element: e.target.id, value: e.target.value }
    }
}

export const updateProjectTitle = title => {
    console.log(title)
    return {
        type: "UPDATE_TITLE",
        payload: title
    }
}