import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'

import SingleBeer from './SingleBeer'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'
import '../../styles/beers.scss'

export default class Beers extends Component {
  constructor(props) {
    super(props)

    this.state = {
      beers: '',
      hasMore: true
    }
  }

  //fetching data from api
  componentDidMount() {
    const url='https://api.punkapi.com/v2/beers?page=1&per_page=20'

    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({
          beers: data
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  //mapping beers array
  renderBeers() {
    return this.state.beers.map((item) => (
      <Grid item xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } key={ item.id } align="center">
        <Router>
          <Link
            key={ item.id }
            to={{
              pathname: `/details/${ item.id }`,
              state: { modal: true }
            }}
          >
            <SingleBeer
              key={ item.id }
              item={ item }
              beers={ this.state.beers }
             />
          </Link>
        </Router>
      </Grid>
    ))
  }
  //arrow function to load more items for infinite scroll
  loadItems = () => {
    let url='https://api.punkapi.com/v2/beers?page='+Math.floor((this.state.beers.length/10)+1)+'&per_page=10'

    if(this.state.beers.length >= 80) {
      this.setState({ hasMore: false })
      return
    }
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({
          beers: this.state.beers.concat(data)
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    //checking if content is already, if not return loader
    if(!this.state.beers) return (
      <div className="loader">
        <CircularProgress size={150}/>
      </div>
    )

    return (
      <InfiniteScroll
        dataLength={this.state.beers.length}
        next={this.loadItems}
        hasMore={this.state.hasMore}
        loader={<div style={{textAlign: "center"}}><CircularProgress size={50}/></div>}
        endMessage={
          <p style={{textAlign: "center"}}>
            <b>End of content!</b>
          </p>
        }
      >
        <Grid container>
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
