// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript
var number=function(array){
  if(array == ''){
    return console.log([])
  } else {
    let arr = []
    for(i=0; i<=array.length-1; i++){
        arr.push((i+1).toString()+':'.concat(array[i]))
    }
    console.log(arr)
  }
}
number(["a", "b", "c"])
console.log('========')
number([])