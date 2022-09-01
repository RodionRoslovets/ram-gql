import { useQuery } from '@apollo/client'
import React, { FC, createContext } from 'react'
import { IMainPage } from '../../interfaces'
import { MAIN_PAGE } from '../../queries/main'
import { MainPage } from '../../utils/Character'
import { main_page, main_pageVariables } from '../../__generated__/main_page'

export const MainPageContext = createContext({} as IMainPage)

const MainPageProvider: FC = ({ children }) => {
  const mainPage = new MainPage(1)

  const { data } = useQuery<main_page, main_pageVariables>(MAIN_PAGE, {
    variables: mainPage.variables,
  })

  mainPage.setCharacters(data?.characters)

  return (
    <MainPageContext.Provider value={{ characters: mainPage.characters }}>
      {children}
    </MainPageContext.Provider>
  )
}
export default MainPageProvider
