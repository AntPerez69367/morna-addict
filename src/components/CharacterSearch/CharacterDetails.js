import React from "react"
import { Collapse } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import { Grid } from "@material-ui/core"
import {Link} from "gatsby"
const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "block",
  },
  leftColumn: {
    textAlign: "left",
  },
  rightColumn: {
    textAlign: "right",
  },
})
const CharacterDetails = props => {
  const { character, open, index, length } = props
  const classes = useStyles()
  return (
    <Collapse className={classes.root} in={open}>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid
          item
          xs
          container
          justify="flex-start"
          alignItems="flex-start"
          direction="column"
        >
          <Typography component="div" variant="subtitle2">
            <b>Name</b>: {character.Name} ({character.Class})
          </Typography>
          <Typography component="div" variant="subtitle2">
            <b>Vita</b>: {character.Vita}
          </Typography>
          <Typography component="div" variant="subtitle2">
            <b>Mana</b>: {character.Mana}
          </Typography>
        </Grid>
        <Grid
          item
          xs
          container
          justify="flex-end"
          alignItems="flex-end"
          direction="column"
        >
          <Typography component="div" variant="subtitle2">
            <b>Total XP</b>:{" "}
            {parseFloat((character.TotalXP / 1000000000).toFixed(3))} B
          </Typography>
          <Typography component="div" variant="subtitle2">
            <b>XP Today</b>:{" "}
            {parseFloat((character.DailyXP / 1000000000).toFixed(3))} B
          </Typography>
          <Link to={`/app/calculator/${character.Name}`}>Open in Calculator</Link>
          </Grid>
      </Grid>
      {index !== length && <Divider variant="middle" />}
    </Collapse>
  )
}

export default CharacterDetails
