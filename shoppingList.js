// Create an empty array for the shopping list
let shoppingList = [];

// Add items to the shopping list
shoppingList.push("Milk", "Bread", "Apples");

// Update "Bread" to "Bananas" and add "Eggs" to the list
shoppingList[1] = "Bananas";
shoppingList.push("Eggs");

// Remove the last item from the array and log it to the console
const removedItem = shoppingList.pop();
console.log(`Removed Item: ${removedItem}`);

// Sort the list alphabetically
shoppingList.sort();

// Find and log the index value of "Milk"
const milkIndex = shoppingList.indexOf("Milk");
console.log(`Index of Milk: ${milkIndex}`);

// After "Bananas", add "Carrots" and "Lettuce"
shoppingList.splice(milkIndex + 1, 0, "Carrots", "Lettuce");

// Create a new list containing "Juice" and "Pop"
const newList = ["Juice", "Pop"];

// Combine both lists, adding the new list twice to the end of the first list
shoppingList = shoppingList.concat(newList, newList);

// Get the last index value of "Pop" and log it to the console
const lastIndexPop = shoppingList.lastIndexOf("Pop");
console.log(`Last Index of Pop: ${lastIndexPop}`);

// Log the final shopping list to the console
console.log(`Final Shopping List: ${shoppingList}`);
