// const array = [5,6,1,6,8,3,6]
// console.log('mi array ',array);

// let n = array.pop();

// console.log('n = ',n);

// console.log('mi nuevo array ',array);

// let n1 = array.pop();

// console.log('n1 = ',n1);

// console.log('mi nuevo array ',array);



const exampleArray = ['Nicol','Carlos', 'Juan', 'Elvis']

const size = exampleArray.length;

for (let i = 0; i < size; i++) {
    console.log(i);
    console.log(`Se reviso la tarea a ${exampleArray.pop()}`);
}

console.log(exampleArray);