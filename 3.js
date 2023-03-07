// Куда будет произведена запись?
// Объект rabbit наследует от объекта animal .
// Какой объект получит свойство full при вызове rabbit.eat() : animal или rabbit ?

let animal = {
  eat() {
    this.full = true;
    return this.full;
  },
};
let rabbit = {
  __proto__: animal,
};
console.log(rabbit.eat());
