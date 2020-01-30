// Action Creators

export const updateTitle = newTitle => {
    // return a POJO which is an action
    return {
        type: "UPDATE_TITLE",
        payload: newTitle
    }
}