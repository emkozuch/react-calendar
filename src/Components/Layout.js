import React from 'react'
import '../styles/Layout.scss'
import Menu from './Menu'

const Layout = (props) => {
    return (
        <div className="layout-container">

            <div className="children-container">
                {props.children}
            </div>

        </div>
    )
}

export default Layout
