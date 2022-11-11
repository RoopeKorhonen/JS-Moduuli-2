let target = document.querySelector('#target')

function throwDice() {
    let diceNumber = Math.floor(Math.random() * 6) + 1;
    return diceNumber
}

let output_list = '<ul>';
while (true) {
    let numberDice = throwDice()
    output_list += '<li>';
    output_list += numberDice;
    output_list += '</li>';
    console.log(numberDice)
    if (numberDice === 6) {
        break;
    }
}
output_list += '</ul>';
target.innerHTML = output_list