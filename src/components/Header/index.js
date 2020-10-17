import React, { useState } from "react"
import logoSVG from "../../images/logo.svg"
import { withStyles } from "@material-ui/core/styles"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import MenuIcon from "@material-ui/icons/Menu"
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined"
import HelpIcon from "@material-ui/icons/Help"
import ButtonBase from "@material-ui/core/ButtonBase"
import Typography from "@material-ui/core/Typography"
import calculator from "../../images/icons/calculator.svg"
import { Link } from "@reach/router"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn"
import { navigate } from "gatsby"

const styles = theme => ({
  topMenu: {
    height: "150px",
    width: "100%",
    position: "absolute",
    top: "0",
    left: "0",
    backgroundColor: "#1F2833",
    activeColor: "#f7f7f7",
  },
  logo: {
    width: "250px",
    height: "125px",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10px",
  },
  navigationBar: {
    width: "100%",
    position: "relative",
    top: "250",
    left: "0",
    backgroundColor: "#0B0C10",
    activeColor: "#f7f7f7",
  },
  navMenu: {
    alignSelf: "center",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  smallNavMenu: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "inherit",
    },
  },
  menuStyle: {
    backgroundColor: "#0B0C10",
  },
  headerMenu: {
    display: "inline-block",
    color: "#66FCF1",
    marginLeft: "10px",
    paddingLeft: "10px",
    paddingRight: "10px",
    alignSelf: "center !important",
  },
  buttonText: {
    display: "flex",
    alignItems: "center",
    color: "#66FCF1",
    fontFamily: "muli",
    fontSize: "18px",
  },
  link: {
    textDecoration: "none",
  },
})

