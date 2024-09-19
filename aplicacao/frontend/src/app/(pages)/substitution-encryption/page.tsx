"use client";

import Form from "@/app/_components/(form)/form";
import Header from "@/app/_components/_headers/header";
import Footer from "@/app/_components/footer";

export default function SubstitutionEncryption() {
  return (
    <div>
      <Header />
      <h1>Substitution Encryption</h1>
      <Form
        value="Substitution"
        placeholdershift="example: ZYXWVUTSRQPONMLKJIHGFEDCBA"
      />
      <Footer />
    </div>
  );
}
