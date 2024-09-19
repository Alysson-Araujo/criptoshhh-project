import Image from "next/image";
import Footer from "./_components/footer";
import Header from "./_components/_headers/header";

export default function Home() {
  return (
    
    <main className="main">
      <Header />
      <section className="section-main">
        <h1 className="">
          Welcome to the encryptShhh website!
        </h1>
        <div className="div-infos">
        <p className="">
          This website allows you to encrypt and decrypt messages using different
          methods. 
        </p>
        <p className="">
          You can use the following methods:
        </p>
        <ul className="">
          <li className="">
            Vigenère Encryption
          </li>
          <li className="">
            Cesar Encryption
          </li>
          <li className="">
            Substitution Encryption
          </li>
        </ul>
        <p className="">
          To start, click on one of the methods above.
        </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
