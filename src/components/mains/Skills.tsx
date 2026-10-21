import styled from 'styled-components'
const StyledMain=styled.main`
    width: 80%;
    min-height: 100vh;
    box-sizing: border-box;
    background: rgb(255, 249, 214);
    padding: 10px 5%;
    display: flex;
    flex-direction: column;
    text-align: left;

    h3 {
        margin: 0;
        color: rgb(142, 166, 107);
        font-size: 30px;
        padding: 20px 0;
        text-align: left;
    }

    .title {
        text-align: center;
    }

    .skill {
        margin: 0;
        text-align: left;
    }
    
    

    @media screen and (max-width: 1000px){
        width: 100%;
    }
`;


export default function Skills() {
    return (
        <StyledMain>
            <h3 className="title">My Skills</h3>
            <div className="skill">
                <h3>Programming Languages:</h3>
                <p>Python, Java, JavaScript, SQL, C, OCaml, XML, HTML, MongoDB, CSS</p>
            </div>
            <div className="skill">
                <h3>Languages:</h3>
                <p>Chinese, English, Japanese, German</p>
            </div>
            <div className="skill">
                <h3>Creative Work:</h3>
                <p>Photoshop, Graphic Design, Content Planning, Visual Design, Game Design</p>
            </div>
            <div className="skill">
                <h3>Other:</h3>
                <p>Photoshop, Social Media Handling, Video Editing</p>
            </div>

        </StyledMain>
    )
}