import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BeerDetails from './BeerDetails'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import "../../styles/singlebeer.scss"

export default class SingleBeer extends Component {

  // initialize state for modal component
  state = {
    open: false
  }

  // function to toggle modal view
  handleToggle = () => {
    this.setState((prevState, props) => {
      return {
        open: !prevState.open
      }
    })
  }

  render() {

    let { item } = this.props

    return (
      <div>
        {/* single beer card */}
        <Card
          className="card"
          onClick={ this.handleToggle }
        >
          <CardActionArea className="card-action">
            <CardMedia
              image={ item.image_url }
              title="Beer Bottle"
              className="card-media"
            />
            <CardContent className="card-content">
              <Typography
                noWrap
                className="beer-name"
                variant="h5"
              >
                { item.name }
              </Typography>
              <Typography
                noWrap
                className="beer-tag"
              >
                { item.tagline }
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        {/* Modal component */}
        <BeerDetails
          open={ this.state.open }
          handleToggle={ this.handleToggle }
          item={ item }
        />
      </div>
    ) //return
  } //render
} //class

SingleBeer.propTypes = {
  open: PropTypes.bool,
  item: PropTypes.object
}
