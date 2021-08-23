import React, { Component, Fragment } from 'react'
import Loading from './Loading';
import { getUserDetail } from '../helper';
import Repositories from './Repositories';

export class UserDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            user: null
        }
    }

    render() {
        const { loading, user } = this.state;
        if (loading || user === null) {
            return <Loading />
        }
        else {
            return (
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-8 col-md-6 col-lg-3 mx-auto">
                            <img className="profile-img" src={user.avatar_url} alt={`${user.login} profile`} />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-8 col-md-6 col-lg-3 mx-auto">
                            <h3 className="h1 text-center">{user.name}</h3>
                        </div>
                    </div>
                    <div className="row mt-1">
                        <div className="col-12 col-md-10 col-lg-6 mx-auto text-center">
                            {user.bio}
                        </div>
                    </div>
                    <div className="row mt-1">
                        <div className="col-12 col-md-6 col-lg-4 mx-auto text-center">
                            <div className="row">
                                <div className="col-12">
                                    <i className="fas fa-user-friends"></i><span> Following <strong>{user.following}</strong> - Followers <strong>{user.followers}</strong></span>
                                </div>
                            </div>
                            <div className="row mt-1">
                                <div className="col-12">
                                    {user.location && (<span><i className="fas fa-map-marker-alt"></i> {user.location} </span>)}
                                    {user.company && (<span><i className="far fa-building"></i> {user.company}</span>)}
                                </div>
                            </div>
                            <div className="row mt-1">
                                <div className="col-12">
                                    <span className="badge bg-success">Repositories <span className="badge bg-light text-dark">{user.public_repos}</span></span>
                                    <span className="badge bg-primary ms-2">Gists <span className="badge bg-light text-dark">{user.public_gists}</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row my-5">
                        <h3 className="h2 mb-3">Repositories</h3>
                        <Repositories login={user.login} />
                    </div>
                </div>
            )
        }
    }

    componentDidMount() {
        this.getUserDetail(this.props.login);
        console.log('hello');
    }

    getUserDetail(login) {
        this.setState({ loading: true });
        getUserDetail(login)
            .then(data => this.setState({ user: data, loading: false }));
    }
}

export default UserDetail
