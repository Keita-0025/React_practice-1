import styled from "styled-components";

export const baseButton = styled.button`
    color: #fff;
    outline: none;
    border: none;
    padding: 12px 28px;
    border-radius: 12px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
    }
    
    &:active {
        transform: translateY(0);
    }
`