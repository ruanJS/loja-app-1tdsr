import Link from 'next/link'
import React from 'react'

const home = () => {
  return (
    <>
      <div>
        <h1>home</h1>
      </div>
      <ul>
        <li> <Link href="/">Voltar...</Link></li>
      </ul>
    
    </>
  )
}

export default home