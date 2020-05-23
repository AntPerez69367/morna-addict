import React from "react"
import Calculator from "../components/Calculator/Calculator"
import { Router } from "@reach/router"
import Error404Page from "./404"
import Layout from "../components/Layout"

const App = () => {
  return (
    <Layout>
      <Router basepath="/app">
        <Error404Page default />
        <Calculator path="/calculator" />
      </Router>
    </Layout>
  )
}

export default App
