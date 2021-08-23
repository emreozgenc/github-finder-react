import React, { Component, Fragment } from 'react'
import Navbar from './Navbar'
import {findUser } from '../helper'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SearchPage from './SearchPage'
import UserDetail from './UserDetail'
import HomePage from './HomePage'

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            user: {},
            loading: false,
            alert: null
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.setAlert = this.setAlert.bind(this);
    }

    render() {
        return (
            <Fragment>
                <Router>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" render={props => {
                            return <HomePage />
                        }}/>
                        <Route path="/search" render={props =>
                            <SearchPage
                                handleSearch={this.handleSearch}
                                setAlert={this.setAlert}
                                alert={this.state.alert}
                                loading={this.state.loading}
                                users={this.state.users}
                            />
                        } />
                        <Route path="/user/:login" render={props => {
                            return <UserDetail login={props.match.params.login} />
                        }} />
                    </Switch>
                </Router>
            </Fragment>
        )
    }

    componentDidMount() {
        // this.setState({ loading: true });
        // getUsers()
        //     .then(data => this.setState({ users: data, loading: false }));
    }

    handleSearch(keyword) {
        this.setState({ loading: true });
        findUser(keyword)
            .then(data => this.setState({ users: data.items, loading: false }));
    }

    setAlert(message, type) {
        this.setState({ alert: { message: message, type: type } });

        setTimeout(() => {
            this.setState({ alert: null });
        }, 3000);
    }
}

export default App
