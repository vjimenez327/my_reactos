// Array Quadruplet
// Given an unsorted array of integers arr and a number s, write a function findArrayQuadruplet that finds four numbers (quadruplet) in arr that sum up to s. Your function should return an array of these numbers in an ascending order. If such a quadruplet doesn’t exist, return an empty array.

// Note that there may be more than one quadruplet in arr whose sum is s. You’re asked to return the first one you encounter (considering the results are sorted).

// Explain and code the most efficient solution possible, and analyze its time and space complexities.

// input:  arr = [2, 7, 4, 0, 9, 5, 1, 3], s = 20

// output: [0, 4, 7, 9] # The ordered quadruplet of (7, 4, 0, 9)
//                      # whose sum is 20. Notice that there
//                      # are two other quadruplets whose sum is 20:
//                      # (7, 9, 1, 3) and (2, 4, 9, 5), but again you’re
//                      # asked to return the just one quadruplet (in an
//                      # ascending order)


// Constraints:

// [time limit] 5000ms

// [input] array.integer arr

// 1 ≤ arr.length ≤ 100
// [input] integer s

// [output] array.integer

function findArrayQuadruplet(arr, s){
  if (arr.length < 4){
    return [];
  }  

  arr.sort();

  for (let i = 0; i < arr.length - 4; i++){
    let result;
    for (let j = i + 1; j < arr.length - 3; j++){
      console.log('this is the arr', arr);
        result = s - (arr[i] + arr[j]);
        let low = arr[j] + 1;
        console.log('this is low', low);
        low++;
        console.log('this is low', low);
        let high = arr[arr.length  - 1];
        console.log('this is high', high);
        high--;
        console.log('this is high', high);
        // console.log(arr[i] + arr[j]);
    }
    return result;
  }
}


findArrayQuadruplet([2, 7, 4, 0, 9, 5, 1, 6], 9);



// function findArrayQuadruplet(arr, s):
//     n = arr.length

//     # if there are fewer than 4 items in arr, by
//     # definition no quadruplet exists whose sum is s
//     if (n < 4):
//         return []

//     # sort arr in an ascending order
//     arr.sort()

//     for i from 0 to n - 4:
//         for j from i + 1 to n - 3:
//             # r stores the complementing sum
//             r = s - (arr[i] + arr[j])

//             # check for sum r in subarray arr[j+1…n-1]
//             low = j + 1, high = n - 1;

//             while (low < high):
//                 if (arr[low] + arr[high] < r):
//                     low++

//                 else if (arr[low] + arr[high] > r):
//                     high--

//                 # quadruplet with given sum found
//                 else:
//                     return [arr[i], arr[j], arr[low], arr[high]]

//     return []