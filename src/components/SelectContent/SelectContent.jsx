import React, { Component } from 'react';
import bloomberg from '../../assets/images/bloomberg.png';
import businessInsider from '../../assets/images/business-insider.png';
import wallStreet from '../../assets/images/the-wall-street-journal.png';
import { Link,Route, Switch } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';

class SelectContent extends Component {

    toggleSelectedItem = (e,id) => {
        
    }

    render() {
        const {selectedSources,sources, handleSourceClick,isClicked} = this.props
        const bloombergData = "bloomberg"
        const wallStreetJournal = "the-wall-street-journal"
        const insider = "business-insider"
        

        
        
        const toggleBtn = selectedSources.length > 0 ?'btn btn-active':'btn'
        const toggle = isClicked === true ? 'toggle active' : 'toggle'
        return (
            <div className="source-container">
                <div className="source-grid">
                {sources ? sources.map((source,index) => {
                    return <li key={index} id={source.id} className={toggle} onClick={(id)=> handleSourceClick(id)} >
                    {source.name}</li>
                }):null}
                </div>   
            <Link to='/dashboard' className={toggleBtn}>Continue</Link>
            </div>
        );
    }
}

export default SelectContent;