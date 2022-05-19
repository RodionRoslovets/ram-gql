import { useQuery } from '@apollo/client'
import React, { FC, createContext } from 'react'
import { IMainPage } from '../../interfaces'
import { MAIN_PAGE } from '../../queries/main'
import { MainPage } from '../../utils/Character'
import { main_page, main_pageVariables } from '../../__generated__/main_page'

export const MainPageContext = createContext({} as IMainPage)

const MainPageProvider: FC = ({ children }) => {
  const { data } = useQuery<main_page, main_pageVariables>(MAIN_PAGE, {
    variables: { page: 1 },
  })

  const page = new MainPage()
  page.setCharacters(data?.characters)

  return (
    <MainPageContext.Provider value={{ characters: page.characters }}>
      {children}
    </MainPageContext.Provider>
  )
}
export default MainPageProvider
