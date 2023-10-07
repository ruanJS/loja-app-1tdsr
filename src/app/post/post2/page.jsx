import Image from "next/image";
import Link from "next/link";

export default function Post2(){
    return(
        <div>
            <h1>POST-1</h1>
            <div>
                <figure>
                    <Image src="/img/messi.png" width={230} height={320} alt="Messi"/>
                    <p> <Link href="/post"> voltar...</Link> </p>
                </figure>
            </div>
        </div>
    )
}

