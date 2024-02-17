# Data Type
## Numbers: floating point numbers, used for decimals and integers

## String: sequence of characters used for text. 

## Boolean: logical type that can be only true of false, used for taking decisions

## undefined: value taken by a variable that is not yet defined ('empty value')

## Null: also means 'empty value'

## Symbol: value that is unique and cannot be changed

## BigInt: larger integers than the number type can hold

### Javascript has dynamic type: We do not have to manually define the data type of the value stored in a variable. Instead, data types are determined automatically

## To do a string literal, you must use this `Add code here` 
ie. 
const james = "I'm  " + firstName + ", a " + (year-birthYear) + " years old " + job;
console.log(james);

const jamesNew = ` I'm ${firstName}! I'm a ${year - birthYear} years old ${job}`;
console.log(jamesNew);