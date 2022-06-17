// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)
// Проверки: 'abba', 'Abba'

function isPalindrom(word){ 
    wordCase = word
    let flag = true
    word = word.toLowerCase()
    word = word.trim()
    let mid = Math.floor(word.length / 2)
    for (let i = 0; i < mid; i++){
        if (word[i] !== word[word.length-i-1]){
            flag = false
            break
        }    
        flag = true
    }
    if (flag == true) {
        console.log(wordCase, '- слово палиндром')         
    }
    else {
        console.log(wordCase, '- слово не палиндром')    
    }
}

isPalindrom('notabba')
isPalindrom('absddsba')
isPalindrom('GHJjhg')
isPalindrom('j-jj')
isPalindrom('привет')