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

  state = {
    open: false
  }

  handleToggle = () => {
    this.setState((prevState, props) => {
      return {
        open: !prevState.open
      }
    })
  }

  render() {

    const { item } = this.props

    return (
      <div>
        <Card
          className="card"
          onClick={ this.handleToggle }
        >
          <CardActionArea className="card__action">
            <CardMedia
              image={ item.image_url }
              title="Beer Bottle"
              className="card__media"
            />
            <CardContent className="card__content">
              <Typography
                noWrap
                className="card__name"
                variant="h5"
              >
                { item.name }
              </Typography>
              <Typography
                noWrap
                className="card__name--tag"
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
