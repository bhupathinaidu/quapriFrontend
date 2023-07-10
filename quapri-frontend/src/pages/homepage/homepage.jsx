import React from 'react';
import "./homepage.css"
import { useSelector } from 'react-redux';
import { currentUser } from '../../store/test/test.reducer';
import TestComponent from '../../components/test-component/test.comopent';
import NavbarComponent from '../../components/navbar/navbar.component';
import HeaderComponent from '../../components/header/header.component';
import ServiceNavbarComponent from '../../components/servicesNav/servicesNav.component';


const HomePage = () => {
  const user = useSelector(currentUser);

  return (<div className="App">
    <header className="App-header">
      <NavbarComponent />
      <HeaderComponent />
      <ServiceNavbarComponent />
    </header>
  </div>)
}

export default HomePage
