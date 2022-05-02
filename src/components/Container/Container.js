// import propTypes from 'prop-types' : библиотека проверки типов для props

import s from './Container.module.css'
import cn from 'classnames'

const Container = ({children, className}) => {
    return (
        <div className={cn(s.root, className)}>
            {children}
        </div>
    )
}


export default Container