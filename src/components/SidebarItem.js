import React from 'react'
import { Link } from 'react-router-dom'

export default function SidebarItem({title, icon,l}) {
    return (
        //active
        <li className="sidebar-item " >
            <Link className="sidebar-link" to={l}>
            <i className="align-middle" data-feather={icon}></i> 
            <span className="align-middle">{title}</span>
            </Link>
       </li>
    )
}
