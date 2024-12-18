import { Link } from "react-router-dom";
import styled from "styled-components";

export default function ListItem({ imagem, title, rota }) {
  return (
    <Link to={`/dashboard/${rota}`}>
      <Li>
        <img src={imagem} alt="icone" />
        <p>{title}</p>
      </Li>
    </Link>
  );
}

const Li = styled.li`
  display: flex;
  width: 100%;
  max-width: 120px;
  padding: 4px 10px;
  justify-content: space-around;
  align-items: center;
  gap: 7px;
  border-radius: 6px;
  background: #5c4033;
  color: #fff8e7;
  font-family: "Roboto Condensed";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  height:32px;
`;
