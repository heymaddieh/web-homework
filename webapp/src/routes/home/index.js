import React from 'react'
// import { Link } from 'react-router-dom'
import Transactions from '../../components/transactions'
import Button from '../../components/Button'
import Modal from '../../components/Modal'
import { css } from '@emotion/core'

class Home extends React.Component {
  state = {
    modalOpen: true
  }

  render () {
    const { modalOpen } = this.state;
    return (
      <div css={styles.homeContainer}>
        <Button css={styles.test} onClick={() => this.setState({ modalOpen: true })}>Create Transaction</Button>
        <Transactions />
        <Modal open={modalOpen} closeModal={() => this.setState({modalOpen: false})} />
      </div>
    )
  }
}

const styles = {
  homeContainer: css({
    display: 'flex',
    flexDirection: 'column',
    padding: '15px',
  }),
  test: css({
    marginBottom: '20px',
    alignSelf: 'flex-end'
  }),
}

export default Home
