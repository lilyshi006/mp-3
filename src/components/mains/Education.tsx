import styled from 'styled-components';
const StyledMain=styled.main`
    width: 80%;
    min-height: 100vh;
    box-sizing: border-box;
    background: rgb(255, 249, 214);
    padding: 30px 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    .first_p,
    .second_p,
    .third_p {
        width: 100%;
        margin-bottom: 25px;
    }

    .date {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        width: 100%;
    }

    h3 {
        margin: 0;
        color: rgb(142, 166, 107);
        font-size: 30px;
        padding: 20px 0;
    }

    p {
        margin: 5px 0;
    }


    @media screen and (max-width: 1000px){
        width: 80%;
    }
`;


export default function Education() {
    return (
        <StyledMain>
            <div className="first_p">
                <div className="date">
                    <h3>Boston University</h3>
                    <h3>2024-2028</h3>
                </div>
                <p>Bachelors of Arts in Computer Science</p>
                <p>Minor in Japanese Language</p>
            </div>
            <div className="second_p">
                <div className="date">
                    <h3>Nazareth High School</h3>
                    <h3>2021-2024</h3>
                </div>
                <p>Rank: 8/381</p>
                <p>GPA: 103%</p>
                <p>Clubs: Girls Varsity Tennis, Special Olympics, Key Club</p>
            </div>
            <div className="third_p">
                <div className="date">
                    <h3>Liberty High School</h3>
                    <h3>2020-2021</h3>
                </div>
                <p> Clubs: Orchestra </p>
            </div>
        </StyledMain>
    )
}