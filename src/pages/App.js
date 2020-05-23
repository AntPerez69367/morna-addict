import React from "react"
import Calculator from "../components/Calculator"
import { Router } from "@reach/router"
import {withPrefix } from "gatsby"

const App = (props) => {
  return (
        <Router>
          <Calculator path={withPrefix('/app/calculator')} />
        </Router>
  )
}

export default App
