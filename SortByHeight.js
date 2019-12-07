// first version, avoding the usage of "native functions" but using a not so clear if clause sorting the input array in place

function sortByHeight(a) {
    let temp = [];
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length; j++){
            if (a[i] < a[j] && a[i] != -1){
                temp = a[j]
                a[j] = a[i]
                a[i] = temp
            }   
        }   
    } return a;
}

// creating a new array with removed -1 (= trees), sorting the new array and inserting those values in the original array
function sortByHeight2(a) {
    let array2 = a;

    array2 = array2.filter((element) => {
        if(element != -1) {
            return element;
        }
    }).sort((a,b) => {
        return a-b;
        });

    for (let i = 0; i < a.length; i++) {
        if (a[i] != -1) {
            a[i] = array2.shift();
        }
    } return a;
}

let people = [-1, 150, 190, 170, -1, -1, 160, 180]
console.log(sortByHeight2(people));