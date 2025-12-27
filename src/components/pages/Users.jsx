import styled from "styled-components";
import { SearchInput } from "../molcules/SearchInput";
import { UserCard } from "../organism/user/UserCard";
import { DefaultLayout } from "../templates/DefaultLayout";
export const Users = () => {
  const users = [...Array(10).keys()].map((key) => {
    return {
      id: key,
      image:
        "https://images.unsplash.com/photo-1766133238998-b6813eaea76f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D",
      name: `John Doe ${key}`,
      email: "john.doe@example.com",
      phone: "123-456-7890",
      company: "Example Inc.",
      website: "https://example.com",
    };
  });
  return (
    <DefaultLayout>
      <StyledPageContainer>
        <StyledSearchWrapper>
          <SearchInput />
        </StyledSearchWrapper>
        <StyledUsers>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </StyledUsers>
      </StyledPageContainer>
    </DefaultLayout>
  );
};

const StyledPageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%);
  padding-bottom: 80px;
`;

const StyledSearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 32px 16px;
`;

const StyledUsers = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
  padding: 0 40px 40px;
  max-width: 1200px;
  margin: 0 auto;
`;
