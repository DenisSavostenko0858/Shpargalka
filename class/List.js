class List {
  constructor(item) {
    this.item = item;
  }
  render() {
    const spisokul = document.createElement("ul");
    this.item.forEach((element) => {
      spisokul.innerHTML += `<li>${element}</li>`;
    });
    return spisokul;
  }
}
const vova = new List(["one", "two", "three", "FOUR"]);

document.write(vova.render().outerHTML);
document.body.insertAdjacentElement("beforeend", vova.render());
document.write(vova.render().outerHTML);
//   constructor(item) {
//     this.item = item;
//   }
//   render() {
//     const spisokul = document.createElement("ul");
//     this.item.forEach((element) => {
//       const spisokli = document.createElement("li");
//       const textli = document.createTextNode(element);
//       spisokul.appendChild(spisokli);
//       spisokli.appendChild(textli);
//     });
//     return spisokul;
//   } //Создавать, рендерить добавляем на index.htm)
// }
// const vova = new List(["one", "two", "three", "FOUR"]);
// console.log(vova.render());
// document.write(vova.render().outerHTML);
// // document.getElementById("id").innerHTML = vova.render();
// document.write(vova.render().outerHTML);

// document.body.insertAdjacentElement("beforeend", vova.render());
