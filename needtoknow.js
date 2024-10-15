//** -------------  fundamentals of js ----------- */
// //1. how to declare a variable
// const fatherName = 'mostofa'
// let session = 'rainy'
// session = 'winter'


// //2. conditions
// // 6 basic conditions (<, >, === , !=, <=, >=)
// // multiple condition (&&, ||)


// //3. array
// // index
// // length, push

// //4. loop
// // for loop, while loop

// //5. function

// //6. object
// // 3 ways to access property by name
// const student = {
//     name: 'sakib',
//     age: 32,
//     movies: ['king khan', 'dhakar mastan']
// }
// console.log(student.age)
// console.log(student['age'])
// const boyosh = 'age'
// console.log(student[boyosh])  //access via property name in a variable


//** ------------   ES6  ------------------ */
//1. template string

//2. arrow function

//3. spread operator
// const array = [3, 34, 98, 23]
// console.log(array)
// // const array2 = array
// const array2 = [...array, 88]
// array2.push(99)
// console.log(array2)


//**  ---------------- Array methods ------------- */
//1. map()
// const products = [  
//     { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },  
//     { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },  
//     { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },  
//     { name: 'sungalss', price: 300, brand: 'ribon', color: 'black' },  
//     { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }  
// ];
// const brands = products.map(product => product.brand)
// console.log(brands)

// //2. forEach()
// products.forEach(product => console.log(product.color))

// //3. filter()
// const cheap = products.filter(product => product.price <= 5000)
// console.log(cheap)
// const containN = products.filter(product => product.name.includes('n'))
// console.log(containN)

// //4. find()
// const containA = products.find(product => product.name.includes('a'))
// console.log(containA)
// const array = [3, 34, 98, 23]
// const find = array.find(arr => arr>50)
// console.log(find)


//** -------------- destructuring -------------- */
//1. array destructuring
// const numbers = [22, 33]
// // const [x, y] = [22, 33]
// const [x, y] = numbers
// console.log(x)
// console.log(y)
// function boxify(num1, num2) {
//     const num = [num1, num2]
//     return num
// }
// console.log(boxify(44, 55))
// const [first, second] = boxify(44, 55)
// console.log(first)
// console.log(second)
// const student = {
//     name: 'sakib',
//     age: 32,
//     movies: ['king khan', 'dhakar mastan']
// }
// const [firstMovie, secondMovie] = student.movies
// console.log(firstMovie)

// //2. object destructuring
// const {age} = {name: 'nur', age: 32}
// console.log(age)


//** ------------ fetch ------------- */
//1. JSON (stringify, parse)
// const student = {
//     name: 'sakib',
//     age: 32,
//     movies: ['king khan', 'dhakar mastan']
// }
// const studentJSON = JSON.stringify(student)
// console.log(student)
// console.log(studentJSON)
// const studentObj = JSON.parse(studentJSON)
// console.log(studentObj)

// //2. fetch()

// //3. keys , values
// const keys = Object.keys(student)
// console.log(keys)
// const value = Object.values(student)
// console.log(value)

// //for of on array like object
// //for in on an object

// const products = [  
//     { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },  
//     { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },  
//     { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },  
//     { name: 'sungalss', price: 300, brand: 'ribon', color: 'black' },  
//     { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }  
// ];

// // add or remove from an array
// const newProduct = {name: 'webcam', price: 700, brand: 'lal'}
// const addNewProduct = [...products, newProduct]
// console.log(addNewProduct)
// //remove
// const remaining = products.filter(product => product.name !== 'phone')  //create a new array without the phone
// console.log(remaining)


//** -------------- shortcut ------------ */
//1. ternary
// let money = 110;
// let taka = 110;
// let drink = (money > 100 && taka > 100) ? 'kacchi' : 'drinko'
// console.log(drink)

// //2. number to string
// const num1 = 52
// console.log(num1)
// const numToString = num1 + ''
// console.log(numToString)
// console.log(typeof numToString)

// //3. string to number
// const input = '560'
// const inputNum = +input;
// console.log(inputNum)

// //
// let isActive = false;
// const showUser = () => console.log('display user')
// const hideUser = () => console.log('hide user')
// // isActive ? showUser() : hideUser()
// isActive && showUser()
// isActive || hideUser()

// //toggle boolean
// isActive = !isActive;
// console.log(isActive)


//** -------------- local and session Storage --------------- */
// localStorage.setItem('userId', 4455667788)
function addToLocalStorage() {
    const inputId = document.getElementById('input-id').value
    const inputValue = document.getElementById('input-value').value
    
    if(inputId && inputValue) {
        localStorage.setItem(inputId, inputValue)
    }

    document.getElementById('input-id').value = ''
    document.getElementById('input-value').value = ''
}
localStorage.setItem('frnds', [22, 33, 44])
localStorage.setItem('frnds2', JSON.stringify([22, 33, 44]))
const pen = {price: 10, color: 'black'}
localStorage.setItem('obj', pen)
localStorage.setItem('obj2', JSON.stringify(pen))
const storePen = localStorage.getItem('obj2')
console.log(storePen)
pen.price = 50
localStorage.setItem('obj2', JSON.stringify(pen))