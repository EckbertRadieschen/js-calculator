const calculate = (numberArray, operationArray) => {

    for (let i = 0; i < operationArray.length; i++) {
        if (operationArray[i] === "*" || operationArray[i] === "/") {
            const num1 = parseFloat(numberArray[i]);
            const num2 = parseFloat(numberArray[i + 1]);
            let result = 0;

            if (operationArray[i] === "*") {
                result = num1 * num2;
            } else if (operationArray[i] === "/") {
                if (num2 === 0) {    
                    return "Math Error"
                } else {
                    result = num1 / num2;
                };
            }

            numberArray[i] = result.toString();
            numberArray.splice(i + 1, 1); 
            operationArray.splice(i, 1);  
            i--; 
        }
    }

    for (let i = 0; i < operationArray.length; i++) {
        const num1 = parseFloat(numberArray[i]);
        const num2 = parseFloat(numberArray[i + 1]);
        let result = 0;

        if (operationArray[i] === "+") {
            result = num1 + num2;
        } else if (operationArray[i] === "-") {
            result = num1 - num2;
        }

        numberArray[i] = result.toString();
        numberArray.splice(i + 1, 1); 
        operationArray.splice(i, 1);  
        i--;     }

    return numberArray[0];
};

export default calculate