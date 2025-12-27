import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molcules/user/UserIconWithName";
export const UserCard = (props) => {
  const { user } = props;
  return (
    <Card user={user}>
      <UserIconWithName image={user.image} name={user.name} />
      <StyledDl>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>電話番号</dt>
        <dd>{user.phone}</dd>
        <dt>会社</dt>
        <dd>{user.company}</dd>
        <dt>Webサイト</dt>
        <dd>{user.website}</dd>
      </StyledDl>
    </Card>
  );
};

const StyledDl = styled.dl`
  text-align: left;
  margin: 16px 0 0;
  width: 100%;

  dt {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.7);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 12px;
  }

  dd {
    font-size: 14px;
    color: #fff;
    margin: 4px 0 0;
    padding: 0;
    overflow-wrap: break-word;
  }
`;
