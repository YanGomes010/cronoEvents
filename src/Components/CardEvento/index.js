import styled from "styled-components";
import fundo from "../../images/fundoEvento.jpg"

export default function CardEvento({id,titulo,data, image}) {
  return (
    <CardContainer id={id} key={id}>
      <ImageContainer style={{background: `url(${image || fundo}) lightgray 50% / cover no-repeat`}}></ImageContainer>
      <TextContainer>
        <article style={{ height: "43px", fontSize: "1.4em", padding: "3px" }}>
          {titulo}
        </article>
        <ButtonDateContainer>
          <article>{data}</article>
          <Button>VISUALIZAR</Button>
        </ButtonDateContainer>
      </TextContainer>
    </CardContainer>
  );
}
/*    color: #343A40;
font-family: "Roboto Condensed";
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal; */

const CardContainer = styled.div`
  width: 100%;
  max-width: 400px;
  height: 222px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  background: rgba(255, 195, 0, 0.80);
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 148px;
  border-radius: 4px 4px 0px 0px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #343a40;
  font-weight: 600;
  font-family: "Roboto Condensed";
  font-size: .7em;
  font-style: normal;
  line-height: normal;
`;

const ButtonDateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 99%;
  margin-left: 5px;
`;

const Button = styled.button`
  width: 117px;
  height: 29px;
  background-color: #007bff;
  color: #fff8e7;
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;
