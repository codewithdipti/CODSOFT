let string = "";
let buttons = document.querySelectorAll('button');
let input = document.querySelector('input');

Array.from(buttons).forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerHTML.trim(); // Trim whitespace
        
        if (buttonText === '=') {
            try {
                string = eval(string); // Consider replacing eval with a safer alternative
                input.value = string;
            } catch (error) {
                input.value = "Error";
                string = "";
            }
        } else if (buttonText === 'AC') {
            string = "";
            input.value = string;
        } else if (buttonText === 'DE') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += buttonText;
            input.value = string;
        }
    });
});