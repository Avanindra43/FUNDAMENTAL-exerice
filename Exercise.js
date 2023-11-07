// function excelColumn(column) {

// }

// let text = "HELLO WORLD";
// let code = text.charCodeAt(0);

// console.log(code);

function titleToNumber(column) {
    let result = 0;
    
    for (let i = 0; i < column.length; i++) {
        result = result * 26 + (column.charCodeAt(i) - 64); 
    }
    
    return result;
}

console.log(titleToNumber("AB"));

// arr = [2,2,1,5,1]

// function single(array) {    
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length; j++) {
//             if (i !== j && array[i] === array[j]) {
//                 console.log(array[j]);
//                 break;
//             }
//         }
// };
// }
// console.log(single(arr));

function single(array) {
    let res = ''; 

    for (let i = 0; i < array.length; i++) {
        let foundDuplicate = false;
        for (let j = 0; j < array.length; j++) {
            if (i !== j && array[i] === array[j]) {
                foundDuplicate = true;
                break;
            }
        }
        
        if (!foundDuplicate) {
            res = array[i];
            break; 
        }
    }
    
    return res;
}


const arr = [4,1,2,1,2];
console.log(single(arr));



// let s = "three"
// let g = "eehrt"
// const sortedS = s.split('').sort().join('')
// const sortedg = g.split('').sort().join('')

// console.log(sortedS);
// console.log(sortedg);
// console.log(sortedS === sortedg);
function anagram(string1, string2) {
    if (string1.length !== string2.length) {
        return false;
    }
    const sorted1 = string1.split('').sort().join('');
    const sorted2 = string2.split('').sort().join('');
   
    return sorted1 === sorted2

}

console.log(anagram("anagram", "nagaram")); 
console.log(anagram("three", "tree")); 