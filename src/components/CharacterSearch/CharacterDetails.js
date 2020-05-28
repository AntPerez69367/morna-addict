import React from "react"
import { Collapse } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import Typography from "@material-ui/core/Typography"
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    padding: '10px',
    margin: 'auto',
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "center",
  },
  leftColumn: {
    textAlign: 'left',
  },
  rightColumn: {
    textAlign: 'right',

  }
})
const CharacterDetails = props => {
  const { character, open, index, length } = props
  const classes = useStyles()
  return (
    <Collapse in={open} style={{ display: "block" }}>
      <div className={classes.root}>
        <div className={classes.leftColumn}>
          <Typography component="div" variant="subtitle2">
            <b>Name</b>: {character.Class} {character.Name}
          </Typography>
          <Typography component="div" variant="subtitle2">
            <b>Vita</b>: {character.Vita}
          </Typography>
          <Typography component="div" variant="subtitle2">
            <b>Mana</b>: {character.Mana}
          </Typography>
        </div>
        <div className={classes.rightColumn}>
          <Typography component="div" variant="subtitle2">
            <b>Total XP</b>: {(character.TotalXP / 1000000000).toFixed(3)} B
          </Typography>
          <Typography component="div" variant="subtitle2">
            <b>XP Sold Today</b>: {(character.DailyXP / 1000000000).toFixed(3)} B
          </Typography>
        </div>
      </div>
      {index !== length && <Divider variant="middle" />}
    </Collapse>
  )
}

export default CharacterDetails
