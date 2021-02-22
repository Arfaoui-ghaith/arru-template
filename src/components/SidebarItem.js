import React from 'react'

export default function SidebarItem({title, icon}) {
    return (
        <li className="sidebar-item">
            <a className="sidebar-link" href="pages-profile.html">
            <i className="align-middle" data-feather={icon}></i> 
            <span className="align-middle">{title}</span>
            </a>
       </li>
    )
}
