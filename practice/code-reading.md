# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1()
3    {
4        let x = 2;
5        console.log(x);
6    }
7    console.log(x);
```

Explain why line 4 and line 6 output different numbers.
In line 4, the output will be 2 because the variable x scope in the function and it re-assigned to 2 , so the output is 2;
In line 6, the output will be 1 because it accesses global scope of x which's assigned as 1 ;

## Question 2

Take a look at the following code:

```
let x = 10

function f1()
{
    console.log(x)
    let y = 20
}

console.log(f1())
console.log(y)
```

What will be the output of this code. Explain your answer in 50 words or less.
The output will be:
10
undefined
This is because f1 logs the value of x, which is in the global scope and has a value of 10. 
y is declared inside f1 with let, so it has block scope and is not accessible outside of f1, hence logging y outside of f1 results in undefined.

## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.

The output will be:
9
{x:10}

This is because x is a primitive value (number) and when passed to f1, it is passed by value, so the value of x is not changed. 
On the other hand, y is an object, and when passed to f2, it is passed by reference, so the object is modified and the value of y.x is incremented to 10.