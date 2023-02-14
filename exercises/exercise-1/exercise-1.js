const personOne = {
  name: "Popeye",
  age: 34,
  favouriteFood: "Spinach",
};

//destructuring 'personOne' object with {} curly bracket,
let {name,age,favouriteFood} = personOne;

//initialize the function:
function introduceYourself() {
  console.log(
    `Hello, my name is ${name}. I am ${age} years old and my favourite food is ${favouriteFood}.`
  );
}
//invoke the function:
introduceYourself(personOne);
