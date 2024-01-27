const productData = JSON.parse(sessionStorage.getItem("globalProducts"));
const totalPrice = sessionStorage.getItem("totalCartPrice");
console.log(productData);

const totalPriceTextContainer = document.createElement("div");
totalPriceTextContainer.classList.add("col");
totalPriceTextContainer.classList.add("goob");
document.body.appendChild(totalPriceTextContainer);

const totalPriceText = document.createElement("p");
totalPriceText.classList.add("price-text");
totalPriceText.textContent = "Total Price $" + totalPrice;
totalPriceTextContainer.appendChild(totalPriceText);

productData.forEach((product) => {
    const div = document.createElement("div");
    
    div.classList.add("col");
    div.classList.add("goober");
    
    const image = document.createElement("img");
    image.classList.add("product-image");
    image.src = product.src;
    image.height = product.height;
    image.width = product.width;
    image.price = product.price;

    const priceText = document.createElement("p");
    priceText.classList.add("price-text");
    priceText.textContent = "Item Price: $" + image.price;
    div.appendChild(priceText);

    div.appendChild(image);
    console.log(div);
    document.body.appendChild(div);
});
// This is a comment!