import { Background } from "./styles";
import Users from "../../assets/users.png";

function TopBackground() {
  return (
    <Background>
      <img src={Users} alt="imagem-usuarios" />
    </Background>
  );
}

export default TopBackground;
