// Create an object named people with an empty array called friends
const people = { friends: [] };

// Create friend objects with first name, last name, and ID
const friend1 = { firstName: "Abdi", lastName: "Derese", id: 1 };
const friend2 = { firstName: "Hermela", lastName: "Tsegay", id: 2 };
const friend3 = { firstName: "Binyam", lastName: "G", id: 3 };

// Add the friend objects to the friends array
people.friends.push(friend1, friend2, friend3);

// Output the people object to the console
console.log(people);
