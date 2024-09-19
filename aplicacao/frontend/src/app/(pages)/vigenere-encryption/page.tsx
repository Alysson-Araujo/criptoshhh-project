"use client";

import Form from "@/app/_components/(form)/form";
import Header from "@/app/_components/_headers/header";
import Footer from "@/app/_components/footer";

export default function VigenereEncryption() {
    return (
        <div>
            <Header />
            <h1>Vigenère Encryption</h1>
            <Form value="vigenere"
            placeholdershift="example: chocolate"/>
            <Footer />
        </div>
    );
}    