import Link from "next/link";


export default function Header() {

    return (
        <header>
        <section>
            <nav>
            <Link href="/">
                <h1>
                Home
                </h1>
            </Link>
            <Link href="/encryption-options">
                <h1>
                Encryption Options
                </h1>
            </Link>
            <Link href="/cesar-encryption">
                <h1>
                Cesar Encryption
                </h1>
            </Link>
            <Link href="/vigenere-encryption">
                <h1>
                Vigenere Encryption
                </h1>
            </Link>
            <Link href="/substitution-encryption">
            <h1>
                Substitution Encryption
            </h1>
            </Link>
            </nav>
        </section>
        </header>
    );
}