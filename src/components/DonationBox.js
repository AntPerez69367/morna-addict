import React, { useState } from "react"
import { Paper, Typography, IconButton } from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"
import { withStyles } from "@material-ui/styles"

const styles = theme => ({
  root: {
    display: "block",
  },
  header: {
    float: "right",
  },
  text: {
    padding: "15px",
    margin: "10px",
  },
  donate: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "10px",
    marginBottom: "10px",
  },
})

const DonationBox = ({ classes, setShow }) => {
  return (
      <Paper className={classes.root}>
      <div>
        <IconButton onClick={() => setShow(false)} className={classes.header}>
          <CloseIcon />
        </IconButton>

        <Typography className={classes.text} align="center">
          Thank you for using MornaAddict. If you like the work I am doing and
          wish to support the website then please consider donating to help keep
          the site ad-free. Any little bit helps.
        </Typography>

        <div className={classes.donate}>
          <form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_top"
          >
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input
              type="hidden"
              name="hosted_button_id"
              value="2FJH4CYVXSV5G"
            />
            <input
              type="image"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif"
              border="0"
              name="submit"
              title="PayPal - The safer, easier way to pay online!"
              alt="Donate with PayPal button"
            />
            <img
              alt=""
              border="0"
              src="https://www.paypal.com/en_US/i/scr/pixel.gif"
              width="1"
              height="1"
            />
          </form>
        </div>
      </div>
    </Paper>
  )
}

export default withStyles(styles)(DonationBox)
