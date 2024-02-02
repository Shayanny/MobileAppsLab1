function getlength(count) {
    console.log("The length of the string is: " + count.length);
    var result = count.length;
    return result;
}
var x = getlength("Hello World");
function countspace(value) {
    return value.length;
}
function count_no_spaces(value) {
    return value.replace(" ", "").length;
}
function countboth(value, spaces) {
    var count = 0;
    if (spaces) {
        count = value.length;
    }
    else {
        count = value.replace(" ", "").length;
    }
    return count;
}
var count = countspace("Test 1");
console.log(count);
console.log(count_no_spaces("Test 1"));
console.log(countboth("Test 1", true));
console.log(countboth("Test 1", false));
