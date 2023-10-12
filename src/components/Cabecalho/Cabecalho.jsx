import Link from "next/link";

export default function Cabecalho() {
  return (
    <div>
      <header>
        <nav>
          <p>
            <Link href="/produtos/camisa">CAMISA</Link>
          </p>
          <p>
            <Link href="/produtos/calca">CALÇA</Link>
          </p>
          <p>
            <Link href="/produtos/meia">MEIA</Link>
          </p>
          <p>
            <Link href="/produtos/tenis">TÊNIS</Link>
          </p>
          <p>
            <Link href="/produtos/1">Produto - 1</Link> -
            <Link href="/produtos/2">Produto - 2</Link> -
            <Link href="/produtos/3">Produto - 3</Link>
          </p>
        </nav>
      </header>
    </div>
  );
}
