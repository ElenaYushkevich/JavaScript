//Преобразовать 2* таким образом, чтобы значение '2' 
//(строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

const checkAge = function(age_1, age_2, age_3) {
    if (isValid(arguments[0]) && isValid(arguments[1]) && isValid(arguments[2])) { 
      if (age_1 < age_2) {
        console.log("You don’t have access cause your age is", age_1, "It’s less then", age_2)
      } 
      else if (age_1 >= age_2 && age_1 < age_3) {
        console.log("Welcome  !")
      }
      else if (age_1  >= age_3) {
        console.log("Keep calm and look Culture channel")
      }
            }
      else {
        console.log("Technical work")
      }
   }
function isValid(value) {
  return value && !isNaN(value) && typeof(value) !== "boolean"
}  
checkAge(17, 18, 61)
checkAge(true, 18, 61)
checkAge("SS", 18, 61)
