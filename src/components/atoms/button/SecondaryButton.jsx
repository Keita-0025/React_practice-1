import styled from "styled-components";
import { baseButton } from "./baseButton";
export const SecondaryButton = (props) => {
    const {children} = props;
    return (
        <div>
            <StyledButton>{children}</StyledButton>
        </div>
    )
}

const StyledButton = styled(baseButton)`
    background: linear-gradient(135deg, #6c757d 0%, #495057 100%);
    
    &:hover {
        background: linear-gradient(135deg, #5a6268 0%, #3d4349 100%);
    }
`