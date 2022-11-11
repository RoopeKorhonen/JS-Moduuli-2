let nbr = 1;
let candidates = [];
let candidate_name = '';
let candidate_voted = '';

nbr_of_candidates = parseInt(prompt('How many candidates are there?'));

while (nbr <= nbr_of_candidates) {
  if (nbr % 10 === 1 && nbr !== 11) {
    suffix = 'st';
  } else if (nbr % 10 === 2 && nbr !== 12) {
    suffix = 'nd';
  } else if (nbr % 10 === 3 && nbr !== 13) {
    suffix = 'rd';
  } else {
    suffix = 'th';
  }

  candidate_name = prompt(
      'Enter the name of the ' + nbr + suffix + ' candidate');

  let candidate = {
    name: candidate_name, votes: 0,
  };

  candidates.push(candidate);
  nbr++;
}

nbr = 1;

nbr_of_voters = parseInt(prompt('How many voters are there?'));

while (nbr <= nbr_of_voters) {
  if (nbr % 10 === 1 && nbr !== 11) {
    suffix = 'st';
  } else if (nbr % 10 === 2 && nbr !== 12) {
    suffix = 'nd';
  } else if (nbr % 10 === 3 && nbr !== 13) {
    suffix = 'rd';
  } else {
    suffix = 'th';
  }

  candidate_voted = prompt('Who will the ' + nbr + suffix + ' voter vote?');

  for (let i of candidates) {
    if (i.name === candidate_voted) {
      i.votes = i.votes + 1;
    }
  }
  nbr++;
}

candidates.sort(({votes: a}, {votes: b}) => b - a);

let winner_score = Math.max(...candidates.map(i => i.votes));
let winner = candidates.find((p) => p.votes === winner_score);

console.log(
    'The winner is ' + winner.name + ' with ' + winner_score + ' votes!');

console.log('Results:');
for (let i = 0; i < candidates.length; i++) {
  console.log(candidates[i].name + ': ' + candidates[i].votes);
}