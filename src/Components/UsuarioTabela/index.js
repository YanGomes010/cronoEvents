import lixo from "../../images/lixo.svg";
import editar from "../../images/editar.svg";
import styled from "styled-components";

export default function UsuarioTabela() {
  return (
    <div>
      <Table>
        <Thead>
          <tr>
            <th>ID</th>
            <th>USÚARIO</th>
            <th>CARGO</th>
            <th>AÇÃO</th>
          </tr>
        </Thead>
        <tbody>
          <Tr>
            <td>01</td>
            <td>Yan Gomes Macêdo</td>
            <td>ADMIN</td>
            <ContainerImg>
              <img src={editar} alt="editar" />
              <img src={lixo} alt="lixo" />
            </ContainerImg>
          </Tr>
          <Tr>
            <td>02</td>
            <td>Nome de alguém fulano beltrano</td>
            <td>USÚARIO</td>
            <ContainerImg>
              <img src={editar} alt="editar" />
              <img src={lixo} alt="lixo" />
            </ContainerImg>
          </Tr>
          <Tr>
            <td>03</td>
            <td>Fulano beltrano da alameda</td>
            <td>USÚARIO</td>
            <ContainerImg>
              <img src={editar} alt="editar" />
              <img src={lixo} alt="lixo" />
            </ContainerImg>
          </Tr>
          <Tr>
            <td>03</td>
            <td>Fulano beltrano da alameda</td>
            <td>USÚARIO</td>
            <ContainerImg>
              <img src={editar} alt="editar" />
              <img src={lixo} alt="lixo" />
            </ContainerImg>
          </Tr>
        </tbody>
      </Table>
    </div>
  );
}

const Table = styled.table`
    width:100%;
    max-width:1238px;
    margin:0 auto;
`
const Thead = styled.thead`
    background-color:#5C4033;
    color:#FFF8E7;
    height:25px;
`

const Tr = styled.tr`
    width:100%;
    text-align:center;
`
const ContainerImg = styled.td`
    display:flex;
    gap:5px;
    justify-content:center;
`