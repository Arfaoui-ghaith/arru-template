import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
function App(props) {
const user = "sarra";
  return (
    <div class="wrapper">
		<Sidebar user={user}/>

		<div class="main">

      <Navbar />

	  <Dashboard />

      <Footer />
			
		</div>
	</div>
  );
}

export default App;
