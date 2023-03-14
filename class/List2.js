class List2 extends List {
  constructor(cssClass) {
    this.cssClass = cssClass;
  }
  render() {
    const ul = super.render();
    classList.add(this.cssClass);
    return ul;
  }
  const b = new List2("строка");
}

// console.log(vova.render());
// document.write(vova.render().outerHTML);
// document.write(vova.render().outerHTML);
// document.body.insertAdjacentElement("beforeend", vova.render());
