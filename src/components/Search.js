import React, { Component } from 'react'

export class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        };

        this.changeKeyword = this.changeKeyword.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    changeKeyword(event) {
        this.setState({ keyword: event.target.value });
    }

    handleSearch(event) {
        event.preventDefault();
        if(this.state.keyword === '') {
            this.props.setAlert('Please type something to search!', 'danger');
            return;
        }
        this.setState({ keyword: '' });
        this.props.handleSearch(this.state.keyword);
    }

    render() {
        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12 col-md-6 mx-auto">
                        <form onSubmit={this.handleSearch}>
                            <div className="input-group">
                                <input onChange={this.changeKeyword} value={this.state.keyword} placeholder="Search a person ..." type="text" className="form-control" />
                                <div className="form-group-append">
                                    <button className="btn btn-primary">Search</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search
