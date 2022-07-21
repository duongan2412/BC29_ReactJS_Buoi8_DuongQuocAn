import { ADD_USER, SELECTED_USER, UPDATE_USER } from "../Type/UserManagementType";

const DEFAULT_STATE = {
    userList: [
        {
            maSV: 1,
            hoTen: "Nguyen Van A",
            soDt: "0909123456",
            email: "nguyenvana@gmail.com",
        },
        {
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
            let data = [...state.userList, payload];
            state.userList = data;
            return { ...state }
        }

        case SELECTED_USER: {
            state.userSelected = payload;
            return { ...state }
        }

        case UPDATE_USER: {
            state.userList = state.userList.map(ele => ele.maSV === payload.maSV ? payload : ele)
            state.userSelected = null;
            return { ...state }
        }
        default:
            return state
    }
}
