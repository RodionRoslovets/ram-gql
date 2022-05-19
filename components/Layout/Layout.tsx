import React, { FC } from 'react'
import { Header } from './Header/Header'

export const Layout: FC = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  )
}
