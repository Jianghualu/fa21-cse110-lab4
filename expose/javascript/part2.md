1. line 12 print the value of i which is 3 because the length of price is 3, so the loop will run 3 times, and i increased from 0 to 3. Also var variable is a function scope, so it can be use anywhere and reached to line 12, therefore no error for line 12.
   
2. line 13 print the value of discountedPrice which is 150 because the variable is = prices[i] which is 300 * (1-0.5), the final value is 150. Also var variable is a function scope, so it can be use anywhere and reached to line 13, therefore no error for line 13.


3. line 14 print the value of finalPrice which is 150. Same as question 2 where discountedPrice is 150, and for the finalPrices, the value of discountedPrice stays the same since it * 100 and / 100, and assigned to the finalPrices.  Also var variable is a function scope, so it can be use anywhere and reached to line 14, therefore no error for line 14.
   
4. it retuns a list of prices after it discounted. it should return [20, 100, 150]. because it function made finalPrices is same value as discountedPrices. and discountedPrices, it take a input value * one half(1 - 0.5). So the discounted it actually the discountedPrice(input value * 0.5).


5. Error: under defined: since i is declared in the for loop, so it can only used inside of for loop, let is a block scope. So in line 12, it doesn't exist variable called i.
   
6. Error: the reason is same as question 5 where discountedPrice is defined inside of for loop, so line 13 is outside of its block scope.
   
7. it will print value 150. the value reason is same as question 3. and since finalPrice is a let variable declared in the beginning of function, so it can use anywhere insides of this function(block). therefore, it have no error to print out.
8. it will print out the array of discounted price which is the same as question 4. Also, discounted is a let variable which declared in the beginning of function, and outside of for loop. So it can be returned in line 16 where it is inside of the function.
   
9. (Same as question 5)  Error: under defined: since i is declared in the for loop, so it can only used inside of for loop, let is a block scope. So in line 11, it doesn't exist variable called i.


10. it will print the length of the prices array which in this case is 3. and length is a const variable, it declared outside of for loop so it can be printed out. And it hasn't re-assign any value after it defined, So there is no error in this case.

11. it  return the array of prices after its been discounted. which is [50 100 150]. even though it's a const array, but the value inside of array can be changed, and can add new value in. As long as it doesn't reference to a new array, there will not be error in this case.

12. A: alert( student.name );
    B: alert(student['Grad Year']);
    C: student.greeting();
    D: alert(student['Favorite Teacher'].name);
    E: alert(student.courseLoad[0]);



