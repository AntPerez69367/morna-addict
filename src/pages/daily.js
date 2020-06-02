import React, { useState, useEffect } from "react"
import { Paper, Typography } from "@material-ui/core"
import { Link, graphql } from "gatsby"
import { makeStyles } from "@material-ui/styles"
import { TextField } from "@material-ui/core"
import CaveDisplay from "../components/CaveDisplay/CaveDisplay"
import Divider from "@material-ui/core/Divider"
import PropTypes from "prop-types"
import cloneDeep from "lodash/cloneDeep"

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
    let filterData = cloneDeep(caveData)
    if (monster.length > 0) {
      let mobdata = filterData.filter(cave =>
        cave.mobs.some(mobs =>
          mobs.name.toLowerCase().includes(monster.toLowerCase())
        )
      )

      if (mobdata && mobdata.length > 0) {
        mobdata.forEach(cave => {
          cave.mobs = cave.mobs.filter(mob =>
            mob.name.toLowerCase().includes(monster.toLowerCase())
          )
        })
        setResults(mobdata)
      } else {
        setResults(null)
      }
    } else {
      setResults(null)
    }
  }

  return (
    <Paper className={classes.root}>
      <TextField
        autoComplete="off"
        size="small"
        className={classes.inputBase}
        id="search-query"
        onChange={handleChange}
        label="Monster Search"
      />
      {results ? (
        results.map(cave => {
          return (
            <>
              <CaveDisplay key={`${cave.name}_display`} cave={cave} />
              <Divider variant="middle" />
            </>
          )
        })
      ) : (
        <Typography align="center">
          Monster missing from this list? Add it{" "}
          <a href="https://github.com/MornaAddict/morna-json-data">Here</a>
        </Typography>
      )}
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

DailyQuest.propTypes = {
  data: PropTypes.array.isRequired,
}

export default DailyQuest
