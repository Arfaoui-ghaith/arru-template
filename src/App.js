import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Role from './pages/Role'
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';

function App(props) {
const user = "sarra";

  return (
    <Router>
      <Switch>
    <div class="wrapper">
		<Sidebar user={user}/>

		<div class="main">

      <Navbar />

	  <Route exact path="/" component={Dashboard}/>
    <Route exact path="/role" component={Role}/>

      <Footer />
			
		</div>
	</div>
  </Switch>
  </Router>
  );
}

export default App;
