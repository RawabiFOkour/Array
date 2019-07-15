console.log('Here is : ', 'array')



/*
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/
var arr = [1, 7, 9, 45];
var string = ["Str", "alex", "moh"];
var str1 = ['the', 'fox', 'over', 'lazy', 'dog'];

/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/
//fruits[1]; // Banana
//fruits[0];//Tomato

/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
var Food = ["apple", "banana", "orange", "makmorah", "mansaf"];
var Sport = ["football", "tennis", "basketball"];
var Movie = ["interstreller", "la casa de papel", "scarymovie", "final destenation"];
/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

function firstOfArray(arr) {
    return arr[0];
}
console.log(firstOfArray([1, 4, 5]));
console.log(firstOfArray(["t", "u", "g", "x"]));
/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
function lastOfArray(arr1) {
    return arr1[arr1.length - 1];
}
console.log(lastOfArray([1, 4, 5]));
console.log(lastOfArray(["t", "u", "g", "x"]));
/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var array = [0, 5, 7, 9]
console.log(array.shift());
console.log(array.shift());
console.log(array.shift());
console.log(array);
console.log(array.unshift(8));
console.log(array.unshift(6));
console.log(array.unshift(4));
console.log(array.unshift(3));
console.log(array.unshift(1));
console.log(array);
console.log(array.push(10));
console.log(array);

/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
var array2 = [5, 9, -7, 3.5];
console.log(array2);
console.log(array2.push(6));
console.log(array2.unshift(2));
console.log(array2.pop());
console.log(array2.shift());
console.log(array2);




/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
function middleOfArray(arr) {
    if (arr.length % 2 === 0) {
        var mid1 = (arr.length) / 2;
        var mid2 = mid1 - 1;
        return arr[mid2] + " and " + arr[mid1];
    }
    else {
        var mid = (arr.length - 1) / 2;
        return arr[mid];
    }
}
console.log(middleOfArray([2, 4, 9]));
console.log(middleOfArray([2, 4, 5, 9, 8, 10]));
/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
var animals = ['cat', 'ele', 'bird'];
animals[0] = 'zebra';
animals[1] = 'elephant';
animals[2] = '';
console.log(animals.slice(0, -1));
/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
var nums = [1, 2, 3, 8, 9]
function indexOfArray(nums, index) {
    return nums[index];
}
console.log(indexOfArray(nums, 3));
console.log(indexOfArray(nums, 1));
console.log(indexOfArray(nums, 4));
/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
var nums = [1, 2, 3, 8, 9]
function arrayExceptLast(nums) {
    nums.pop();
    return nums;
}
console.log(arrayExceptLast(nums));
/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
var nums = [1, 2, 3, 8, 9];
function addToEnd(nums, value) {
    nums.pop();
    nums.push(value);
    return nums;
}
console.log(addToEnd(nums, 55));
// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


//using for loop
var nums = [1, 2, 3, 8, 9];
function nsumArrayame(nums) {
    var sum = 0;
    for (var index = 0; index < nums.length; index++) {
        sum = sum + nums[index];
    }
    return sum;
}
console.log(nsumArrayame(nums));


//using while loop
var nums = [1, 2, 3, 8, 9];
function nsumArrayame(nums) {
    var sum = 0;
    var index = 0;
    while (index < nums.length) {
        sum = sum + nums[index];
        index++;
    }
    return sum;
}
console.log(nsumArrayame(nums));


/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
/**/


//using for loop
var minArray = [1, 2, 3, 8, 9];
function minInArray(minArray) {
    var max = Infinity;
    for (var indexI = 0; indexI < minArray.length; indexI++) {

        if (minArray[indexI] < max) {

            max = minArray[indexI];

        }
    }
    return max;
}
console.log(minInArray(minArray));



//using while loop
var minArray = [1, 2, 3, 8, 9];
function minInArray(minArray) {
    var max = Infinity;
    var indexI = 0;
    while (indexI < minArray.length) {

        if (minArray[indexI] < max) {
            max = minArray[indexI];
        }
        indexI++
    }
    return max;
}
console.log(minInArray(minArray));
/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/



//using for loop
var array1 = [1, 2, 3, 8, 9];
function removeFromArray(array1, number) {
    for (var i = 0; i < array1.length; i++) {

        if (number === array1[i]) {
            array1.splice(i, 1);
        }

    }
    return array1;
}
console.log(removeFromArray(array1, 8));


//using while loop
var array1 = [1, 2, 3, 8, 9];
function removeFromArray(array1, number) {
    var i = 0;
    while (i < array1.length) {

        if (number === array1[i]) {
            array1.splice(i, 1);
        }
        i++;
    }
    return array1;
}
console.log(removeFromArray(array1, 8));

/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/



