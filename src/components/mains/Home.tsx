import styled from "styled-components";
import LilyShi from "../../assets/LilyShi.png"
const StyledMain=styled.main`
    width: 80%;
    min-height: 100vh;
    box-sizing: border-box;
    background: rgb(255, 249, 214);
    padding: 30px 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    h3 {
        margin: 0;
        color: rgb(142, 166, 107);
        font-size: 30px;
        padding: 20px 0;
    }

    .smaller_container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    p {
        margin: 0;
        line-height: 1.5;
    }

    img {
        width: 30%;
        //height: 30%;
    }

    
`;


export default function Home() {
    return (
        <StyledMain>
            <h3>Home</h3>
            <div className="smaller_container">
                <img src={LilyShi} alt="Picture of Me!"/>
                <p> I am currently a student at Boston University studying Computer Science! I am passionate about
                    technology and enjoy building projects that allow me to apply what I learn in the classroom. I am
                    always looking for opportunities to develop my skills, explore new areas of computer science, and
                    gain experience through hands-on projects.</p>
                <br/><br/>
                <p>Today, I enjoy working on projects that allow me to be creative while
                developing my technical skills. I am interested in software development, game development, and exploring
                new technologies. I am always excited to learn something new and challenge myself with new
                projects! </p></div>
        </StyledMain>
    )
}