'use client';

import { IContainerInfoProps } from "../_models/IContainerInfo";
import Button from "./button";

export default function ContainerInfo(props: IContainerInfoProps) {

  function handleClick() {
    
    if(props.title === "Caesar Encryption") {
      window.location.href = "https://www.geeksforgeeks.org/caesar-cipher-in-cryptography/";
    } else if(props.title === "https://www.geeksforgeeks.org/vigenere-cipher/") {
      window.location.href = "https://www.geeksforgeeks.org/vigenere-cipher/";
    }
    else if(props.title === "Substitution Encryption") {
      window.location.href = "https://www.geeksforgeeks.org/substitution-cipher/";
    }

  }

  return (
    <section className="container-about-encryption">
      <h1 className="title-about-encryption">{props.title}</h1>
      <p className="text-about-encryption">{props.description}</p>
      <Button label="Learn More" className="button-about-encryption" onClick={handleClick} />
    </section>
  );
}
