import Image from "next/image";
import { redirect } from "next/navigation";


export default async function CorDaCamisa({ params }) {
  let camisa;

  try {
    const response = await fetch(
      `http://localhost:3000/api/vestuario/camisa/${params.modelo}`
    );
    camisa = await response.json();
  } catch (error) {
    console.log(error);
    redirect("/error");
  }

  return (
    <div>
      <h1>CAMISA</h1>
      <div>
        <figure>
          <Image src={camisa.img} alt={camisa.cor} width={200} height={200} />
          <figcaption>{camisa.modelo}</figcaption>
        </figure>
      </div>
    </div>
  );
}

// {
//   modeloCamisa.map((modelo)=>(

//     (params.modelo == modelo.modelo ?
//     <li key={modelo.id}>
//       <Link href={`/produtos/camisa/dados/${modelo.modelo}`}>
//         <figure>
//           <Image src={modelo.img} alt={modelo.cor} width={200} height={200} />
//           <figcaption>{modelo.modelo}</figcaption>
//         </figure>
//       </Link>
//     </li> : "")

//   ))
// }
