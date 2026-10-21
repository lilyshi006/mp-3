import styled from "styled-components";
import dog from "../../assets/dog.png";

const StyledMain=styled.main`
    width: 80%;
    min-height: 100vh;
    box-sizing: border-box;
    background: rgb(255, 249, 214);
    padding: 30px 5%;
    display: flex\;
    flex-direction: column;


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

    .contact_container {
        text-align: left;
    }

    .contact-photo img {
        width: 250px;
        height: auto;
        border-radius: 10px;
        text-align: left;
    }
    
    .contact-photo {
        text-align: left;
    }
}
    
    @media screen and (max-width: 1000px){
        width: 100%;
    
    
`;

export default function Contact() {
    return (
        <StyledMain>
            <h3 className="title">Contact Information</h3>
            <div className="contact_container">
                <div className="phone">
                    <h3> Phone Number </h3>
                    <p>(646)-708 0384</p>
                </div>
                <div className="email">
                    <h3> Email</h3>
                    <p> lilyshi06@gmail.com </p>
                </div>
                <div className="linkedin">
                    <h3> LinkedIn</h3>
                    <p>lily-shi-2a2a922a4</p>
                </div>
                <div className="github">
                    <h3> Github</h3>
                    <p>lilyshi006</p>
                </div>
            </div>
            <div className="contact-photo">
                <img src={dog} alt="Photo of My and My Dog"/>
            </div>
        </StyledMain>
    )
}