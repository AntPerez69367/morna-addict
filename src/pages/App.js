import React from "react"
import Calculator from "../components/Calculator"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import View from "../components/View"

const App = () => {
  return (
    <Layout>
      <View>
        <Router>
          <Calculator path="/app/calculator" />
        </Router>
      </View>
    </Layout>
  )
}

export default App
