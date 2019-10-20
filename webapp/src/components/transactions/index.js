import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { DELETE_TRANSACTION, GET_TRANSACTIONS } from '../../utils/graphqlQueries'
import styles from './index.styles'
import Button from '../Button'
import ModalWrapper from '../ModalWrapper'

const Transactions = ({ openEditTransaction }) => {
  const { loading, error, data } = useQuery(GET_TRANSACTIONS)
  const [deleteTransaction] = useMutation(DELETE_TRANSACTION)
  const [modalOpen, setModalOpen] = useState(false)
  const [activeId, setActiveId] = useState(null)

  if (loading) return (<div>Loading</div>)
  if (error) return (<div>There has been an error</div>)

  return (
    <div css={styles.container}>
      {
        data && data.transactions.length ? data.transactions.map((txn, i) => (
          <button css={[styles.transaction, i === data.transactions.length - 1 ? styles.last : '']} key={txn.id} onClick={() => openEditTransaction(txn)}>
            <div>
              <p css={styles.desc}>{txn.description || 'Unknown'}</p>
              <p css={styles.type}>{txn.credit ? 'Credit' : 'Debit'}</p>
            </div>
            <div css={styles.rightContainer}>
              <p css={styles.amount}>${txn.amount}</p>
              <Button color='coral' onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setActiveId(txn.id)
                return setModalOpen(true)
              }}>Delete</Button>
            </div>
          </button>
        )) : (
          <div>No transactions have been found. </div>
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
            onClick={() => deleteTransaction({
              variables: {
                id: activeId
              }
            })}
          >
            Delete
          </Button>
        </div>
      </ModalWrapper>
    </div>
  )
}

Transactions.propTypes = {
  openEditTransaction: PropTypes.func.isRequired
}
Transactions.defaultProps = {}

export default Transactions
