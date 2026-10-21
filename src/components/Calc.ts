import { useState } from "react";

type Operation =
    | "addition"
    | "subtraction"
    | "multiplication"
    | "division"
    | "power";

export default function useCalculator() {
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [result, setResult] = useState<number | null>(null);

    function calculate(operation: Operation) {
        const a = Number(first);
        const b = Number(second);
        let answer: number;

        switch (operation) {
            case "addition":
                answer = a + b;
                break;
            case "subtraction":
                answer = a - b;
                break;
            case "multiplication":
                answer = a * b;
                break;
            case "division":
                answer = a / b;
                break;
            case "power":
                answer = 1;
                for (let i = 0; i < b; i++) {
                    answer = answer * a;
                }
                break;
        }

        setResult(answer);
    }

    function clearCalculator() {
        setFirst("");
        setSecond("");
        setResult(null);
    }

    return {first, setFirst,second,setSecond,result,calculate,clearCalculator};
}