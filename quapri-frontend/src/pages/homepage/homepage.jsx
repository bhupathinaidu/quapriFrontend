import React from 'react';
import "./homepage.css"
import { useSelector } from 'react-redux';
import { currentUser } from '../../store/test/test.reducer';
import TestComponent from '../../components/test-component/test.comopent';


const HomePage = () => {
  const user = useSelector(currentUser);

  return (<div className="App">
    <header className="App-header">
      <p>Welcome to Quapri from {user}</p>
      <TestComponent />
    </header>
  </div>)
}

export default HomePage
