import { IExampleEncryption } from "../_models/IExampleEncryption";

export default function ExampleEncryption(Iexampleencryption: IExampleEncryption) {
    return (
        <>
        <section>
            <h1>{Iexampleencryption.name}</h1>
            <p>{Iexampleencryption.value}</p>
            <p>{Iexampleencryption.placeholdershift}</p>
        </section>
        </>
    );
}