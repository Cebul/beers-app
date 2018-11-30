import React from 'react'

import TopBar from './TopBar'
import Beers from '../Beers/Beers'
import Footer from './Footer'
import '../../styles/beers.scss'


const Template = (props) => {
  return (
    <div className="beers-container">
      <TopBar />
      <Beers { ...props }/>
      <Footer />
    </div>
  )
}

export default Template
