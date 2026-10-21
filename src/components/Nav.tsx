import {Link} from "react-router";
import styled from "styled-components";

const StyledNav=styled.nav`
    width: 20%;
    background-color: rgb(255, 220, 220);
    @media screen and (max-width: 1000px){
        width: 100%;
    }
`;

const StyledList=styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 0;
    list-style: none;
    
    @media screen and (max-width: 1000px){
        flex-direction: row;
    }
`;

const StyledListItem=styled.li`
    width: 70%;
    background-color: rgb(142, 166, 107);
    margin: 12% auto;
    padding: 0.5% 1%;
    border: rgb(142, 166, 107) 5px solid;
    text-align: center;
    
    @media screen and (max-width: 1000px){
        width: 15%;
        margin: 1%;
        padding: 1%;
    }
    
`;

const StyledLink=styled(Link)`
    font:normal small-caps bold calc(2px + 2vw) "Times New Roman", Helvetica, "Helvetica Neue", sans-serif;
    color: beige;
    text-decoration: none;
    
    @media screen and (max-width: 1000px){
        font-size: calc(2px + 1vw);
    }
`;


export default function Nav(){
    return(
        <StyledNav>
            <StyledList>
                <StyledListItem>
                    <StyledLink to="/">Home</StyledLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledLink to="/projects/projects.html">Projects</StyledLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledLink to="/education/education.html">Education</StyledLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledLink to="/skills/skills.html">Skills</StyledLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledLink to="/contact/contact.html">Contact</StyledLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledLink to="/experiences/experiences.html">Experiences</StyledLink>
                </StyledListItem>
            </StyledList>
        </StyledNav>
    );
}