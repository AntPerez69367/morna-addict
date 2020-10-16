import React, { useState } from "react"
import { Collapse } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import { Grid } from "@material-ui/core"
import CharacterDetails from "../CharacterSearch/CharacterDetails"
import TableCell from "@material-ui/core/TableCell"
import TableRow from "@material-ui/core/TableRow"

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
  tableRow: {
    width: "100%",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#f5f5f5",
    },
  },
})

const ClanEntryTable = props => {
  const { players, open, index, length } = props
  const [openPlayer, setOpenPlayer] = useState(false)
  const [selectedPlayer, setSelectedPlayer] = useState(null)

  let sortedPlayers = _.sortBy(players, player => player.TotalXP).reverse()

  const handleClick = name => {
    if (openPlayer && name !== selectedPlayer) {
      setSelectedPlayer(name)
    } else {
      setOpenPlayer(!openPlayer)
      setSelectedPlayer(name)
    }
  }
  const classes = useStyles()
  return (
      <div>
        {sortedPlayers.map(player => (
          <Collapse className={classes.root} in={open}>
            <TableRow
              key={`${player.Name}_detailsRow`}
              onClick={() => handleClick(player.Name)}
            >
              <TableCell key={`${player.Name}_charDetails`} colSpan={2}>
                {player.Name}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                {openPlayer && selectedPlayer === player.Name && (
                  <CharacterDetails
                    key={`detail_component`}
                    open={openPlayer}
                    character={player}
                    index={0}
                    length={1}
                  />
                )}
              </TableCell>
            </TableRow>
          </Collapse>
        ))}
        </div>
  )
}

export default ClanEntryTable
