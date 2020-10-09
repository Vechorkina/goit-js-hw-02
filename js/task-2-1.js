  
// const getItemsString = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
// const getItemsString = [5, 10, 15];
// let result = '';
// for (let i = 0; i < getItemsString.length; i += 1) {
//   getItemsString[i] = `${i + 1} - ${getItemsString[i]}`;
//   result = getItemsString.join('\n');
// }
// // return result;
// // let result = getItemsString.join('\n');

// const getItemsString = function (array) {
//   // Write code under this line
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = `${i + 1} - ${array[i]}`;
//   }
//   const result = array.join('\n');
//   return result;
// };
// Вариант один-1,который пройдет проверку чат бота
// const getItemsString = function (array) {
//   'use strict';
//   // Write code under this line
//   let result = '';
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = `${i + 1} - ${array[i]}`;

//     result = array.join(`\n`) + `\n`; //Добавлено исключено затем, чтобы пройти автопроверку. Так запрограммирован бот: в конце шаблонной строки для каждого элемента массива требуется \n.
//   }
//   return result;
// };
////// Вариант один-2,который пройдет проверку чат бота
// const getItemsString = function (array) {
//   'use strict';
//   // Write code under this line
//   let result = '';
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = `${i + 1} - ${array[i]}\n`;

//     result = array.join(``);
//   }
//   return result;
// };
// console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
/*
'1 - Mango
2 - Poly
3 - Ajax
4 - Lux
5 - Jay
6 - Kong
'
*/
// console.log(getItemsString([5, 10, 15]));
/*
'1 - 5
2 - 10
3 - 15
'
*/
const getItemsString = function (array) {
  // Write code under this line
  let result = '';

  for (let i = 0; i < array.length; i += 1) {
    array[i] = `${i + 1} - ${array[i]}\n`;
    result += array[i];
  }

  return result;
};

//console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
/*
'1 - Mango
2 - Poly
3 - Ajax
4 - Lux
5 - Jay
6 - Kong
'
*/
//console.log(getItemsString([5, 10, 15]));
/*
'1 - 5
2 - 10
3 - 15
'
*/


const getItemsString = function(array) {
    'use strict';
    // Write code under this line
    for (let i = 0; i < array.length; i += 1) {
      result += `${i + 1} - ${array[i]}\n`;
      }
    return result;
  };
  //console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));





  ///
  const getItemsString1 = function (array) {
  let result = '';
    
for (let i = 0; i < array.length; i += 1) {
 result += `${i + 1} - ${array[i]}\n`;
         }
         return result;
    };
    //console.log(getItemsString1 (['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));





