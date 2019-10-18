import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import { colors } from '../global'

const styles = {
  button: css({
    padding: '10px 20px',
    border: 'none',
    borderRadius: '3px',
    color: 'white',
  })
}

const Button = ({ color = 'green', children, onClick, disabled, css, ...elementProps }) => {
  return (
    <button
      css={[styles.button, css]}
      style={{ backgroundColor: colors[color] }}
      disabled={disabled}
      onClick={onClick}
      {...elementProps}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.string.isRequired,
  css: PropTypes.string.isRequired
}
Button.defaultProps = {
  disabled: false,
  className: ''
}

export default Button
