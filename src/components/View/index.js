import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles({
  view: {
    display: 'flex',
    width: '100%',
    maxWidth: '600px',
    margin: '2rem auto 3rem',
    height: 'auto',
    position: 'relative',
    top: '200px',
    left: '0px',
  },
})

const View = ({ children }) => {
  const classes = useStyles()
  return <div className={classes.view}>{children}</div>
}

View.propTypes = {
  children: PropTypes.element.isRequired,
}
export default View
