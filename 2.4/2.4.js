//Muista vaihtaa script
'use strict';
let kohde = document.querySelector('#kohde')
let number_list = []
let number = parseInt(prompt('Give a number or stop program using 0.'))
for(let i = 0; number != 0; i++){
    number = parseInt(prompt('Give a number or stop program using 0.'))
    if(number != 0){
    number_list[i] = number
    }
}
let sorted_numbers = number_list.sort(function (a, b){return b-a});

console.log(sorted_numbers)



