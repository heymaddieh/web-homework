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
    padding: '15px'
  })
}

const Modal = ({ open, closeModal, children }) => {
  return open && (
    <div css={styles.modalContainer}>
      <div css={styles.modalContent}>
        <button onClick={closeModal}>Close</button>
        {children}
      </div>
    </div>
  )
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}
Modal.defaultProps = {}

export default Modal
