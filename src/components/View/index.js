import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  view: {
    maxWidth: "85%",
    margin: "2rem auto 3rem",
    height: "auto",
    position: 'relative',
    top: "200px",
    left: "0px",
  },
})

const View = ({ title, children }) => {
  const classes = useStyles()
  return <section className={classes.view}>{children}</section>
}

export default View
