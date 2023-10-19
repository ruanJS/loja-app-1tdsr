import Image from "next/image";

export default function NotFound() {
  return (
    <div className="bg-red-400 font-extrabold font-sans m-auto w-96">
        <h1 className="text-center text-4xl">!OOPS - 404</h1>
        <p>!Not Found</p>
        <figure>
            <Image src="https://httpstatusdogs.com/img/404.jpg" alt="404" width={650} height={500}/>
        </figure>
    </div>
  )
}
