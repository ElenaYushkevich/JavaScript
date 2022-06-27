//Реализуйте считывание из JSONки из файла task2.json с помощью, например, модуля fs. 
//для дальнейшего использования в функции, описанной в задании


const fs = require('fs')
const data = fs.readFileSync('task2.json', 'utf8') 
var users = JSON.parse(data)
console.log(users.filter((elem, ind, arr) => arr.findIndex(val => (val.name === elem.name)) === ind))
