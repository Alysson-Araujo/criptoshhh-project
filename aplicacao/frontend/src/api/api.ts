"use server";

import { EncodeDecodeFormData } from "@/schemas/encodeDecodeSchema";

export async function encode(data: EncodeDecodeFormData) {
console.log(`${JSON.stringify(data)}`);

}