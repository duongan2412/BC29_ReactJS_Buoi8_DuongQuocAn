import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectedUserAction, deleteUserAction } from '../../Store/Reducers/Action/UserManagementAction';


class UserData extends Component {
    state = {
        keyword: ""
    }

    renderDanhSachSV = () => {

        let data = this.props.userList.filter(ele => {
            return ele.hoTen.toLowerCase().trim().indexOf(this.state.keyword.toLowerCase().trim()) !== - 1
        })

        return data.map((ele) => {
            const { id, maSV, hoTen, soDt, email } = ele;
            return (
                <tr key={id} className=''>
                    <td>{maSV}</td>
                    <td>{hoTen}</td>
                    <td>{soDt}</td>
                    <td>{email}</td>
                    <td>
                        <button onClick={() => this.props.dispatch(selectedUserAction(ele))}
                            className="btn btn-info mr-2">EDIT</button>
                        <button onClick={() => this.props.dispatch(deleteUserAction(id))}
                            className="btn btn-danger">DELETE</button>
                    </td>
                </tr>
            )
        })
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
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
                                placeholder="Tìm theo tên sinh viên ....."
                                className="form-control"
                                onChange={this.handleChange}
                                name="keyword"
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