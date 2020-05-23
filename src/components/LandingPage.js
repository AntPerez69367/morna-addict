import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import XpTable from "../components/XpList/XpTable"
import CharacterSearch from "../components/CharacterSearch/CharacterSearch"

const useStyles = makeStyles({
  root: {
    margin: "auto",
    width: "50%",
  },
  container: {
    marginBottom: '25px',
    },
})
const LandingPage = (props) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <CharacterSearch />
      </div>
      <div className={classes.container}>
        <XpTable />
      </div>
    </div>
  )
}

export default LandingPage
