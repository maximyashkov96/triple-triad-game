import React from 'react'
import cn from 'classnames'
import s from './Heading.module.scss'

import propTypes from 'prop-types'

const Heading = (props) => {
    const { children, level, className, underline, black } = props
    const el = `h${level}`
    return React.createElement(el, {
        className: cn(
            s.root, 
            className, 
            s[`level${level}`], {
            [s.underline]: underline,
            [s.colorBlack]: black
        })
    }, children)
}

Heading.defaultProps = {
    level: 1,
    black: false
}

Heading.propTypes = {
    level: propTypes.oneOf([1, 2, 3, 4, 5]),
    black: propTypes.bool,
    className: propTypes.string,
    underline: propTypes.bool,
    children: propTypes.node

}

export default Heading

