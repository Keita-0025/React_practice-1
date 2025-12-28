import styled from "styled-components";
import { DefaultLayout } from "../templates/DefaultLayout";

export const Home = () => {
  return (
    <DefaultLayout>
      <Container>
        <h1>Homeページです</h1>
      </Container>
    </DefaultLayout>
  );
};

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 32px 24px 80px;
`;
