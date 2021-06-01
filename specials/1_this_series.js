let boromir = {
  talks() {
    console.log(this.phrase);
  },
  phrase: 'I am going to disintegrate everything',
};

boromir.talks();

const boromirTalks = boromir.talks;

boromirTalks(); //undefined

const properBoromirTalks = boromir.talks.bind(boromir);

properBoromirTalks(); //I am going to disintegrate everything

let frodo = {
  say: boromir.talks,
  phrase: 'Hey I am Frodo! Nice to meet you!',
};

frodo.say(); //Hey I am Frodo! Nice to meet you!
