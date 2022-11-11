//Muista vaihtaa script
'use strict';
let kohde = document.querySelector('#kohde')
let number_list = []

for(let i = 0; true ; i++){
    let number = parseInt(prompt('Give a number you havent used'))
    if (number_list.includes(number)){
        break
    }else{
        number_list[i] = number
    }
}
kohde.innerHTML = ('Number is already given')
let sorted_list = number_list.sort(function (a, b){return a-b});
console.log(sorted_list)

