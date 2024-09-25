import React from 'react'
import * as classes from './Button.module.css'

interface IProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    children?: React.ReactNode
}

export const Button: React.FC<IProps> = ({children, ...props}) => {
  return (
    <button className={classes.btn} {...props}>{children}</button>
  )
}
