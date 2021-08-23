import React, { Component } from 'react'
import LoadingImage from '../images/loading.gif'

export class Loading extends Component {
    render() {
        return (
            <div className="loading-img">
                <img src={LoadingImage} alt="loading animation" />
            </div>
        )
    }
}

export default Loading
