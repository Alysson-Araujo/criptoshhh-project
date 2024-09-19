import Link from "next/link";
import Image from "next/image";
import './styles.css'

export default function Header() {
  return (
    <header className="main-div">
        <div >
        <section className="section-header-title">
            <Image src="/lock-icon.svg" alt="Encryption" 
            width={20}
            height={20}
            className="icon-lock"
            />
            <h1>Encryption App</h1>
        </section>

      <section className="section-header-links">
        <Link href="/vigenere-encryption">Vigenère Encryption</Link>

        <Link href="/cesar-encryption">Cesar Encryption</Link>

        <Link href="/substitution-encryption">Substitution Encryption</Link>

        <Link href="/about-encryption">About</Link>
      </section>
      </div>
    </header>
  );
}
