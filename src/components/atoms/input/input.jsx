import styled from "styled-components";

export const BaseInput = (props) => {
    const {placeholder = ""} = props;
    return (
        <div>
            <StyledInput type="text" placeholder={placeholder}></StyledInput>
        </div>
    )
}


const StyledInput = styled.input`
    padding: 12px 24px;
    border-radius: 12px;
    border: 2px solid #e0e0e0;
    outline: none;
    font-size: 15px;
    min-width: 250px;
    transition: all 0.3s ease;
    background: #fff;
    
    &:focus {
        border-color: #667eea;
        box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
    }
    
    &::placeholder {
        color: #aaa;
    }
`