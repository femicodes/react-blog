import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MainArticle extends Component {

    state = {
        articles: []
      }
    
      componentDidMount = async () => {
          const req = await fetch(`https://api.jsonbin.io/b/5bc9d646716f9364f8c75a82`)
    
          const res = await req.json();
         this.setState({ articles: res[0] });
          console.log(this.state.articles)
      }
    
  render() {
    const article = this.state.articles;
    return (
      <div className="container">
         {
             this.state.articles.length !== 0 && 
             <div className="active-article">
                <img className="active-article-img" src={article.urlToImage} alt=""/>
                <h3 className="active-article-title">{ article.title }</h3>
                <h4 className="active-article-author">
                    Publisher: <span>{ article.author }</span>
                </h4>
                <p>
                    { article.content }
                </p>
                <button className="active-article-button">
                    <Link to="/">Go Home</Link>
                </button>
             </div>
         }
      </div>
    )
  }
}
