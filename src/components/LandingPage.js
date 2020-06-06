import React, { useContext } from "react"
import XpTable from "../components/XpList/XpTable"
import CharacterSearch from "../components/CharacterSearch/CharacterSearch"
import { makeStyles } from "@material-ui/core/styles"
import DonationBox from "./DonationBox"
import { DonationContext } from "../context/DonationContext"

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: "600px",
    margin: "0 auto",
  },
  search: {
    width: "100%",
    maxWidth: "600px",
    marginBottom: "15px",
  },
  table: {
    width: "100%",
    maxWidth: "600px",
  },
})
const LandingPage = () => {
  const [show, setShow] = useContext(DonationContext)

  const classes = useStyles()
  return (
    <div className={classes.root}>
      {show && (
        <div>
          <DonationBox setShow={setShow} />
        </div>
      )}
      <div className={classes.search}>
        <CharacterSearch />
      </div>
      <div className={classes.table}>
        <XpTable />
      </div>
    </div>
  )
}

export default LandingPage
