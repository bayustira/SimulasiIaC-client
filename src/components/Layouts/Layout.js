import React from 'react'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import { Footer } from './Footer'

export const Layout = ({ children }) => {
    return (
        <div>
            <Header/>
            <Sidebar/>
            {children}
            <Footer/>
        </div>
    )
}
