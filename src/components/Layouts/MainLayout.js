import React from 'react'
import { MainHeader } from './MainHeader'
import { MainSidebar } from './MainSidebar'
import { Footer } from './Footer'

export const MainLayout = ({ children }) => {
    return (
        <div>
            <MainHeader/>
            <MainSidebar/>
            {children}
            <Footer/>
        </div>
    )
}
