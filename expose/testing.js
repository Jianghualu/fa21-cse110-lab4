// function sumValues(num1, num2, add){
//     if(add) {
//         const result = 0; 
//         result = num1 + num2;
//         console.log('values added: ', result);
//     }else return;
//     console.log('final result: ', result);
// }
// sumValues(10, 10, true);

// function discountPrices(prices,discount) {
//     const discounted = [];
//     const finalPrice = 0;
//     for(const i = 0; i < prices.length; i++) {
//         const discountedPrice = prices[i] * (1 - discount);
//         finalPrice = Math.round(discountedPrice * 100) / 100;
//         discounted.push(finalPrice);
//     }
//     console.log(i);
//     //console.log(discountedPrice);
//     //console.log(finalPrice);
//     return discounted;
// }
// discountPrices([100,200,300], 0.5);

// function discountPrices(prices,discount) {
//         const discounted = [];
//         const length = prices.length;

//         for(let i = 0; i < length; i++) {
//             const discountedPrice = prices[i] * (1 - discount);
            
//             discounted.push(discountedPrice);
//         }
//         console.log(i);
//         //console.log(discountedPrice);
//         //console.log(finalPrice);
//         return discounted;
//     }
//     discountPrices([100,200,300], 0.5);

// let student = {
//     name: 'Sarah',
//     major: 'Computer Science',
//     'Grad Year': '2022',
//     greeting: function() { console.log('Hello!');},
//     'Favorite Teacher': {
//         name: 'Thomas Powell',
//         course: 'CSE 110'
//     },
//     courseLoad: ['CSE 110', 'CSE 134', 'VIS 41']
// };
// //alert( student.name );
// //alert(student['Grad Year']);
// //student.greeting();
// //alert(student['Favorite Teacher'].name);
// alert(student.courseLoad[0]);

// function modifyArray(array, callback) {
//     const newArr = [];
//     for(let i = 0; i < array.length; i++) {
//         newArr.push(callback(array[i]));
//     }
//     return newArr;
// }

// function doSomething(num) {
//     return num * 2;
// }

// modifyArray([1,2,3], doSomething);

// function printNums() {
//     console.log(1);
//     setTimeout(function() {console.log(2);}, 1000);
//     setTimeout(function() { console.log(3); }, 0);
//     console.log(4);
// }

// printNums();

function printSum() {
    debugger
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    document.getElementById("sum").innerHTML = "Sum: " + calculateSum(num1, num2);
  }
  
  function calculateSum(num1, num2) {
    let n1 = parseInt(num1);
    let n2 = parseInt(num2);
    let result = n1 + n2
    //let result = num1 + num2
    return result
  }
  
  function init() {
    document.getElementById('printSum').addEventListener('click', printSum);
  }
  
  window.addEventListener('DOMContentLoaded', init);