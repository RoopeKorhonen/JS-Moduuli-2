/*Muista vaihtaa script*/
// Kysytään osaanottajienmäärä
'use strict';
let kohde = document.querySelector('#kohde')
let ask_participants = parseInt(prompt('Give number of participants'))
let participants = []

// Luetaan osanottajien nimet
for(let i = 0; i<ask_participants; i++){
    participants[i] = prompt('Name: ');
}

// Generoidaan html-lista osanottajien nimistä
let html = '<ol>';
for(let i = 0; i< ask_participants; i++){
    html += '<li>';
    html += participants[i];
    html += '</li>';
}
html += '</ol>';
kohde.innerHTML = html