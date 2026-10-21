import styled from "styled-components";
const StyledFooter=styled.main`
    box-sizing: border-box;
    background-color: rgb(216, 162, 162);
    display: flex;
    text-align: center;
`

export default function Footer(){
    return(
        <StyledFooter>
            <p>All rights reserved: <a href ="">Credits</a>&#169;</p>
        </StyledFooter>
    )
}