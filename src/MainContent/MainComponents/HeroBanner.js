import React, { Component } from 'react'

export default class HeroBanner extends Component {
  render() {
    return (
      <>
        <section>
          <div className="hero-banner cricket-green"> 
            <div className="banner-content">
              <h1>Try Cricket <br />for free</h1>
              <h5>Get a 14-day free trial of the Cricket Network without interrupting your current service.</h5>
              <button type="button" class="btn btn-primary btn-lg">Get the app now</button>
            </div> 
            <img src="/assets/header-NYPS2024-hero.png" alt="BooCricket" width="512" height="290" class="d-inline-block align-text-top booststrap"></img>
          </div>
        </section>
      </>
    )
  }
}
