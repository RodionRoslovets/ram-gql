import { GetStaticProps } from 'next'
import { MainPage } from '../components/MainPage/MainPage'
import MainPageProvider from '../components/providers/MainPageProvider'
import { MAIN_PAGE } from '../queries/main'
import { initializeApollo } from '../utils/apollo'
import { main_page, main_pageVariables } from '../__generated__/main_page'
import { MainPage as CMainPage } from '../utils/Character'

const IndexPage = () => {
  return (
    <MainPageProvider>
      <MainPage />
    </MainPageProvider>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const client = await initializeApollo()
  const mainPage = new CMainPage()
  mainPage.setVariables(1)

  await client.query<main_page, main_pageVariables>({
    query: MAIN_PAGE,
    variables: mainPage.variables,
  })

  return {
    props: {
      __APOLLO_STATE__: client.cache.extract(),
    },
  }
}

export default IndexPage
