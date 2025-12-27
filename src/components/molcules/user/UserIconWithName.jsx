import styled from "styled-components";
export const UserIconWithName = (props) => {
    const {image, name} = props;
    return (
        <StyledContainer>
            <StyledImg src={image} alt={name} />
            <StyledName>{name}</StyledName>
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const StyledImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 4px solid rgba(255, 255, 255, 0.3);
    object-fit: cover;
`

const StyledName = styled.p`
    font-size: 20px;
    font-weight: bold;
    margin: 12px 0 0;
    color: #fff;
`