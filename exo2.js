var arr1=[1, 2, 3];
var arr2=[100, 2, 1, 10];

function common(array1, array2) {
    for(let i = 0; i < array1.length; i++) {
        for(let j = 0; j < array2.length; j++) {
            if(arr1[i] ===arr2[j]) {
                return true;
            }
        }
    }
    return false;
}
 
console.log(common(arr1, arr2));