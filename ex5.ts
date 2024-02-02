function getlength(count: string):number{
      console.log("The length of the string is: "+count.length);
      let result: number = count.length;
      return result;
}

let x:number = getlength("Hello World");


function countspace(value:string):number{
    return value.length;
}

function count_no_spaces(value:string):number{
    return value.replace(" ","").length;
}

function countboth(value:string, spaces:boolean):number{
    let count:number = 0;
    if(spaces){
        count = value.length;
    }else{
        count = value.replace(" ","").length;
    }
    return count;
}

let count:number = countspace("Test 1");
console.log(count);

console.log(count_no_spaces("Test 1"));
console.log(countboth("Test 1",true));

console.log(countboth("Test 1",false));


