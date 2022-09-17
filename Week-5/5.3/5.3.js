function hasDuplicate(array){
    let new_set = new Set();
    for (let i = 0; i < array.length; i++) {
        new_set.add(array[i]);
    }
    if (new_array.size == array.length) {
        return false;
    } else {
        return true;
    }
}
console.log(hasDuplicate([1, 3, 2, 1])); // true
console.log(hasDuplicate([1, 5, -1, 4])); // false