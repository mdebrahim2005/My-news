import React from 'react'
import Navber from '../component/shear/navber/page'

export default function Authlayout({children}) {
  return (
    <div>Authlayout
      
      <Navber />
      {children}

    </div>
  )
}
