"use client";
import Link from "next/link";
import { useState } from "react";

export default function Cabecalho() {
    const usuario = JSON.parse(sessionStorage.getItem("obj-user"));
    const [userLogado] = useState(usuario);

  if(sessionStorage.getItem("token-user")){

    const handleLogout = () => {
      sessionStorage.removeItem("token-user");
      sessionStorage.removeItem("obj-user");
      window.location.href = "/login";
    }

  return (
    <div>
      <header className="bg-gray-800 text-white p-2">
        
        <nav className="p-linha ">
          <p>
            <Link href="/" onClick={handleLogout}>LOGOUT</Link>
          </p>
          <p>
            <Link href="/produtos/calca">CALÇA</Link>
          </p>
          <p>
            <Link href="/produtos/camisa">CAMISA</Link>
          </p>
          <p>
            <Link href="/produtos/meia">MEIA</Link>
          </p>
          <p>
            <Link href="/produtos/tenis">TÊNIS</Link>
          </p>
        </nav>
        <div>
          <p>{userLogado.nome} - {userLogado.email}</p>
        </div>
      </header>
    </div>
  );
  }else{
    return (
    <div>
      <header className="bg-gray-800 text-white p-2">
        <nav className="p-linha ">
          <p>
            <Link href="/login">LOGIN</Link>
          </p>
        </nav>
      </header>
    </div>
  );

  }
}
