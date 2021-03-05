import React, { Profiler } from 'react'
import SidebarItem from './SidebarItem';

export default function Sidebar(props) {
	const [selectedItem, setSelectedItem]=React.useState(window.location.href.slice(22,window.location.href.length));

    console.log(props.user);
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

					<SidebarItem title="Utilisateurs" icon="users" l="/Utilisateurs" selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
					<SidebarItem title="Roles" icon="briefcase" l="/Roles"  selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>

					<SidebarItem title="Groupes" icon="book" l="/Groupes"  selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
					<SidebarItem title="Interfaces" icon="layout" l="/Interfaces"  selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
					

					<li className="sidebar-header"  selectedItem={selectedItem} setSelectedItem={setSelectedItem}>
						profile
					</li>
					<SidebarItem title="Mon profile" title2="settings" icon="user" l="/Profile"  selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
					<SidebarItem title="deconnection" icon="log-out" l="/login"  selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
					
				</ul>

				
			</div>
		</nav>
    )
}
