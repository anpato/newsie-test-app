import React, { Component } from 'react';
import SignIn from '../SignIn/SignIn';
import { Switch, Route } from 'react-router-dom';
import {getSources,findBySource} from '../../Services/Calls';
import Dashboard from '../Dashboard/Dashboard';
import SelectContent from '../SelectContent/SelectContent';
import { className } from 'postcss-selector-parser';

class Container extends Component {
    constructor(){
        super();
        this.state = {
            sources : [],
            selectedSources : [],
            isClicked : [],
            removeSource : []
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

    handleSourceClick = async (e,index) => {
        const { selectedSources,isClicked  } = this.state;
        const {id} = e.target
        let selectSource = selectedSources
        let clickSource = isClicked
        if(!isClicked.includes(index) && !selectedSources.includes(id)){
            console.log(index);
            selectSource = [...selectSource, id]
            clickSource = [...clickSource, index]
            this.setState({
                selectedSources: selectSource,
                isClicked: clickSource
            })
            console.log(isClicked);
            
        } else {
            selectSource.splice(id,1);
            clickSource.splice(index,1);
            this.setState({
                selectedSources: selectSource,
                isClicked: clickSource
            })
        }
        console.log(selectedSources);
        const resp = await findBySource(selectedSources)
        return localStorage.setItem('articles', JSON.stringify(resp))
    }

    handleLinkClick = () => {
        this.setState({selectedSources:[],isClicked:[]})
    }

    render() {
        const { sources, selectedSources, isClicked  } = this.state;
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={SignIn}/>
                    <Route exact path='/dashboard' component={(props)=> <Dashboard {...props} selectedSources={selectedSources}  />}/>
                    <Route exact path='/sources' component={(props)=> <SelectContent {...props} selectedSources={selectedSources} handleSourceClick={this.handleSourceClick} sources={sources} isClicked={isClicked} handleLinkClick={this.handleLinkClick}/> }/>
                </Switch>
            </div>
        );
    }
}

export default Container;