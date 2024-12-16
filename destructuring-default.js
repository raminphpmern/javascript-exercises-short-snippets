//With destructuring we can set defaults, or fallback values so that if an item is not in the object (or Array, Map, or Set) it will fall back to what you have set at the default.
const userDets = { name: "Ram" };
const { name, age = 35 } = userDets;
console.log(name);
console.log(age);
