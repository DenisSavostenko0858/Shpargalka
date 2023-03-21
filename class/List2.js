class List2 extends List {
  constructor(item, CssClass) {
    super(item);
    this.CssClass = CssClass;
  }
  render() {
    const a2 = super.render();
    a2.classList.add(this.CssClass);
    return a2;
  }
}
const boss2 = new List2(["one", "two", "three", "FOUR"], "newCssClass");
document.body.insertAdjacentElement("beforeend", boss2.render());

// console.log(vova.render());
// document.write(vova.render().outerHTML);
// document.write(vova.render().outerHTML);
// document.body.insertAdjacentElement("beforeend", vova.render());
