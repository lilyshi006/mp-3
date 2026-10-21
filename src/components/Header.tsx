import styled from "styled-components";

const StyledHeader = styled.header`
    width: 100%;
    background: rgb(216, 162, 162);
    text-align: left;
    color: beige;
    padding: 17px 25px;
    box-sizing: border-box;

    h1 {
        margin: 0;
        color: beige;
        font-size: 30px;
    }

    h6 {
        margin: 2px 0 0;
        font-size: 12px;
    }
`

export default function Header(){
    return(
        <StyledHeader>
            <h1>Lily Shi</h1>
            <h6>My Online Resume</h6>
        </StyledHeader>
    )
}