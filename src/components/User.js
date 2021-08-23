import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class User extends Component {
    render() {
        const { avatar_url, login, html_url } = this.props.user;
        return (
            <div className="col-12 col-md-4 col-lg-3 mb-3">
                <div className="card">
                    <img className="card-img-top" src={avatar_url} alt={login + ' avatar'} />
                    <div className="card-body">
                        <h5 className="card-title">{login}</h5>
                        <Link to={`/user/${login}`} className="btn btn-primary btn-sm">Go Profile</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default User
