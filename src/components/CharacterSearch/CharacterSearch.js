import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/styles"
import { InputBase, IconButton } from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"
import CharacterDetails from "./CharacterDetails"
import Table from "@material-ui/core/Table"

const useStyles = makeStyles({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "99%",
  },
  header: {
    height: "25px",
    backgroundColor: "#0B0C10",
    fontFamily: "roboto mono",
    color: "#66FCF1",
    verticalAlign: "middle",
    margin: "auto",
  },
  input: {
    marginLeft: "theme.spacing(1)",
    width: '93%'
  },
  iconButton: {
    padding: "10px",
  },
})

const CharacterSearch = () => {
  const classes = useStyles()
  const [character, setCharacter] = useState(null)
  const [charData, setCharData] = useState(null)
  const query = useStaticQuery(
    graphql`
      query {
        allCharacters {
          nodes {
            Name
            Class
            Level
            Vita
            Mana
            TotalXP
            DailyXP
          }
        }
      }
    `
  )

  const handleSubmit = event => {
    event.preventDefault()
    let data = query.allCharacters.nodes.filter(
      char => char.Name.toLowerCase() === character.toLowerCase()
    )
    if (data.length > 0) {
      setCharData(data[0])
    } else {
      setCharData(null)
    }
  }

  const handleChange = event => {
    setCharacter(event.target.value)
  }

  return (
    <Paper component="form" onSubmit={handleSubmit} className={classes.root}>
        <Table>
          <InputBase
            className={classes.input}
            id="search-query"
            name="char"
            onChange={handleChange}
            placeholder="Character Search"
            inputProps={{ root: {marginLeft: '15px'}, "aria-label": "Character Search" }}
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>

          {charData && <CharacterDetails open={true} character={charData} />}
        </Table>
    </Paper>
  )
}

export default CharacterSearch