const Header = ({ classes }) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const menu = [
    {
      id: 0,
      title: "Home",
      icon: <HomeOutlinedIcon style={{ paddingRight: "5px" }} />,
      path: "/",
    },
    {
      id: 1,
      title: "Calculators",
      icon: (
        <img
          style={{ paddingRight: "5px" }}
          alt="calculator icon"
          src={calculator}
        />
      ),
      path: "/app/calculator",
    },
    {
      id: 2,
      title: "Mob Search",
      icon: <HelpIcon style={{ paddingRight: "5px" }} />,
      path: "/daily",
    },
  ]
  return (
    <div className={classes.topMenu}>
      <div className={classes.logoContainer}>
        <Link className={classes.link} to={"/"}>
          <img alt="logo" className={classes.logo} src={logoSVG} />
        </Link>
      </div>

      <AppBar className={classes.navigationBar} position="static">
        <Toolbar
          className={classes.navMenu}
          variant="dense"
          disableGutters={true}
        >
          {menu.map(item => {
            return (
              <ButtonBase
                key={item.id}
                focusRipple
                className={classes.headerMenu}
              >
                <Link className={classes.link} to={item.path}>
                  <Typography
                    className={classes.buttonText}
                    component="span"
                    variant="subtitle2"
                  >
                    {item.icon}
                    {item.title}
                  </Typography>
                </Link>
              </ButtonBase>
            )
          })}
          <ButtonBase className={classes.headerMenu} focusRipple>
            <a href="https://wiki.mornaaddict.com/">
              <Typography
                className={classes.buttonText}
                component="span"
                variant="subtitle2"
              >
                <svg
                  style={{ width: "24px", height: "24px", paddingRight: "5px" }}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M14.97,18.95L12.41,12.92C11.39,14.91 10.27,17 9.31,18.95C9.3,18.96 8.84,18.95 8.84,18.95C7.37,15.5 5.85,12.1 4.37,8.68C4.03,7.84 2.83,6.5 2,6.5C2,6.4 2,6.18 2,6.05H7.06V6.5C6.46,6.5 5.44,6.9 5.7,7.55C6.42,9.09 8.94,15.06 9.63,16.58C10.1,15.64 11.43,13.16 12,12.11C11.55,11.23 10.13,7.93 9.71,7.11C9.39,6.57 8.58,6.5 7.96,6.5C7.96,6.35 7.97,6.25 7.96,6.06L12.42,6.07V6.47C11.81,6.5 11.24,6.71 11.5,7.29C12.1,8.53 12.45,9.42 13,10.57C13.17,10.23 14.07,8.38 14.5,7.41C14.76,6.76 14.37,6.5 13.29,6.5C13.3,6.38 13.3,6.17 13.3,6.07C14.69,6.06 16.78,6.06 17.15,6.05V6.47C16.44,6.5 15.71,6.88 15.33,7.46L13.5,11.3C13.68,11.81 15.46,15.76 15.65,16.2L19.5,7.37C19.2,6.65 18.34,6.5 18,6.5C18,6.37 18,6.2 18,6.05L22,6.08V6.1L22,6.5C21.12,6.5 20.57,7 20.25,7.75C19.45,9.54 17,15.24 15.4,18.95C15.4,18.95 14.97,18.95 14.97,18.95Z"
                  />
                </svg>
                Wiki
              </Typography>
            </a>
          </ButtonBase>
          <ButtonBase className={classes.headerMenu} focusRipple>
            <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=2FJH4CYVXSV5G&source=url">
              <Typography
                className={classes.buttonText}
                component="span"
                variant="subtitle2"
              >
                <MonetizationOnIcon />
                Donate
              </Typography>
            </a>
          </ButtonBase>
        </Toolbar>
        <Toolbar className={classes.smallNavMenu}>
          <MenuIcon onClick={handleClick} />

          <Menu
            classes={{ paper: classes.menuStyle }}
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={() => {
              setAnchorEl(null)
            }}
          >
            {menu.map(item => (
              <MenuItem
                style={{ color: "white" }}
                onClick={() => {
                  setAnchorEl(null)
                  navigate(item.path)
                }}
                key={item.id}
              >
                {item.icon} {item.title}
              </MenuItem>
            ))}
            <MenuItem
              style={{ color: "white" }}
              onClick={() => {
                setAnchorEl(null)
                window.open("https://wiki.mornaaddict.com/", "_self")
              }}
            >
              <svg
                style={{ width: "24px", height: "24px", paddingRight: "5px" }}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M14.97,18.95L12.41,12.92C11.39,14.91 10.27,17 9.31,18.95C9.3,18.96 8.84,18.95 8.84,18.95C7.37,15.5 5.85,12.1 4.37,8.68C4.03,7.84 2.83,6.5 2,6.5C2,6.4 2,6.18 2,6.05H7.06V6.5C6.46,6.5 5.44,6.9 5.7,7.55C6.42,9.09 8.94,15.06 9.63,16.58C10.1,15.64 11.43,13.16 12,12.11C11.55,11.23 10.13,7.93 9.71,7.11C9.39,6.57 8.58,6.5 7.96,6.5C7.96,6.35 7.97,6.25 7.96,6.06L12.42,6.07V6.47C11.81,6.5 11.24,6.71 11.5,7.29C12.1,8.53 12.45,9.42 13,10.57C13.17,10.23 14.07,8.38 14.5,7.41C14.76,6.76 14.37,6.5 13.29,6.5C13.3,6.38 13.3,6.17 13.3,6.07C14.69,6.06 16.78,6.06 17.15,6.05V6.47C16.44,6.5 15.71,6.88 15.33,7.46L13.5,11.3C13.68,11.81 15.46,15.76 15.65,16.2L19.5,7.37C19.2,6.65 18.34,6.5 18,6.5C18,6.37 18,6.2 18,6.05L22,6.08V6.1L22,6.5C21.12,6.5 20.57,7 20.25,7.75C19.45,9.54 17,15.24 15.4,18.95C15.4,18.95 14.97,18.95 14.97,18.95Z"
                />
              </svg>
              Wiki
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withStyles(styles)(Header)
