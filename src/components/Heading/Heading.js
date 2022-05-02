import React from 'react'
import cn from 'classnames'
import s from './Heading.module.css'

const Heading = (props) => {
    const { children, level = 1, className, black = false } = props
    const el = `h${level}`
    return React.createElement(el, {
        className: cn(s.root, className, s[`level${level}`], {
            [s.colorBlack]: black
        })
    }, children)
}

export default Heading