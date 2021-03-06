import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectedUserAction } from '../../Store/Reducers/Action/UserManagementAction';


class UserData extends Component {
    renderDanhSachSV = () => {

        return this.props.userList.map((ele, idx) => {
            const { maSV, hoTen, soDt, email } = ele;
            return (
                <tr key={idx} className=''>
                    <td>{maSV}</td>
                    <td>{hoTen}</td>
                    <td>{soDt}</td>
                    <td>{email}</td>
                    <td>
                        <button onClick={() => this.props.dispatch(selectedUserAction(ele))}
                            className="btn btn-info mr-2">EDIT</button>
                        <button className="btn btn-danger">DELETE</button>
                    </td>
                </tr>
            )
        })
    }
    render() {
        return (
            <div className="card p-0 mt-3">
                <div className="card-header font-weight-bold">DANH SÁCH SINH VIÊN</div>
                <div className="row mt-4 px-3 ">
                    <div className="col-4">
                        <div className="form-group mb-0">
                            <input
                                type="text"
                                placeholder="Search by full name..."
                                className="form-control"
                            />
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Mã SV</th>
                                <th>Họ tên</th>
                                <th>Số điện thoại</th>
                                <th>Email</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderDanhSachSV()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.UserManagementReducer,
    }

}
export default connect(mapStateToProps)(UserData)