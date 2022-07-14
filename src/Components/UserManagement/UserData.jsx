import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserData extends Component {
    renderDanhSachSV = () => {
        return this.props.userList.map((ele, idx) => {
            return (
                <tr key={ele.maSV} className='bg-light'>
                    <td>{idx + 1}</td>
                    <td>{ele.hoTen}</td>
                    <td>{ele.soDt}</td>
                    <td>{ele.email}</td>
                    <td>
                        <button className="btn btn-info mr-2">EDIT</button>
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
                    {/* <div className="col-3 ml-auto">
                        <div className="form-group mb-0">
                            <select className="form-control">
                                <option>All</option>
                                <option>Client</option>
                                <option>Admin</option>
                            </select>
                        </div>
                    </div> */}
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