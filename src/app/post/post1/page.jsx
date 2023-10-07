import React from 'react'
import Link from "next/link";
import Image from "next/image";

export default function Post2(){

    return(
        <div>
            <h1>POST-2</h1>
            <div>
                <figure>
                    <Image src="/img/lionel.png" alt="Messi"/>
                    <p> <Link href="/post"> voltar...</Link> </p>
                </figure>
            </div>
        </div>
    )
}
