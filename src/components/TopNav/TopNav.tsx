import React from 'react'
import * as classes from './TopNav.module.css'
import { INavItem } from '../../interfaces'
import { TopNavItem } from '../../UI/TopNavItem'

interface IProps {
    itemsList: INavItem[],
    title: string
}

export const TopNav: React.FC<IProps> = (props) => {
    const {
        itemsList = [],
        title = 'Title'
    } = props

    return <div className={classes.container}>
       <div className={classes.title}><h3>{title}</h3></div>
       <div className={classes.nav}>
        {itemsList.map(item => <TopNavItem {...item} key={item?.id} />)}
       </div>
       <div className={classes.right_spacer}></div>
    </div>
}
