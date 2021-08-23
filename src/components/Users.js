import React, { Component } from 'react'
import Loading from './Loading';
import User from './User'

export class Users extends Component {
    render() {
        const { users, loading } = this.props;

        if (loading) {
            return (
                <Loading />
            )
        }
        else {
            return (
                <div className="container mt-4">
                    <div className="row">
                        {users.map((user) => <User key={user.id} user={user} />)}
                    </div>
                </div>
            )
        }
    }
}

export default Users
