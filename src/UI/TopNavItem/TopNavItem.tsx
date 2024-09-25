import React from 'react'
import { INavItem } from '../../interfaces'
import * as classes from './TopNavItem.module.css'
import { useNavigate } from 'react-router-dom'

export const TopNavItem: React.FC<INavItem> = (props) => {
    const {
        title = 'Example title',
        link = ''
    } = props

    const nav = useNavigate();

    const handleOnClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e?.preventDefault()
        nav(link)
    }
  return (
    <div className={classes.container}>
        <a onClick={handleOnClick}>
            {title.toUpperCase()}
        </a>
    </div>
  )
}
