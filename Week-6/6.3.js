// Sort array of 0's,1's and 2's
// Time complexity: O(n)
// Space complexity: O(1)

var sortArray = function(nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;
    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else if (nums[mid] === 2) {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
    return nums;
};

var nums = [2,0,2,1,1,0];
console.log(sortArray(nums));

// Time Complexity: O(n)
// Space Complexity: O(1)