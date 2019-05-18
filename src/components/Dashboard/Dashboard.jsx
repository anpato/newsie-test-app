import React, { Component } from 'react';
import Trending from '../Trending/Trending';
import SelectContent from '../SelectContent/SelectContent';

class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            selectedSources : []
        }
    }

    render() {
        return (
            <div>
                {/* <Trending/> */}
            </div>
        );
    }
}

export default Dashboard;