//! LeetCode Problems
//! Pr # 01
// Shuffle Array: Create a function shuffleArray that takes an array as input and returns a new array with its elements shuffled randomly.

function shuffleArray() {
    let arr = [52, 85, 90, 'asha', 'ali', 'king'];

    // Fisher-Yates Algorithm for shuffling
    for (let i = arr.length - 1; i > 0; i--) {
        let random = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[random]] = [arr[random], arr[i]]; // Swap elements
    }

    return arr;
}

let ans = shuffleArray();
console.log(ans);





//! Pr # 02
// "An array is considered special if every pair of its adjacent elements contains two numbers with different parity. You are given an array of integers nums. Return true if nums is a special array, otherwise, return false. "
var isArraySpecial = function (nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if ((nums[i] % 2) === (nums[i + 1] % 2)) {
            console.log(false);
            return false;

        }
    }
    console.log(true);
    return true;

};

let ans2 = isArraySpecial([4, 3, 1, 6])
console.log(ans2);





//! Pr # 03
// "Find the final Value of Variable After Performing Operations <br/> <br/>You are given an array of strings operations where each element is an operation of either incrementing or decrementing a variable X. You need to return the final value of X after performing all the operations.  X++ or ++X: Increment the variable X by 1.  X-- or --X: Decrement the variable X by 1."

const finalValueAfterOperations = (operations) => {
    let result = 0;

    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === "X++") {
            result++;
        } else if (operations[i] === "--X") {
            result--;
        } else if (operations[i] === "++X") {
            result++;
        } else if (operations[i] === "X--") {
            result--;
        }
    }

    return result;
};

finalValueAfterOperations(["X++"]);
console.log(finalValueAfterOperations(["X"]));
let ans3 = finalValueAfterOperations(["X++"])
console.log(ans3);





//! Pr # 04
// `A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers. Given a string s, return true if it is a palindrome, or false otherwise.  link: https://leetcode.com/problems/valid-palindrome/description/?form=MG0AV3`
function isPalindrome1(s) {
    s = s.toLowerCase();
    s = s.replaceAll(/[^a-z0-9]/g, ""); // regex

    let reverseString = s.split("").reverse().join("");
    let result = s === reverseString;
    console.log(reverseString);

    return result;
}

function isPalindrome2(s) {
    s = s.toLowerCase();
    s = s.replaceAll(/[^a-z0-9]/g, "");

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== s[s.length - i - 1]) {
            return false;
        }
    }

    return true;
}
let s = "sA man, a plan, a canal: Panama"; // false
// let s = "A man, a plan, a canal: Panama" // true
// let s = "shehzad";  //false
// let s = "level"  //true
// let s = "civic" //true
// let s = "mah)(*&^%$#@!am";  //true buz remove all non-alphanumeric characters using the regex

console.log(isPalindrome1(s));
let ans4 = isPalindrome1(s)
console.log(ans4);





//! Pr # 05
// "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.   link: https://leetcode.com/problems/contains-duplicate/description/"
function containsDuplicate(nums) {
    nums.sort(); // this is for aligning same number together

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {  //here i+1 will check the next element in the loop buz lenghth is used
            return true;
        }
    }
    return false;
}

console.log(containsDuplicate([2, 3, 1, 3]));  // true
console.log(containsDuplicate([2, 1, 3]));  //false
console.log(containsDuplicate(["shehzad", "", "shehzad"])); //true
console.log(containsDuplicate(["a", "b", "c"]));  //false