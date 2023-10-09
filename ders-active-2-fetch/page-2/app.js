const button = document.getElementsByClassName("btn")[0];
const nameInput = document.getElementsByClassName("name")[0];
const priceInput = document.getElementsByClassName("price")[0];
const stockInput = document.getElementsByClassName("stock")[0];
console.log(nameInput.value);

button.addEventListener("click", (e) => {
  let defaultValue = {
    name: nameInput.value,
    price: priceInput.value,
    stock: stock.value,
  };

  axios
    .post("https://northwind.vercel.app/api/products", defaultValue)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
});
