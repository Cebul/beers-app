import React from 'react'
import {BrowserRouter as Router, Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import '../../styles/topbar.scss'

const TopBar = () => (
  <header className="top-bar">
    <Grid container>
      <Grid item xs={12}>
        <Router>
          <Link to='/' className="logo">
            BEER<span className="app-logo">APP</span>
          </Link>
        </Router>
      </Grid>
    </Grid>
  </header>
)

export default TopBar
