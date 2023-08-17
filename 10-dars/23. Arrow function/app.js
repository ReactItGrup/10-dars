// const aylanaMaydoni = (radius) => {
//   return 3.14 * radius ** 2;
// };

// Agar bizda yozmoqchi bolgan kodimiz 1 qatorli bo'lsa
// const aylanaMaydoni = (radius) => 5 * radius ** 2;

// const natija = aylanaMaydoni(2);
// console.log(natija);

// const salom = function (ism) {
//   return `Salom ${ism}`;
// };

// const salom = ism, familya => `Salom ${ism} ${familya}`;

// const result = salom("Asilbek", "Turunaliyev");

// console.log(result);

// const bill = function (products, tax) {
//   let total = 0;
//   // total => barchasi
//   for (let i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }

//   return total;
// };

const bill = (products, tax) => {
  let total = 0;
  // total => barchasi
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }

  return total;
};

const result = bill([1000, 1000, 1000], -0.2);

//bill = function nomi
// tax = QQS

console.log(result);
