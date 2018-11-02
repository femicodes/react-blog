import React, { Component } from 'react';
import './App.css';
import Posts from '../src/components/Posts';

class App extends Component {

  state = {
    articles: []
  }

  componentDidMount = async () => {
      const req = await fetch(`https://api.jsonbin.io/b/5bc9d646716f9364f8c75a82`)

      const res = await req.json();
     this.setState({ articles: res });
      console.log(this.state.articles)
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">the Blog.</h1>
        </header>
        <Posts post={this.state.articles} />
      </div>
    );
  }
}

export default App;
