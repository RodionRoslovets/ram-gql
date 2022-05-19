import { AppProps } from 'next/app'
import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../utils/apollo'
import { Layout } from '../components/Layout/Layout'

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
        <Layout>
          <Component {...pageProps} err={err} />
        </Layout>
      </ApolloProvider>
    </>
  )
}

export default App
