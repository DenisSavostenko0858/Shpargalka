class List3 extends List {
  constructor(item, CssClass) {
    super(item);
    this.CssClass = CssClass;
  }
  render() {
    const a3 = super.render();
    a3.classList.add(...this.CssClass);
    return a3;
  }
}
const boss3 = new List3(
  ["one", "two", "three", "FOUR"],
  ["text-center", "bold", "text-red"]
);
document.body.insertAdjacentElement("beforeend", boss3.render());
