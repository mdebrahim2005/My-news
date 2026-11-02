import React from 'react'
import Navber from '../component/shear/navber/navber'
import Header from '../component/shear/header/header'
import Bakingnews from '../component/shear/bakingnews/bakingnews'

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