// Get the current date
const today = new Date();

// Calculate the date 12 months from now
const futureDate = new Date(today.setMonth(today.getMonth() + 12));

// Output the future date to the webpage
document.getElementById('future-date').textContent = futureDate.toDateString();

