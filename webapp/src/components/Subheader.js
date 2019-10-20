import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import { colors } from '../global'

const Subheader = ({ heading }) => {
  return (
    <div css={styles.container}>
      <h1>{heading}</h1>
    </div>
  )
}

const styles = {
  container: css({
    width: '100%',
    borderBottom: `1px solid ${colors.grey}`,
    padding: '22px 15px 10px',
    marginBottom: '15px',
    'h1': {
      margin: '0',
      fontSize: '20px'
    }
  })
}

Subheader.propTypes = {
  heading: PropTypes.string.isRequired
}

export default Subheader
