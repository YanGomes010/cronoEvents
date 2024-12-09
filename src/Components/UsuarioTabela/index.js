import lixo from "../../images/lixo.svg";
import editar from "../../images/editar.svg";
import styled from "styled-components";

export default function UsuarioTabela() {
  return (
    <ContainerTable>
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
            <td>01</td>
            <td>Yan Gomes Macêdo</td>
            <td>ADMIN</td>
            <ContainerImg>
              <img src={editar} alt="editar" />
              <img src={lixo} alt="lixo" />
            </ContainerImg>
          </Tr>
          <Tr>
            <td>01</td>
            <td>Yan Gomes Macêdo</td>
            <td>ADMIN</td>
            <ContainerImg>
              <img src={editar} alt="editar" />
              <img src={lixo} alt="lixo" />
            </ContainerImg>
          </Tr>
        </tbody>
      </Table>
    </ContainerTable>
  );
}

const Table = styled.table`
  width: 100%;
  max-width: 1238px;
  margin: auto auto;

`;
const Thead = styled.thead`
  background-color: #5c4033;
  color: #fff8e7;
  height: 25px;
`;

const Tr = styled.tr`
  width: 100%;
  text-align: center;
`;
const ContainerImg = styled.td`
  display: flex;
  gap: 5px;
  justify-content: center;
`;

const ContainerTable = styled.div`
  height: 65vh;
  width: 75%;
  max-width:1250px;
  margin:30px auto;
  display:flex;
  justify-content:center;
  overflow-y: auto;
`