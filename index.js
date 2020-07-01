// function largestSubarraySum(array) {

//     let largest = 0;
//     let subArray = [];
//     let i = 0;
//     let j = 1
    
//     while (i < array.length) {


//         while(j < array.length + 1) {
//             subArray = array.slice(i, j)
//             let sum = subArray.reduce((acc, cur) => acc + cur);

//             if (sum > largest) {
//                 largest = sum
//             }

//             j++
//         }
//         i++
//         j = i + 1
//     } 

//     return largest

// }

// let array = [-3, 1, 100, 4, 15, 9, 30];
// largestSubarraySum(array);

function largestSubarraySum(array) {
    let max_current, max_global
    max_current = max_global = array[0]

    for(let i = 1; i < array.length; i++) {
        max_current = Math.max(array[i], max_current + array[i]);
        //debugger;
        if (max_current > max_global) {
            max_global = max_current
        }
    }
    return max_global < 0 ? 0 : max_global 
}

let array = [-1, -1, -5, -3, -7, -4, -5, -6, -100, -4]
largestSubarraySum(array);