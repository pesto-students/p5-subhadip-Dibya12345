// maximum subarray
var maxSubArray = function(nums) {
    let max = nums[0];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum > max) {
            max = sum;
        }
        if (sum < 0) {
            sum = 0;
        }
    }
    return max;
};

var temp = maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);
console.log(temp);

// Time Complexity: O(n)
// Space Complexity: O(1)