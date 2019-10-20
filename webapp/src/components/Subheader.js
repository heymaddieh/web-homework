import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import { colors } from '../global'

const Subheader = ({ heading, right }) => {
  return (
    <div css={styles.container}>
      <h1>{heading}</h1>
      {right}
    </div>
  )
}

const styles = {
  container: css({
    width: '100%',
    borderBottom: `1px solid ${colors.grey}`,
    padding: '22px 15px 10px',
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    'h1': {
      margin: '0',
      fontSize: '20px'
    }
  })
}

Subheader.propTypes = {
  heading: PropTypes.string.isRequired,
  right: PropTypes.node
}

Subheader.defaultProps = {
  right: null
}

export default Subheader
