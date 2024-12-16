const userDets = { name: "Ram" };
const { name, age = 35 } = userDets;
console.log(name);
console.log(age);
