import React from "react"
import logoSVG from "../../images/logo.svg"
import { makeStyles } from "@material-ui/core/styles"
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined"
import ButtonBase from "@material-ui/core/ButtonBase"
import Typography from "@material-ui/core/Typography"
import calculator from "../../images/icons/calculator.svg"

const useStyles = makeStyles({
  logo: {
    height: "125px",
    width: "100%",
    marginTop: "12.5px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  logoContainer: {
    alignItems: "center",
  },
  navigationBar: {
    height: "30px",
    width: "100%",
    zIndex: "2",
    position: "fixed",
    top: "130",
    left: "0",
    backgroundColor: "#0B0C10",
    activeColor: "#f7f7f7",
  },
  headerMenu: {
    display: "inline-block",
    color: "#66FCF1",
    marginLeft: "10px",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  buttonText: {
    display: "flex",
    alignItems: "center",
    color: "#66FCF1",
    fontFamily: "roboto mono",
    fontSize: "18px",
  },
})

const Navigation = () => {
  const classes = useStyles()
  const menu = [
    {
      id: 0,
      title: "Home",
      icon: (<HomeOutlinedIcon style={{paddingRight: '5px'}}/>),
      path: "/",
    },
    {
      id: 1,
      title: "Calculators",
      icon: <img style={{paddingRight: '5px'}} alt="calculator icon" src={calculator} />,
      path: "/calculators",
    },
  ]
  return (
    <>
      <div className={classes.logoContainer}>
        <img alt="logo" className={classes.logo} src={logoSVG} />
      </div>

      <div className={classes.navigationBar}>
        {menu.map(item => {
          return (
            <ButtonBase key={item.id} focusRipple className={classes.headerMenu}>
              <Typography
                className={classes.buttonText}
                component="div"
                variant="subtitle2"
              >
                 {item.icon}{item.title}
              </Typography>
            </ButtonBase>
          )
        })}
      </div>
    </>
  )
}

export default Navigation
