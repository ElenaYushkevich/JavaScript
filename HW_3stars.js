//Преобразовать 2* таким образом, чтобы значение '2' 
//(строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

const checkAge = function(age_1, age_2, age_3) {
//    if ((typeof Number(arguments[0]) === "number" && !isNaN(Number(arguments[0]))) && (typeof Number(arguments[1]) === "number" && !isNaN(Number(arguments[1]))) && (typeof Number(arguments[2]) === "number" && !isNaN(Number(arguments[2])))) { 
    if (!isNaN(Number(arguments[0])) && !isNaN(Number(arguments[1])) && !isNaN(Number(arguments[2]))) { 
    
      if (age_1 < age_2) {
              console.log("You don’t have access cause your age is", age_1, "It’s less then", age_2)
      } 
      else if (age_1 >= age_2 && age_1 < age_3) {
               console.log("Welcome  !")
      }
      else if (age_1  > age_3) {
               console.log("Keep calm and look Culture channel")
      }
            }
      else {
               console.log("Technical work")
      }
   }
 checkAge(17, 18, 61)
 