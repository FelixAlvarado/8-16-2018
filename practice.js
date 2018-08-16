// Complete the triplets function below.
//find indiced where array middle array starts for both array 
//have counters for each array to determine what array to stop at 
//if either count is at 0, won't work
//if count of middle is greater than two, add middle count * a count to total

//practice triplets problem where must give unique triplets based on given arrays and b[num] > a[num] and b[num] > c[num]
//solved in nlogn time and 1 space
//keep in mind to remove duplicate items, as well as sort them
function triplets(a, b, c) {
    let total = 0; 
    let aCount = 0;
    let cCount = 0;
    a = a.sort((a,b) => a - b);
    b = b.sort((a,b) => a - b);
    c = c.sort((a,b) => a - b);

    let aIndex = 0;
    for(let i = 0; i < a.length; i++){
        i = i - aIndex;
        if (a[i] === a[i -1]){
            a = a.slice(0,i) + a.slice(i + 1, a.length);
            aIndex += 1;
        }
    }

    let bIndex = 0;
    for(let i = 0; i < b.length; i++){
        i = i - bIndex;
        if (b[i] === b[i -1]){
            b = b.slice(0,i) + b.slice(i + 1, b.length);
            bIndex += 1;
        }
    }
    for(let idx = 0; idx < b.length; idx++) {
        if (b[idx] === b[idx - 1]){continue;}
        aCount = searchIndex(a, b[idx]);

        cCount = searchIndex(c, b[idx]);
 
        total += (aCount * cCount);
        
    }
    return total;
}

function searchIndex(arr, num){

    if (arr.length === 1 && arr[0] <= num){return 1;}
    if (arr.length < 1) {return 0;}
    let mid = Math.floor(arr.length / 2);

    if (num === arr[mid]){
  
        return mid + 1;
    } else if (num < arr[mid]){

        return searchIndex(arr.slice(0,mid),num);
    } else{
  
        return searchIndex(arr.slice(mid + 1,arr.length),num) + mid + 1;
        
    }
}