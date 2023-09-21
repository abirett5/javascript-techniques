//-> 1. Exchange Variables (swap technique)
let a = 6;
let b = 7;

[a, b] = [b, a];

console.log(a, b);


//-> 2. Sort Alphabetically
function alphabetSort(arr) {
  return arr.sort((a, b) => a.localeCompare(b));
};

let array = ["d", "c", "b", "a"];

console.log(alphabetSort(array));


//-> 3. Generate Range of numbers
let start = 1000,
end = 1500;

[...new Array(end + 1).keys()].slice(start);
Array.from({length: end - start + 1}, (_, i) => start + i);


//-> 4. Shorten the console.log
let c = console.log.bind(document);

c("Hello World");


//-> 5. Shorten the Array
let arrayList = ["Babu", "Mamu", "Khalu", "Chacchu", "Dadu"];

arrayList.length = 2;

console.log(arrayList);