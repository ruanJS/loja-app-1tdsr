import Link from 'next/link'
import Image from 'next/image'

export default function Calça() {
    return (
      <div>
          <h1>CALÇA</h1>
          <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis deleniti suscipit laudantium perspiciatis, minus provident, laboriosam eius repudiandae incidunt itaque eum temporibus, illum tempore reprehenderit voluptate voluptates quas. Architecto, ea.</p>
              <p> <Link href="/"> voltar...</Link> </p>           
            <figure>
              <Image src="/img/calça.png" width={230} height={320} alt="calça"/>
            </figure>
          </div>
      </div>
    )
  }