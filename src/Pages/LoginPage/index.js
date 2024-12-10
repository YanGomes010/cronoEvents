import { useState } from "react";
import styled from "styled-components";
import usuario from "../../images/usuario.svg";
import senha from "../../images/senha.svg";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(`usuario: ${user} com senha ${password} foi logado!`)
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <ContainerInput>
          <LabelName>Usúario</LabelName>
          <Input
            type="text"
            placeholder="Digite seu usúario..."
            value={user}
            onChange={(e) => setUser(e.target.value)}
          ></Input>
          <Image src={usuario} alt="imagem usuario"></Image>
        </ContainerInput>
        <ContainerInput>
          <LabelName>Senha</LabelName>

          <Input
            type="password"
            placeholder="Digite sua senha..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
          <Image src={senha} alt="imagem senha"></Image>
        </ContainerInput>

    <Link style={{width:"100%",textAlign:"center"}} to="/dashboard">
        <Button>Entrar</Button>
        </Link>
      </Form>
    </Container>
  );
}

const Container = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  height:75vh;
  

  `;

const Form = styled.form`
  width: 100%;
  height: 428px;
  max-width: 512px;
  background: #f8f9fa;
  box-shadow: 10px 15px 4px 0px rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: column;
  justify-content: center;
 margin:auto 20px;
 padding:1.5rem;
`;

const ContainerInput = styled.div`
  max-width: 445px;
  width: 100%;
  margin: 15px auto;
  position: relative;
`;

const Input = styled.input`
  max-width: 445px;
  width: 100%;
  height: 60px;
  flex-shrink: 0;
  text-align:center;
border-bottom: 1px solid rgba(0, 0, 0, 0.20);
background: #FFF8E7;
`;

const Image = styled.img`
position:absolute;
top:35px;
left:10px;
`

const LabelName = styled.label`
color: #343A40;
font-family: "Roboto Condensed";
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;`

const Button = styled.button`

max-width: 445px;
width:100%;
height: 60px;
flex-shrink: 0;
background: #5C4033;
margin: 20px auto;
color: #F8F9FA;
font-family: "Roboto Condensed";
font-size: 24px;
font-style: normal;
font-weight: 800;
line-height: normal;
`