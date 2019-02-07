import React, { Component } from 'react';

import MainNews from './components/MainNews'
import Form from './components/Form'
import Title from './components/Title'
import MenuBar from './components/MenuBar'

import './App.css';

const API_KEY = 'a140d9f145774014b3b364de40d68d54'

class App extends Component {

  state = {
    articles: []
  }

  getNews = async (event) => {
    event.preventDefault()
    console.log(this.state)

    const country = event.target.elements.country.value

    const url = `https://newsapi.org/v2/top-headlines?` + `country=${country}&` + `apiKey=${API_KEY}`

    //wait for url to fetch the information
    fetch(url)
      .then(data => data.json())
        .then(data => {
          this.setState({
            articles: data.articles
          })
        })
  }

  render() {

    return (
      <div className='main'>

          <Title />
          <Form
            getNews={this.getNews}
          />
          <MenuBar />
          {this.state.articles.slice(0, 5).map((article, i) => {
            return (
              <MainNews
                key={i}
                author={article.author}
                title={article.title}
                description={article.description}
                image={article.urlToImage}
              />
            )
          })}

      </div>
    )
  }

}
export default App
