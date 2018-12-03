import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component'

import SingleBeer from './SingleBeer'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'
import '../../styles/beers.scss'

export default class Beers extends Component {
  constructor(props) {
    super(props)

    this.state = {
      beers: [],
      hasMore: true,
    }
  }

  componentDidMount() {
    const url = 'https://api.punkapi.com/v2/beers?page=1&per_page=20'

    axios.get(url)
      .then((response) =>  {
        this.setState({
          beers: response.data
        })
      })
      .catch((error) => {
        console.log(error)
      })
  } //componentDidMount

  renderBeers() {
    const { beers } = this.state

    return beers.map((item) => (
      <Grid item xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } key={ item.id } align="center">
        <Router>
          <Link
            key={ item.id }
            to={{
              pathname: `/details/${ item.id }`,
            }}
          >
            <SingleBeer
              key={ item.id }
              item={ item }
              beers={ beers }
             />
          </Link>
        </Router>
      </Grid>
    ))
  }

  loadMoreItems = () => {
    const { beers } = this.state
    const page = Math.floor((beers.length/10)+1)
    const url=`https://api.punkapi.com/v2/beers?page=${page}&per_page=10`

    if(beers.length >= 60) {
      this.setState({ hasMore: false })
      return
    }
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({
          beers: beers.concat(data)
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  isEmpty = obj => {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }

  render() {
    const { beers, hasMore  } = this.state
    //checking if content is already, if not return loader
    if(this.isEmpty(beers)) return (
      <div className="loader">
        <CircularProgress size={150}/>
      </div>
    )

    return (
      <InfiniteScroll
        dataLength={ beers.length }
        next={ this.loadMoreItems }
        hasMore={ hasMore }
        loader={<div className="sm-loader"><CircularProgress size={ 50 }/></div>}
        endMessage={
          <p className="sm-loader">
            <b>End of content!</b>
          </p>
        }
      >
        <Grid container className="beers-container">
            { this.renderBeers() }
        </Grid>
      </InfiniteScroll>
    ) //return
  } //render
} //class

Beers.propTypes = {
  beers: PropTypes.array,
  hasMore: PropTypes.bool,
  item: PropTypes.object
}
