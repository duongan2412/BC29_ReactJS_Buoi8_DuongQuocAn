import { ADD_USER } from "../Type/UserManagementType";

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
}

export const UserManagementReducer = (state = DEFAULT_STATE, { type, payload }) => {
    switch (type) {

        case ADD_USER:
            const data = [...state.userList, payload];
            state.userList = data;
            return { ...state };

        default:
            return state
    }
}
