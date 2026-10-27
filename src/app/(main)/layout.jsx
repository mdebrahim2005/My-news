import React from 'react'
import Navber from '../component/shear/navber/page'
import Header from '../component/shear/header/page'
import Bakingnews from '../component/shear/bakingnews/page'

export default function Mainlayout({children}) {
  return (
    <div>
      <Header/>
      <Bakingnews/>
      <Navber/>
      <main>{children}</main>
    </div>
  )
}