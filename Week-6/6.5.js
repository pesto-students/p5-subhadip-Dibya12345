function findPairWithGivenDifference(array, k) {
    let result = [];
    let hash = {};
    for (let i = 0; i < array.length; i++) {
        hash[array[i]] = array[i];
    }
    for (let i = 0; i < array.length; i++) {
        if (hash[array[i] + k]) {
            result.push([array[i], array[i] + k]);
        }
    }
    return result;
}

var array = [0, -1, -2, 2, 1];
var k = 1;
console.log(findPairWithGivenDifference(array, k));

// Time Complexity: O(n)
// Space Complexity: O(n)