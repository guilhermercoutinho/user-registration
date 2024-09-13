import {
  Button,
  Container,
  ContainerInputs,
  Form,
  Input,
  InputLabel,
  Title,
  TopBackground,
} from "./style";
import Users from "./assets/users.png";

function Home() {
  return (
    <>
      <Container>
        <TopBackground>
          <img src={Users} alt="imagem-usuarios" />
        </TopBackground>

        <Form>
          <Title>Cadastrar Usuário</Title>

          <ContainerInputs>
            <div>
              <InputLabel>
                Nome<span> *</span>
              </InputLabel>
              <Input type="text" placeholder="Nome do usuário" />
            </div>

            <div>
              <InputLabel>
                Idade<span> *</span>
              </InputLabel>
              <Input type="number" placeholder="Idade do usuário" />
            </div>
          </ContainerInputs>
          <div style={{ width: "100%" }}>
            <InputLabel>
              E-mail<span> *</span>
            </InputLabel>
            <Input type="email" placeholder="E-mail do usuário" />
          </div>

          <Button>Cadastrar Usuário</Button>
        </Form>
      </Container>
    </>
  );
}

export default Home;
