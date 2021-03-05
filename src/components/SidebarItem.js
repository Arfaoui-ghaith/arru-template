import React from 'react'
import { Link } from 'react-router-dom'

export default function SidebarItem({title, icon,l, selectedItem,title2, setSelectedItem}) {
    return (
        //active
        <li className={selectedItem === title || selectedItem === title2 ? "sidebar-item active" : "sidebar-item "}>
            <Link className="sidebar-link" to={l} onClick={()=> setSelectedItem(title)}>
            <i className="align-middle" data-feather={icon}></i> 
            <span className="align-middle">{title}</span>
            </Link>
       </li>
    )
}
