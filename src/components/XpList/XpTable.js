import React from "react"
import Table from "@material-ui/core/Table"
import TableContainer from "@material-ui/core/TableContainer"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableRow from "@material-ui/core/TableRow"
import { useStaticQuery, graphql } from "gatsby"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  tableHeader: {
    height: "25px",
    backgroundColor: "#0B0C10",
    fontFamily: "roboto mono",
    color: '#66FCF1',
    verticalAlign: 'middle',
  },
})
const XpTable = () => {
  const classes = useStyles()
  const { leaders } = useStaticQuery(
    graphql`
      query stats {
        leaders: allCharacters(
          sort: { fields: DailyXP, order: DESC }
          limit: 15
          filter: { DailyXP: { gt: 0 } }
        ) {
          nodes {
            Name
            DailyXP
            Class
          }
        }
      }
    `
  )

  const tableRows = leaders.nodes

  if (!tableRows) {
    return "No Data Found"
  }

  return (
    <div style={{ width: "100%" }}>
      <Typography className={classes.tableHeader} 
      variant="subtitle2" align="center" component="div">
        Top XP Sold Today
      </Typography>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableBody>
            {tableRows.map(row => {
              return (
                <TableRow key={row.Name}>
                  <TableCell component="th" scope="row" align="left">
                    {row.Class}
                  </TableCell>
                  <TableCell align="left">{row.Name}</TableCell>
                  <TableCell align="center">{`${(
                    row.DailyXP / 1000000000
                  ).toFixed(3)}B`}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default XpTable
