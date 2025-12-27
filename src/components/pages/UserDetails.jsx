import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { HeaderOnly } from "../templates/HeaderOnly";
import { UserCard } from "../organism/user/UserCard";
export const UserDetails = () => {
  const { state: user } = useLocation();
  return (
    <>
      <HeaderOnly />
      <StyledUserDetails>
        {user ? (
          <UserCard user={user} />
        ) : (
          <div>
            <p>ユーザーが見つかりません</p>
          </div>
        )}
      </StyledUserDetails>
    </>
  );
};

const StyledUserDetails = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 60px 16px 100px;
  min-height: calc(100vh - 60px);
  background: linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%);
`;
