import ContainerInfo from "@/app/_components/containerInfo";
import "./style.css";
import Header from "@/app/_components/_headers/header";
import Footer from "@/app/_components/footer";

export default function AboutEncryption() {
  return (
    <section>
      <Header />
      <div className="about-encryption">
        <ContainerInfo
          title="Caesar Encryption"
          description="Caesar Encryption is a type of substitution cipher in which each letter in the plaintext is shifted a certain number of places down or up the alphabet. For example, with a shift of 1, A would be replaced by B, B would become C, and so on."
        />
        <ContainerInfo
          title="Vigenère Encryption"
          description="Vigenère encryption is a method of encrypting alphabetic text by using a simple form of polyalphabetic substitution based on multiple Caesar ciphers. The encryption key is a word or phrase that is repeated to match the length of the plaintext."
        />
        <ContainerInfo
          title="Substitution Encryption"
          description="Substitution ciphers work by replacing each letter of the plaintext with another letter or symbol. The Caesar cipher is a substitution cipher in which each letter in the plaintext is shifted a certain number of places down or up the alphabet."
        />
      </div>
      <Footer />
    </section>
  );
}
