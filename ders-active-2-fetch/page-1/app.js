getProducts();

function getProducts() {
  axios.get("https://northwind.vercel.app/api/products").then((response) => {
    console.log(response.data);
    const ulElement = document.createElement("ul");
    response?.data.map((item) => {
      const liElement = document.createElement("li");
      liElement.style.color = item.unitPrice > 50 && "red";
      liElement.textContent = `${item.name}- ${item.unitPrice}`;
      ulElement.appendChild(liElement);
    });

    document.body.appendChild(ulElement);
  });
}
