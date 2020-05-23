import React from "react"
import Layout from '../components/Layout'
import LandingPage from '../components/LandingPage'
import { Router } from "@reach/router"

const Index = () => (
  <Layout>
    <Router>
    <LandingPage path="/" />
    </Router>
    
  </Layout>
  )

export default Index
