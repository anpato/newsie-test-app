import React, { Component } from 'react';
import { api_key  } from '../../Services/Calls';
class Trending extends Component {
    constructor() {
        super();
        this.state = {
            trending: []
        }
    }

    async componentDidMount() {
        // const {api_key} = this.props
        try {
            const url = await fetch(`https://newsapi.org/v2/sources?country=us&apiKey=${api_key}`);
            const resp = await url.json();
            return this.setState({trending:resp.sources})
        } catch (error) {
            throw error
        }
    }
    
    handleclick = e => {
        const name = e.target.getAttribute('name')
        console.log(name)
        return e.target.value
    }


    render() {
        return (
            <div>
                {this.state.trending.map((source,index) => {
                    console.log(source.id)
                    return <li key={index}  name={source.id} onClick={this.handleclick}>{source.name}</li>
                })}
            </div>
        );
    }
}

export default Trending;