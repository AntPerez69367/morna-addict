import React from "react"
import { Paper } from "@material-ui/core"
import graphql from "gatsby"
import { makeStyles } from "@material-ui/styles"
const useStyles = makeStyles({
  root: {
    height: "200px",
  },
})
const DailyQuest = () => {
  const classes = useStyles()
  return <Paper className={classes.root}>(COMING SOON): Search for a monster name:</Paper>
}

export default DailyQuest
