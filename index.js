let userNumber = prompt("Введите число от 1 до 31:");

if (userNumber >= 1 && userNumber <= 31) {
    alert(  Math.ceil(userNumber/10))
} else {
  alert("Пожалуйста, введите число от 1 до 31.");
}
