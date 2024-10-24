// 1 Question

function countPositiveNegative(arr) {
    let positiveCount = 0;
    let negativeCount = 0;
    for(i = 0; i < arr.length; i++){
        if (arr[i] > 0) positiveCount++;
        if (arr[i] < 0) negativeCount++;
    };
    return { positiveCount, negativeCount };
}
const array = [1,2,3,4,5,-1,-2,-8,-9,-6];
const output = countPositiveNegative(array);
console.log(output);

// 2 Question

const array1 = [90,87,99,45,76,34,2,4,67];

function largest(arr) {
    let largest_number = 0;
    
    for(i = 0; i < arr.length; i++) {
        if(largest_number < arr[i]) {
            largest_number = arr[i];
        }
        return largest_number
    }
}
const output1 = largest(array1);
console.log(output1);

// 3 Question

function sorted(arr) {
    
    for(i=1;i<arr.length;i++){
        for(j=0;j<i;j++){
            if(arr[i]<arr[j]){
                let rel = arr[i]
                arr[i] = arr[j]
                arr[j] = rel
            }
        }
    }
        console.log(arr)
    }
    const array2 = [1,2,3,2,1,3,4,5,7,8,4,5,6,8,6,7,9,7,8,9];
    const output2 = sorted(array2);
    console.log(output2);

