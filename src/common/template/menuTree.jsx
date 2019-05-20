import React from 'react'

export default props => (
    <li className='treeview'>
        <a href>
            <i className={`fa fa-${props.icon}`}></i> <span>{props.label}</span>
            <span className="pull-right-container"><i className='fa fa-angle-right pull-right'></i></span>
        </a>
        <ul className='treeview-menu'>
            {props.children}
        </ul>
    </li>
)