import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UserManagementAction } from '../../Store/Reducers/Action/UserManagementAction';

class RegisterForm extends Component {
    state = {
        values: {
            maSV: "",
            hoTen: "",
            soDt: "",
            email: "",
        },
        error: {
            maSV: "",
            hoTen: "",
            soDt: "",
            email: "",
        },
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            values: {
                ...this.state.values,
                [name]: value
            }
        }, () => {
            // console.log({ name: value });
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        for (const key in this.state.error) {
            const message = this.state.error[key];
            if (message) {
                return;
            }
        }

        this.props.dispatch(UserManagementAction(this.state.values))
    }

    handleBlur = (e) => {
        const { name, title, validity: { patternMismatch, valueMissing } } = e.target;
        let message = '';
        if (patternMismatch) {
            message = `${title} không hợp lệ`
        }
        if (valueMissing) {
            message = `Vui lòng nhập ${title}.`
        }
        this.setState({
            error: {
                ...this.state.error,
                [name]: message,
            }
        })
    }

    render() {
        return (
            <div className="card p-0">
                <div className="card-header bg-warning text-white font-weight-bold">
                    THÔNG TIN SINH VIÊN
                </div>
                <div className="card-body">
                    <form noValidate onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Mã Sinh Viên</label>
                                    <input type="text"
                                        name="maSV"
                                        onChange={this.handleChange}
                                        onBlur={this.handleBlur}
                                        required
                                        title="Mã sinh viên"
                                        className="form-control" />
                                    {this.state.error.maSV && <span className='text-danger'>{this.state.error.maSV}</span>}
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Họ Tên</label>
                                    <input type="text"
                                        name="hoTen"
                                        onChange={this.handleChange}
                                        onBlur={this.handleBlur}
                                        required
                                        title="Họ tên"
                                        className="form-control" />
                                    {this.state.error.hoTen && <span className='text-danger'>{this.state.error.hoTen}</span>}
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Số Điện Thoại</label>
                                    <input type="text"
                                        name="soDt"
                                        onChange={this.handleChange}
                                        onBlur={this.handleBlur}
                                        required
                                        title="Số điện thoại"
                                        className="form-control" />
                                    {this.state.error.soDt && <span className='text-danger'>{this.state.error.soDt}</span>}
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text"
                                        name="email"
                                        onChange={this.handleChange}
                                        onBlur={this.handleBlur}
                                        required
                                        title="Email"
                                        pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$'
                                        className="form-control" />
                                    {this.state.error.email && <span className='text-danger'>{this.state.error.email}</span>}
                                </div>
                            </div>
                        </div>
                        <div className="card-footer text-muted">
                            <button type='submit' className="btn btn-warning">SAVE</button>
                            <button type='reset' className="btn btn-outline-dark ml-2">RESET</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


export default connect()(RegisterForm);