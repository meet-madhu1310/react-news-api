import React from 'react'

import Grid from '@material-ui/core/Grid'

const MainNews = (props) => (
  <div className="news-container">

    <Grid container spacing={0} className="grid-container">

      <Grid item xs={6}>
      {
        props.image &&
        <p>
          <img style={{width: '500px', height: '350px', objectFit: 'cover'}} src={props.image} />
        </p>
      }
      </Grid>

      <Grid item xs={6}>
      {
        props.country &&
        <p className="news_key">
          Country: {props.country}
        </p>
      }
      {
        props.title &&
        <p className="news_key" style={{fontSize: '2rem', color: '#F44336', fontWeight: 'bold', textAlign:'left'}}>
          {props.title}
        </p>
      }
      {
        props.description &&
        <p className="news_key" style={{textAlign: 'left', fontSize: '1.25rem'}}>
          {props.description}
        </p>
      }
      {
        props.author &&
        <p className="news_key" style={{textAlign: 'left', color: '#3f51b5', fontWeight:'bold'}}>
          Author: {props.author}
        </p>
      }

      {
        props.error &&
        <p className="news_key">
          Error: {props.error}
        </p>
      }
      </Grid>

    </Grid>

  </div>
)

export default MainNews
