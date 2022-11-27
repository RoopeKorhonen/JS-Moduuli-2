'use script';

let nof_candi = parseInt(prompt('Number of candidates?'));
let candidates = [];

for (let i = 0; i < nof_candi; i++)
{
    let cand_name = prompt('Name for candidate ' + (i + 1));
    let candidate = {
        name : cand_name,
        votes : 0
    }
    candidates.push(candidate);
}

console.log(candidates)

class My_list {
  constructor(first_item, second_item, third_item) {
    this.first_item = first_item
    this.second_item = second_item
    this.third_item = third_item
      let first_list = new My_list()
