import Image from "next/image";

export default function NotFound() {
  return (
    <div className="bg-red-400 text-black font-extrabold text-center font-sans w-96 mx-auto p-8">
      <h1 className="text-4xl">OOPS - 404</h1>
      <p>Not Found</p>
      <figure>
        <Image src="https://httpstatusdogs.com/img/404.jpg" alt="404" width={650} height={500} />
      </figure>
    </div>
  );
}
