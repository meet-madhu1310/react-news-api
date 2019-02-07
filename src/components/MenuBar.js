import React from 'react'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const MenuBar = (props) => (

  <div className='menu-bar-links'>
    <Grid container spacing={0} className='menu-bar-grid'>

      <Grid item xs={2}>
        <Button color='secondary' size='large'>
          Canada
        </Button>
      </Grid>

      <Grid item xs={2}>
        <Button color='secondary' size='large'>
          India
        </Button>
      </Grid>

      <Grid item xs={2}>
        <Button color='primary' size='large'>
          Search Result
        </Button>
      </Grid>

      <Grid item xs={2}>
        <Button color='secondary' size='large'>
          Brazil
        </Button>
      </Grid>

      <Grid item xs={2}>
        <Button color='secondary' size='large'>
          Australia
        </Button>
      </Grid>

    </Grid>
  </div>

)

export default MenuBar
