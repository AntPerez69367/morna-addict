import React, { useState } from "react"
import Table from "@material-ui/core/Table"
import TableContainer from "@material-ui/core/TableContainer"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableRow from "@material-ui/core/TableRow"
import { useStaticQuery, graphql } from "gatsby"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import CharacterDetails from "../CharacterSearch/CharacterDetails"
import { Grid } from "@material-ui/core"

const useStyles = makeStyles({
  tableHeader: {
    height: "25px",
    backgroundColor: "#0B0C10",
    fontFamily: "roboto mono",
    color: "#66FCF1",
    verticalAlign: "middle",
    width: "100%",
  },
  tableRow: {
    width: "100%",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#f5f5f5",
    },
  },
})
const XpTable = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [selectedRow, setSelectedRow] = useState(null)
  const { leaders } = useStaticQuery(
    graphql`
      query stats {
        leaders: allCharacters(
          sort: { fields: DailyXP, order: DESC }
          limit: 10
          filter: { DailyXP: { gt: 0 } }
        ) {
          nodes {
            Name
            Vita
            Mana
            TotalXP
            DailyXP
            Class
          }
        }
      }
    `
  )

  const tableRows = leaders.nodes
  const handleClick = name => {
    if (open && name !== selectedRow) {
      setSelectedRow(name)
    } else {
      setOpen(!open)
      setSelectedRow(name)
    }
  }

  if (!tableRows) {
    return "No Data Found"
  }
  let index = 0
  return (
    <Grid container direction="column" justify="center" alignItems="stretch">
      <Grid item container>
        <Typography
          className={classes.tableHeader}
          variant="subtitle2"
          align="center"
          component="div"
        >
          Top XP Sold Today
        </Typography>
      </Grid>
      <Grid item container>
        <TableContainer className={classes.root} component={Paper}>
          <Table size="small">
            {tableRows.map(row => {
              index += 1
              return (
                <>
                  <TableBody key={`${row.Name}_container`}>
                    <TableRow
                      selected={row.Name === selectedRow}
                      className={classes.tableRow}
                      key={`${row.Name}_row`}
                      onClick={() => handleClick(row.Name)}
                    >
                      <TableCell align="left">
                        {index}. {row.Name} ({row.Class})
                      </TableCell>
                      <TableCell align="center">{`${(
                        row.DailyXP / 1000000000
                      ).toFixed(3)}B`}</TableCell>
                    </TableRow>
                    {open && row.Name === selectedRow && (
                      <TableRow>
                        <TableCell colspan={2}>
                          <CharacterDetails
                            open={open}
                            character={row}
                            index={0}
                            length={1}
                          />
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </>
              )
            })}
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  )
}

export default XpTable
