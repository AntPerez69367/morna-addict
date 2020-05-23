import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import XpTable from "../components/XpList/XpTable"
import CharacterSearch from "../components/CharacterSearch/CharacterSearch"

const useStyles = makeStyles({
  container: {
    marginBottom: '25px',
    },
})
const LandingPage = (props) => {
  const classes = useStyles()
  return (
    <div>
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
