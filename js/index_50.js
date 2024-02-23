// Date objects = Objects containing values that represent dates and times and can be formatted or changed

//          Date (year, month, day, hour, minute, second, ms)

// const currentDate = new Date();
// const customDate1 = new Date(2024, 1, 2, 3, 4, 55);
// const customDate2 = new Date("2024-02-02T12:00:00Z");
// const date0 = new Date(0); //epic date
// console.log(currentDate);
// console.log(customDate1);
// console.log(customDate2);
// console.log(date0);



// const date = new Date();
// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
// const hour = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();

// console.log(year);
// console.log(month);
// console.log(day);
// console.log(hour);
// console.log(minutes);
// console.log(seconds);



// const date = new Date();
// date.setFullYear(2025);
// date.setMonth(0);
// date.setDate(1);
// console.log(date);



const date1 = new Date("2023-12-31");
const date2 = new Date("2024-1-1");

if (date2 > date1) {
    console.log("HAPPY NEW YEAR!");
 }