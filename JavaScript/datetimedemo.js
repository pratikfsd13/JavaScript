let date = new Date();


console.log("Current date and time:", date.toLocaleString()); // Output: Current date and time: [current date and time]
console.log("Current date and time:", date); // Output: Current date and time: [current date and time]
console.log("Current year:", date.getFullYear()); // Output: Current year: [current year]
console.log("Current month:", date.getMonth() + 1); // Output: Current month: [current month] (Note: getMonth() returns 0-11, so we add 1)
console.log("Current day of the month:", date.getDate()); // Output: Current day of the month: [current day]
console.log("Current day of the week:",date.getDay()); // Output: Current day of the week: [current day of the week] (0-6, where 0 is Sunday)

console.log("Current hours:", date.getHours()); // Output: Current hours: [current hours]
console.log("Current minutes:", date.getMinutes()); // Output: Current minutes: [current minutes]
console.log("Current seconds:", date.getSeconds()); // Output: Current seconds: [current seconds]
console.log("Current milliseconds:", date.getMilliseconds()); // Output: Current milliseconds: [current milliseconds

let yob=1992;
console.log("Age:", date.getFullYear() - yob); // Output: Age: [calculated age based on current year and year of birth] 

