import ApolloProvider from './ApolloProvider';
import React from 'react'
import Sidebar from './droit-acce/components/Sidebar'
import Navbar from './droit-acce/components/Navbar'
import Footer from './droit-acce/components/Footer'
import Dashboard from './droit-acce/pages/Dashboard'
import Role from './droit-acce/pages/Role'
import Group from './droit-acce/pages/Group'
import Interface from './droit-acce/pages/Interface'
import Specification from './droit-acce/pages/Specification'
import Settings from './droit-acce/pages/Settings'
import Profile from './droit-acce/pages/Profile'
import Login from './droit-acce/pages/Login'
import Quartiers from './identification/pages/Quartiers'
import Projets from './identification/pages/Projets'
import E404 from './identification/pages/E404'
import Criteres from './identification/pages/Criteres'
import Zone from './identification/pages/Zone'
import Elig from './identification/pages/Eligible'
import {BrowserRouter as Router, Switch } from 'react-router-dom';
import { AuthProvider } from './context/auth';
import DynamicRoutes from './utils/DynamicRoutes';
import './App.css'



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
            <DynamicRoutes exact path="/Utilisateurs" component={Dashboard} authenticated interface="gestion des utilisateurs"/>
            <DynamicRoutes exact path="/Roles" component={Role} authenticated interface="gestion des roles"/>
            <DynamicRoutes exact path="/Groupes" component={Group} authenticated interface="gestion des groupes"/>
            <DynamicRoutes exact path="/Interfaces" component={Interface} authenticated interface="gestion des interfaces"/>
            <DynamicRoutes exact path="/Specifications" component={Specification} authenticated interface="gestion des groupes" />
            <DynamicRoutes exact path="/Profile" component={Profile} authenticated />
            <DynamicRoutes exact path="/Settings" component={Settings} authenticated />
            <DynamicRoutes exact path="/Quartiers" component={Quartiers} guest />
            <DynamicRoutes exact path="/Projets" component={Projets} guest />
            <DynamicRoutes exact path="/Eligible" component={Elig} guest />
            <DynamicRoutes exact path="/Critéres d'éligibilité" component={Criteres} guest />
            <DynamicRoutes exact path="/Zone d'intervention" component={Zone} guest />
            <DynamicRoutes exact path="/E404" component={E404} guest />
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
