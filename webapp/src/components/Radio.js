import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

const Radio = ({ value, onClick, label }) => {
  return (
    <label css={styles.label}>
      <input
        checked={value}
        onClick={onClick}
        type={'radio'}
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

Radio.propTypes = {
  value: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}
Radio.defaultProps = {}

export default Radio
