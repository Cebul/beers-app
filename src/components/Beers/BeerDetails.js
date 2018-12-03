import React from 'react'

import Grid from '@material-ui/core/Grid'
import Dialog from '@material-ui/core/Dialog'
import Divider from '@material-ui/core/Divider'
import Typography from "@material-ui/core/Typography"
import '../../styles/beerdetails.scss'

const BeerDetails = ({ open, handleToggle, item }) => {

  return (
    <Dialog
      open={open}
      onClose={handleToggle}
      transitionDuration={500}
      className="dialog"
    >
      <Grid container className="dialog__grid">
        <Grid item xs={12} sm={4} md={4} lg={4} className="dialog__img__container">
          <img src={item.image_url} alt={item.name} className="dialog__img" />
        </Grid>
        <Grid item xs={12} sm={8} md={8} lg={8} className="dialog__item">
          <Typography variant="h5" className="dialog__name">{item.name}</Typography>
          <Typography variant="subtitle1" className="dialog__tagline">{item.tagline}</Typography>
          <Divider className="dialog__divider" />
          <Typography className="dialog__beer__details">
            <span className="dialog__beer__details__capiton">IBU:</span> <span className="dialog__beer__details__capiton__value">{item.ibu}</span>
            <span className="dialog__beer__details__capiton">ABV:</span> <span className="dialog__beer__details__capiton__value">{item.abv}</span>
            <span className="dialog__beer__details__capiton">EBC:</span> <span className="dialog__beer__details__capiton__value">{item.ebc}</span>
          </Typography>
          <Typography variant="body1" className="dialog__beer__description">{item.description}</Typography>
          <Typography variant="subtitle1"><b>Some tips for You:</b></Typography>
          <Typography variant="body1" className="dialog__beer__description--tips">{item.brewers_tips}</Typography>
        </Grid>
      </Grid>
    </Dialog>
  )//return
}//class

export default BeerDetails
