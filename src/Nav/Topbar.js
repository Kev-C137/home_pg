import React, { Component } from 'react'
import TxtBtnTopbar from "../MainContent/MainComponents/MisoComponents/TxtBtnTopbar";
import ImgTxtBtnTopbar from "../MainContent/MainComponents/MisoComponents/ImgTxtBtnTopbar"; 

export default class Topbar extends Component {
  render() {
    return (

      <nav class="navbar bg-body-tertiary">
  <div class="container">
    <ul>
      <li>
         <TxtBtnTopbar 
          text="Login"
          onClick={() => console.log("clicked")}
          />
        </li>
        <li>
         <TxtBtnTopbar 
          text="Login"
          onClick={() => console.log("clicked")}
          />
        </li>
        <li>
         <TxtBtnTopbar 
          text="Login"
          onClick={() => console.log("clicked")}
          />
        </li>
        <li>
         <TxtBtnTopbar 
          text="Login"
          onClick={() => console.log("clicked")}
          />
        </li>
        <li>
         <TxtBtnTopbar 
          text="Login"
          onClick={() => console.log("clicked")}
          />
        </li>
        <li>
         <ImgTxtBtnTopbar 
          imageUrl ="https://via.placeholder.com/50"
          text="Login"
          onClick={() => console.log("clicked")}
          />
        </li>
        <li>
         <ImgTxtBtnTopbar 
          imageUrl ="https://via.placeholder.com/50"
          text="Login"
          onClick={() => console.log("clicked")}
          />
        </li>
        <li>
         <ImgTxtBtnTopbar 
          imageUrl ="https://via.placeholder.com/50"
          text="Login"
          onClick={() => console.log("clicked")}
          />
        </li>
      </ul>
  </div>
</nav>
    )
  }
}

