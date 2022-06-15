//Преобразовать задание 1* таким образом, чтобы первым делом 
//в функции проверялся тип данных. И если он не Number - кидалась ошибка.


const checkAge = function(age_1, age_2, age_3) {
  if (typeof arguments[0] === "number" && typeof arguments[1] === "number" && typeof arguments[2] === "number") { 
    console.log(typeof arguments[0])
    if (age_1 < age_2) {
            console.log("You don’t have access cause your age is", age_1, "It’s less then", age_2)
    } 
    else if (age_1 >= age_2 && age_1 < age_3) {
             console.log("Welcome  !")
    }
    else if (age_1  > age_3) {
             console.log("Keep calm and look Culture channel")
    }
    else {
             console.log("Technical work")
    }

}
 else {
    console.log("Enter a numeric age value")
}
}

checkAge(17, 18, 61)