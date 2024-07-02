function isPalindrome(array) {
    let start = 0
    let end = array.length-1
    if (array.length <= 1) {
        return false
    }
    while (start <= array.length/2) {
        if (array[start] !== array[end]) {
            return false
        }
        start++
        end--
    }
    return true
}
console.log(isPalindrome(['a', 'b', 'c', 'b', 'a']))

let array = ['a', 'b', 'c', 'b', 'a']

function recursionPalindrome(arr, start = 0, end = array.length-1) {
    if (array.length <= 1) {
        return false
    }
    if (arr[start] !== arr[end]) {
        return false
    }
    if (start + 1 === end || start === end) {
        return true
    }
    return recursionPalindrome(arr, start + 1, end - 1)
}

console.log(recursionPalindrome(array))

function isPalindrome2(arr) {
    if (array.length <= 1) {
        return false
    }
    function isPalindrome3(arr) {
        let start = arr.shift()
        let end = arr.pop()
        if (start !== end) {
            return false
        }
        if (arr.length <= 1) {
            return true
        }
        return isPalindrome3(arr)
    }
    return isPalindrome3(arr)
}

console.log(isPalindrome2(array))

const isPalindrome4 = (arr) => {
    if (arr.length <= 1) {
        return false
    }
    const isPalindrome5 = (arr) => arr.length <= 1 ? true : arr.shift() !== arr.pop() ? false : isPalindrome5(arr)
    
    return isPalindrome5(arr)
}

console.log(isPalindrome4(['a', 'b', 'c', 'b', 'a']))



function test(x) {
    let original = x
    let reversed = 0
    
    while(x > 0) {
        let number = x % 10
        reversed = (reversed * 10) + number
        x = Math.floor(x/10)

        
    }
    return original === reversed
};

console.log(test(12321))

function stack(s) {
    let arr = s.split('')
    let stack = []
    stack.push(arr[0])

    for (let i = 1; i < arr.length; i++) {
        let topItem = stack[stack.length - 1]
        if (topItem === '(' && arr[i] === ')' ||
            topItem === '{' && arr[i] === '}' ||
            topItem === '[' && arr[i] === ']') {
            stack.pop()
        } else {
            stack.push(arr[i])
        }
    }
    return stack.length === 0
};

console.log(stack('(){}[]'))

const factorial = (n) => {
    let result = n
    while (n > 0) {
        result = result * (n-1)
        console.log(result)
        n--
        console.log(n)
    }
    return result
}

console.log(factorial(5))

function fizzBuzz(n) {
    let result = []
    for (let i = 1; i <= n; i++) {
        if (!(i%3) && !(i%5)) result[i - 1] = 'FizzBuzz'
        else if (!(i%3)) result[i - 1] = 'Fizz'
        else if (!(i%5)) result[i - 1] = 'Buzz'
        else result[i - 1] = i
    }
    return result
}
console.log(fizzBuzz(15))

function maxElement(arr) {
    let max = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) max = arr[i]
    }
    return max
}
console.log(maxElement([1,2,3,2,5,-10,9,0]))

let arr = [10, 7, 4, 8, 3, 1]

function secondMax(arr) {
    let max = arr[0]
    let result = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        } else {
            if (arr[i] > result) {
                result = arr[i]
            }
        }
    }
    return result
}

console.log(secondMax(arr))

let prices = [7,2,5,3,8,1,4]

function maxProfit(prices) {
    if (prices.length === 1) return 0

    let profit = 0
    for(let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] > prices[i]){
                let dif = prices[j] - prices[i]
                if(dif > profit) {
                    profit = dif
                }
            }
        }
    }
    return profit
}

console.log(maxProfit(prices))

let prices2 = [7,2,5,3,8,1,4]

function maxProfit2(arr) {
    let buyDay = arr[0]
    let sellDay = 0
    let profit = 0

    for (let i = 0; i < arr.length; i++) {
        if (buyDay > arr[i]){
            buyDay = arr[i]
        }
        sellDay = arr[i]
        if (sellDay - buyDay > profit) {
            profit = sellDay - buyDay
        }
    }
    return profit
}

console.log(maxProfit2(prices2))

let str = 'Hello world'

function lengthOfLastWord(s) {
    let count = 0
    for (let i = s.length-1; i >= 0; i--) {
        if (s[i] !== ' ') count++
        if (count > 0 && s[i] === ' ') break
    }
    return count
}
console.log(lengthOfLastWord(str))

let nums = [0,0,1,1,1,1,1,2,2,3,3,4]

function removeDuplicates(nums) {
    if (nums.length === 1) return 1

    let count = 1
    let prev = nums[0]

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === prev) {
            nums[i] = 'x'
        } else {
            prev = nums[i]
            let tmp = nums[count]
            nums[count] = nums[i]
            nums[i] = tmp
            count++

        }
    }
    return count
}
console.log(removeDuplicates(nums))

nums = [0,1,2,2,3,0,4,2]

function removeElement(nums, val) {
    if (nums.length === 0) return 0

    let count = 0

    for (let i = nums.length-1; i >= 0; i--) {
        if (nums[i] === val) {
            count += 1
            nums[i] = nums[nums.length-count]
            nums[nums.length-count] = 'x'
        }
    }
    return nums.length - count
}
console.log(removeElement(nums, 2))

function climbStairsRecursion(n) {
    if (n === 1 || n === 2) {
        return n
    }
    return climbStairsRecursion(n-1) + climbStairsRecursion(n-2)
}
console.log(climbStairsRecursion(5))

function climbStairs(n) {
    let stairs = new Array(n)
    for (let i = 1; i <= n; i++) {
        if (i > 2) {
            stairs[i-1] = stairs[i-2] + stairs[i-3]
        } else stairs[i-1] = i
    }
    return stairs[n-1]
}
console.log(climbStairs(5))

function isSubsequence(s,t) {
    let index = 0

    for (let i = 0; i < t.length; i++){
        if (t[i] === s[index]) index++
    }
    return s.length === index
}
console.log(isSubsequence("a", "ahbgdc"))

function romanToInt(s) {
    const nums = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    let arr = []

    for(let i = s.length - 1; i >= 0; i--) {
        let key = s[i]
        let next = s[i-1]
        let n = nums[key]
        if (next === 'I' && (n === 5 || n === 10)) {
            n = n - 1
            i--
        }
        if (next === 'X' && (n === 50 || n === 100)) {
            n = n - 10
            i--
        }
        if (next === 'C' && (n === 500 || n === 1000)) {
            n = n - 100
            i--
        }
        arr.push(n)
    }
    let result = arr.reduce((a,c) => a + c, 0)
    return result
}
console.log(romanToInt('MCMXCIV'))

