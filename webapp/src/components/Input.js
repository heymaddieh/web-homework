import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import Cleave from 'cleave.js/react'
import { colors } from '../global'

const Input = ({ label, value, onChange, currency, ...inputProps }) => {
  return (
    <label css={styles.label}>
      {label}
      {currency ? (
        <Cleave
          css={styles.input}
          onChange={(e) => onChange(e.target.rawValue)}
          options={{
            numeral: true,
            numeralThousandsGroupStyle: 'thousand'
          }}
          value={value}
          {...inputProps}
        />
      ) : (
        <input
          css={styles.input}
          onChange={(e) => onChange(e.target.value)}
          value={value}
          {...inputProps}
        />
      )}
    </label>
  )
}

const styles = {
  label: css({
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '15px'
  }),
  input: css({
    padding: '10px',
    borderRadius: '4px',
    border: `1px solid ${colors.grey}`,
    fontSize: '16px',
    marginTop: '4px'
  })
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  currency: PropTypes.bool
}
Input.defaultProps = {
  currency: false
}

export default Input
