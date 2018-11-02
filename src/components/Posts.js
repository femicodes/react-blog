import React from 'react';
import { Link } from 'react-router-dom';

const Posts = props => {
    return (
        <div className="container">
          <div className="row">
            {
              props.post.map(article => {
                return (
                  <div key={article.id} classsName="col-md-4" style={{ marginBottom: "2rem", marginLeft: "2rem" }}>
                    <div className="article-box">
                      <img src={article.urlToImage} alt="" />
                      <div className="article-text"  style={{ marginTop: "2rem"}}>
                      <h5>
                      { article.description.length < 70 ? `${article.description}` :`${article.description.substring(0, 90)}...` }
                      </h5>
                      <p className="article-title">
                        Publisher: <span>{ article.author } </span>
                      </p>
                    </div>
                    <button className="article-button">
                    <Link to={{ 
                          pathname: `/recipe/${article.id}`,
                          state: { articles: article.description }
                          }}>View Article</Link>
                    </button>
                    </div>
                  </div>
                )
              }

              )
            }
          </div>
        </div>
    );
}

export default Posts;