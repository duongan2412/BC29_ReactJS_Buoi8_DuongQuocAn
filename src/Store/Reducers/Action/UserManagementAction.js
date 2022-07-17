import { ADD_USER, SELECTED_USER } from "../Type/UserManagementType"

export const addUSerAction = (user) => {
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
