/*Muista vaihtaa script*/
'use strict';
let luvut = [];

for(let i = 0; i < 6; i++){
    luvut[i] = parseInt(prompt('Anna luku ' + ( i * 1 )))
}

for (let i = 0; i<5; i++){
    console.log(luvut[4 - i]);
}