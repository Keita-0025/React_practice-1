import styled from "styled-components";
export const Footer = () => {
    return (
        <StyledFooter>
            <p>&copy; 2025</p>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    text-align: center;
    padding: 16px 0;
    color: rgba(255, 255, 255, 0.7);
    position: fixed;
    bottom: 0;
    width: 100%;
    font-size: 14px;
    
    p {
        margin: 0;
    }
`

