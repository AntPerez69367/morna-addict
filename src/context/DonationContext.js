import React, { useState, createContext } from "react"

export const DonationContext = createContext()

const DonationContextProvider = props => {
  const [show, setShow] = useState(true)
  return (
    <DonationContext.Provider value={[show, setShow]}>
      {props.children}
    </DonationContext.Provider>
  )
}

export default DonationContextProvider

