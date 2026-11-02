import React from 'react'
import Navber from '../component/shear/navber/navber'

export default function Authlayout({children}) {
  return (
    <div>
      
      <Navber />
      {children}

    </div>
  )
}
