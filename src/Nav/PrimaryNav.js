import React from 'react';
import TxtBtnTopbar from "../MainContent/MainComponents/MisoComponents/TxtBtnTopbar";
import ImgTxtBtnTopbar from "../MainContent/MainComponents/MisoComponents/ImgTxtBtnTopbar"; 


const PrimaryNav = ({ buttons }) => {
  return (
    <nav class="navbar bg-body-tertiary">
  <div class="container">
  <a class="navbar-brand" href="#">
      <img src="/assets/logo_cricket-green.png" alt="BooCricket" width="183" height="41" class="d-inline-block align-text-top booststrap"></img>
    </a>
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
      
      </ul>
  </div>
</nav>
  );
};

export default PrimaryNav;