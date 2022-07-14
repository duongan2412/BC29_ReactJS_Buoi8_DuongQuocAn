import { ADD_USER } from "../Type/UserManagementType"

export const UserManagementAction = (user) => {
    return {
        type: ADD_USER,
        payload: user
    }
}
