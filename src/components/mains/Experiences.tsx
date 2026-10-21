import styled from 'styled-components';
import hackathon from "../../assets/hackathon.png";

const StyledMain=styled.main`
    width: 80%;
    min-height: 100vh;
    box-sizing: border-box;
    background: rgb(255, 249, 214);
    padding: 30px 5%;
    display: flex\;
    flex-direction: column;
    align-items: center;
    text-align: center;
    h3 {
        margin: 0;
        color: rgb(142, 166, 107);
        font-size: 30px;
        padding: 20px 0;
    }
    .title {
        text-align: center;
        width: 100%;
    }
    .experiences {
        width: 100%;
        text-align: center;
    }
    .experiences img {
        max-width: 100%;
        width: 300px;
        height: auto;
    }
    .intern,
    .dshack {
        width: 100%;
        text-align: left;
    }
    p {
        margin: 0;
        text-align: left;
    }



    @media screen and (max-width: 1000px){
        width: 100%;
    }
`;


export default function Experiences() {
    return (
        <StyledMain>
            <h3 className="title">Experiences</h3>
            <div className="experiences">
                <img src={hackathon} alt="Picture of Me & Friend at a Hackathon!"/>
            </div>
            <div className="intern">
                <h3>Social Media Intern</h3>
                <ul>
                    <li>Manage Boston University department Instagram content, creating and scheduling posts to
                        communicate events, programs, and announcements
                    </li>
                    <li>Design digital flyers and promotional graphics using graphic design and content creation tools
                    </li>
                    <li>Create and organize multimedia content while maintaining consistent visual branding across
                        social media
                    </li>
                </ul>
            </div>
            <div className="dshack">
                <h3>DS+X Hackathon</h3>
                <ul>
                    <li>Developed a camera-based music controller that uses visual signals to control song playback and
                        audio features
                    </li>
                    <li>Implemented functionality to modify music speed and volume based on detected user input</li>
                    <li>Integrated camera input with music controls, including play and stop functionality</li>
                </ul>
            </div>
        </StyledMain>
    )
}