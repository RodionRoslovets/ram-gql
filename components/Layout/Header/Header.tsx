import Link from 'next/link'
import React, { FC } from 'react'
import styles from './Header.module.scss'

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Link href="/">Main page</Link>
    </header>
  )
}
