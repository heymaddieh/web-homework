import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routes/routes'
import { ApolloProvider } from '@apollo/react-hooks'
import { client } from './utils/apollo-client'

ReactDOM.render(
  (
    <div data-app-init=''>
      <ApolloProvider client={client}>
        <AppRouter />
      </ApolloProvider>
    </div>
  ),
  document.getElementById('react-app')
)
