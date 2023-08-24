export const Calculator_Function = () => {
    const ButtonClick = document.getElementsByTagName('input') as HTMLCollectionOf<HTMLInputElement>;

    for (let i = 0; i < ButtonClick.length; i++) {
        ButtonClick[i].addEventListener('click', CalculateClick);
    }
    const DisplayInput = document.getElementById('display') as HTMLInputElement;
    const DisplayOutput = document.getElementById('subdisplay') as HTMLInputElement;
    function CalculateClick(event: Event) {
        const clickedButton = event.target as HTMLInputElement;

        switch (clickedButton.value) {
            case '00':
                DisplayInput.value === '0' ? DisplayInput.value = '0' : DisplayInput.value += '00';
                break;
            case '0':
                DisplayInput.value === '0' ? DisplayInput.value = '0' : DisplayInput.value += '0';
                break;
            case '9':
            case '8':
            case '7':
            case '6':
            case '5':
            case '4':
            case '3':
            case '2':
            case '1':
                DisplayInput.value === '0' ? DisplayInput.value = clickedButton.value : DisplayInput.value += clickedButton.value;
                break;
            case 'DEL':
                if (DisplayInput.value.length === 1) {
                    DisplayInput.value = '';
                    DisplayOutput.value = '0';
                } else {
                    DisplayInput.value = DisplayInput.value.slice(0, -1);
                }
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                DisplayInput.value += clickedButton.value;
                break;
            case 'C':
                DisplayOutput.value = '0';
                DisplayInput.value = '';
                break;
            case '=':
                try {
                    const result = eval(DisplayInput.value);
                    DisplayOutput.value = isNaN(result) || !isFinite(result) ? 'Error' : result.toString();
                } catch (error) {
                    DisplayInput.value = '';
                    DisplayOutput.value = 'Syntax Error';
                }
                break;
            default:
                DisplayOutput.value = '0';
                break;
        }
    }
}    