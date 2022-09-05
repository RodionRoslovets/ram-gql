import { useQuery } from '@apollo/client'
import React, { FC, createContext } from 'react'
import { ICharacterDetail } from '../../interfaces'
import { CHARACTER } from '../../queries/character'
import { CharacterDetail } from '../../utils/Character'
import { character, characterVariables } from '../../__generated__/character'

interface ICharacterContext {
  character: ICharacterDetail
}

export const CharacterContext = createContext({} as ICharacterContext)

const CharacterProvider: FC<{ id: string }> = ({ id, children }) => {
  const { data } = useQuery<character, characterVariables>(CHARACTER, {
    variables: { id },
  })

  const characterData = new CharacterDetail(data)
  const character = characterData.character

  return (
    <CharacterContext.Provider value={{ character }}>
      {children}
    </CharacterContext.Provider>
  )
}
export default CharacterProvider
