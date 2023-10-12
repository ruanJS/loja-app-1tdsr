import Link from 'next/link'
import Image from 'next/image'

export default function Tenis() {
  return (
    <div>
        <h1>TÊNIS</h1>
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis deleniti suscipit laudantium perspiciatis, minus provident, laboriosam eius repudiandae incidunt itaque eum temporibus, illum tempore reprehenderit voluptate voluptates quas. Architecto, ea.</p>
            <p> <Link href="/"> voltar...</Link> </p>
        </div>
        <figure>
          <Image src="/img/tenis.jpg" width={230} height={320} alt="tênis"/>
        </figure>
    </div>
  )
}
