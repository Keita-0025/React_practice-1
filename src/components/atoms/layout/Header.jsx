import styled from "styled-components";
import { Link } from "react-router-dom";
export const Header = () => {
    return (
        <StyledHeader>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/users">Users</StyledLink>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    width: 100%;
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`

const StyledLink = styled(Link)`
    margin: 0 24px;
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    padding: 8px 16px;
    border-radius: 8px;
    transition: all 0.3s ease;
    
    &:hover {
        background: rgba(255, 255, 255, 0.1);
        transform: translateY(-2px);
    }
`
