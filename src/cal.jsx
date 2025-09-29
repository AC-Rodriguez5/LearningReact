import CalButton from './calButton.jsx'
import React, { useState } from 'react';  

function Calcu() {
    const [input, setInput] = useState("");
    const [num1, setNum1] = useState(null);
    const [operator, setOperator] = useState(null);
    const [previosInput, setPrevInput] = useState(null);
    const [justComputed, setJustComputed] = useState(false);
    const MAX_LENGTH = 12;


    // Updating display
    const UpdatingInput = (value) => {
        if (justComputed) {
            setInput(value);
            setJustComputed(false);
        } else {
            // Prevent multiple decimals
            if (value === '.' && input.includes('.')) return;

            // Stop if input exceeds max length
            if (input.length >= MAX_LENGTH) return;

            setInput(prev => prev + value);
        }
    }



    // AC handler
    const AChandler = () => {
        setInput('');
        setPrevInput(0);
        setOperator(null);
        setNum1(null);
        setJustComputed(false);
    }

    // Operator handler
    const operatorHandler = (op) => {
        let result;
        if (input === "") return;
        const currentInput = Number(input);

        if (num1 === null) {
            setNum1(currentInput);
        } else {
            switch(operator){
                case '+': result = num1 + currentInput; break;
                case '-': result = num1 - currentInput; break;
                case 'X': result = num1 * currentInput; break;
                case '÷': result = num1 / currentInput; break;
                case '%': result = num1 % currentInput; break;
                default: result = currentInput;
            }
            setNum1(result);
            setInput(result.toString()); // optional: show intermediate result
            setPrevInput(result)
            result = parseFloat(result.toPrecision(12));
            setInput(result.toString());
        }

        setOperator(op);
        setInput('');
        setJustComputed(false);
        if(result!=null){
                setPrevInput(result);
            }else{
                setPrevInput(currentInput)
            }
        
    }

    // Equals handler
    const computing = () => {
            if (input === "" || operator === null || num1 === null) return;
            const currentInput = Number(input);
            let result;

            switch(operator) {
                case '+': result = num1 + currentInput; break;
                case '-': result = num1 - currentInput; break;
                case 'X': result = num1 * currentInput; break;
                case '÷': result = num1 / currentInput; break;
                case '%': result = num1 % currentInput; break;
                default: return;
            }

            result = parseFloat(result.toPrecision(12));

            // Handle long numbers
            const formattedResult = result.toString().length > MAX_LENGTH
                ? result.toExponential(6)
                : result;

            setInput(formattedResult.toString());
            setNum1(null);
            setOperator(null);
            setPrevInput(formattedResult);
            setJustComputed(true);
        }


    // Click handler
    const clickHandler = (value) => {
        if (["X", "-", "+", "÷", "%"].includes(value)) {
            operatorHandler(value);
        } else if (value === '=') {
            computing();
        } else if (value === "AC") {
            AChandler();
        } else {
            UpdatingInput(value);
        }
    }

    return (
        <div className="Calculator">
            <p className='smallDisplay'>{previosInput}{operator}</p>

            <div className="Display">
                <p className='dis'>{input}</p>
            </div>

            <div className="FirstLayer">
                <CalButton 
                    func1="AC" 
                    func2="" 
                    func3="%" 
                    func4="÷" 
                    onClick={clickHandler}
                />
            </div>

            <div className="SecondLayer">
                <CalButton 
                    func1="7" 
                    func2="8" 
                    func3="9" 
                    func4="X"
                    onClick={clickHandler}
                />
            </div>

            <div className="ThirdLayer">
                <CalButton 
                    func1="4" 
                    func2="5" 
                    func3="6" 
                    func4="-" 
                    onClick={clickHandler}
                />
            </div>

            <div className="FourthLayer">
                <CalButton 
                    func1="1" 
                    func2="2" 
                    func3="3" 
                    func4="+" 
                    onClick={clickHandler}
                />
            </div>

            <div className="FifthLayer">
                <CalButton 
                    func1="0" 
                    func3="." 
                    func4="=" 
                    onClick={clickHandler}
                />
            </div>
        </div>
    )
}

export default Calcu;
