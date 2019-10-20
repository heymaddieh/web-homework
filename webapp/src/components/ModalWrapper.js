import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

const styles = {
  modalContainer: css({
    position: 'fixed',
    zIndex: '1',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    overflow: 'auto',
    backgroundColor: 'rgba(0,0,0,0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }),
  modalContent: css({
    backgroundColor: '#ffffff',
    borderRadius: '5px',
    width: '65%',
    padding: '15px',
    display: 'flex',
    flexDirection: 'column'
  })
}

const ModalWrapper = ({ open, children }) => {
  return open && (
    <div css={styles.modalContainer}>
      <div css={styles.modalContent}>
        {children}
      </div>
    </div>
  )
}

ModalWrapper.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
}
ModalWrapper.defaultProps = {}

export default ModalWrapper
