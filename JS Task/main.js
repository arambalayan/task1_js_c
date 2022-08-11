//sort

let sort = (arr) => {
    if (!Array.isArray(arr)) {
        return 'Error';
    }
    let x;
    const newArr = arr.map((item) => {
        return Math.pow(item, 2);
    })
    for (let i = 0; i < newArr.length; i++) {
        for (let j = i + 1; j < newArr.length; j++) {
            if (newArr[i] > newArr[j]) {
                x = newArr[i];
                newArr[i] = newArr[j];
                newArr[j] = x;
            }
        }
    }
    return newArr;
}

console.log(sort([4, 2, 8]));

//1
let sum = (n) => {
    if (typeof n !== 'number') {
        return "not a number"
    }
    return n.toString().split("").reduce((total, num) => {
        return parseInt(total) + parseInt(num);
    });
}

console.log("1)" + " " + sum(4637))

//2
let dec = (n) => {
    if (typeof n !== 'number') {
        return "not a number"
    }
    let string = n.toString().split("")
    let sum = string.reduce((total, num) => {
        return parseInt(total) + parseInt(num);
    });
    let mul = string.reduce((total, num) => {
        return parseInt(total) * parseInt(num);
    });
    return mul - sum
}

console.log("2)" + " " + dec(4637))

//3
let oddNumbers = (a, b) => {
    let count = 0;
    for (let i = a; i <= b; ++i) {
        if (i % 2 === 1) {
            count++;
        }
    }
    return count
}
console.log("3)" + " " + oddNumbers(3, 7))

//4
const sumEven = () => {
    let temp, sum = 0, previous = 0, current = 1;
    while (current < 4000000) {
        if (current % 2 === 0) {
            sum += current;
        }
        temp = previous;
        previous = current;
        current += temp;
    }
    return sum;
};
console.log("4)" + " " + sumEven())

//5
let buildArray = function (target, n) {
    const result = []
    let index = 0
    for (let num = 1; num <= n; num++) {
        if (index >= target.length) {
            return result
        }
        if (num === target[index]) {
            result.push('Push')
            index++
        } else {
            result.push('Push', 'Pop')
        }
    }
    return result
};
console.log("5)" + " " + buildArray([1, 3], 3))

//6
let intersection = function (nums1, nums2) {
    let filter = nums1.filter(x => nums2.includes(x))
    return [...new Set(filter)];
};
console.log("6)" + " " + intersection([1, 2, 2, 1], [2, 2]))

//7

//8
let sortArrayByParity = function (nums) {
    let result = [];

    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] % 2 === 0) {
            result.unshift(nums[i])
        } else {
            result.push(nums[i])
        }
    }
    return result
};
console.log("8)" + " " + sortArrayByParity([3, 1, 2, 4]))

//9
let sumOfUnique = function (arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
            continue;
        }
        res += arr[i];
    }
    return res;
};
console.log("9)" + " " + sumOfUnique([1, 2, 3, 2]))

//10
let strStr = function (haystack, needle) {
    if (needle.length === 0) {
        return 0;
    }
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (needle === haystack.substring(i, i + needle.length)) {
            return i;
        }
    }
    return -1;
};
console.log("10)" + " " + strStr("hello", "ll"))

//11
let lengthOfLastWord = function (s) {
    let word = s.trim().split(' ');
    if (word.length === 0) {
        return 0;
    } else {
        return word[word.length - 1].length;
    }
};
console.log("11)" + " " + lengthOfLastWord("Hello World"))

//12
let isPalindrome = function (s) {
    let re = /[\W_]/g;
    let a = s.toLowerCase().replace(re, '');
    let b = a.split('').reverse().join('');
    return b === a;
};
console.log("12)" + " " + isPalindrome("A man, a plan, a canal: Panama"))

//13
let numUniqueEmails = function (emails) {
    const set = new Set();
    for (const email of emails) {
        const arr = email.split("@");
        arr[0] = (arr[0].split("+"))[0].replace(/\./g, "");
        set.add(arr.join("@"));
    }
    return set.size;
};
console.log("13)" + " " + numUniqueEmails(["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"]))

//14
let searchRange = function (nums, target) {
    return [nums.indexOf(target), nums.lastIndexOf(target)];
};
console.log("14)" + " " + searchRange([5, 7, 7, 8, 8, 10], 8))