import React, { Component } from 'react';
import Header from '../Header/Header';
import Trending from '../Trending/Trending';
import moment from 'moment';


class Dashboard extends Component {
  constructor(){
    super();
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    const articles = JSON.parse(localStorage.getItem('articles'))
    this.setState({articles})
  }

  render() {
    const {articles} = this.state
    const allArticles =  articles ? articles.map((article,index) =>{
      console.log(article.urlToImage)
      return <div className='article-container' key={index}>
        
                <h3>Business</h3>
                <div className='article-info'>
                  {article.urlToImage === null ? <div></div> : <img src={article.urlToImage} alt="article"/>}
                  <h2>{article.source.name}</h2>
                  <h1>{article.title}</h1>
                  <h4>{moment(article.publishedAt).format('MM/DD HH:mm A')}</h4>
                  <p>{article.description}</p>
                  <a href={article.url}>READ MORE</a>
                </div>
              </div>
    }) : () => <h1>Articles loading...</h1> 
    return (
      <div className='dashboard-main'>
        <Header />
        <div className='dashboard-container'> 
            
          {/* <Trending/> */}

          {allArticles}
        </div>
      </div>
    );
  }
}

export default Dashboard;