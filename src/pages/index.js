import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Navigation from "../components/SideBar/Navigation"
import LandingPage from "../components/LandingPage";

const useStyles = makeStyles({
  topMenu: {
    height: "150px",
    width: "100%",
    zIndex: "1",
    position: "fixed",
    top: "0",
    left: "0",
    backgroundColor: "#1F2833",
    activeColor: "#f7f7f7",
  },
  pageArea: {
    height: 'auto',
    width: '100%',
    position: 'fixed',
    top: '200px',
    left: '0px',
  }
})

const App = () => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.topMenu}>
        <Navigation />
      </div>
      <div className={classes.pageArea}>
        <LandingPage />
      </div>
    </>
  )
}

export default App
