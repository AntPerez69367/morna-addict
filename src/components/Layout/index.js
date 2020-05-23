import React from "react"
import { Helmet } from "react-helmet"
import Header from "../Header"
import View from "../View"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet title="MornaAddict" />
      <Header />
      <View>
      <main>{children}</main>
      </View>
    </>
  )
}

export default Layout