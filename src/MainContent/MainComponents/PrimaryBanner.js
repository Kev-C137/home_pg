import React, { Component } from 'react'
import PrimaryBannerSlider from "./PrimaryBannerSlider";
import RtbContainer from "./RtbContainer";

export default class PrimaryBanner extends Component {
  render() {
    return (
      <div>
          <PrimaryBannerSlider />
          <RtbContainer />
      </div>
    );
  }
}
