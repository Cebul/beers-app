import React from 'react'
import {BrowserRouter as Router, Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import '../../styles/topbar.scss'

const TopBar = () => (
  <Grid container className="top-bar">
    <Grid item xs={12}>
      <Router>
        <Link to='/' className="logo">
          BEER<span className="app-logo">APP</span>
        </Link>
      </Router>
    </Grid>
  </Grid>
)

export default TopBar
