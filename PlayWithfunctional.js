const team = [
  {
    id: 1,
    name: "John",
    lastName: "Deo",
    email: "fff@ghs.com",
    score: 10
  },
  {
    id: 2,
    name: "John",
    lastName: "kurk",
    email: "kkk@ghs.com",
    score: 83
  },
  {
    id: 3,
    name: "Paul",
    lastName: "Constantin",
    email: "pl@constantin.com",
    score: 54
  }
];

const name = team.map((item) => ({id: item.id, name: `${item.name} ${item.lastName}`}));
const x = team.filter((item)=> item.id==1)
const totalScore = team.reduce((curr, item)=> curr +=item.score, 0)
const j = team.filter((item)=> item.id==3).map((item) => ({id: item.id, name: `${item.name} ${item.lastName}`}));
console.log(j);
