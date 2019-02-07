import React from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  textField: {
    // display: 'flex',
    margin: theme.spacing.unit,
    width: '80%'
  },
  button: {
    margin: theme.spacing.unit,
    width: '150px',
    height: '55px'
  }
})

const Form = (props) => (

  <form onSubmit={props.getNews}>
    <TextField
      className={props.classes.textField}
      placeholder='Keyword or Phrase Search'
      margin='normal'
      name='country'
      type='search'
      variant='outlined'
      InputLabelProps={{
        required: true,
        color: 'white',
        shrink: true
      }}
    />

    <Button
      className={props.classes.button}
      color='primary'
      type='submit'
      variant='raised'
    >
      Search
    </Button>
  </form>

)

export default withStyles(styles)(Form)
