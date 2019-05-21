import React, { Component } from 'react';
import bloomberg from '../../assets/images/bloomberg.png';
import businessInsider from '../../assets/images/business-insider.png';
import wallStreet from '../../assets/images/the-wall-street-journal.png';
import { Link,Route, Switch } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';

class SelectContent extends Component {

    render() {
        const {sources, handleSourceClick} = this.props
        const bloombergData = "bloomberg"
        const wallStreetJournal = "the-wall-street-journal"
        const insider = "business-insider"
        return (
            <div className="source-container">
                <div className="source-grid">
                        <img src={bloomberg}  name={bloombergData} onClick={handleSourceClick}/>
                        <img src={businessInsider} name={wallStreetJournal} onClick={handleSourceClick}/>
                        <img src={wallStreet} name={insider} onClick={handleSourceClick}/>
            </div>   
            <Link to='/dashboard'>Continue</Link>
            </div>
        );
    }
}

export default SelectContent;