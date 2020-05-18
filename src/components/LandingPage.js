import React from "react"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import XpTable from "../components/XpList/XpTable"

const useStyles = makeStyles({
  root: {
    display: "flex",
    margin: "auto",
    width: "50%",
  },
})
const LandingPage = () => {
  const classes = useStyles()
  return (
  <Paper 
  className={classes.root}
  component='div'
  >
    <XpTable />
  </Paper>)
}

export default LandingPage
