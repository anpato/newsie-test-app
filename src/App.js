import React from 'react';
import './App.css';
import Trending from './components/Trending/Trending';

function App() {
  const api_key = process.env.REACT_APP_NEWS_API_KEY
  return (
    <div className="App">
      <Trending api_key={api_key}/>
    </div>
  );
}

export default App;
