import React from 'react'
import { Link } from 'react-router-dom'

export default function SidebarItem({title, icon,l, selecteditem,title2, setselecteditem}) {
    
    const refreshPage = (e) => {
        window.location.replace(l);
    }

    return (
        //active
        <li className={selecteditem === title || selecteditem === title2 ? "sidebar-item active" : "sidebar-item "} onClick={refreshPage}>
            <span className="sidebar-link" onClick={()=> setselecteditem(title)} >
            <i className="align-middle" data-feather={icon}></i> 
            <span className="align-middle">{title}</span>
            </span>
       </li>
    )
}
