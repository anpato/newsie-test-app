import React, { Component } from 'react';
import {getTrending} from '../../Services/Calls';
import moment from 'moment';

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
            console.log(resp);
            return this.setState({trending:resp})
        } catch (error) {
            throw error
        }
    }
    
    handleclick = e => {
        const {name} = e.target
    }


    render() {
        const { trending } = this.state

        return (
            <ul>
                {trending ? trending.map((trend,index) => {
                    return <div className='trending-ctn' key={index}>
                                <div className='trend-article-header'>
                                    <h2>{trend.source.name}</h2>
                                    <h4>{moment(trend.publishedAt).format('MM/DD HH:mm A')}</h4>
                                </div>
                                <a href={trend.url} target="_blank"><h1>{trend.title}</h1></a>
                                <p>{trend.description}</p>
                            </div>
                }): <li></li>}
            </ul>
        );
    }
}

export default Trending;