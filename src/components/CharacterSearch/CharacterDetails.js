import React from "react"
import { Collapse } from "@material-ui/core"
import Typography from "@material-ui/core/Typography"

const CharacterDetails = props => {
    const { character, open } = props
  return (
    <Collapse in={open} component="td" style={{ display: "block" }}>
      <div style={{ marginLeft: "25px" }}>
        <div>
          <b>Class</b>: {character.Class}
        </div>
        <div style={{ float: "left" }}>
          <Typography component="div" variant="heading">
            <b>Vita</b>: {character.Vita}
          </Typography>
          <Typography component="div" variant="heading">
            <b>Mana</b>: {character.Mana}
          </Typography>
        </div>
        <div style={{ float: "right" }}>
          <Typography component="div" variant="heading">
            <b>Total XP</b>: {(character.TotalXP / 1000000000).toFixed(3)} B
          </Typography>
          <Typography component="div" variant="heading">
            <b>XP Sold Today</b>: {(character.DailyXP / 1000000000).toFixed(3)} B
          </Typography>
        </div>
      </div>
    </Collapse>
  )
}

export default CharacterDetails
