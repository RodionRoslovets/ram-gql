import { AppProps } from 'next/app'
import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../utils/apollo'

function App({
  Component,
  pageProps,
  err,
}: AppProps & {
  err: Error
}): React.ReactElement {
  const apolloClient = useApollo(pageProps)

  return (
    <>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} err={err} />
      </ApolloProvider>
    </>
  )
}

export default App
