import { IContainerInfoProps } from "../_models/IContainerInfo";
import Button from "./button";

export default function ContainerInfo(props: IContainerInfoProps) {
  return (
    <section className="container-about-encryption">
      <h1 className="title-about-encryption">{props.title}</h1>
      <p className="text-about-encryption">{props.description}</p>
      <Button label="Learn More" className="button-about-encryption" onClick={props.onClick} />
    </section>
  );
}
