// Question 2
// A.Print odd numbers in an array
// Arrow Function :
var y=[1,2,3,4,5,6,7]

var oddNumbers=(array)=>{
   let arr=[];
   for(let i=0; i<array.length; i++)
   {
     if(array[i]%2!==0)
     {
      arr.push(array[i]);
     }
   }
   return arr;
}
console.log(odd(y));

// B.Convert all the strings to title caps in a string array
// USING ARROW FUNCTION:
var str="my name is haris";
let def= (str)=>{
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   } 
   return str.join(' ');
}
console.log(def(str));

// c.Sum of all numbers in an array
// BY USING ARROW FUNCTION:
var aa=[1,2,3,4,5,6,7,8,9];
var sum=0;
let ghi=(aa)=>
{
   for(let i=0; i<a.length; i++)
   {
     sum=sum+a[i];
   }
   return sum;
}
console.log(ghi(aa));

// D.Return all the prime numbers in an array
// BY USING ARROW FUNCTION:

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let getPrimes = (arr) => {
    return arr.filter(num => {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    });
};

console.log(getPrimes(numbers));


// E.Return all the palindromes in an array
// BY USING ARROW FUNCTION:
Palindrome = (arr, n) =>
    {
        // Traversing each element of the array
        // and check if it is palindrome or not
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    }
