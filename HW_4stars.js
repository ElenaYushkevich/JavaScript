//Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке

const age_1 = prompt('enter first age')
const age_2 = prompt('enter second age')
const age_3 = prompt('enter third age')

const checkAge = function(age_1, age_2, age_3) {
  if (isValid(arguments[0]) && isValid(arguments[1]) && isValid(arguments[2])) { 
    if (age_1 < age_2) {
        alert(`You don t have access cause your age is ${age_1}, It’s less then ${age_2}`)
    } 
    else if (age_1 >= age_2 && age_1 < age_3) {
        alert("Welcome  !")
    }
    else if (age_1  >= age_3) {
        alert("Keep calm and look Culture channel")
    }
  }
  else {
    alert("Technical work")
  }
}
function isValid(value) {
   return value && !isNaN(value) && typeof(value) !== "boolean"
}  
checkAge(age_1, age_2, age_3)