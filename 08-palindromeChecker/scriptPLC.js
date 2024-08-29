const textInput = document.getElementById('text-input')
const checkBtn = document.getElementById('check-btn')

console.log(textInput)
console.log(checkBtn)


checkBtn.addEventListener('click', () => {
  if (textInput.value.trim() === '') {
    alert('Please input a value')
  } else {
    const result = checkPalindrome(textInput.value)
      ? `${textInput.value} is a palindrome`
      : `${textInput.value} is not a palindrome`
    document.getElementById('result').textContent = result
  }
})

function checkPalindrome(str) {
  // Приведение строки к нижнему регистру и удаление всех символов, кроме букв и цифр
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '')
  // Сравнение очищенной строки с её перевёрнутой версией
  return cleanedStr === cleanedStr.split('').reverse().join('')
}
