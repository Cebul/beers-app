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
      <Grid container className="grid-container">
        <Grid item xs={12} sm={4} md={4} lg={4} className="img-container">
          <img src={item.image_url} alt={item.name} className="beer-img" />
        </Grid>
        <Grid item xs={12} sm={8} md={8} lg={8}>
          <Typography variant="h5" className="beer-name">{item.name}</Typography>
          <Typography variant="subtitle1" className="beer-tagline">{item.tagline}</Typography>
          <Divider className="divider" />
          <Typography className="caption-container">
            <span className="caption">IBU:</span> <span className="caption-value">{item.ibu}</span>
            <span className="caption">ABV:</span> <span className="caption-value">{item.abv}</span>
            <span className="caption">EBC:</span> <span className="caption-value">{item.ebc}</span>
          </Typography>
          <Typography variant="body1" className="beer-description">{item.description}</Typography>
          <Typography variant="subtitle1"><b>Some tips for You:</b></Typography>
          <Typography variant="body1" className="tips">{item.brewers_tips}</Typography>
        </Grid>
      </Grid>
    </Dialog>
  )//return
}//class

export default BeerDetails
