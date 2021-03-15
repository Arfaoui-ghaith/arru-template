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
import {BrowserRouter as Router, Switch } from 'react-router-dom';
import { AuthProvider } from './context/auth';
import DynamicRoutes from './utils/DynamicRoutes';



function App() {
 
  return (
    <ApolloProvider>
    <AuthProvider>
    <Router>
      
        <div className="wrapper">
          <Sidebar />
          <div className="main">
          <Navbar />
          <Switch>
            <DynamicRoutes exact path="/Login" component={Login} guest />
            <DynamicRoutes exact path="/Utilisateurs" component={Dashboard} authenticated />
            <DynamicRoutes exact path="/Roles" component={Role} authenticated />
            <DynamicRoutes exact path="/Groupes" component={Group} authenticated />
            <DynamicRoutes exact path="/Interfaces" component={Interface} authenticated />
            <DynamicRoutes exact path="/Profile" component={Profile} authenticated />
            <DynamicRoutes exact path="/Settings" component={Settings} authenticated />
          </Switch>
          <Footer />
          </div>
        </div>
      
    </Router>
    </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
