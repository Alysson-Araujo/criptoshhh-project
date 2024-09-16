import { EncodeDecodeFormData, formSchema } from "@/schemas/encodeDecodeSchema";
import React, { useState } from "react";
import FormInput from "../formInput";
import Button from "../button";
import FormTextarea from "../formTextarea";
import Label from "../label";
import { FormProps } from "../../_models/IForm";
import './styles.css'

export default function Form(props: FormProps) {
  const [formData, setFormData] = useState<EncodeDecodeFormData>({
    text: "",
    shift: 0,
  });

  async function handleEncode() {
    console.log("Encoding", formData);
    if(props.value === "cesar") {
        // Lógica de encoding aqui
    }
    if(props.value === "vigenere") {
        // Lógica de encoding aqui
    }
    if(props.value === "substitution") {
        // Lógica de encoding aqui
    }
  }

  async function handleDecode() {
    console.log("Decoding", formData);
    if(props.value === "cesar") {
        // Lógica de decoding aqui
    }
    if(props.value === "vigenere") {
        // Lógica de decoding aqui
    }
    if(props.value === "substitution") {
        // Lógica de decoding aqui
    }
  }

  return (
    <form>
      <section className="form-container">
        <Label className="label-form" htmlFor="text" label="Text" />
        <FormTextarea
          className="form-textarea"
          placeholder="Enter text"
          onChange={(e) => setFormData({ ...formData, text: e.target.value })}
          value={formData.text}
        />
        <Label className="label-form" htmlFor="shift" label="Shift" />
        <FormInput
          type="number"
          className="form-input"
          placeholder={props.placeholdershift}
          onChange={(e) =>
            setFormData({ ...formData, shift: parseInt(e.target.value) })
          }
          value={formData.shift}
        />
      </section>

      <section className="btn-group-form">
        <Button
          type="button"
          label="Encoder"
          className="btn-form"
          onClick={() => handleEncode()}
        />
        <Button
          type="button"
          label="Decoder"
          className="btn-form"
          onClick={() => handleDecode()} 
        />
      </section>
    </form>
  );
}
