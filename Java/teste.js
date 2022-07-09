function returnevenvalues(array) {
    let evennums = [];
    for(let i = 0; i < array.lenght; i++) {
        if(array[i] %2 === 0) {
            evennums.push(array[i]);
        }
    }
    console.log(evennums);
}

let array = [1, 2, 4, 5, 7, 8];

returnevenvalues(array);