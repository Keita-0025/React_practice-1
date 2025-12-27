import styled from "styled-components";
import { useNavigate } from "react-router-dom";
export const Card = (props) => {
  const { children, user } = props;
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/details", { state: user });
  };
  return <StyledCard onClick={onClick}>{children}</StyledCard>;
};

const StyledCard = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(102, 126, 234, 0.4);
  }
`;
