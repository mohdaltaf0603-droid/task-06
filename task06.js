let employees = [
  {name:"john", salary:200000},
  {name:"rahul", salary:500000},
  {name:"siva", salary:700000}
];

employees
  .filter(emp => emp.salary > 300000)
  .map(emp => console.log(`Congrats ${emp.name}`));

  // 2. Shopping Cart Total

  let cart = [1200, 3400, 500, 999];

let total = cart.reduce((sum, item) => sum + item, 0);

console.log(total);

// 3. Login Username Formatter

let user = "Altaf";

let result = user.slice(0,1).toUpperCase() + user.slice(1);

console.log(result);

// 4. OTP Checker

let otp = "560890";

console.log(otp.includes("0") ? "Valid OTP" : "Invalid OTP");

// 5. Food Delivery App

let orders = ["biryani","mandi"];

orders.push("shawarma");
orders.pop();

console.log(orders);

// 6. Attendance Checker

let marks = [40,50,70,80];

let result = marks.every(mark => mark >= 35);

console.log(result);

// 7. Find VIP Customer

let customer = [
  {name:"altaf", purchase:5000},
  {name:"suresh", purchase:15000},
  {name:"vikram", purchase:25000}
];

let vip = customer.find(c => c.purchase > 10000);

console.log(vip.name);

// 8. Reverse Chat Message

let msg = "hello";

let reversed = msg.split("").reverse().join("");

console.log(reversed);

// 9. Remove Duplicate Product

let products = ["tv","laptop","mobile","watch"];

console.log(products.indexOf("mobile"));

// 10. Student Rank Sort

 let marks = [99,45,12,67,89];

marks.sort((a,b) => a-b);

console.log(marks);

// 11. Movie Search

let movies = ["Jailer","Leo","Vikram"];

console.log(movies.some(movie => movie === "Leo"));

// 12. Hide Mobile Number

let num = "7981917295";

console.log(num.slice(-4));

// 13. Online Exam Result
  
let mark = 78;

console.log(mark >= 35 ? "Pass" : "Fail");

// 14. Cab Booking Price
 
function totalFare(baseFare, extraKm){
    return baseFare + extraKm;
}

console.log(totalFare(100,50));


// 15. Instagram Hashtag Generator

let tag = "web developer";

console.log(tag.replaceAll(" ","_"));

// 16. Netflix Kids Content

let movies = [
  {name:"A", age:13},
  {name:"B", age:18},
  {name:"C", age:10}
];

movies
  .filter(movie => movie.age < 18)
  .forEach(movie => console.log(movie.name));

  //  17. E-commerce Product Search

  let product = "iphone";

console.log(product.startsWith("i"));


// 18. WhatsApp Group Names

let groups = ["office","friends","family"];

groups.forEach((group,index)=>{
    console.log(`${index+1} ${group}`);
});


// 19. Salary Highest Finder

let salary = [20000,50000,70000,10000];

let highest = salary.reduce((max, curr) => curr > max ? curr : max);

console.log(highest);

// 20. Password Security Checker

let password = "virat@123";

let result = password.includes("@") && password.length >= 8
    ? "Strong Password"
    : "Weak Password";

console.log(result);
