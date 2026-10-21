import styled from "styled-components";
import useCalculator from "../Calc.ts";

const StyledCalc=styled.main`
    button {
        padding: 12px;
        border: none;
        border-radius: 10px;
        background: rgb(216, 162, 162);
        color: white;
        font-size: 18px;
        font-weight: bold;
    }
`;

const StyledMain = styled.main`
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

    .operations {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .operation-row {
        display: flex;
        gap: 10px;
        justify-content: center;
    }

    input {
        margin: 5px;
    }

    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`;

export default function Projects() {
    const {first, setFirst, second, setSecond, calculate, clearCalculator, result} = useCalculator();
    return (
        <StyledMain>
            <StyledCalc>
                <h3>React Calculator</h3>
                <input id="first" value={first} onChange={(e) => setFirst(e.target.value)}/>
                <input id="second" value={second} onChange={(e) => setSecond(e.target.value)}/>

                <div className="operations">
                    <div className="operation-row">
                        <button onClick={() => calculate("addition")}>+</button>
                        <button onClick={() => calculate("subtraction")}>-</button>
                        <button onClick={() => calculate("multiplication")}>×</button>
                    </div>
                    <div className="operation-row">
                        <button onClick={() => calculate("division")}>÷</button>
                        <button onClick={() => calculate("power")}>**</button>
                        <button onClick={clearCalculator}>Clear</button>
                    </div>
                </div>

                <h2 id="output" style={{color: result !== null && result < 0 ? "red" : "black"}}>
                    {result !== null ? String(result) : ""}
                </h2>
            </StyledCalc>
        </StyledMain>
    );
}