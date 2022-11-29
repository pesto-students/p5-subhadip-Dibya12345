function threeNumberSum(array, targetSum){
    let result = [];
    array.sort((a,b) => a-b);
    for(let i = 0; i < array.length; i++){
        let left = i + 1;
        let right = array.length - 1;
        while(left < right){
            let currentSum = array[i] + array[left] + array[right];
            if(currentSum === targetSum){
                result.push([array[i], array[left], array[right]]);
                left++;
                right--;
            } else if(currentSum < targetSum){
                left++;
            } else if(currentSum > targetSum){
                right--;
            }
        }
    }
    return result;

}

// Time Complexity: O(n^2)
// Space Complexity: O(n)

var array = [12, 3, 1, 2, -6, 5, -8, 6];
var targetSum = 0;
console.log(threeNumberSum(array, targetSum));