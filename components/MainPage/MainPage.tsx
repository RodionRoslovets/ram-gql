import Image from 'next/image'
import Link from 'next/link'
import React, { FC, useContext } from 'react'
import { MainPageContext } from '../providers/MainPageProvider'

export const MainPage: FC = () => {
  const { characters } = useContext(MainPageContext)

  return (
    <div>
      <ul>
        {characters?.map((char) => (
          <li key={char.id}>
            <Link href={`/character/${char.id}`} passHref>
              <a>
                <figure>
                  <Image
                    src={char.image}
                    width={100}
                    height={100}
                    objectFit="contain"
                  />
                </figure>
                <span>{char.name}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
