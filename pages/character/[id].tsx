import { GetStaticPaths, GetStaticProps } from 'next'
import React, { FC } from 'react'
import { CharacterDetail } from '../../components/CharacterDetail/CharacterDetail'
import CharacterProvider from '../../components/providers/CharacterProvider'
import { CHARACTER } from '../../queries/character'
import { initializeApollo } from '../../utils/apollo'
import { character, characterVariables } from '../../__generated__/character'

const CharacterPage: FC<{ id: string }> = ({ id }) => {
  return (
    <CharacterProvider id={id}>
      <CharacterDetail />
    </CharacterProvider>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const client = await initializeApollo()

  const { data } = await client.query<character, characterVariables>({
    query: CHARACTER,
    variables: { id: params.id as string },
  })

  return {
    props: {
      __APOLLO_STATE__: client.cache.extract(),
      id: data?.character?.id,
    },
    revalidate: +process.env.NEXT_PUBLIC_LIFETIME,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: 'blocking' }
}

export default CharacterPage
