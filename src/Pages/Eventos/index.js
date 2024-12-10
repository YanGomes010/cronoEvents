import styled from "styled-components"
import CardEvento from "../../Components/CardEvento"

export default function Eventos(){

    const eventos = [
        {
          id: 1,
          data: "2024-12-15",
          titulo: "Workshop de Fotografia",
          image: "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg"
        },
        {
          id: 2,
          data: "2024-12-20",
          titulo: "Hackathon de Inovação",
          image: null
        },
        {
          id: 3,
          data: "2025-01-05",
          titulo: "Encontro de Desenvolvedores",
          image: "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg"
        },
        {
          id: 4,
          data: "2025-01-12",
          titulo: "Feira de Sustentabilidade",
          image: null
        },
        {
          id: 5,
          data: "2025-02-01",
          titulo: "Congresso de Tecnologia",
          image: "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg"
        },
        {
          id: 6,
          data: "2025-02-15",
          titulo: "Palestra sobre IA",
          image: null
        }
      ];
      
      

    return(
        <Container>
            {eventos.map((evento)=>{
                return <CardEvento key={evento.id} id={evento.id} titulo={evento.titulo} data={evento.data} image={evento.image}/>
            })}
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    width:100%;
    max-width:1500px;
    margin:50px auto;
    gap:20px;
`