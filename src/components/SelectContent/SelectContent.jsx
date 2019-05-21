import React, { Component } from 'react';
import { Link} from 'react-router-dom';

class SelectContent extends Component {

    render() {
        const {selectedSources,sources, handleSourceClick,isClicked} = this.props
        
        const toggleBtn = selectedSources.length > 0 ?'btn btn-active':'btn'
        return (
            <div className="source-container">
                <div className="source-grid">
                {sources ? sources.map((source,index) => {
                    const toggle = isClicked.includes(index) ? 'toggle active' : 'toggle'
                    
                    return <li key={index} id={source.id} className={toggle} onClick={(e)=> handleSourceClick(e,index)} >
                    {source.name}</li>
                }):null}
                </div>   
            <Link to='/dashboard' className={toggleBtn}>Continue</Link>
            </div>
        );
    }
}

export default SelectContent;