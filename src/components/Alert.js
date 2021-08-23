import React, { Component } from 'react'

export class Alert extends Component {
    render() {
        return (
                this.props.alert !== null && (
                    <div className={`col-12 col-md-6 col-lg-4 mx-auto mt-3 alert alert-${this.props.alert.type}`}>
                        <i className="fas fa-exclamation-triangle"></i>
                        {this.props.alert.message}
                    </div>
                )
        )
    }
}

export default Alert
