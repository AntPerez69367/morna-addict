import React, { useState } from "react"
import { Collapse } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import Typography from "@material-ui/core/Typography"
import { Grid } from "@material-ui/core"
import Divider from "@material-ui/core/Divider"

const useStyles = makeStyles({
  root: {
    padding: "15px",
  },
  mobDisplay: {
    padding: "5px",
    display: "flex",
    alignItems: "center",
  },
})

const CaveDisplay = props => {
  const { cave } = props
  const classes = useStyles()
  const [selected, setSelected] = useState(true)

  if (!cave) {
    return null
  }

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid
        className={classes.root}
        container
        item
        direction="row"
        justify="space-between"
        alignItems="center"
        onClick={() => {
          setSelected(!selected)
        }}
      >
        <Typography> {cave.name} </Typography>
        <Typography> {cave.location} </Typography>
      </Grid>

      {selected && (
        <Collapse onClick={()=>setSelected(!selected)} className={classes.mobDisplay} in={selected}>
          <Grid
            container
            item
            direction="column"
            justify="flex-start"
            alignItems="center"
          >
              
            {cave.mobs.map(mob => {
              return (
                <Grid item>
                  <Typography>{mob.name}</Typography>
                </Grid>
              )
            })}
          </Grid>
        </Collapse>
      )}
    </Grid>
  )
}

export default CaveDisplay
