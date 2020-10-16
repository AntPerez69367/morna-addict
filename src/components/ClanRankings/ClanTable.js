import React, { useState } from 'react'
import Table from '@material-ui/core/Table'
import TableContainer from '@material-ui/core/TableContainer'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import ClanTableEntry from './ClanTableEntry'

const useStyles = makeStyles({
  tableHeader: {
    height: '25px',
    backgroundColor: '#0B0C10',
    fontFamily: 'roboto mono',
    color: '#66FCF1',
    verticalAlign: 'middle',
    width: '100%',
  },
  tableRow: {
    width: '100%',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#f5f5f5',
    },
  },
})

const ClanTable = (props) => {
  const {clans} = props
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [selectedRow, setSelectedRow] = useState(null)

  const handleClick = name => {
    if (open && name !== selectedRow) {
      setSelectedRow(name)
    } else {
      setOpen(!open)
      setSelectedRow(name)
    }
  }

  if (!clans) {
    return 'No Data Found'
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
          Clan Rankings
        </Typography>
      </Grid>
      <Grid item container>
        <TableContainer
          key={`Table_container`}
          className={classes.root}
          component={Paper}
        >
          <Table size="small">
            {clans.map(clan => {
              index += 1
              return (
                <React.Fragment key={`${index}_${clan.Name}`}>
                  <TableBody key={`${clan.Name}_container_${index}`}>
                    <TableRow
                      selected={clan.Name === selectedRow}
                      className={classes.tableRow}
                      key={`${clan.Name}_row`}
                      onClick={() => handleClick(clan.Name)}
                    >
                      <TableCell key={`${clan.Name}_cell_name`} align="left">
                        {index}. {clan.Name}
                      </TableCell>
                    </TableRow>
                    {open && clan.Name === selectedRow && (
                      <TableRow 
                      key={`${clan.Name}_detailsRow`}>
                        <TableCell key={`${clan.Name}_charDetails`} colSpan={2}>
                          <ClanTableEntry
                            key={`${clan.Name}_detail_component`}
                            open={open}
                            players={clan.Players}
                            index={0}
                            length={1}
                          />
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </React.Fragment>
              )
            })}
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  )
}

export default ClanTable
