import React, { useState } from "react"
import { Paper } from "@material-ui/core"
import { graphql } from "gatsby"
import { makeStyles } from "@material-ui/styles"
import { TextField } from "@material-ui/core"
import CaveDisplay from "../components/CaveDisplay/CaveDisplay"
import Divider from "@material-ui/core/Divider"

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: "600px",
    margin: "0 auto",
  },
  inputBase: {
    width: "100%",
    maxWidth: "600px",
  },
})
const DailyQuest = props => {
  const classes = useStyles()
  const caveData = props.data.allCaves.nodes
  const [results, setResults] = useState(null)

  const handleChange = event => {
    let monster = event.target.value

    let mobdata = caveData.filter(cave =>
      cave.mobs.some(mobs =>
        mobs.name.toLowerCase().includes(monster.toLowerCase())
      )
    )
    if (mobdata.length > 0) {
      setResults(mobdata)
    } else {
      setResults(null)
    }
  }
  return (
    <Paper className={classes.root}>
      <TextField
        size="small"
        className={classes.inputBase}
        id="search-query"
        onChange={handleChange}
        label="Monster Search"
      />
      {results && results.map(cave => {
        return (
          <>
        <CaveDisplay key={`${cave.name}_display`} cave={cave} />
        <Divider variant="middle" />
        </>)
      })
    }
    </Paper>
  )
}

export const query = graphql`
  query MyQuery {
    allCaves {
      nodes {
        name
        location
        level
        mobs {
          name
          drops
        }
      }
    }
  }
`
export default DailyQuest
