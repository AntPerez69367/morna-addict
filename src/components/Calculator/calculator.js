import React, { useState, useEffect } from "react"
import { Paper } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import { useStaticQuery, graphql } from "gatsby"
import Divider from "@material-ui/core/Divider"

const MAX_VITA = 100000000
const MAX_MANA = 50000000
const useStyles = makeStyles({
  paper: {
    width: "50%",
    padding: "25px",
    margin: "auto",
  },
  charHeader: {
    height: "25px",
    backgroundColor: "#0B0C10",
    fontFamily: "roboto mono",
    color: "#66FCF1",
    verticalAlign: "middle",
    width: "100%",
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
  presets: {
    borderLeft: "1px solid black",
    paddingLeft: "10px",
    margin: "5px",
    textAlign: "left",
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
    display: "block",
    textAlign: "center",
  },
  link: {
    cursor: "pointer",
    color: "blue",
    textDecoration: "underline",
  },
})
const Calculator = props => {
  const classes = useStyles()
  const [startVita, setStartVita] = useState(0)
  const [startMana, setStartMana] = useState(0)
  const [endVita, setEndVita] = useState(0)
  const [endMana, setEndMana] = useState(0)
  const [vitaXpNeeded, setVitaXpNeeded] = useState(0)
  const [manaXpNeeded, setManaXpNeeded] = useState(0)
  const [error, setError] = useState("")
  const [charData, setCharData] = useState(null)
  let charName = props["*"]
  const query = useStaticQuery(
    graphql`
      query {
        allCharacters {
          nodes {
            Name
            Class
            Level
            Vita
            Mana
            TotalXP
            DailyXP
          }
        }
      }
    `
  )
  useEffect(() => {
    if (charName) {
      let data = query.allCharacters.nodes.filter(
        char => char.Name.toLowerCase() === charName.toLowerCase()
      )
      if (data[0]) {
        setCharData(data[0])
        setStartVita(data[0].Vita)
        setStartMana(data[0].Mana)
      }
    }
  }, [])

  useEffect(() => {}, [charData])

  useEffect(() => {
    if (endVita > startVita) {
      if (startVita > MAX_VITA || endVita > MAX_VITA) {
        setError(
          "Invalid entry for Vita. Maximum vita currently limited to 10mil."
        )
      } else {
        setError("")
        calculateVita()
      }
    } else {
      setVitaXpNeeded(0)
    }
  }, [startVita, endVita])

  useEffect(() => {
    if (endMana > startMana) {
      if (startMana > MAX_MANA || endMana > MAX_MANA) {
        setError(
          "Invalid entry for Mana. Maximum Mana currently limited to 5mil."
        )
      } else {
        setError("")
        calculateMana()
      }
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
    let sVita = Math.floor(startVita / 100) * 100
    
    while (sVita > 0) {
      const multiplier = sVita <= 100000 ? 0 : Math.floor(numOfSells / 200) + 1
      numOfSells += 1
      sVita -= 100
      currentTotalXP += costPerSell + (multiplier * 2000000)      
    }

    let eVita = Math.floor(endVita / 100) * 100
    numOfSells = 0

    while (eVita > 0) {
      const multiplier = eVita <= 100000 ? 0 : Math.floor(numOfSells / 200) + 1
      numOfSells += 1
      eVita -= 100
      futureTotalXP += costPerSell + (multiplier * 2000000)      
    }

    setVitaXpNeeded(futureTotalXP - currentTotalXP)
  }

  const calculateMana = () => {
    let currentTotalXP = 0
    let futureTotalXP = 0
    let numOfSells = 0
    let costPerSell = 20000000
    let sMana = Math.floor(startMana/10) * 10

    while (sMana > 0) {
      const multiplier = sMana <= 50000 ? 0 : Math.floor(numOfSells / 200) + 1
      numOfSells += 1
      sMana -= 50
      currentTotalXP += costPerSell + multiplier * 2000000
    }
    
    let eMana = Math.floor(endMana/ 10) * 10
    numOfSells = 0
    
    while (eMana > 0) {
      const multiplier = eMana <= 50000 ? 0 : Math.floor(numOfSells / 200) + 1
      numOfSells += 1
      eMana -= 50
      futureTotalXP += costPerSell + multiplier * 2000000
    }
    setManaXpNeeded(futureTotalXP - currentTotalXP)
  }

  return (
    <Paper>
      {charData && (
        <div className={classes.charHeader}>
          <div style={{ marginLeft: "10px" }}>Character: {charData.Name}</div>
        </div>
      )}
      <div className={classes.container}>
        <div className={classes.vitaContainer}>
          <div>
            <TextField
              inputProps={textInputProps}
              className={classes.input}
              onChange={handleChange}
              error={startVita > 100000000}
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
              error={endVita > 100000000}
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
              error={startMana > MAX_MANA}
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
              error={endMana > MAX_MANA}
              id="Mana-end"
              label="Desired Mana"
              value={endMana}
            />
          </div>
        </div>

        <div className={classes.presets}>
          <div>
            <Typography
              className={classes.link}
              onClick={() => {
                setEndVita(160000)
                setEndMana(80000)
              }}
            >
              Il San
            </Typography>
            <Typography
              className={classes.link}
              onClick={() => {
                setEndVita(320000)
                setEndMana(160000)
              }}
            >
              Ee San
            </Typography>
            <Typography
              className={classes.link}
              onClick={() => {
                setEndVita(640000)
                setEndMana(320000)
              }}
            >
              Sam San
            </Typography>
            <Typography
              className={classes.link}
              onClick={() => {
                setEndVita(1280000)
                setEndMana(640000)
              }}
            >
              Sa San
            </Typography>
            <Typography
              className={classes.link}
              onClick={() => {
                setEndVita(2560000)
                setEndMana(1280000)
              }}
            >
              Oh San
            </Typography>
            <Typography
              className={classes.link}
              onClick={() => {
                setEndVita(5120000)
                setEndMana(2560000)
              }}
            >
              Yook San
            </Typography>
            <Typography
              className={classes.link}
              onClick={() => {
                setEndVita(10240000)
                setEndMana(5120000)
              }}
            >
              Chil San
            </Typography>
            <Typography
              className={classes.link}
              onClick={() => {
                setEndVita(20480000)
                setEndMana(10240000)
              }}
            >
              Pal San
            </Typography>
          </div>
        </div>
      </div>
      <div className={classes.results}>
        <div>
          <Divider variant="middle" />
          {error && <Typography>{error}</Typography>}
          <Typography>
            {vitaXpNeeded > 0
              ? `Exp Required for Vita: ${parseFloat(
                  (vitaXpNeeded / 1000000000).toFixed(3)
                )} bil`
              : null}
          </Typography>
          <Typography>
            {manaXpNeeded > 0
              ? `Exp Required for Mana: ${parseFloat(
                  (manaXpNeeded / 1000000000).toFixed(3)
                )} bil`
              : null}
          </Typography>
          <Typography>
            {manaXpNeeded > 0 || vitaXpNeeded > 0
              ? `Total Exp Required for Stats: ${parseFloat(
                  ((manaXpNeeded + vitaXpNeeded) / 1000000000).toFixed(3)
                )} bil`
              : null}
          </Typography>
        </div>
      </div>
    </Paper>
  )
}

export default Calculator
