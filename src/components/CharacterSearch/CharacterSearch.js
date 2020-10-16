import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/styles'
import { TextField } from '@material-ui/core'
import CharacterDetails from './CharacterDetails'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    clear: 'both',
  },
  header: {
    height: '25px',
    backgroundColor: '#0B0C10',
    fontFamily: 'roboto mono',
    color: '#66FCF1',
    verticalAlign: 'middle',
    margin: 'auto',
  },
  inputBase: {
    width: '100%',
    maxWidth: '600px',
  },
  input: {
    marginLeft: '15px',
  },
  iconButton: {
    padding: '10px',
  },
})

const CharacterSearch = () => {
  const classes = useStyles()
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
    `,
  )

  const handleChange = event => {
    let character = event.target.value
    if (character.length < 3) {
      setCharData(null)
      return null
    }

    

    let data = query.allCharacters.nodes.filter(char => {

      if (character.toLowerCase() === "zizi") {
        return char.Name.toLowerCase().includes('sitri')
      } else if (character.toLowerCase() === 'le placard'){
        return char.Name.toLowerCase().includes('gatsby')
      } else {
        return char.Name.toLowerCase().includes(character.toLowerCase())
      }
    })

    if (data.length > 0) {
      setCharData(data)
    } else {
      setCharData(null)
    }
  }

  return (
    <Paper className={classes.root}>
      <TextField
        size="small"
        className={classes.inputBase}
        onChange={handleChange}
        id="search-query"
        label="Character Search"
      />

      {charData &&
        charData.map(char => (
          <div style={{padding: '10px'}} key={`${char.Name}_div`}>
            <CharacterDetails
              key={`${char.Name}_details`}
              open={true}
              character={char}
              index={charData.indexOf(char)}
              length={charData.length - 1}
            />
          </div>
        ))}
    </Paper>
  )
}

export default CharacterSearch
