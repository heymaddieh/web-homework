import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './index.styles'
import Button from '../Button'
import ModalWrapper from '../ModalWrapper'
import convertToRomanNumeral from '../../utils/convertToRomanNumeral'
import { useMutation } from '@apollo/react-hooks'
import { DELETE_TRANSACTION, GET_TRANSACTIONS } from '../../utils/graphqlQueries'

const Transactions = ({ transactions, openEditTransaction, useRomanNumerals = false }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [activeId, setActiveId] = useState(null)
  const [deleteTransaction] = useMutation(DELETE_TRANSACTION)

  return (
    <div css={styles.container}>
      {
        transactions.length ? transactions.map((txn, i) => (
          <button css={[styles.transaction, i === transactions.length - 1 ? styles.last : '']} key={txn.id} onClick={() => openEditTransaction(txn)}>
            <div>
              <p css={styles.desc}>{txn.description || 'Unknown'}</p>
              <p css={styles.type}>{txn.credit ? 'Credit' : 'Debit'}</p>
            </div>
            <div css={styles.rightContainer}>
              <p css={styles.amount}>${convertToRomanNumeral(txn.amount, useRomanNumerals)}</p>
              <Button color='coral' onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setActiveId(txn.id)
                return setModalOpen(true)
              }}>Delete</Button>
            </div>
          </button>
        )) : (
          <div style={{ margin: '15px' }}>No transactions have been found. </div>
        )
      }
      <ModalWrapper open={modalOpen}>
        <h2 css={styles.deleteHeading}>Are you sure you want to delete this transaction?</h2>
        <p css={styles.deleteDesc}>This action cannot be undone.</p>
        <div css={styles.deleteButtonContainer}>
          <Button color='grey' onClick={() => {
            setActiveId(null)
            setModalOpen(false)
          }}>Cancel</Button>
          <Button
            color='coral'
            onClick={() => {
              deleteTransaction({
                variables: {
                  id: activeId
                },
                refetchQueries: [{
                  query: GET_TRANSACTIONS
                }]
              })
              return setModalOpen(false)
            }}
          >
            Delete
          </Button>
        </div>
      </ModalWrapper>
    </div>
  )
}

Transactions.propTypes = {
  openEditTransaction: PropTypes.func.isRequired,
  useRomanNumerals: PropTypes.bool.isRequired,
  transactions: PropTypes.arrayOf(PropTypes.shape({})).isRequired
}
Transactions.defaultProps = {}

export default Transactions
