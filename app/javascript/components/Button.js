import React from 'react'

const Button = ({title = 'Button', href = '#', onClick, active = false, style = {}}) => (
  <a
    className={ 'btn btn-primary m-1 px-5 py-2' + (active ? ' active' : '') }
    href={ href }
    style={ style }
    onClick={ (e) => { onClick(); e.preventDefault() } }>
    {title}
  </a>
)

Button.defaultProps = {}

Button.propTypes = {}

export default Button
