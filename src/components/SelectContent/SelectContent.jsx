import React, { Component } from 'react';
import {getSources} from '../../Services/Calls'

class SelectContent extends Component {
    constructor(){
        super();
        this.state = {
            sources : []
        }
    }

    async componentDidMount() {
        try {
            const resp = await getSources();
            this.setState({sources:resp})
        } catch (error) {
            throw error
        }
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default SelectContent;