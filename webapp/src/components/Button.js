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
    fontSize: '14px'
  })
}

const Button = ({ color, children, onClick, disabled, css, ...elementProps }) => {
  return (
    <button
      css={[styles.button, css]}
      disabled={disabled}
      onClick={onClick}
      style={{ backgroundColor: colors[color], opacity: disabled ? '.5' : '1' }}
      type='button'
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
  color: PropTypes.string,
  css: PropTypes.string
}
Button.defaultProps = {
  disabled: false,
  className: '',
  color: 'green',
  css: ''
}

export default Button
