import React, { Profiler } from 'react';
import SidebarItem from './SidebarItem';
import { useAuthState } from './../context/auth';

export default function Sidebar(props) {

	const { user } = useAuthState();
	
	const [selectedItem, setSelectedItem]=React.useState(window.location.href.slice(22,window.location.href.length));

	console.log(user);
	if(user !== null && user !== undefined){
    return (
        <nav id="sidebar" className="sidebar">
			<div className="sidebar-content js-simplebar">
				<span className="sidebar-brand" href="index.html">
                    <span className="align-middle px-6">
                        <img className=" text-center " src="img/photos/arru.png" alt="arru" style={{ "height": "50px" }}/>
                    </span>
                </span>

				<ul className="sidebar-nav">
					<li className="sidebar-header">
						droits d'accés
					</li>
					{ user.payload.interfaces.filter((el) => el.titre === "gestion des utilisateurs").length > 0 ?  
					<SidebarItem title="Utilisateurs" icon="users" l="/Utilisateurs" selecteditem={selectedItem} setselecteditem={setSelectedItem}/>
					: ""}

					{ user.payload.interfaces.filter((el) => el.titre === "gestion des roles").length > 0 ?
					<SidebarItem title="Roles" icon="briefcase" l="/Roles" selecteditem={selectedItem} setselecteditem={setSelectedItem}/>
					: "" }

					{ user.payload.interfaces.filter((el) => el.titre === "gestion des groupes").length > 0 ?
					<SidebarItem title="Groupes" icon="book" l="/Groupes" selecteditem={selectedItem} setselecteditem={setSelectedItem} />
					: "" }

					{ user.payload.interfaces.filter((el) => el.titre === "gestion des fonctionalites").length > 0 ?
					<SidebarItem title="Interfaces" icon="layout" l="/Interfaces" selecteditem={selectedItem} setselecteditem={setSelectedItem} />
					: "" }

					<SidebarItem title="Specifications" icon="layout" l="/Specifications" selecteditem={selectedItem} setselecteditem={setSelectedItem} />

					<li className="sidebar-header">
						profile
					</li>
					<SidebarItem title="Mon profile" title2="settings" icon="user" l="/Profile" selecteditem={selectedItem} setselecteditem={setSelectedItem} />
					<SidebarItem title="deconnection" icon="log-out" l="/login" selecteditem={selectedItem} setselecteditem={setSelectedItem} />
					
				</ul>

				
			</div>
		</nav>
    ) } else {
		return(
			<React.Fragment></React.Fragment>
		);
	}
}
