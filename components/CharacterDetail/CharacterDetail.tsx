import Image from 'next/image'
import React, { FC, useContext } from 'react'
import { CharacterContext } from '../providers/CharacterProvider'

export const CharacterDetail: FC = () => {
  const { character } = useContext(CharacterContext)
  return (
    <div>
      <Image
        src={character.image}
        width={300}
        height={300}
        layout="responsive"
      />

      <p>{character.name}</p>
      <p>{character.status}</p>
      <p>{character.gender}</p>
      <p>{character.species}</p>
      <p>{character.type}</p>
      <p>{character.created}</p>

      <p>{character.location?.name}</p>
      <p>{character.location?.type}</p>
      <p>{character.location?.dimension}</p>

      <p>{character.origin?.name}</p>
      <p>{character.origin?.type}</p>
      <p>{character.origin?.dimension}</p>
    </div>
  )
}
