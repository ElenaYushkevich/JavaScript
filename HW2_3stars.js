//3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, 
//сколько в слове гласных, и сколько согласных букв. 
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв
// Проверки: 'case', 'Case', 'Check-list'

function getWordStructure(word){
    wordCase = word
    word = word.toLowerCase()
    word = word.trim()
    let countVowel = 0
    let countConsonant = 0
    let dlina = word.length
    for (let i = 0; i < word.length; i++){
        if (word[i] == 'a' || word[i] == 'e' || word[i] == 'u' || word[i] == 'i' || word[i] == 'o') {
            countVowel += 1
        }
        if (word[i] == '-'){
            dlina -= 1
        }
    }
    countConsonant = dlina - countVowel
    console.log("Слово", wordCase, "состоит из", countVowel + " гласных и", countConsonant + " согласных")
}

getWordStructure('Hehehe')
getWordStructure('Ha-ha-ha')
getWordStructure('   HelloHello ')
getWordStructure('Check-list')
getWordStructure('')