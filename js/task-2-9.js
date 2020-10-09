function isLoginValid(login, min = 4, max = 16) {
  // Write code under this line
  return login.length >= min && login.length <= max;
}
// console.log(isLoginValid('Ajax'));
// console.log(isLoginValid('dhj')); // для проверки (от 4 до 16 символов)

function isLoginUnique(allLogins, login) {
  "use strict";
  // Write code under this line
  return !allLogins.includes(login);
}
// console.log(isLoginUnique(['Mango', 'Poly', 'qwerty123'], 'Poly')); // для проверки

function addLogin(allLogins, login) {
  "use strict";
  const SUCCESS = `Логин "${login}" успешно добавлен!`;
  const REFUSAL = `Такой логин "${login}" уже используется!`;
  const ERROR = `Ошибка! Логин "${login}" должен быть размером от 4 до 16 символов`;
  //   let message;// нет необходимости использования
  // Write code under this line
  if (!isLoginValid(login)) {
    return ERROR;
  }
  if (isLoginUnique(allLogins, login)) {
    allLogins.push(login);
    // allLogins[allLogins.length] = login;
    // allLogins.unshift(login);
    return SUCCESS;
  }
  return REFUSAL;
}

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
console.log(logins);
console.log(addLogin(logins, "Ajax"));
// 'Логин успешно добавлен!'
console.log(logins);
console.log(addLogin(logins, "robotGoogles"));
// 'Такой логин уже используется!'

console.log(addLogin(logins, "Zod"));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(addLogin(logins, "jqueryisextremelyfast"));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(addLogin(logins, "Ajax")); // для проверки, должен быть добавлен выше
// 'Такой логин уже используется!'!!!!!
console.log(logins);
