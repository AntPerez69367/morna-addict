import React from "react"
import { Helmet } from "react-helmet"
import Header from "../Header"
import View from "../View"
import { makeStyles } from "@material-ui/styles"
const useStyles = makeStyles({
  root: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
  },
  mainContent: {
    flex: "1",
  },
})
const Layout = ({ children }) => {
  const classes = useStyles()
  return (
    <body className={classes.root}>
      <Helmet title="MornaAddict" />
      <Header />
      <main className={classes.mainContent}>
        <View>{children}</View>
      </main>
    </body>
  )
}

export default Layout
