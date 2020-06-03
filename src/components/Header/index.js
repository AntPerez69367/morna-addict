import React from 'react'
import logoSVG from '../../images/logo.svg'
import { makeStyles } from '@material-ui/core/styles'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import HelpIcon from '@material-ui/icons/Help'
import ButtonBase from '@material-ui/core/ButtonBase'
import Typography from '@material-ui/core/Typography'
import calculator from '../../images/icons/calculator.svg'
import { Link } from '@reach/router'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

const useStyles = makeStyles({
  topMenu: {
    height: '150px',
    width: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    backgroundColor: '#1F2833',
    activeColor: '#f7f7f7',
  },
  logo: {
    width: '250px',
    height: '125px',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10px',
  },
  navigationBar: {
    width: '100%',
    position: 'relative',
    top: '250',
    left: '0',
    backgroundColor: '#0B0C10',
    activeColor: '#f7f7f7',
  },
  headerMenu: {
    display: 'inline-block',
    color: '#66FCF1',
    marginLeft: '10px',
    paddingLeft: '10px',
    paddingRight: '10px',
  },
  buttonText: {
    display: 'flex',
    alignItems: 'center',
    color: '#66FCF1',
    fontFamily: 'muli',
    fontSize: '18px',
  },
  link: {
    textDecoration: 'none',
  },
})

const Header = () => {
  const classes = useStyles()
  const menu = [
    {
      id: 0,
      title: 'Home',
      icon: <HomeOutlinedIcon style={{ paddingRight: '5px' }} />,
      path: '/',
    },
    {
      id: 1,
      title: 'Calculators',
      icon: (
        <img
          style={{ paddingRight: '5px' }}
          alt="calculator icon"
          src={calculator}
        />
      ),
      path: '/app/calculator',
    },
    {
      id: 2,
      title: 'Mob Search',
      icon: <HelpIcon style={{ paddingRight: '5px' }} />,
      path: '/daily',
    },
  ]
  return (
    <div className={classes.topMenu}>
      <div className={classes.logoContainer}>
        <Link className={classes.link} to={'/'}>
          <img alt="logo" className={classes.logo} src={logoSVG} />
        </Link>
      </div>

      <AppBar className={classes.navigationBar} position="static">
        <Toolbar variant="dense" disableGutters={true}>
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
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
