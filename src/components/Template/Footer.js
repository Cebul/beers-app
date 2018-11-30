import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import '../../styles/footer.scss'

const Footer = () => {
  return (
    <Grid container className="footer-container">
      <Grid item xs={12}>
        <Typography className="powered">Powered by Kamil Cebula</Typography>
      </Grid>
    </Grid>
  )
}

export default Footer
