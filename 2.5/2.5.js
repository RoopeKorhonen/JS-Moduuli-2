//Muista vaihtaa script
'use strict';
let kohde = document.querySelector('#kohde')
let number_list = []
let number_for = 1
for(let i = 0; number_for > 0 ; i++){
    let number = parseInt(prompt('Give a number you havent used'))
    if (number_list.includes(number)){
        break
    }else{
        number_list[i] = number
    }
}
kohde.innerHTML = ('Number is already given')
console.log(number_list)

