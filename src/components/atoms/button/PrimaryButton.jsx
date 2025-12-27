import styled from "styled-components";
import { baseButton } from "./baseButton";
export const Primarybutton = (props) => {
    const {children} = props;
    return (
        <div>
            <StyledButton>{children}</StyledButton>
        </div>
    )
}

const StyledButton = styled(baseButton)`
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    
    &:hover {
        background: linear-gradient(135deg, #5a6fd6 0%, #6a4190 100%);
    }
`