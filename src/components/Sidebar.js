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

					<SidebarItem title="Utilisateurs" icon="users" l="/Utilisateurs" selecteditem={selectedItem} setselecteditem={setSelectedItem}/>
					<SidebarItem title="Roles" icon="briefcase" l="/Roles" selecteditem={selectedItem} setselecteditem={setSelectedItem}/>

					<SidebarItem title="Groupes" icon="book" l="/Groupes" selecteditem={selectedItem} setselecteditem={setSelectedItem} />
					<SidebarItem title="Interfaces" icon="layout" l="/Interfaces" selecteditem={selectedItem} setselecteditem={setSelectedItem} />
					

					<li className="sidebar-header">
						profile
					</li>
					<SidebarItem title="Mon profile" title2="settings" icon="user" l="/Profile" selecteditem={selectedItem} setselecteditem={setSelectedItem} />
					<SidebarItem title="deconnection" icon="log-out" l="/login" selecteditem={selectedItem} setselecteditem={setSelectedItem} />
					
				</ul>

				
			</div>
		</nav>
    )
}
