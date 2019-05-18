import React, { Component } from 'react';
import Trending from '../Trending/Trending';
import SelectContent from '../SelectContent/SelectContent';
import {findBySource} from '../../Services/Calls';

class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            articles: []
        }
    }

    async componentDidMount() {
        const {selectedSources} =this.props
        try {
            const resp = await findBySource(selectedSources);
            // const articles = JSON.parse(localStorage.getItem('articles'))
            // const articles = JSON.parse(localStorage.getItem('articles'))
            // console.log(articles)
            return resp
        } catch (error) {
            throw error
        }
    }

    render() {
        
        const  { articles }  = this.state;
        const allArticles =  articles ? articles.map(article =>{
            return <div className='article-container'>
                        <img src={article.urlToImage} alt='Article' />
                        <h2>{article.source.name}</h2>
                        <h1>{article.title}</h1>
                        <h4>{article.publishedAt}</h4>
                        <p>{article.description}</p>
                    </div>

        }) : () => <h1>Articles loading...</h1> 
        return (
            <div>
                <h1>n</h1>
                <Trending/>
                {allArticles}
            </div>
        );
    }
}

export default Dashboard;