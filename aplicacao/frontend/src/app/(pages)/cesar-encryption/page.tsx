"use client";

import Form from "@/app/_components/(form)/form";
import Header from "@/app/_components/_headers/header";
import Footer from "@/app/_components/footer";

export default function CesarEncryption() {
    return (
        <div>
            <Header />
            <h1>Cesar Encryption</h1>
            <Form value="cesar"
            placeholdershift="example: 21"/>
            <Footer />
        </div>
    );
}    