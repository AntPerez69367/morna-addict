import React from "react"
import Calculator from "../components/Calculator"
import { Router } from "@reach/router"

const App = () => {
  return (
        <Router>
          <Calculator path="/app/calculator" />
        </Router>
  )
}

export default App
