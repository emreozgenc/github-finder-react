import React, { Component, Fragment } from 'react'
import Search from './Search'
import Alert from './Alert'
import Users from './Users'

export class SearchPage extends Component {
    render() {
        const {handleSearch, setAlert, alert, loading, users} = this.props;
        return (
            <Fragment>
                <Search handleSearch={handleSearch} setAlert={setAlert} />
                <Alert alert={alert} />
                <Users loading={loading} users={users} />
            </Fragment>
        )
    }
}

export default SearchPage
