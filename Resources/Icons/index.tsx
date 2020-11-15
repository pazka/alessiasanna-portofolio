

import React, { Component } from 'react';
import '../../src/icons/style.css'

class Icons extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return <i style={this.props.style} className={this.props.i}></i>;
    }
}


export default Icons
