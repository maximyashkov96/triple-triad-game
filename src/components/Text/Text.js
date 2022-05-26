import React from 'react'
import cn from 'classnames'
import s from './Text.module.scss'

import propTypes from 'prop-types'; 

const Text = ({element, children, className, strong, italic, disabled}) => {
    return React.createElement(element, {
        className: cn(s.root, className, {[s.strong]: strong, [s.italic]: italic, [s.disabled]: disabled})
    }, children)
}

Text.defaultProps = {
    element: 'div',
  };
  
Text.propTypes = {
    element: propTypes.oneOf(['p', 'div', 'span']),
    className: propTypes.string,
    strong: propTypes.bool,
    italic: propTypes.bool,
    disabled: propTypes.bool,
    children: propTypes.node.isRequired,
};

export default Text