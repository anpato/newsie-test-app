import React, { Component } from 'react';

import { Link,Route, Switch } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';

class SelectContent extends Component {

    // findSources = () => {
    //     const {sources} = this.state;
    //     const findAll = sources.filter(source => {
    //         if(source.id === 'business-insider' || source.id === 'bloomberg' || source.id === 'the-wall-street-journal'){
    //             return <img src={`../../assets/images/${source.id}.png`}/>
    //         }
    //     })
    //     this.setState({findAll})
    //     console.log(findAll)
    //     return findAll
    // }

    render() {
        const {sources, handleSourceClick} = this.props
        console.log(this.props.sources)
        return (
            <div>
                {sources ? sources.map((source,index) => {
                    // console.log(source)
                    return <li key={index} id={source.id} onClick={handleSourceClick}>{source.name}</li>
                }): null}   
            <Link to='/dashboard'>Continue</Link>
            </div>
        );
    }
}

export default SelectContent;