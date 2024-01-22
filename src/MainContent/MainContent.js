import React, { Component } from 'react'
import { HeroBanner, PrimaryBanner, PriceCricket, MoreCricket, DealsCricket, CricketNation } from "./MainComponents/MainComponents";

export default class MainContent extends Component {
  render() {
    return (
      <div className='main-content'>
        Hello
        <HeroBanner />
        <PrimaryBanner />
        <PriceCricket />
        <MoreCricket />
        <DealsCricket />
        <CricketNation />
      </div>
    )
  }
}
