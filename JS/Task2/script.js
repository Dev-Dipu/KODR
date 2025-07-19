const select = (elm) => document.querySelector(elm);

let search = select('.search');
let productList = select('.productlist');

// Sample product array
let products = [
  { name: "Apple", category: "Fruit" },
  { name: "Banana", category: "Fruit" },
  { name: "Carrot", category: "Vegetable" },
  { name: "Broccoli", category: "Vegetable" },
  { name: "Almond", category: "Nuts" },
];

function render(items) {
  productList.innerHTML = ""; 

  if (items.length === 0) {
    productList.innerHTML = "<p>No products found.</p>";
    return;
  }

  items.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = `${product.name} - ${product.category}`;
    productList.appendChild(card);
  });
}

render(products);

search.addEventListener("input", () => {
  const value = search.value.toLowerCase().trim();

  const filtered = products.filter(product => {
    return (
      product.name.toLowerCase().includes(value) ||
      product.category.toLowerCase().includes(value)
    );
  });

  render(filtered);
});
