import { IContainerInfoProps } from "../_models/IContainerInfo";
import Button from "./button";

export default function ContainerInfo(props: IContainerInfoProps) {
  return (
    <section>
      <h1>{props.title}</h1>
      <br />
      <p>{props.description}</p>
      <Button label="Learn More" variant="primary" onClick={props.onClick} />
    </section>
  );
}
