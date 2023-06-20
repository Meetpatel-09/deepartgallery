var productContainer = document.getElementById("product-container");

const obj = JSON.parse(imageJson);

obj.images.forEach(element => {
     productContainer.innerHTML += `
     <div class="grid-item">
          <div class="img-container">
               <img class="product-img"
                    src="${element.image} "
                    alt="${element.id}">
          </div>
          <p class="product-title">${element.name}</p>
          <p class="product-price">₹${element.price}</p>
     </div>`;
     
});