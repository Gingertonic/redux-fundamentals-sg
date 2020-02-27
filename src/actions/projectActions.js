export const updateProjectAttribute = (attr, newValue) => {
    return {
        type: 'UPDATE_PROJECT_ATTRIBUTE', 
        payload: { attr, newValue }
    }
}