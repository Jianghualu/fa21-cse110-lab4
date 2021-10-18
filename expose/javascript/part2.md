1. line 12 print the value of i which is 3 because the length of price is 3, so the loop will run 3 times, and i increased from 0 to 3. Also var variable is a function scope, so it can be use anywhere and reached to line 12, therefore no error for line 12.
   
2. line 13 print the value of discountedPrice which is 150 because the variable is = prices[i] which is 300 * (1-0.5), the final value is 150. Also var variable is a function scope, so it can be use anywhere and reached to line 13, therefore no error for line 13.


3. line 14 print the value of finalPrice which is 150. Same as question 2 where discountedPrice is 150, and for the finalPrices, the value of discountedPrice stays the same since it * 100 and / 100, and assigned to the finalPrices.  Also var variable is a function scope, so it can be use anywhere and reached to line 14, therefore no error for line 14.
   
4. it retuns a list of prices after it discounted. it should return [50, 100, 150]. because it function made finalPrices is same value as discountedPrices. and discountedPrices, it take a input value * one half(1 - 0.5). So the discounted it actually the discountedPrice(input value * 0.5).


5. Error: under defined: since i is declared in the for loop, so it can only used inside of for loop, let is a block scope. So in line 12, it doesn't exist variable called i.
   
6. Error: the reason is same as question 5 where discountedPrice is defined inside of for loop, so line 13 is outside of its block scope.
   
7. it will print value 150. the value reason is same as question 3. and since finalPrice is a let variable declared in the beginning of function, so it can use anywhere insides of this function(block). therefore, it have no error to print out.
8. it will print out the array of discounted price which is the same as question 4. Also, discounted is a let variable which declared in the beginning of function, and outside of for loop. So it can be returned in line 16 where it is inside of the function.
   
9. (Same as question 5)  Error: under defined: since i is declared in the for loop, so it can only used inside of for loop, let is a block scope. So in line 11, it doesn't exist variable called i.


10. it will print the length of the prices array which in this case is 3. and length is a const variable, it declared outside of for loop so it can be printed out. And it hasn't re-assign any value after it defined, So there is no error in this case.

11. it return the array of prices after its been discounted. which is [50 100 150]. even though it's a const array, but the value inside of array can be changed, and can add new value in. As long as it doesn't reference to a new array, there will not be error in this case.

12. A: student.name;
    
    B: student['Grad Year'];

    C: student.greeting();

    D: student['Favorite Teacher'].name;

    E: student.courseLoad[0];



13. A. "32"  since integers map to their exact string representation when addition, so it become string 3 concatenated string 2 which is string 32
    
    B. 1  when subtraction, string 3 is converted to number 3. so 3-2 =1

    C. 3 since null is converted to 0, so 3+0 = 3

    D. "3null" null is converted to string when addition, so they concatenated to 3null

    E. 4 since true is also be 1, so 1+3 = 4

    F. 0 since false is 0 and null is also 0. so result is 0

    G. "3undefined" underfined is converted to string when addition, so they concatenated to 3underfined

    H. NaN when string 3 converted to number, but when a number minus a number is still not a number. such as num/0 = not a number

14. A. true  string 2 will convert to number, and is greater than 1, so it returns true
    
    B. false since 2 is larger than 1 in a string comparsion

    C. true because their value are both 2, and == only comparing variable value.

    D. false because even though they have the same variable value, but their datatype is different. Therefore, it returns false.

    E. false because true is value as 1, but 1 is not same as 2, therefore, it returns false.

    F. true because boolean(2) is return true, and true is === true, same datatype, same value, So, it return true.

15. == and === both comparing two variables, but the differene is that == will ignores the datatype of variable, but === will checks datatype while comparing two values. And === will return true iff both values and datatype are the same

16. another file
    
17. The result of this function is the value inside of newArr [2,4,6]. At the beginning, [1,2,3] is passing as array, and doSomething function passing as callback. when i = 0, callback passing array[0] which is 1 in this case into the doSomething function; doSomething function let 1 be num, then times 2, so the result that been return back to push() is 2. And it got pushed into newArr. So 1st value in final result is 2. Repeat this loop for i = 1, callback(2) and it become 4, so 4 pushed into newArr. i = 2, callback(3) become 6, added into newArr. when i = 3, it's not less than the length. so the loop stop. Final result is [2,4,6].
    
18. on the another file
    
19. the result is 1 4 3 2 