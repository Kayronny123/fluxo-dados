import React from "react";
import { ContainerPostagem, Image, Description } from "./styles";

const TelaDaPostagem = (props) => {
  return (
    <ContainerPostagem>
      {/* <Image src={"https://picsum.photos/536/354"} alt={"drone view"} />
      <Description>{"Lorem Ipsum"}</Description> */}

      <Image src={props.imagem} alt={"drone view"} />
      <Description>{props.descricao}</Description>
    </ContainerPostagem>
  );
};

export default TelaDaPostagem;
