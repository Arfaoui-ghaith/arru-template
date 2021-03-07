import ApolloProvider from './ApolloProvider';
import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
import Role from './pages/Role'
import Group from './pages/Group'
import Interface from './pages/Interface'
import Settings from './pages/Settings'
import Profile from './pages/Profile'
import Login from './pages/Login'
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import { AuthProvider } from './context/auth';

function App(props) {
 
  return (
    <ApolloProvider>
    <AuthProvider>
    <Router>
      <Switch>
        <div className="wrapper">
		    <Sidebar />
        <div className="main">
        <Navbar />

          <Route exact path="/Login" component={Login} />
          <Route exact path="/Utilisateurs" component={Dashboard}/>
          <Route exact path="/Roles" component={Role}/>
          <Route exact path="/Groupes" component={Group}/>
          <Route exact path="/Interfaces" component={Interface}/>
          <Route exact path="/Profile" component={Profile}/>
          <Route exact path="/Settings" component={Settings}/>
        
        <Footer />
        </div>
      </div>
      </Switch>
  </Router>
  </AuthProvider>
  </ApolloProvider>
  );
}

export default App;
