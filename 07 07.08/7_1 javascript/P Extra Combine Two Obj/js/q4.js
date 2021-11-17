let companies = 
[
  { id: 1, name: "Nasa"},
  {id: 2, name: "Google"},
  {id: 3, name: "Cisco"},
  {id: 4, name: "Microsoft"}
];
let employees = 
[
  {
    id: 2,
    firstname: "s",
    lastname: "Taghadosi",
    company: 3,
  },
  {
    id: 8,
    firstname: "Mohammad",
    lastname: "Bagheri",
    company: 1,
  },
  {
    id: 2,
    firstname: "Ali",
    lastname: "Hoseini",
    company: 4,
  },
  {
    id: 5,
    firstname: "Hosein",
    lastname: "Javaheri",
    company: 2,
  },
  {
    id: 7,
    firstname: "Saeed",
    lastname: "Namjoo",
    company: 3,
  },
  {
    id: 1,
    firstname: "Saeed",
    lastname: "Namjoo",
    company: 3,
  },
  {
    id: 9,
    firstname: "Mahdi",
    lastname: "Yavari",
    company: 4,
  },
  {
    id: 3,
    firstname: "Taha",
    lastname: "Javadi",
    company: 1,
  }
]

for (const company of companies) 
{
  console.log("*** " + company.name + " ***");
  let people = employees.filter(function (el) 
  {
    return company.id === el.company;
  }).map(function (el) 
  {
    delete el.company;
    return el;
  });
  console.table(people);
}
