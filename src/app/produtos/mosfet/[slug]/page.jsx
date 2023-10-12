import Link from 'next/link';

export default function Produto({params}) {
  return (
    <div>
        <p>Valor do SLUG recebido : {params.slug}</p>
        <p> <Link href="/">HOME</Link></p>
    </div>
  )
}