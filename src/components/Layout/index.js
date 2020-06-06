import React from "react"
import { Helmet } from "react-helmet"
import Header from "../Header"
import View from "../View"
import { makeStyles } from "@material-ui/styles"
import PropTypes from "prop-types"
import DonationContextProvider from "../../context/DonationContext"

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
    <div className={classes.root}>
      <DonationContextProvider>
        <Helmet title="MornaAddict" />
        <Header />
        <main className={classes.mainContent}>
          <View>{children}</View>
        </main>
      </DonationContextProvider>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}
export default Layout
