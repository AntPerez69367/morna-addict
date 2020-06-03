import React from "react"
import Calculator from "../components/Calculator/calculator"
import { Router, Route } from "@reach/router"
const App = props => {
  return (
    <Router>
      <Calculator path="/app/calculator/*" component={Calculator}/>
    </Router>
  )
}

export default App
