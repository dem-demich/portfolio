import { useState } from 'react'
import { Button } from './UI/Button'
import { Link, Outlet } from 'react-router-dom'
import { TopNav } from './components/TopNav'
import { appTitle, topNavItemsList } from './constants'


 export const Root:React.FC = () => {

    return (
        <>
            <TopNav itemsList={topNavItemsList} title={appTitle} />
            <Outlet />
        </>
    )
}
