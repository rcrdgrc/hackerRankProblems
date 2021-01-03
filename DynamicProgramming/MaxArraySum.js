// Given an array of integers, find the subset of
//  non - adjacent elements with the maximum sum.Calculate the sum of that subset.
// It is possible that the maximum sum is, the case when all elements are negative.
// For example, given an array [-2,1,3-4,5]
//  we have the following possible subsets:
// Subset      Sum
// [-2, 3, 5]   6
// [-2, 3]      1
// [-2, -4]    -6
// [-2, 5]      3
// [1, -4]     -3
// [1, 5]       6
// [3, 5]       8
// These exclude the empty subset and single element subsets which are also valid.
// Our maximum subset sum is . Note that any individual element is a subset as well.

function maxSubsetSum(arr) {
    let incl = arr[0];
    let excl = 0;
    let excl_new;
    let i;

    for (i = 1; i < arr.length; i++) {
        excl_new = Math.max(incl, excl);

        incl = excl + arr[i];
        excl = excl_new;
    }

    return Math.max(incl, excl)
}


//Explanation
// arr[] = {5,  8, 10, 40, 50, 35}

//   incl = 5 
//   excl = 0

//   For i = 1 (current element is 5)
//   incl =  (excl + arr[i])  = 8
//   excl =  max(8, 0) = 8

//   For i = 2 (current element is 10)
//   incl =  (excl + arr[i]) = 15
//   excl =  max(8, 5) = 8

//   For i = 3 (current element is 40)
//   incl = (excl + arr[i]) = 48
//   excl = max(8, 15) = 15

//   For i = 4 (current element is 50)
//   incl = (excl + arr[i]) = 65
//   excl =  max(48, 15) = 48

//   For i = 5 (current element is 35)
//   incl =  (excl + arr[i]) = 83
//   excl =  max(65, 48) = 65