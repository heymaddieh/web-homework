import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

const Checkbox = ({ value, onClick, label }) => {
  return (
    <label css={styles.label}>
      <input
        checked={value}
        onChange={onClick}
        type={'checkbox'}
        value={value}
      />
      {label}
    </label>
  )
}

const styles = {
  label: css({
    display: 'flex',
    alignItems: 'center'
  })
}

Checkbox.propTypes = {
  value: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}
Checkbox.defaultProps = {}

export default Checkbox
