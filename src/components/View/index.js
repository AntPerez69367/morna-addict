import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  view: {
    display: 'flex',
    width: '100%',
    maxWidth: '600px',
    margin: "2rem auto 3rem",
    height: "auto",
    position: 'relative',
    top: "200px",
    left: "0px",
  },
})

const View = ({ title, children }) => {
  const classes = useStyles()
  return <div className={classes.view}>{children}</div>
}

export default View
