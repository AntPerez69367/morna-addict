import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Helmet } from "react-helmet"
import Header from "../Header"

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
    height: "auto",
    position: 'relative',
    width: "100%",
    top: "200px",
    left: "0px",
  },
})

const Layout = ({ children }) => {
  const classes = useStyles()
  return (
    <div>
      <Helmet title="MornaAddict" />
      <div className={classes.topMenu}>
      <Header />
      </div>
      <main className={classes.pageArea}>{children}</main>
    </div>
  )
}

export default Layout