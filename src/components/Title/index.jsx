import PropTypes from "prop-types";
import { Title } from "./styles";

function MainTitle({ children }) {
  return <Title>{children}</Title>;
}

MainTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainTitle;
