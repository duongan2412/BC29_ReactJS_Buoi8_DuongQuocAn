import { ADD_USER, DELETE_USER, SELECTED_USER, UPDATE_USER } from "../Type/UserManagementType";

const DEFAULT_STATE = {
    userList: [
        {
            id: 1,
            maSV: 1,
            hoTen: "Nguyen Van A",
            soDt: "0909123456",
            email: "nguyenvana@gmail.com",
        },
        {
            id: 2,
            maSV: 2,
            hoTen: "Nguyen Van B",
            soDt: "09063214531",
            email: "nguyenvanb@gmail.com",
        },
    ],
    userSelected: null,
}

export const UserManagementReducer = (state = DEFAULT_STATE, { type, payload }) => {
    switch (type) {

        case ADD_USER: {
            const data = [...state.userList];
            data.push({ ...payload, id: Date.now() })
            state.userList = data;
            return { ...state }
        }

        case SELECTED_USER: {
            state.userSelected = payload;
            return { ...state }
        }

        case UPDATE_USER: {
            state.userList = state.userList.map(ele => ele.id === payload.id ? payload : ele)
            state.userSelected = null;
            return { ...state }
        }

        case DELETE_USER: {
            state.userList = state.userList.filter(ele => ele.id !== payload)
            return { ...state }
        }
        default:
            return state
    }
}
