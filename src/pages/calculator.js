import React, { useState, useEffect } from "react"
import { Paper } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles({
  paper: {
    width: "50%",
    padding: "25px",
    margin: "auto",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  vitaContainer: {
    margin: "5px",
  },
  manaContainer: {
    margin: "5px",
  },
  input: {
    margin: "10px",
    flex: "50%",
    alignItems: "center",
  },
  inputText: {
    textAlign: "center",
  },
  results: {
    display: 'block',
    textAlign: "center",
  }
})
const Calculator = props => {
  const classes = useStyles()
  const [startVita, setStartVita] = useState(0)
  const [startMana, setStartMana] = useState(0)
  const [endVita, setEndVita] = useState(0)
  const [endMana, setEndMana] = useState(0)
  const [vitaXpNeeded, setVitaXpNeeded] = useState(0)
  const [manaXpNeeded, setManaXpNeeded] = useState(0)

  useEffect(() => {
    if (endVita > startVita) {
      calculateVita()
    } else {
      setVitaXpNeeded(0)
    }
  }, [startVita, endVita])

  useEffect(() => {
    if (endMana > startMana) {
      calculateMana()
    } else {
      setManaXpNeeded(0)
    }
  }, [startMana, endMana])

  const textInputProps = {
    style: {
      textAlign: "center",
    },
  }
  const handleChange = event => {
    switch (event.target.id) {
      case "Vita-start":
        setStartVita(Number(event.target.value.replace(/\D/, "")))
        break
      case "Vita-end":
        setEndVita(Number(event.target.value.replace(/\D/, "")))
        break
      case "Mana-start":
        setStartMana(Number(event.target.value.replace(/\D/, "")))
        break
      case "Mana-end":
        setEndMana(Number(event.target.value.replace(/\D/, "")))
        break
      default:
        break
    }
  }

  const calculateVita = () => {
    let currentTotalXP = 0
    let futureTotalXP = 0
    let numOfSells = 0
    let costPerSell = 20000000
    let vita = startVita - 100000
    while (vita > 0) {
      let multiplier = Math.floor(numOfSells / 200) + 1
      numOfSells += 1
      vita -= 100
      currentTotalXP += costPerSell + multiplier * 2000000
    }

    numOfSells = 0
    costPerSell = 20000000
    vita = endVita - 100000
    while (vita > 0) {
      let multiplier = Math.floor(numOfSells / 200) + 1
      numOfSells += 1
      vita -= 100
      futureTotalXP += costPerSell + multiplier * 2000000
    }

    setVitaXpNeeded(futureTotalXP - currentTotalXP)
  }

  const calculateMana = () => {
    let currentTotalXP = 0
    let futureTotalXP = 0
    let numOfSells = 0
    let costPerSell = 20000000
    let mana = startMana - 50000
    while (mana > 0) {
      let multiplier = Math.floor(numOfSells / 200) + 1
      numOfSells += 1
      mana -= 50
      currentTotalXP += costPerSell + multiplier * 2000000
    }

    numOfSells = 0
    costPerSell = 20000000
    mana = endMana - 50000
    while (mana > 0) {
      let multiplier = Math.floor(numOfSells / 200) + 1
      numOfSells += 1
      mana -= 50
      futureTotalXP += costPerSell + multiplier * 2000000
    }

    setManaXpNeeded(futureTotalXP - currentTotalXP)
  }

  return (
    <Paper className={classes.paper}>
      <div className={classes.container}>
        <div className={classes.vitaContainer}>
          <div>
            <TextField
              inputProps={textInputProps}
              className={classes.input}
              onChange={handleChange}
              id="Vita-start"
              label="Starting Vita"
              value={startVita}
            />
          </div>
          <div>
            <TextField
              inputProps={textInputProps}
              className={classes.input}
              onChange={handleChange}
              id="Vita-end"
              label="Desired Vita"
              value={endVita}
            />
          </div>
        </div>
        <div className={classes.manaContainer}>
          <div>
            <TextField
              inputProps={textInputProps}
              className={classes.input}
              onChange={handleChange}
              id="Mana-start"
              label="Starting Mana"
              value={startMana}
            />
            </div>
            <div>
            <TextField
              inputProps={textInputProps}
              className={classes.input}
              onChange={handleChange}
              id="Mana-end"
              label="Desired Mana"
              value={endMana}
            />
          </div>
        </div>
      </div>
      <div className={classes.results}>
      <div>
          <Typography>
            {vitaXpNeeded > 0
              ? `Exp required for Vita: ${parseFloat(
                  (vitaXpNeeded / 1000000000).toFixed(3)
                )} bil`
              : null}
          </Typography>
          <Typography>
            {manaXpNeeded > 0
              ? `Exp required for Mana: ${parseFloat(
                  (manaXpNeeded / 1000000000).toFixed(3)
                )} bil`
              : null}
          </Typography>
       </div>
       </div>
    </Paper>
  )
}

export default Calculator
