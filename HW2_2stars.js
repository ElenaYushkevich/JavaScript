//Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
//Пример в консоли:
//:)
//:):)
//:):):)
//:):):):)
//:):):):):)

const smile = ":)"
for (let i = 1; i <= 5; i++){
    console.log(smile.repeat(i));
}

//Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), 
//а также количество строк для вывода e.g. function printSmile(stroka, numberOfRows)

function printSmile(stroka, numberOfRows) {
    for (let i = 1; i <= numberOfRows; i++){
        console.log(stroka.repeat(i));
        }
}
printSmile('hi',5)
printSmile('30',3)
printSmile('SoS',10)