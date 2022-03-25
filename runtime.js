const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);

results(tinyArray)
results(smallArray)
results(mediumArray)
results(largeArray)
results(extraLargeArray)






// How long does it take to double every number in a given 
// array? 

// Try it with first function
function results(arr){
perf.start();                   // Starts timer
doublerAppend(arr);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(arr);
let resultsInsert = perf.stop();

if(arr === tinyArray){
console.log('Results for the tinyArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
}
if(arr === smallArray){
console.log('Results for the smallArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
}
if(arr === mediumArray){
console.log('Results for the mediumArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
}
if(arr === largeArray){
console.log('Results for the largeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
}
if(arr === extraLargeArray){
console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
}

}
// insert takes a lot longer becasue insert uses unshift which moves each item in the array manually


// 1. I think that the run time will be a O of n because the processing time should scale linearly with the size of 
// the array


let array = [28, 43, -12, 30, 4, 0, 12]


for(let i = 0; i < array.length; i++) {
    for(let x = 0; x < array.length; x++){
if(i !== x) {
if(array[i] + array[x] === 0) {
    console.log("true")
    
} else if(array[i] + array[x] != 0) {
    console.log('false')
}}}}

// 2. this code should scale linearly due because any one extra input only requires one more computation meaning 
// its O of n

const checkTheValue = (input) => {
    const splitVal = input.split('');
    const storedSet = new Set(input);
    const convertedVal = [...storedSet];
    if (splitVal.length !== convertedVal) {
      return false;
    } else {
      return true;
    }
  };
  
  const hashUnique = checkTheValue('mythingamabober');
  console.log(hashUnique);


  // 3. this is O of n
  let stringA = 'the quick brown fox jumps over the lazy dog!';
  let alph = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
  let abc = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
  
  
  let str = stringA.split('');
  for(let f = 0; f < str.length; f++) {
    for(let g = 0; g < alph.length; g++){
        if(str[f] === alph[g]){
            abc.pop(str[f])
        }
    }
  };

  if(abc.length === 0){
      console.log('contains all letters')
  }
  if(abc.length !== 0){
      console.log('does not contain all letters')
  }

  // 4. 

  let word1 = ''
  let word2 = ''
  let s1 = word1.split('');
  let s2 = word2.split('');
  if(s1.length > s2.length){
      console.log('word one is bigger')
  }
  if(s1.length < s2.length){
      console.log('word two is bigger')
  }
  if(s1.length === s2.length){
      console.log('they are the same')
  }