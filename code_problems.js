/////// ADD TO ZERO ////////

function addToZero(arr) {
    if (arr.length === 0 || arr.length === 1) return false
    let obj = {}

    for(let i = 0; i < arr.length; i++) {
        let diff = 0 - arr[i]

        if(obj[diff]) {
            return true
        } else {
            obj[arr[i]] = true
        }
    }
    return false
}

console.log(addToZero([2, 3, -4, 4]))

// runtime comp. - O(n), looping
// Space comp. - O(n) - memory taken up gets larger as array is larger


//////// UNIQUE CHARACTERS ////////////

function uniqueChars(str) {
    return new Set(str).size === str.length
}

console.log(uniqueChars('Moonday'))

//runtime comp. - O(n), the iterable miust be iterated through (looped) in order to create the new set 
//space comp. - O(n) - memory taken up gets larger as string is larger


//////// PANGRAM ///////

function isPangram(str) {
    return new Set(str.toLowerCase().match(/[a-z]/g)).size === 26
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"))

//runtime comp. - O(n), the iterable miust be iterated through (looped) in order to create the new set as well as looped through in order to match the regex 
//space comp. - O(n), memory taken up gets larger as string is larger


////// LONGEST WORD ///////

function findLongestWord(arr) {
    return arr.sort(function(a, b) {
        return b.length - a.length
    })[0].length
}

console.log(findLongestWord(["hi", "hello", 'broseph']))

//runtime - O(n log(n)), sort method loops through the array but uses sorting algorithm that is faster than a typical for loop
//space comp. - O(n),  memory taken up gets larger as array is larger