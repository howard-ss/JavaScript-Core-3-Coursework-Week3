let hogwarts = [
  {
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",
    pet: "Owl",
    occupation: "Student",
  },
  {
    firstName: "Ron",
    lastName: "Weasley",
    house: "Gryffindor",
    pet: "Scabbers",
    occupation: "Student",
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor",
    pet: "Cat",
    occupation: "Student",
  },
  {
    firstName: "Draco",
    lastName: "Malfoy",
    house: "Slytherin",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Cedric",
    lastName: "Diggory",
    house: "HufflePuff",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Severus",
    lastName: "Snape",
    house: "Slytherin",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Filius",
    lastName: "Flitwick",
    house: "Ravenclaw",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Pomona",
    lastName: "Sprout",
    house: "Hufflepuff",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Minerva",
    lastName: "McGonagall",
    house: "Gryffindor",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Albus",
    lastName: "Dumbledore",
    house: "Gryffindor",
    pet: "Phoenix",
    occupation: "Teacher",
  },
];

let [obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8,obj9,obj10] = hogwarts;

/**
 * write a program that will take the hogwarts array as input and display the 
 * names of the people who belong to the Gryffindor house.
 */
hogwarts.forEach(obj => {
  if(obj.house ==="Gryffindor"){
    console.log(obj.firstName + ' '+ obj.lastName)
  };
});

// console.log(obj1.firstName +' '+ obj1.lastName);
// console.log(obj2.firstName +' '+ obj2.lastName);
// console.log(obj3.firstName +' '+ obj3.lastName);
// console.log(obj9.firstName + " " + obj9.lastName);
// console.log(obj10.firstName + " " + obj10.lastName);

/**
 * write a program that will take the hogwarts array as input and display 
 * the names of teachers who have pets
 */
hogwarts.forEach (obj =>{
  if ( obj.occupation ==='Teacher' && obj.pet === 'Phoenix'){
    console.log(obj.firstName + ' '+ obj.lastName);
  };
})