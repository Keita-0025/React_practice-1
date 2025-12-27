import styled from "styled-components";
import { Primarybutton } from "../atoms/button/Primarybutton";
import { BaseInput } from "../atoms/input/input";
export const SearchInput = () => {
  return (
    <div>
      <StyledContainer>
        <BaseInput placeholder="検索条件を入力" />
        <Primarybutton>検索</Primarybutton>
      </StyledContainer>
    </div>
  );
};

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
