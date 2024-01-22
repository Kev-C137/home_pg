import React from 'react';
import Topbar from './Topbar';
import PrimaryNav from './PrimaryNav';

// Define the main_nav component
const MainNav = () => {
  return (
    <div>
      <Topbar />
      <PrimaryNav />
      {/* Other content for the main navigation */}
    </div>
  );
}

export default MainNav;