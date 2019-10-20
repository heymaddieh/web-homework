import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useMutation } from '@apollo/react-hooks'
import ModalWrapper from './ModalWrapper'
import Button from './Button'
import { css } from '@emotion/core'
import Input from './Input'
import RadioButton from './Radio'
import {
  CREATE_TRANSACTION,
  GET_TRANSACTIONS,
  UPDATE_TRANSACTION
} from '../utils/graphqlQueries'
import { colors } from '../global'

const CreateTransactionModal = (props) => {
  const { closeModal, activeTransaction } = props

  const initialState = {
    amount: activeTransaction ? activeTransaction.amount : 0,
    description: activeTransaction ? activeTransaction.description : '',
    debit: activeTransaction ? activeTransaction.debit : false,
    credit: activeTransaction ? activeTransaction.credit : false
  }

  const [amount, setAmount] = useState(initialState.amount)
  const [description, setDescription] = useState(initialState.description)
  const [debit, setDebit] = useState(initialState.debit)
  const [credit, setCredit] = useState(initialState.credit)

  const [createTransaction] = useMutation(CREATE_TRANSACTION)
  const [editTransaction] = useMutation(UPDATE_TRANSACTION)

  const setTransactionType = (type) => {
    if (type === 'credit') {
      setDebit(false)
      setCredit(true)
    } else {
      setCredit(false)
      setDebit(true)
    }
  }

  const submitEditedTransaction = async () => {
    await editTransaction({
      variables: {
        id: activeTransaction.id,
        amount: parseInt(amount, 10),
        description,
        debit,
        credit
      },
      refreshQueries: [{
        queries: GET_TRANSACTIONS
      }]
    })
  }

  const submitCreatedTransaction = async () => {
    await createTransaction({
      variables: {
        amount: parseInt(amount, 10),
        description,
        debit,
        credit
      },
      refreshQueries: [{
        queries: GET_TRANSACTIONS
      }]
    })
    return closeModal()
  }

  const disabled = !amount || !description || (!credit && !debit)

  return (
    <ModalWrapper {...props}>
      <h1 css={styles.header}>{activeTransaction ? 'Edit Transaction' : 'Create Transaction'}</h1>
      <Input
        currency
        label={'Amount'}
        onChange={setAmount}
        value={amount}
      />
      <Input label={'Description'} onChange={setDescription} value={description} />
      <fieldset css={styles.transactionTypeContainer}>
        <legend>Transaction Type</legend>
        <RadioButton
          label={'Debit'}
          onClick={() => setTransactionType('debit')}
          value={debit}
        />
        <RadioButton
          label={'Credit'}
          onClick={() => setTransactionType('credit')}
          value={credit}
        />
      </fieldset>
      <div css={styles.footer}>
        <Button color={'grey'} onClick={closeModal}>Cancel</Button>
        <Button
          disabled={disabled}
          onClick={activeTransaction ? submitEditedTransaction : submitCreatedTransaction}
        >
          {activeTransaction ? 'Save' : 'Submit'}
        </Button>
      </div>
    </ModalWrapper>
  )
}

const styles = {
  header: css({
    marginTop: 0,
    fontSize: '24px'
  }),
  footer: css({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'
  }),
  transactionTypeContainer: css({
    borderRadius: '4px',
    border: `1px solid ${colors.grey}`,
    marginBottom: '25px'
  })
}

CreateTransactionModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  activeTransaction: PropTypes.shape({}).isRequired
}
CreateTransactionModal.defaultProps = {}

export default CreateTransactionModal
