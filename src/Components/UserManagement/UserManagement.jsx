import React, { Component } from 'react';
import RegisterForm from './RegisterForm';
import UserData from './UserData';

export default class UserManagement extends Component {
    render() {
        return (
            <div className="w-75 mx-auto mt-5">
                <RegisterForm />
                <UserData />
            </div>
        );
    }
}