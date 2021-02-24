import React, { Profiler } from 'react'
import SidebarItem from './SidebarItem';

export default function Sidebar(props) {
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

					<SidebarItem title="Utilisateurs" icon="users" l="/" />
					<SidebarItem title="Roles" icon="briefcase" l="/role"/>

					<SidebarItem title="Groupes" icon="book" />
					<SidebarItem title="Interfaces" icon="layout" />
					

					<li className="sidebar-header">
						profile
					</li>
					<SidebarItem title="Mon profile" icon="user" />
					<SidebarItem title="deconnection" icon="log-out" />
					
				</ul>

				
			</div>
		</nav>
    )
}
