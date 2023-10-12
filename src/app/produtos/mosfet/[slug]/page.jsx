import React from 'react'

export default function Produto ({params}) {
  return (
    <div>
        <p>Valor do SLUG recebido : {params.slug}</p>
    </div>
  )
}
