"use client";

import Form from "@/app/_components/(form)/form";
import Header from "@/app/_components/_headers/header";
import ExampleEncryption from "@/app/_components/example-encryption";
import Footer from "@/app/_components/footer";
import FormInput from "@/app/_components/formInput";

export default function CesarEncryption() {
  return (
    <div>
      <Header />
      <div className="container-form-page-encryption">
        <div className="page-form">
          <h1>Cesar Encryption</h1>
          <Form value="cesar" placeholdershift="example: 21" />
          <h2>Result</h2>
        </div>
        <div className="example-encryption">
          <ExampleEncryption
            name="Examples"
            value="Text: The quick brown fox jumps over the lazy dog"
            placeholdershift="Shift: 21"
          />
          <br></br>
          <ExampleEncryption
            value="Text: I Love my mom"
            placeholdershift="Shift: 14"
            />
        </div>
      </div>
      <Footer />
    </div>
  );
}