//using for loop
var r = [1, 2, 3, 8, 9];
function odddArray(r) {
    for (var index = 0; index < r.length; index++) {
        if (r[index] % 2 === 0) {
            r.splice(index, 1);
        }
    }
    return r;
}
console.log(odddArray(r));

//using while loop
var r = [1, 2, 3, 8, 9];
function odddArray(r) {
    var index = 0;
    while (index < r.length) {
        if (r[index] % 2 === 0) {
            r.splice(index, 1);
        }

        index++;
    }
    return r;
}
console.log(odddArray(r));
/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

//using for loop
var s = [1, 2, 3, 8, 9];
function aveArray(s) {
    var sum = 0;
    for (var index = 0; index < s.length; index++) {
        sum = sum + s[index];
        var avg = sum / s.length;

    }
    return avg;
}
console.log(aveArray(s));



//using while loop
var s = [1, 2, 3, 8, 9];
function aveArray(s) {
    var sum = 0;
    var index = 0;
    while (index < s.length) {

        sum = sum + s[index];
        var avg = sum / s.length;

        index++;
    }
    return avg;
}
console.log(aveArray(s));
/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

//using for loop
var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
function shortInArray(arrrr) {
    max = Infinity;
    var d;
    var indexI = 0;
    while (indexI < arrrr.length) {

        if (arrrr[indexI].length < max) {

            max = arrrr[indexI].length;
            d = arrrr[indexI];

        }
        indexI++
    }
    return d;
}
console.log(shortInArray(strings));


//using while loop
var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
function shortInArray(arrrr) {
    max = Infinity;
    var d;
    for (var indexI = 0; indexI < arrrr.length; indexI++) {
        if (arrrr[indexI].length < max) {

            max = arrrr[indexI].length;
            d = arrrr[indexI];
        }
    }
    return d;
}
console.log(shortInArray(strings));

/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 8
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


//using for loop
var string = "alex mercer madrasa rashed2 emad hala";
function repeatChar(string, s) {
    counter = 0;
    for (var index = 0; index < string.length; index++) {
        if (string[index] === s[0]) {
            counter++;
        }
    }
    return counter;

}
console.log(repeatChar(string, "a"));
console.log(repeatChar(string, "z"));


//using while loop
var string = "alex mercer madrasa rashed2 emad hala";
function repeatChar(string, s) {
    counter = 0;
    var index = 0;
    while (index < string.length) {

        if (string[index] === s[0]) {
            counter++;
        }
        index++;
    }
    return counter;

}
console.log(repeatChar(string, "a"));
console.log(repeatChar(string, "z"));

/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

//using for loop
var stringArray = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
function evenIndexOddLength(stringArray) {
    var oddarr = [];
    for (var index = 0; index < stringArray.length; index += 2) {

        if ((stringArray[index].length) % 2 !== 0) {
            oddarr.push(stringArray[index]);
        }
    }
    return oddarr;
}
console.log(evenIndexOddLength(stringArray));

//using while loop
var stringArray = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
function evenIndexOddLength(stringArray) {
    var oddarr = [];
    var index = 0;
    while (index < stringArray.length) {
        if ((stringArray[index].length) % 2 !== 0) {
            oddarr.push(stringArray[index]);
        }
        index += 2;
    }
    return oddarr;
}
console.log(evenIndexOddLength(stringArray));

/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [1, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

//using for loop

var numbers = [44, 5, 4, 3, 2, 10];
function powerElementIndex(numArray) {
    var newArray = [];
    for (var index = 0; index < numbers.length; index++) {
        newArray.push(Math.pow(numbers[index], index));
    }
    return newArray;
}
console.log(powerElementIndex(numbers));


//using while loop
var numbers = [44, 5, 4, 3, 2, 10];
function powerElementIndex(numArray) {
    var newArray = [];
    var index = 0;
    while (index < numbers.length) {
        newArray.push(Math.pow(numbers[index], index));
        index++;
    }
    return newArray;
}
console.log(powerElementIndex(numbers));
/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

//using for loop
var numArr = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1];
function evenNumberEvenIndex(numArr) {
    var newArrayNumbers = [];
    for (var index = 0; index < numArr.length; index += 2) {
        if (numArr[index] % 2 === 0) {
            newArrayNumbers.push(numArr[index]);
        }
    }

    return newArrayNumbers;
}
console.log(evenNumberEvenIndex(numArr));

//using while loop

var numArr = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1];
function evenNumberEvenIndex(numArr) {
    var newArrayNumbers = [];
    var index = 0;
    while (index < numArr.length) {
        if (numArr[index] % 2 === 0) {
            newArrayNumbers.push(numArr[index]);
        }
        index += 2;
    }

    return newArrayNumbers;
}
console.log(evenNumberEvenIndex(numArr));