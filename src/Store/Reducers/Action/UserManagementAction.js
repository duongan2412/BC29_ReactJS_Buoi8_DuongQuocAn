import { ADD_USER, SELECTED_USER, UPDATE_USER } from "../Type/UserManagementType"

export const addUserAction = (user) => {
    return {
        type: ADD_USER,
        payload: user
    }
}

export const selectedUserAction = (user) => {
    return {
        type: SELECTED_USER,
        payload: user
    }
}

export const updateUserAction = (user) => {
    return {
        type: UPDATE_USER,
        payload: user
    }
}
