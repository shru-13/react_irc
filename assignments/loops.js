const a = [1,2,3,4,5];
const ind1 = 1;
const ind2 = 3; 

const a2 = a.map((i, ind) => {
    if (ind === ind1) {
        return a[ind2];
    } else if (ind === ind2) {
        return a[ind1];
    }
    return i;
});

console.log("Original Array: "+a);
console.log("Swapped Array: "+a2);
