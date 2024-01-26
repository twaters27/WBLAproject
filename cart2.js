const productData = JSON.parse(sessionStorage.getItem('globalProducts'));
console.log(productData);

productData.forEach(product => {
    const div = document.createElement('div');
    div.classList.add('col');
    const image = document.createElement('img');
    image.classList.add("product-image");
    image.src = product.src;
    // image.alt = product.alt;
    image.height = product.height;
    image.width = product.width;
    div.appendChild(image);
    console.log(div);
    document.body.appendChild(div);
});

// This is a comment.