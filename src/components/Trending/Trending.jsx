import React, { Component } from 'react';
import {getTrending} from '../../Services/Calls';
class Trending extends Component {
    constructor() {
        super();
        this.state = {
            trending: []
        }
    }

    async componentDidMount() {
        try {
            const resp = await getTrending();
            // console.log(resp);
            return this.setState({trending:resp})
        } catch (error) {
            throw error
        }
    }
    
    handleclick = e => {
        const name = e.target.getAttribute('name')
        // console.log(name)
        return e.target.value
    }


    render() {
        const { trending } = this.state

        return (
            <ul>
                {trending ? trending.map((trend,index) => {
                    return <li key={index}>{trend.source.name}</li>
                }): <li></li>}
            </ul>
        );
    }
}

export default Trending;